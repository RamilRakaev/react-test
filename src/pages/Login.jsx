import React, { useContext } from 'react';
import MyButton from '../components/UI/button/MyButton';
import MyInput from '../components/UI/input/MyInput';
import { AuthContext } from '../context';

const Login = () => {
    const { setIsAuth } = useContext(AuthContext);

    const login = event => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true');
    };

    return (
        <div>
            <h1>Вход</h1>
            <form onSubmit={login}>
                <MyInput type='text' placeholder='Логин' />
                <MyInput type='password' placeholder='Пароль' />
                <MyButton>Войти</MyButton>
            </form>
        </div>
    )
}

export default Login;