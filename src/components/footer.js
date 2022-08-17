import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    background: ${({ theme }) => theme.colors.darkGrey};
    padding: 10px;
    display: flex;
    justify-content: flex-end;
`;

const Link = styled.a`
    color: ${({ theme }) => theme.colors.fg};
    text-decoration: none;
    margin-left: 10px;
    font-size: 0.8em;
`;

const Index = () => {
    return (
        <Wrapper>
            <Link>KIEFER.MEDIA</Link>
            <Link href="https://kiefer.media/impressum" target="_blank">
                Impressum
            </Link>
        </Wrapper>
    );
};

export default Index;
