import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import reset from 'styled-reset';
import { Theme } from './theme';

const GlobalStyle = createGlobalStyle`
    /* reset CSS */
    ${reset}
    /* other styles */
    html {
        font-family: ${({ theme }) => theme.fonts.normal};
        color: ${({ theme }) => theme.colors.fg};
        background: ${({ theme }) => theme.colors.bg1};
        box-sizing: border-box;
        height: 100%;
    }

    body, #root {
        height: 100%;
    }
    h1, h2, h3, h4, h5 {
        font-family: ${({ theme }) => theme.fonts.bold};
        font-weight: 600;
    }
    h1 {
        font-size: 2.5em;
    }
    *, *:before, *:after {
    box-sizing: inherit;
    }
`;

const Wrapper = styled.div`
    max-width: 800px;
    margin: auto;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
`;

const SiteWrapper = ({ children }) => (
    <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Wrapper>{children}</Wrapper>
    </ThemeProvider>
);

export default SiteWrapper;
