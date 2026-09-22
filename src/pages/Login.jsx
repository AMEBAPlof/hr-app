import React, { useState } from 'react';
import { Container, Form, Button, Card, FormControl } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Parse from '../services/parse';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    async function handleLogin(event) {
        event.preventDefault();

        try {
            await Parse.User.logIn(username, password);
            navigate('/');
        } catch (err) {
            alert('Невірний логін або пароль');
        }
    }

    return (
        <Container
            className='d-flex justify-content-center align-items-center'
            style={{ minHeight: '100vh' }}
        >
            <Card style={{ width: '400px' }}>
                <Card.Body>
                    <h2 className='text-center mb-4'>Вхід до системи</h2>

                    <Form onSubmit={handleLogin}>
                        <Form.Group className='mb-3'>
                            <Form.Label>Логін:</Form.Label>
                            <FormControl
                                value={username}
                                onChange={event => setUsername(event.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className='mb-3'>
                            <Form.Label>Пароль:</Form.Label>
                            <FormControl
                                type='password'
                                value={password}
                                onChange={event => setPassword(event.target.value)}
                            />
                        </Form.Group>

                        <Button
                            type='submit'
                            variant='primary'
                            className='w-100'
                        >
                            Увійти
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
}