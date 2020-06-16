import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import { 
    PostContainer,
    LinkPost,
    Text,
    Date,
    AnswerTotal,
    User
} from './styles';

const Post = ({ question, setError }) => {
    const { id, text, creationDate, user } = question;
    const [answerTotal, setAnswerTotal] = useState('');

    useEffect(() => {
        const loadTotal = async () => {
            try {
                const response = await api.get(`questions-count/?id=${id}`, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem("auth")}`,
                    },
                });
                
                if (response) {
                    setAnswerTotal(response.data.total);
                }
            }
            catch(err) {
                //alert('Houve um problema na requisição de respostas');
                console.error(err);
            }
        }
        loadTotal();
    }, []);

    return (
        <LinkPost to={`/details/${id}`}>
            <PostContainer>
                <Text>{text}</Text>
                <Date><b>Data:</b> {creationDate}</Date>
                <User><b>Usuário:</b> {user}</User>
                <AnswerTotal><b>Respostas:</b> {answerTotal}</AnswerTotal>
            </PostContainer>
        </LinkPost>
    )
}

export default Post;