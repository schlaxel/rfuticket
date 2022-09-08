import React from 'react';
import SiteWrapper from './siteWrapper';
import CardHome from './cardHome';
import CardsOverview from './cardsOverview';
import SharedCard from './sharedCard';
import { Routes, Route } from 'react-router-dom';

const Home = () => {
    return (
        <SiteWrapper>
            <Routes>
                <Route path="/" element={<CardsOverview />} />
                <Route path="/card" element={<CardHome />} />
                <Route path="/share" element={<SharedCard />} />
            </Routes>
        </SiteWrapper>
    );
};

export default Home;
