import React from "react";  
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Blog from "./components/Blog/Blog";
import IndianTiffinServices from "./components/Blog-details/IndianTiffinServices";
import MinuteDelicious from "./components/Blog-details/5-minute-delicious";
import ValentineDayFood from "./components/Blog-details/valentine-day-for-a-food-lover";
import IndianHomeFood from "./components/Blog-details/Indian-home-food-in-canada";
import TurningCanadian from "./components/Blog-details/Turning-canadian-home";
import MealsUnder from "./components/Blog-details/Meals-Under-$50";
import PlatformForGrowth from "./components/Blog-details/platform-for-growth";
import WomanEntrepreneur from "./components/Blog-details/women-entrep";
import IndianWomenEntrepreneurs from "./components/Blog-details/women-entrep";
import OnePotReceipe from "./components/Blog-details/OnePotReceipe";
import MustTryIndianRestaurants from "./components/Blog-details/must-try-indian-restaur";
import ProfitableBusiness from "./components/Blog-details/women-profit";
import PrivacyPolicy from "./components/Privacy-Policy/Privacy-Policy";
import TermsAndConditions from "./components/Privacy-Policy/TermsandConditions";
import BestSideHustles from "./components/Blog-details/best-side-hustles";



const App = () => {


  return (
    <>


      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="blogs/top-5-indian-tiffin-service-in-toronto" element={<IndianTiffinServices/>}/>
          <Route path="blogs/5-minute-delicious-Indian-dinner-recipes" element={<MinuteDelicious/>}/>
          <Route path="blogs/valentine-day-for-a-food-lover" element={<ValentineDayFood/>}/>
          <Route path="blogs/Indian-home-food-in-canada.jsx" element={<IndianHomeFood/>}/>
          <Route path="blogs/TurningCanadian.jsx" element={<TurningCanadian/>}/>
          <Route path="blogs/mealsunder-$50.jsx" element={<MealsUnder/>}/>
          <Route path="blogs/platform-for-growth.jsx" element={<PlatformForGrowth/>}/>
          <Route path="blogs/women-entrepreneur" element={<IndianWomenEntrepreneurs/>}/>
          <Route path="blogs/one-pot-receipe" element={<OnePotReceipe/>}/>
          <Route path="blogs/must-try-indian-restaurants" element={<MustTryIndianRestaurants/>}/>
          <Route path="blogs/profitable-business" element={<ProfitableBusiness/>}/>
          <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
          <Route path="/terms-and-conditions" element={<TermsAndConditions/>}/>
          <Route path="blogs/what-are-the-best-side-hustles-to-do-in-canada" element={<BestSideHustles/>}/>
        </Routes>
      </BrowserRouter>

    </>
  );
};

export default App;
