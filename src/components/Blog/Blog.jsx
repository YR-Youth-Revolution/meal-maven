import React from "react";
import './Blog.css'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Helmet } from "react-helmet";
import blog1 from "/public/Website/blog1.jpg"
import blog5 from "/public/Website/IMAGE 2.jpg"
import blog2 from "/public/Website/IMAGE 3.png"
import blog3 from "/public/Website/IMAGE 7.png"
import blog4 from "/public/Website/IMAGE 8.png"


const Blog = () => {


    return (
        <>
            <Helmet>
                <title>Blog | Meal Maven</title>
                <meta name="description" content="Blogs" />
            </Helmet>
            <section className="header-section">
                <Header />
            </section>
            <section className="blog-section"> 
                <div className="blog-title">
                    Blogs
                </div>
                <div className="blog-container">
                <div className="blog">
                        <img
                            src={blog4}
                            alt="tiffin services near me"
                            className="blog1"
                        />
                        <div className="blog-content">
                            <b className="post-date">Posted on: February 7, 2025</b>
                            <h3 className=".blog-h3">How to get an Indian home food in Canada </h3>
                            <p className=".blog-p">Your relentless search party of finding the one that fits is quite on a loop.   </p>
                            <a href="blogs/Indian-home-food-in-canada.jsx" className="read-more-btn">Read More</a>
                        </div>
                    </div>
                    <div className="blog">
                        <img
                            src={blog3}
                            alt="tiffin services near me"
                            className="blog3"
                        />
                        <div className="blog-content">
                            <b className="post-date">Posted on: February 5, 2025</b>
                            <h3 className=".blog-h3">Best Dinner Plans for Valentine’s Day for a Food Lover</h3>
                            <p className=".blog-p">The experience of love is what makes it more delicious & memorable than the grand gestures.    </p>
                            <a href="blogs/valentine-day-for-a-food-lover" className="read-more-btn">Read More</a>
                        </div>
                    </div>
                  
                   
                    <div className="blog">
                        <img
                            src={blog2}
                            alt="tiffin services near me"
                            className="blog2"
                        />
                        <div className="blog-content">
                            <b className="post-date">Posted on: February 1, 2025</b>
                            <h3 className=".blog-h3">How to make 5-minute delicious Indian dinner recipes </h3>
                            <p className=".blog-p">The teeth-clenching wait time while cooking when hunger is hitting you hard, words cannot comprehend one’s roller-coaster emotional ride.   </p>
                            <a href="blogs/5-minute-delicious-Indian-dinner-recipes" className="read-more-btn">Read More</a>
                        </div>
                    </div>
                  
                    <div className="blog-container">
                    <div className="blog">
                        <img
                            src={blog1}
                            alt="tiffin services near me"
                            className="blog1"
                        />
                        <div className="blog-content">
                            <b className="post-date">Posted on: January 3, 2025</b>
                            <h3 className=".blog-h3">Top 5 Indian Tiffin Services in Toronto</h3>
                            <p className=".blog-p">‘Doing it all by yourself’ as appealing as it may sound to project self-explanatory terms like hyper-independent or self-made has a distressing true side too. </p>
                            <a href="blogs/top-5-indian-tiffin-service-in-toronto" className="read-more-btn">Read More</a>
                        </div>
                    </div>
                    <div className="blog">
                        <img
                            src={blog5}
                            alt="tiffin services near me"
                            className="blog1"
                        />
                        <div className="blog-content">
                            <b className="post-date">Posted on: January 2, 2025</b>
                            <h3 className=".blog-h3">Turning Canadian home cooks to become Entrepreneurs </h3>
                            <p className=".blog-p">‘Having a lot to offer and a little space to do it’ - The typical pain and agony of any homemaker who lives a perfect reality of their bigger picture</p>
                            <a href="blogs/TurningCanadian.jsx" className="read-more-btn">Read More</a>
                        </div>
                    </div>
                    
                    </div>
                    
                   
                </div>
            </section>
            <section className="footer-section">
                <Footer />
            </section>




        </>
    );
};


export default Blog