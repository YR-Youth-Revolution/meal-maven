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
        </Routes>
      </BrowserRouter>

    </>
  );
};

export default App;
