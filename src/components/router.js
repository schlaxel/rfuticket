import React from 'react';
import SiteWrapper from './siteWrapper';
import CardHome from './cardHome';
import CardsOverview from './cardsOverview';
import { Routes, Route } from 'react-router-dom';

const Home = () => {
    return (
        <SiteWrapper>
            <Routes>
                <Route path="/" element={<CardsOverview />} />
                <Route path="/card" element={<CardHome />} />
            </Routes>
        </SiteWrapper>
    );
};

export default Home;
