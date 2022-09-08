import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Header from '../header';
import Footer from '../footer';
import Card from './card';
import NoId from './noId';
import { Button } from '../common/';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

const Content = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const MyButton = styled(Button)`
    margin-bottom: 20px;
`;

const Index = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [card, setCard] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        const id = searchParams.get('id');
        const platz = searchParams.get('platz');
        const reihe = searchParams.get('reihe');
        const block = searchParams.get('block');
        setCard({ id, platz, reihe, block });
    }, [searchParams]);

    if (!card.id) {
        return <NoId />;
    }

    const saveToCards = () => {
        localStorage.setItem(card.id, JSON.stringify(card));
        let cards = JSON.parse(localStorage.getItem('cardIds'));
        if (cards) {
            cards[card.id] = true;
        } else {
            cards = { [card.id]: true };
        }
        localStorage.setItem('cardIds', JSON.stringify(cards));

        navigate('/');
    };

    return (
        <Wrapper>
            <Header />
            <Content>
                <Card card={card} />
                <MyButton onClick={() => saveToCards()}>
                    Karte hinzufügen
                </MyButton>
            </Content>
            <Footer />
        </Wrapper>
    );
};

export default Index;
