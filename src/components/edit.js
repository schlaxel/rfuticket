import React, { useState } from 'react';
import styled from 'styled-components';
import { HelpWithCircle } from 'styled-icons/entypo/';
import help_circle from '../help_circle.jpg';

const Wrapper = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    box-sizing: border-box;
    overflow: hidden;
`;

const Input = styled.input`
    background: ${({ theme }) => theme.colors.fg};
    border: 0;
    font-size: 20px;
    padding: 20px;
    margin: 0;
    text-align: center;
    width: 90%;
`;

const Save = styled.button`
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

const HelpWrap = styled.div`
    padding: 10px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const HelpImg = styled.img`
    width: 90%;
    height: auto;
    max-width: 400px;
    margin-top: 10px;
`;

const Edit = ({ setCardId }) => {
    const [val, setVal] = useState('');
    const [showHelp, setShowHelp] = useState(false);

    const onSave = () => {
        setCardId(val);
    };

    return (
        <Wrapper>
            <Input value={val} onChange={(e) => setVal(e.target.value)} />
            <Save onClick={() => onSave()}>Speichern</Save>
            <HelpWrap>
                <HelpWithCircle
                    size={24}
                    color="#fff"
                    onClick={() => setShowHelp(!showHelp)}
                />
                {showHelp && (
                    <HelpImg
                        onClick={() => setShowHelp(!showHelp)}
                        src={help_circle}
                    />
                )}
            </HelpWrap>
        </Wrapper>
    );
};

export default Edit;
