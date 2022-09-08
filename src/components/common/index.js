//import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    cursor: pointer;
    border: 0;
    background: #fff;
    margin: 20px 0 0 0;
    font-family: ${({ theme }) => theme.fonts.normal};
    font-weight: 600;
    color: ${({ theme }) => theme.colors.bg1};
    text-transform: uppercase;
    border-radius: 15px;
    padding: 15px;
    font-size: 15px;
`;

export { Button };
