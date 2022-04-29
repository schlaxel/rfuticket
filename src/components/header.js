import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    background: rgba(0, 0, 0, 0.3);
    padding: 20px;
    text-align: center;
`;

const Heading = styled.h1`
    text-transform: uppercase;
`;

const Header = () => {
    return (
        <Wrapper>
            <Heading>RFU Ticket</Heading>
        </Wrapper>
    );
};

export default Header;
