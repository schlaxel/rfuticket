import React from 'react';
import SiteWrapper from './siteWrapper';
import Header from './header';
import Card from './card';
import Footer from './footer';

const Home = () => {
    return (
        <SiteWrapper>
            <Header />
            <Card />
            <Footer />
        </SiteWrapper>
    );
};

export default Home;
