import React, { useState, useEffect } from 'react'; // Added missing imports
import './index.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Craving from './components/Craving/Craving';
import Culinary from './components/Culinary/Culinary';
import Who from './components/Who/Who';
import Values from './components/Values/Values';
import Whychooseus from './components/Whychooseus/Whychooseus';
import Mobile from './components/Mobile/Mobile';
import Testimonial from './components/Testimonial/Testimonial';
import Footer from './components/Footer/Footer';
import Preloader from './components/Preloader/Preloader'; // Ensure you have a Preloader component

const Home = () => {
  const [loading, setLoading] = useState(true); // Corrected useState syntax

  const handleLoadingFinish = () => {
    setLoading(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Simulate loading for 3 seconds
    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  return (
    <>
      {loading ? (
        <Preloader onFinishLoading={handleLoadingFinish} /> // Renders Preloader while loading
      ) : (
        <>
          <section className="header-section">
            <Header />
          </section>
          <section className="hero-section" id="home">
            <Hero />
          </section>
          <section className="craving-section">
            <Craving />
          </section>
          <section className="culinary-section" id="cook-with-us">
            <Culinary />
          </section>
          <section className="who-section" id="about">
            <Who />
          </section>
          <section className="values-section">
            <Values />
          </section>
          <section className="why-section" id="why-choose-us">
            <Whychooseus />
          </section>
          <section className="mob-section" id="app">
            <Mobile />
          </section>
          <section className="test-section">
            <Testimonial />
          </section>
          <section className="footer-section">
            <Footer />
          </section>
        </>
      )}
    </>
  );
};

export default Home;
