import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import bwipjs from 'bwip-js';
import EditComponent from './edit';
import {
    CircleWithPlus,
    CircleWithMinus,
    Edit,
    CircleWithCross,
} from 'styled-icons/entypo/';

const Wrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const CardWrapper = styled.div`
    background: #fff;
    border-radius: 15px;
    padding: 20px;
    margin: auto;
    min-width: 200px;
    aspect-ratio: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;
`;

const Footer = styled.div`
    width: 100%;
    background: rgba(0, 0, 0, 0.3);
    padding: 20px;
`;

const Control = styled.div`
    display: flex;
    justify-content: space-around;
`;

const Card = () => {
    const [scale, setScale] = useState(4);
    const [isEdit, setIsEdit] = useState(false);
    const [cardId, setCardId] = useState('0123456789');

    useEffect(() => {
        let cardIdFromLS = JSON.parse(localStorage.getItem('cardId'));
        if (cardIdFromLS) {
            // code existiert bereits in Local Storage
            setCardId(cardIdFromLS);
        }

        console.log(cardId, 'cardId');
        try {
            // The return value is the canvas element
            bwipjs.toCanvas('mycanvas', {
                bcid: 'datamatrix', // Barcode type
                text: cardId, // Text to encode
                scale, // 3x scaling factor
                includetext: true, // Show human-readable text
                textxalign: 'center', // Always good to set this
            });
        } catch (e) {
            // `e` may be a string or Error object
            console.log(e);
        }
    }, [isEdit, cardId, scale]);

    const onSetCardId = (id) => {
        localStorage.setItem('cardId', JSON.stringify(id));
        setCardId(id);
        setIsEdit(!isEdit);
    };

    return (
        <Wrapper>
            {isEdit ? (
                <EditComponent setCardId={(id) => onSetCardId(id)} />
            ) : (
                <CardWrapper>
                    <canvas id="mycanvas"></canvas>
                </CardWrapper>
            )}
            <Footer>
                <Control>
                    <CircleWithMinus
                        onClick={() => setScale(scale - 1)}
                        size="30"
                        color="#fff"
                    />
                    {isEdit ? (
                        <CircleWithCross
                            onClick={() => setIsEdit(!isEdit)}
                            size="30"
                            color="#fff"
                        />
                    ) : (
                        <Edit
                            size="30"
                            color="#fff"
                            onClick={() => setIsEdit(!isEdit)}
                        />
                    )}

                    <CircleWithPlus
                        onClick={() => setScale(scale + 1)}
                        size="30"
                        color="#fff"
                    />
                </Control>
            </Footer>
        </Wrapper>
    );
};

export default Card;
