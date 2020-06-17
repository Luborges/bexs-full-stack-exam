import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { getDate } from '../../utils/functions';

import { 
    Answer,
    Container,
    Input,
    ButtonSend,
    Send,
    Date,
    Back,
    Box,
    AnswerBox,
    Title,
    ExternalBox,
    HeaderPost,
    Subtitle,
    Error
} from './styles';

const Details = ({ match }) => {
    const [answers, setAnswers] = useState([]);
    const [input, setInput] = useState('');
    const [question, setQuestion] = useState({});
    const [error, setError] = useState('');
    const { id } = match.params;
    
    useEffect(() => {
        const loadAnswers = async () => {
            try {
                const response = await api.get(`answers/?id=${id}`, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem("auth")}`,
                    },
                });
                
                if (response) {
                    setAnswers(response.data.answers);
                    setQuestion(response.data.question);
                }
            }
            catch(err) {
                messageError('Houve um problema na recuperação de respostas');
                console.error(err);
            }
        }
        loadAnswers();
    }, [id]);

    const messageError = (err) => {
        setError(err);
    }

    const handleClick = async () => {
        if (input) {
            try {
                const text = input;
    
                const response = await api.post('answers', {
                    id,
                    text,
                }, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem("auth")}`,
                    },
                });
    
                if (response) {
                    const answer = {
                        id: response.data.answer,
                        text,
                        creationDate: new window.Date(),
                        user: response.data.user,
                    }
    
                    setAnswers([
                        ...answers,
                        answer
                    ]);

                    setInput('');
                }
            }
            catch(err) {
                messageError('Houve um problema no cadastro da resposta');
                console.error(err);
            }
        }
    }

    const handleEnter = (key) => {
        if(Number(key) === 13) {
            handleClick();
        }
    }

    return (
        <Container>
            <Back to='/home'>{'< Back'}</Back>
            <ExternalBox>
                <Box>
                    <Title>{question.text}</Title>
                    <Subtitle>Pergunta feita as <b>{getDate(question.creationDate)}</b> por <b>{question.user}</b></Subtitle>
                    {<Error>{error}</Error>}
                    <AnswerBox>
                        {
                            answers.map((item) => (
                                <Answer key={item.id}>
                                    <HeaderPost>
                                        <div>{item.user}</div>
                                        <Date>{getDate(item.creationDate)}</Date>
                                    </HeaderPost>
                                    <div>{item.text}</div>
                                </Answer>
                            ))
                        }
                    </AnswerBox>
                    <Input placeholder={'Responda essa pergunta'} onKeyPress={evt => handleEnter(evt.which)}
                            value={input} onChange={evt => setInput(evt.target.value)} />
                        <ButtonSend onClick={() => handleClick()}>
                    <Send />
                    </ButtonSend>
                </Box>
            </ExternalBox>
        </Container>
    )
}

export default Details;