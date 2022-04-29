import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Input = styled.input`
    background: ${({ theme }) => theme.colors.fg};
    border: 0;
    font-size: 20px;
    padding: 20px;
    text-align: center;
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

const Edit = ({ setCardId }) => {
    const [val, setVal] = useState('');

    const onSave = () => {
        setCardId(val);
    };

    return (
        <Wrapper>
            <Input value={val} onChange={(e) => setVal(e.target.value)} />
            <Save onClick={() => onSave()}>Speichern</Save>
        </Wrapper>
    );
};

export default Edit;
