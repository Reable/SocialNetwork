import React, { useContext } from 'react';
import MyInput from "../../components/UI/MyInput/MyInput";
import MyButton from "../../components/UI/MyButton/MyButton";

import './Auth.css'
import {Link} from "react-router-dom";
import useInput from "../../helpers/useInput";
import {UserContext} from "../../context/UserContext";

const LoginPage = () => {
  const [setIsAuth] = useContext(UserContext);
  const data = {
    email: useInput('', {isEmpty: true, minLength: 5, isEmail: true}),
    password: useInput('', {isEmpty: true, minLength: 6})
  };

  function loginForm(e) {
    e.preventDefault();
    setIsAuth(true)
    localStorage.setItem('jwt', 'dasasdasd')
  }

  return (
    <div className={'login'}>
      <div className={'block'}>
        <h2>Добро пожаловать</h2>
        <form onSubmit={loginForm} method={'POST'}>

          { ( data.email.isDirty && data.email.isEmpty.value ) && <p style={{color: 'red'}}>{ data.email.isEmpty.message }</p> }
          { ( data.email.isDirty && data.email.emailError.value ) && <p style={{color: 'red'}}>{ data.email.emailError.message }</p> }
          { ( data.email.isDirty && data.email.minLength.value ) && <p style={{color: 'red'}}>{ data.email.minLength.message }</p> }
          <MyInput
            image_link={"https://assets.stickpng.com/thumbs/585e4beacb11b227491c3399.png"}
            type='text'
            placeholder='Ваша почта'
            name={'email'}
            value={data.email.value}
            onChange={data.email.onChange}
            onBlur={data.email.onBlur}
          />

          { (data.password.isDirty && data.password.isEmpty.value) && <p style={{color: 'red'}}>{ data.password.isEmpty.message }</p> }
          { (data.password.isDirty && data.password.minLength.value) && <p style={{color: 'red'}}>{ data.password.minLength.message }</p> }
          <MyInput
            image_link={"https://icons.veryicon.com/png/o/miscellaneous/rossi-icon-library/password-lock-10.png"}
            type='password'
            placeholder='Ваш пароль'
            name={'password'}
            value={data.password.value}
            onChange={data.password.onChange}
            onBlur={data.password.onBlur}
          />

          <MyButton>Авторизация</MyButton>
        </form>

        <div className={'flex'}>
          <Link to={'/'} className={'backIndexPage'}>Назад</Link>
          <Link to={'/register'} className={'backIndexPage'}>Регистрация</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
