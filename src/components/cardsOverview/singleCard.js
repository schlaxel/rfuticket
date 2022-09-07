import React, { useEffect } from 'react';
import styled from 'styled-components';
import bwipjs from 'bwip-js';
import { Link } from 'react-router-dom';

const Wrapper = styled(Link)`
    background: ${({ theme }) => theme.colors.fg};
    cursor: pointer;
    transition: all 0.2s ease-in;
    padding: 20px;
    width: 90%;
    border-radius: 10px;
    margin: 10px auto;
    text-align: center;
    text-decoration: none;
    max-width: 370px;
    &:hover {
        opacity: 0.7;
        transform: scale(1.1);
    }
`;

const Title = styled.p`
    font-weight: 800;
    color: ${({ theme }) => theme.colors.black};
    padding: 3px 0;
`;

const Number = styled(Title)`
    font-weight: 400;
`;

const SingleCard = ({ card }) => {
    useEffect(() => {
        try {
            // The return value is the canvas element
            bwipjs.toCanvas(`${card.id}canvas`, {
                bcid: 'datamatrix', // Barcode type
                text: card.id, // Text to encode
                sacle: 3, // 3x scaling factor
                includetext: true, // Show human-readable text
                textxalign: 'center', // Always good to set this
            });
        } catch (e) {
            // `e` may be a string or Error object
            console.log(e);
        }
    });

    return (
        <Wrapper to="/card" state={{ activeCard: card.id }}>
            <canvas id={`${card.id}canvas`}></canvas>
            <Title>{card.name}</Title>
            <Number>{card.id}</Number>
        </Wrapper>
    );
};

export default SingleCard;
