import React from 'react';
import styled from 'styled-components';
import { Github } from 'styled-icons/evaicons-solid/';

const Wrapper = styled.div`
    background: ${({ theme }) => theme.colors.darkGrey};
    padding: 10px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

const Link = styled.a`
    color: ${({ theme }) => theme.colors.fg};
    text-decoration: none;
    margin-left: 20px;
    font-size: 0.8em;
`;

const Index = () => {
    return (
        <Wrapper>
            <Link href="https://kiefer.media/" target="_blank">
                KIEFER.MEDIA
            </Link>
            <Link href="https://kiefer.media/kontakt" target="_blank">
                Impressum
            </Link>
            <Link href="https://github.com/schlaxel/rfuticket" target="_blank">
                <Github size={20} />
            </Link>
        </Wrapper>
    );
};

export default Index;
