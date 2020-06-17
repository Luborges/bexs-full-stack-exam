import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { getDate } from '../../utils/functions';

import { 
    PostContainer,
    LinkPost,
    Date,
    AnswerTotal,
    HeaderPost,
    MessageIcon,
    Count
} from './styles';

const Post = ({ question, setError, filter }) => {
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
                setError(err);
                console.error(err);
            }
        }
        loadTotal();
    }, [id, setError]);

    return (
        <>
        {
            ((filter && answerTotal === 0) || !filter) &&
            <LinkPost to={`/details/${id}`}>
                <PostContainer>
                    <HeaderPost>
                        <div><b>Usuário:</b> {user}</div>
                        <Date><b>Data:</b> {getDate(creationDate)}</Date>
                    </HeaderPost>
                        <div id='text'>{text}</div>
                        <AnswerTotal><MessageIcon size={18} color={"#ccc"} /><Count>{answerTotal}</Count></AnswerTotal>
                </PostContainer>
            </LinkPost>
        }
        </>
    )
    
}

export default Post;