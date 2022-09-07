import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SingleCard from './singleCard';
import { CircleWithPlus } from 'styled-icons/entypo/';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const CardsWrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const AddCardWrapper = styled.div``;

const AddCardButton = styled(Link)`
    width: 200px;
    cursor: pointer;
    height: 100px;
    border-radius: 100px 100px 0 0;
    background: #fff;
    margin: auto;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    transition: all 0.2s ease-in;
    &:hover {
        opacity: 0.7;
    }
`;

const Icon = styled(CircleWithPlus)``;

const RenderCards = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        // get the card Ids
        const cardIds = JSON.parse(localStorage.getItem('cardIds'));
        const cardArr = [];
        Object.keys(cardIds).forEach((id) => {
            cardArr.push(JSON.parse(localStorage.getItem(id)));
        });
        setCards(cardArr);
    }, []);

    const renderCards = () => {
        return cards.map((card) => <SingleCard card={card} />);
    };

    return (
        <Wrapper>
            <CardsWrapper>{renderCards()}</CardsWrapper>
            <AddCardWrapper>
                <AddCardButton to="/card" state={{ isEdit: true }}>
                    <Icon size={70} color="#000" />
                </AddCardButton>
            </AddCardWrapper>
        </Wrapper>
    );
};

export default RenderCards;
