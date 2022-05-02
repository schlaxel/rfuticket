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
import { useSearchParams } from 'react-router-dom';

const Wrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Content = styled.div`
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
    min-width: 200px;
    aspect-ratio: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;
`;

const CardOuter = styled.div`
    flex: 1;
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

const Nummer = styled.div`
    color: ${({ theme }) => theme.colors.fg};
    margin-top: 10px;
    font-weight: 600;
`;

const Info = styled.div`
    display: flex;
    width: 90%;
    justify-content: space-around;
    margin-top: 10px;
`;
const Elem = styled.div`
    font-weight: 600;
`;

const Card = () => {
    const initObj = { id: '0123456789', platz: '', reihe: '' };

    const [scale, setScale] = useState(4);
    const [isEdit, setIsEdit] = useState(false);
    const [cardObj, setCardObj] = useState(initObj);
    const [searchParams] = useSearchParams();

    useEffect(() => {
        let cardObjFromLS = JSON.parse(localStorage.getItem('cardObj'));
        if (cardObjFromLS) {
            // code existiert bereits in Local Storage
            setCardObj(cardObjFromLS);
        }

        if (searchParams.get('id')) {
            setIsEdit(true);
        }

        try {
            // The return value is the canvas element
            bwipjs.toCanvas('mycanvas', {
                bcid: 'datamatrix', // Barcode type
                text: cardObj.id, // Text to encode
                scale, // 3x scaling factor
                includetext: true, // Show human-readable text
                textxalign: 'center', // Always good to set this
            });
        } catch (e) {
            // `e` may be a string or Error object
            console.log(e);
        }
    }, [isEdit, scale, cardObj.id, searchParams]);

    const onSetCardId = (val) => {
        setCardObj({ ...val });
        localStorage.setItem('cardObj', JSON.stringify(val));
        setIsEdit(!isEdit);
    };

    const renderInfo = () => {
        if (cardObj.reihe !== '' || cardObj.platz !== '') {
            return (
                <Info>
                    {cardObj.reihe !== '' && (
                        <Elem>Reihe: {cardObj.reihe}</Elem>
                    )}
                    {cardObj.platz !== '' && (
                        <Elem>Platz: {cardObj.platz}</Elem>
                    )}
                </Info>
            );
        }
    };

    return (
        <Wrapper>
            <Content>
                {isEdit ? (
                    <EditComponent setCardObj={(val) => onSetCardId(val)} />
                ) : (
                    <CardOuter>
                        <CardWrapper>
                            <canvas id="mycanvas"></canvas>
                        </CardWrapper>
                        {renderInfo()}
                        <Nummer>{cardObj.id}</Nummer>
                    </CardOuter>
                )}
            </Content>
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
