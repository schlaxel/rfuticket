import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { PlusSquareFill } from 'styled-icons/bootstrap/';

const Wrapper = styled.div`
    max-width: 400px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex: 1;
`;

const Text = styled.p`
    margin-top: 20px;
    max-width: 250px;
    color: ${({ theme }) => theme.colors.fg};
    text-align: center;
    font-weight: 800;
`;

const Icon = styled(PlusSquareFill)`
    color: ${({ theme }) => theme.colors.fg};
    cursor: pointer;
    transition: all 0.3s ease-in;
    &:hover {
        opacity: 0.7;
        transform: scale(1.1);
    }
`;

const NoCards = () => {
    return (
        <Wrapper>
            <Link to="/card" state={{ isEdit: true }}>
                <Icon size={150} />
            </Link>
            <Text>Neue Karte anlegen</Text>
        </Wrapper>
    );
};

export default NoCards;
