import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FiMessageSquare } from 'react-icons/fi';

export const MessageIcon = styled(FiMessageSquare)`
    margin-top: 4px;
`;

export const PostContainer = styled.div`
    border: 0px solid #ccc;
    border-bottom-width: 1px;
    margin: 5px;
    padding: 5px;
`;

export const LinkPost = styled(Link)`
    &:link {
        color: #000;
        text-decoration: none;
    }
    &:visited {
        color: #000;
        text-decoration: none;
    }
    &:hover {
        color: #000;
        text-decoration: none;
    }
    &:active {
        color: #000;
        text-decoration: none;
    }
`;

export const Date = styled.div`
    flex: 1;
    text-align: right;
`;

export const AnswerTotal = styled.div`
    display: flex;
    margin-top: 5px;
`;

export const HeaderPost = styled.div`
    display: flex;
    width: 100%;
    font-size: 12px;
`;

export const Count = styled.div`
    margin: 3px 8px;
`;