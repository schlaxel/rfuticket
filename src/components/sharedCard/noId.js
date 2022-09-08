import React from 'react';
import styled from 'styled-components';
import Header from '../header';
import Footer from '../footer';
import { ErrorAlt } from 'styled-icons/boxicons-solid/';
import { Button } from '../common';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Text = styled.div`
    padding: 20px;
    font-weight: 800;
    max-width: 400px;
    margin: auto;
    line-height: 1.2em;
`;

const Card = () => {
    return (
        <>
            <Header />
            <Wrapper>
                <ErrorAlt size={100} color="#fff" />
                <Text>
                    Der Link scheint fehlerhaft zu sein. Versuche es erneut.
                    Falls es nicht funktioniert, kontaktiere mich.
                </Text>
                <Link to="/">
                    <Button>Zur Startseite</Button>
                </Link>
            </Wrapper>
            <Footer />
        </>
    );
};

export default Card;
