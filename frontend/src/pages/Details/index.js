import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import { 
    Answer,
    Container,
    Input,
    ButtonSend,
    Send,
    Text,
    Date,
    User,
    Back
} from './styles';

const Details = ({ match }) => {
    const [answers, setAnswers] = useState([]);
    const [input, setInput] = useState('');
    const [question, setQuestion] = useState('');
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
                    console.log(response.data);
                    setAnswers(response.data.answers);
                    setQuestion(response.data.question);
                }
            }
            catch(err) {
                alert('Houve um problema no cadastro da pergunta');
                console.error(err);
            }
        }
        loadAnswers();
    }, []);

    const messageError = () => {
        setError('There was an error communicating with the service, please try again later');
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
                        creationDate: new Date(),
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
                messageError();
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
            {question}
            {
                answers.map((item) => (
                    <Answer key={item.id}>
                        <Text>{item.text}</Text>
                        <Date>{item.creationDate}</Date>
                        <User>{item.user}</User>
                    </Answer>
                ))
            }
            <Input placeholder={'Responda essa pergunta'} onKeyPress={evt => handleEnter(evt.which)}
                value={input} onChange={evt => setInput(evt.target.value)} />
            <ButtonSend onClick={() => handleClick()}>
            <Send />
            </ButtonSend>
            <Back to='/home'>Back</Back>
        </Container>
    )
}

export default Details;