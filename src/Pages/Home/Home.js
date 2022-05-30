import React from 'react';
import Footer from '../../Shared/Footer';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Contact from './Contact';
import CustomerReview from './CustomerReview';
import Info from './Info';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Info></Info>
            <CustomerReview></CustomerReview>
            <BusinessSummary></BusinessSummary>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;