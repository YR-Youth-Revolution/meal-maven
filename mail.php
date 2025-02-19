<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

function getAccessToken($tenantId, $clientId, $clientSecret) {
    $url = "https://login.microsoftonline.com/$tenantId/oauth2/v2.0/token";

    $fields = [
        'grant_type' => 'client_credentials',
        'client_id' => $clientId,
        'client_secret' => $clientSecret,
        'scope' => 'https://graph.microsoft.com/.default',
    ];

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($fields));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    if ($httpCode == 200) {
        $response = json_decode($response, true);
        return $response['access_token'] ?? null;
    } else {
        error_log("Error retrieving access token: $response");
        return null;
    }
}

function sendEmail($accessToken, $emailData) {
    $url = 'https://graph.microsoft.com/v1.0/me/sendMail';

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Authorization: Bearer ' . $accessToken,
        'Content-Type: application/json',
    ]);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($emailData));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    return $httpCode == 202;
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $input = json_decode(file_get_contents('php://input'), true);

    if (!$input) {
        http_response_code(400);
        echo json_encode(["error" => "Invalid JSON input"]);
        exit;
    }

    $firstName = htmlspecialchars(trim($input['firstName']));
    $lastName = htmlspecialchars(trim($input['lastName']));
    $email = htmlspecialchars(trim($input['email']));
    $phoneCode = htmlspecialchars(trim($input['phoneCode']));
    $phone = htmlspecialchars(trim($input['phone']));
    $message = htmlspecialchars(trim($input['message']));
    $privacy = $input['privacy'] ?? false;

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(["error" => "Invalid email address."]);
        exit;
    }

    if (!preg_match('/^[0-9]{10}$/', $phone)) {
        http_response_code(400);
        echo json_encode(["error" => "Invalid phone number. Provide a 10-digit number."]);
        exit;
    }

    if (!$privacy) {
        http_response_code(400);
        echo json_encode(["error" => "You must agree to the privacy policy."]);
        exit;
    }

    $tenantId = '15f98eff-eff5-4063-8ac4-cec980728987';
    $clientId = '07368764-91be-4026-8b26-e83285bc2b50';
    $clientSecret = 'T3P8Q~-a.xhDOzMN2cfF2HuGUaP9fH7UTWo6NbFi';
    $fromEmail = 'admin@yrmedia.in';
    $adminEmail = 'admin@yrmedia.in';
    $additionalEmails = ['divya@yrmedia.in', 'sathish@yrmedia.in'];

    $accessToken = getAccessToken($tenantId, $clientId, $clientSecret);

    if (!$accessToken) {
        http_response_code(500);
        echo json_encode(["error" => "Failed to retrieve access token."]);
        exit;
    }

    $userEmailData = [
        'message' => [
            'subject' => 'Thank You for Your Enquiry',
            'body' => [
                'contentType' => 'HTML',
                'content' => "
                    <p>Dear $firstName $lastName,</p>
                    <p>Thank you for reaching out to us. We have received your message and will get back to you shortly.</p>
                    <p><strong>Your Details:</strong></p>
                    <p><strong>Phone:</strong> $phoneCode $phone</p>
                    <p><strong>Email:</strong> $email</p>
                    <p><strong>Message:</strong> $message</p>
                ",
            ],
            'toRecipients' => [
                ['emailAddress' => ['address' => $email]],
            ],
        ],
    ];

    if (!sendEmail($accessToken, $userEmailData)) {
        http_response_code(500);
        echo json_encode(["error" => "Failed to send user notification email."]);
        exit;
    }

    $adminRecipients = array_map(fn($email) => ['emailAddress' => ['address' => $email]], array_merge([$adminEmail], $additionalEmails));

    $adminEmailData = [
        'message' => [
            'subject' => 'New Website Inquiry Received',
            'body' => [
                'contentType' => 'HTML',
                'content' => "
                    <h3>New Message Received:</h3>
                    <ul>
                        <li><strong>First Name:</strong> $firstName</li>
                        <li><strong>Last Name:</strong> $lastName</li>
                        <li><strong>Email:</strong> $email</li>
                        <li><strong>Phone:</strong> $phoneCode $phone</li>
                        <li><strong>Message:</strong> $message</li>
                    </ul>
                    <p>Please respond promptly.</p>
                ",
            ],
            'toRecipients' => $adminRecipients,
        ],
    ];

    if (sendEmail($accessToken, $adminEmailData)) {
        echo json_encode(["success" => "Enquiry submitted successfully."]);
    } else {
        http_response_code(500);
        echo json_encode(["error" => "Failed to send admin notification email."]);
    }
} else {
    http_response_code(405);
    echo json_encode(["error" => "Invalid request method."]);
}
?>
