import React, { useEffect } from 'react';
import styled from 'styled-components';
import bwipjs from 'bwip-js';

const Wrapper = styled.div`
    border-radius: 15px;
    background: #fff;
    padding: 20px;
    width: 90%;
    max-width: 370px;
    margin: auto;
    text-align: center;
`;

const CodeWrapper = styled.div`
    padding: 20px;
`;

const Text = styled.p`
    color: ${({ theme }) => theme.colors.black};
`;

const Info = styled.div`
    display: flex;
    width: auto;
    justify-content: space-around;
    margin-top: 10px;
`;
const Elem = styled.div`
    font-weight: 600;
    margin: 0 5px;
    color: ${({ theme }) => theme.colors.black};
`;
const L = styled.span`
    font-weight: 400;
`;

const Card = ({ card }) => {
    useEffect(() => {
        try {
            // The return value is the canvas element
            bwipjs.toCanvas(`${card.id}canvas`, {
                bcid: 'datamatrix', // Barcode type
                text: card.id, // Text to encode
                sacle: 4, // 3x scaling factor
                includetext: true, // Show human-readable text
                textxalign: 'center', // Always good to set this
            });
        } catch (e) {
            // `e` may be a string or Error object
            console.log(e);
        }
    });

    return (
        <Wrapper>
            <CodeWrapper>
                <canvas id={`${card.id}canvas`}></canvas>
            </CodeWrapper>
            <Text>{card.id}</Text>
            <Info>
                {card.reihe !== '' && (
                    <Elem>
                        Reihe: <L>{card.reihe}</L>
                    </Elem>
                )}
                {card.platz !== '' && (
                    <Elem>
                        Platz: <L>{card.platz}</L>
                    </Elem>
                )}
                {card.block !== '' && (
                    <Elem>
                        Block: <L>{card.block}</L>
                    </Elem>
                )}
            </Info>
        </Wrapper>
    );
};

export default Card;
