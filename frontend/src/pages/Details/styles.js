import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Answer = styled.div`
    border: 0px solid #ccc;
    border-bottom-width: 1px;
    margin: 25px 5px;
    padding: 10px 5px;
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ExternalBox = styled.div`
    width: 800px;
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
    border: 1px solid #fff;
    border-radius: 20px;
    background-color: #fff;
    padding-right: 2px;
    cursor: pointer;
`;

export const Date = styled.div`
    flex: 1;
    text-align: right;
`;

export const HeaderPost = styled.div`
    display: flex;
    width: 100%;
    font-size: 12px;
    margin-bottom: 5px;
`;

export const Back = styled(Link)`
    position: absolute;
    left: 30px;
    top: 30px;
    cursor: pointer;
    color: #5555dd;
    &:link {
        text-decoration: none;
    }
    &:visited {
        text-decoration: none;
    }
    &:hover {
        text-decoration: none;
    }
    &:active {
        text-decoration: none;
    }
`;

export const Box = styled.div`
    max-width: 760px;
    width: 760px;
    @media (max-width: 630px) {
        width: 340px;
    }
    @media (max-width: 380px) {
        width: 320px;
    }
    &::-webkit-scrollbar {
        width: 10px;
    }
    margin-top: 30px;
    padding: 5px;
`;

export const Title = styled.div`
    font-size: 20px;
    text-align: center;
    margin: 20px;
    flex: 1;
`;

export const AnswerBox = styled.div`
    height: 370px;
    flex: 1;
    background-color: #fff;
    border: 1px solid #fff;
    border-radius: 15px;
    padding: 0px 15px 5px 15px;
    margin: 10px;
    overflow: auto;
    &::-webkit-scrollbar {
        width: 10px;
    }
      
    &::-webkit-scrollbar-track {
        background: #f1f1f1;
    }
      
    &::-webkit-scrollbar-thumb {
        background: #888;
    }
    
    &::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
`;

export const Subtitle = styled.div`
    text-align: center;
    font-size: 12px;
`;

export const Error = styled.div`
    font-size: 12px;
    color: red;
    text-align: center;
`;