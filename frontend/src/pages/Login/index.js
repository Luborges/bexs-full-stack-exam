import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';

import { 
    Button,
    Box,
    ChangeButton,
    Container,
    Input,
    Form,
    Label,
    TextEnter,
    Title,
    Warning
} from './styles';

const Login = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [firstLogin, setFirstLogin] = useState(false);

    useEffect(() => { 
        const token = localStorage.getItem("auth");
        if (token) {
            history.push('/Home');
        }
    }, [history]);
  
    const handleSubmit = async (evt) => {
        evt.preventDefault();

        if (firstLogin) {
            if (password !== confirmPassword) {
                return;
            }
            try {
                const response = await api.post('user', {
                    email,
                    password,
                });
                
                if (response) {
                    localStorage.setItem("auth", response.data.token);
                    window.location.href = '/Home';
                }
            }
            catch(err) {
                alert('Houve um problema no cadastro do usuário');
                console.error(err);
            }
        }
        else{
            try {
                const response = await api.post('login', {
                    email,
                    password,
                });
                
                if (response) {
                    localStorage.setItem("auth", response.data.token);
                    window.location.href = '/Home';
                }
            }
            catch(err) {
                alert('Usuário inválido');
                console.error(err);
            }
        }
    }

    return (
        <Container>
            <Box>
                <Title>
                    {
                        firstLogin ? 
                            "Bem-vindo, vamos começar?" : 
                            "Bem-vindo, por favor insira suas credenciais"
                    }
                </Title>
                <Form id='form-login' onSubmit={handleSubmit}>
                <TextEnter>
                    <Label htmlFor='email'>E-mail: </Label>
                    <Input type='email' id='email' placeholder="Seu e-mail" 
                        value={email}
                        onChange={evt => setEmail(evt.target.value)} />
                </TextEnter>
                <TextEnter>
                    <Label htmlFor='password'>Senha: </Label> 
                    <Input type='password' id='password' placeholder="Sua senha"
                        value={password}
                        onChange={evt => setPassword(evt.target.value)} />
                </TextEnter>
                {firstLogin && 
                    <>
                        <TextEnter>
                            <Label htmlFor='confirm-password'>Password: </Label> 
                            <Input type='password' id='confirm-password' placeholder="Confirm password"
                                value={confirmPassword}
                                onChange={evt => setConfirmPassword(evt.target.value)} />
                        </TextEnter>
                        {password !== confirmPassword && <Warning>Por favor, verifique sua senha</Warning>}
                    </>
                }
                <TextEnter>
                    <Button id='submit-button' type='submit'>Entrar</Button>
                </TextEnter>
                    {firstLogin ? 
                        <ChangeButton onClick={() => setFirstLogin(!firstLogin)}>
                            Eu já tenho uma conta
                        </ChangeButton> 
                        : 
                        <ChangeButton onClick={() => setFirstLogin(!firstLogin)}>
                            Eu não tenho uma conta
                        </ChangeButton>
                    }
                </Form>
            </Box>
        </Container>
    )
}

export default Login;