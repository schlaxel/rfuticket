import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from '../header';
import Footer from '../footer';
import NoCards from './noCards';
import RenderCards from './renderCards';

const Content = styled.div`
    flex: 1;
    display: flex;
`;

const Index = () => {
    const [cards, setCards] = useState({});

    useEffect(() => {
        let cardsFromLS = JSON.parse(localStorage.getItem('cardIds'));
        if (cardsFromLS) {
            // code existiert bereits in Local Storage
            setCards(cardsFromLS);
        }
        console.log(cardsFromLS, 'CARDS');
    }, []);

    const renderContent = () => {
        // if there are no cards / empty cards Object
        if (!cards || Object.keys(cards).length === 0) {
            return <NoCards />;
        }
        return <RenderCards />;
    };

    return (
        <>
            <Header />
            <Content>{renderContent()}</Content>
            <Footer />
        </>
    );
};

export default Index;
