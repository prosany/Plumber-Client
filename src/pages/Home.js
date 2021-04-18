import React from 'react';
import Header1 from '../components/Header/Header1';
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs';
import Services from '../components/Services/Services';
import HeroBackground from '../components/HeroBackground/HeroBackground';
import Reviews from '../components/Reviews/Reviews';
import Blog from '../components/Blog/Blog';
import Footer from '../components/Footer/Footer';

const Home = () => {
    document.title = 'Plumbing.Com | Plumbing Service!';
    return (
        <>
            <Header1 />
            <HeroBackground />
            <WhyChooseUs />
            <Services/>
            <Reviews />
            <Blog />
            <Footer />
        </>
    );
};

export default Home;