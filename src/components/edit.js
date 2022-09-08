import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import {
    HelpWithCircle,
    ChevronSmallDown,
    Share,
    Trash,
} from 'styled-icons/entypo/';
import help_circle from '../help_circle.jpg';
import { useSearchParams, useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    box-sizing: border-box;
    overflow: hidden;
`;

const Text = styled.p`
    max-width: 250px;
    margin: 10px 0;
    text-align: center;
`;

const Input = styled.input`
    background: ${({ theme }) => theme.colors.fg};
    border: 0;
    font-size: 20px;
    padding: 20px;
    margin: 10px 0 0 0;
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

const BtnWrap = styled.div`
    padding: 10px 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const HelpImg = styled.img`
    width: 90%;
    height: auto;
    max-width: 400px;
    margin-top: 10px;
`;

const MoreIcon = styled(ChevronSmallDown)`
    transition: transform 0.2s ease-in;
    ${(props) =>
        props.active &&
        `
        transform: rotate(180deg);
    `}
`;

const ShareInput = styled.input`
    border: 0;
    background: rgba(0, 0, 0, 0.5);
    padding: 10px;
    box-sizing: border-box;
    width: 100%;
    color: #fff;
    border-radius: 10px;
`;

const Edit = ({ setCardObj, activeCard }) => {
    const hasChangedVal = useRef(false);
    const [val, setVal] = useState({ id: '', platz: '', reihe: '' });
    const [showHelp, setShowHelp] = useState(false);
    const [showMore, setShowMore] = useState(false);
    const [showShare, setShowShare] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();

    const navigate = useNavigate();

    useEffect(() => {
        if (activeCard) {
            let cardObjFromLS = JSON.parse(localStorage.getItem(activeCard));
            if (cardObjFromLS && !hasChangedVal.current) {
                // code existiert bereits in Local Storage
                setVal(cardObjFromLS);
            }
        }

        if (searchParams.get('id') && !hasChangedVal.current) {
            const obj = val;
            obj['id'] = searchParams.get('id');
            if (searchParams.get('reihe') && searchParams.get('platz')) {
                obj['reihe'] = searchParams.get('reihe');
                obj['platz'] = searchParams.get('platz');
            }
            setVal({ ...obj });
        }

        hasChangedVal.current = true;
    }, [searchParams, val, activeCard]);

    const onSave = () => {
        setCardObj(val);
        if (searchParams.get('id')) {
            searchParams.delete('id');
            searchParams.delete('reihe');
            searchParams.delete('platz');
            setSearchParams(searchParams);
        }
    };

    const deleteCard = () => {
        // delete from IDS and from localstorage
        const cardIds = JSON.parse(localStorage.getItem('cardIds'));
        delete cardIds[activeCard];
        localStorage.setItem('cardIds', JSON.stringify(cardIds));
        // then navigate to home
        navigate('/');
    };

    const onSetVal = (key, value) => {
        const obj = val;
        obj[key] = value;
        setVal({ ...obj });
    };

    const handleFocus = (event) => {
        event.target.select();
        /*document.execCommand('copy');
        event.target.focus();*/
    };

    return (
        <Wrapper>
            <Input
                placeholder="Karten ID"
                value={val.id}
                onChange={(e) => onSetVal('id', e.target.value)}
            />
            <Input
                placeholder="Karten Name"
                value={val.name}
                onChange={(e) => onSetVal('name', e.target.value)}
            />
            {showMore && (
                <>
                    <Input
                        placeholder="Reihe"
                        value={val.reihe}
                        onChange={(e) => onSetVal('reihe', e.target.value)}
                    />
                    <Input
                        placeholder="Platz"
                        value={val.platz}
                        onChange={(e) => onSetVal('platz', e.target.value)}
                    />
                    <Input
                        placeholder="Block"
                        value={val.block}
                        onChange={(e) => onSetVal('block', e.target.value)}
                    />
                </>
            )}
            <MoreIcon
                size={24}
                color="#fff"
                style={{ marginTop: 10 }}
                onClick={() => setShowMore(!showMore)}
                active={showMore}
            />
            <Save onClick={() => onSave()}>Speichern</Save>
            <BtnWrap>
                <HelpWithCircle
                    size={30}
                    color="#fff"
                    onClick={() => setShowHelp(!showHelp)}
                    style={{ marginRight: 10 }}
                />
                <Share
                    size={30}
                    color="#fff"
                    onClick={() => setShowShare(!showShare)}
                />
                <Trash
                    size={30}
                    color="#fff"
                    onClick={() => deleteCard()}
                    style={{ marginLeft: 10 }}
                />
            </BtnWrap>
            {showHelp && (
                <HelpImg
                    onClick={() => setShowHelp(!showHelp)}
                    src={help_circle}
                />
            )}
            {showShare && (
                <>
                    <ShareInput
                        type="text"
                        readOnly
                        value={`${window.location.host}/share/?id=${val.id}&platz=${val.platz}&reihe=${val.reihe}&block=${val.block}`}
                        onFocus={(e) => handleFocus(e)}
                    />
                    <Text>
                        ACHTUNG: Schicke diesen Link nur an Leute, die du
                        kennst!
                    </Text>
                </>
            )}
        </Wrapper>
    );
};

export default Edit;
