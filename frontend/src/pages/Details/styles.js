import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Answer = styled.div`

`;

export const Container = styled.div`
    
`;

export const Input = styled.input`
    position: relative;
    display: inline-flex;
    width: calc(100% - 70px);
    height: 25px;
    bottom: 0;
    padding: 2px;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin: 10px;
    @media (max-width: 630px) {
        max-width: 300px;
    }
    @media (max-width: 380px) {
        max-width: 280px;
    }
`;

export const Send = styled.div`
    border: solid black;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
`;

export const ButtonSend = styled.div`
    width: 30px;
    height: 25px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #ddd;
    border-radius: 20px;
    background-color: #ddd;
    padding-right: 2px;
    cursor: pointer;
`;

export const Text = styled.div`

`;

export const Date = styled.div`

`;

export const User = styled.div`

`;

export const Back = styled(Link)`
    position: absolute;
    left: 30px;
    top: 30px;
    cursor: pointer;
    color: #5555dd;
`;