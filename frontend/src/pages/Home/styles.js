import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    background: #e1e4e8;
    border-radius: 5px;
`;

export const Title = styled.div`
    font-size: 20px;
    text-align: center;
    margin: 20px;
    flex: 1;
`;

export const QuestionBox = styled.div`
    height: 400px;
    flex: 1;
    background-color: #fff;
    border: 1px solid #fff;
    border-radius: 15px;
    margin: 15px;
    padding-bottom: 5px;
`;

export const Questions = styled.div`
    overflow: auto;
    display: flex;
    flex-direction: column;
    max-width: 800px;
    width: 760px;
    height: 330px;
    margin: 10px;
    @media (max-width: 630px) {
        width: 340px;
    }
    @media (max-width: 380px) {
        width: 320px;
    }
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

export const Message = styled.div`
    max-width: 40%;
    padding: 5px 20px;
    margin: 10px;
    border-radius: 10px;
    background-color: #DBF3C6;
`;

export const Logout = styled.div`
    position: absolute;
    right: 30px;
    top: 30px;
    cursor: pointer;
    color: #5555dd;
`;

export const Error = styled.div`
    font-size: 12px;
    color: red;
    text-align: center;
`;

export const Checkbox = styled.div`
    text-align: right;
    margin-right: 12px;
    font-size: 13px;
`;

export const Search = styled.input`
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 5px 15px;
    height: 20px;
    width: calc(100% - 40px);
    @media (max-width: 630px) {
        max-width: 370px;
    }
    @media (max-width: 380px) {
        max-width: 340px;
    }
`;