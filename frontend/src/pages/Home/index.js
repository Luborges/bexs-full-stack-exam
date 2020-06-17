import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import Post from '../../components/Post';

import { 
    Container,
    Title,
    QuestionBox,
    Questions,
    Input,
    ButtonSend,
    Send,
    Logout,
    Error
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
                    setQuestions(response.data.questions);
                }
            }
            catch(err) {
                messageError('Houve um problema na requisição de perguntas');
                console.error(err);
            }
        }
        loadQuestions();
    }, []);

    const messageError = (err) => {
        setError(err);
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
                        creationDate: new window.Date(),
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
                messageError('Houve um problema no cadastro de perguntas');
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
            <div>
                <Title>Envie sua pergunta</Title>
                <Error>{error}</Error>
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
            </div>
        </Container>
    )
}

export default Home;