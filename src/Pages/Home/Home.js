import React from 'react';
import Footer from '../../Shared/Footer';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Contact from './Contact';
import Info from './Info';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Info></Info>
            <BusinessSummary></BusinessSummary>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;