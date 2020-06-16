import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import Post from '../../components/Post';

import { 
    Container,
    Box,
    Title,
    QuestionBox,
    Questions,
    Input,
    ButtonSend,
    Send,
    Logout
} from './styles';

const Home = () => {
    const [questions, setQuestions] = useState([]);
    const [input, setInput] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        const loadQuestions = async () => {
            try {
                const response = await api.get('questions', {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem("auth")}`,
                    },
                });
                
                if (response) {
                    console.log(response.data.questions);
                    setQuestions(response.data.questions);
                }
            }
            catch(err) {
                alert('Houve um problema na requisição de perguntas');
                console.error(err);
            }
        }
        loadQuestions();
    }, []);

    const messageError = () => {
        setError('There was an error communicating with the service, please try again later');
    }

    const handleClick = async () => {
        if (input) {
            try {
                const text = input;
    
                const response = await api.post('questions', {
                    text,
                }, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem("auth")}`,
                    },
                });
    
                if (response) {
                    const question = {
                        id: response.data.question,
                        text,
                        creationDate: new Date(),
                        user: response.data.user,
                    }
    
                    setQuestions([
                        ...questions,
                        question
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

    const logout = async () => {
        api.get('logout', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("auth")}`,
            },
        });
        
        localStorage.clear();
        window.location.href = '/';
    }

    return (
        <Container>
            <Logout onClick={logout}>Logout</Logout>
            <Box>
                <Title>Envie sua pergunta</Title>
                <QuestionBox>
                    <Input placeholder={'Enviar nova pergunta'} onKeyPress={evt => handleEnter(evt.which)}
                        value={input} onChange={evt => setInput(evt.target.value)} />
                    <ButtonSend onClick={() => handleClick()}>
                        <Send />
                    </ButtonSend>
                    <Questions id='questions'>
                        {questions.map((item) => (
                            <div key={item.id}>
                                <Post question={item} setError={setError} />
                            </div>
                        ))}
                    </Questions>
                </QuestionBox>
            </Box>
        </Container>
    )
}

export default Home;