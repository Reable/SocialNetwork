import React, { useState } from 'react';
import MyInput from "../../components/UI/MyInput/MyInput";
import MyButton from "../../components/UI/MyButton/MyButton";

import './Auth.css'
import {Link} from "react-router-dom";

const LoginPage = () => {

  const [data, setData] = useState({
    email: '',
    password: ''
  });

  const [errorsValidate, setErrorsValidate] = useState({
    email: 'Поле почты не может быть пустым',
    password: 'Поле пароля не может быть пустым'
  });

  const [inputDirty, setInputDirty] = useState({
    email: false,
    password: false
  });

  function valueForData(e){
    let valueInput = e.target.value;
    switch(e.target.name) {
      case "email":
        setData({...data, email: valueInput})
        const regex = String(valueInput).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
        if(!regex && inputDirty.email){
          setErrorsValidate({...errorsValidate, email: 'Введена некорректная почта'})
          if(!valueInput){
            setErrorsValidate({...errorsValidate, email: 'Поле почты не может быть пустым'})
          }
        } else {
          setErrorsValidate({...errorsValidate, email: false})
        }

        break;
      case "password":
        setData({...data, password: valueInput})
        if(valueInput.length < 5 || valueInput.length > 15) {
          setErrorsValidate({...errorsValidate, password: 'Пароль должен быть не меньше 5-ти и не больше 15 символов'})
          if(!valueInput){
            setErrorsValidate({...errorsValidate, password: 'Поле пароля не может быть пустым'})
          }
        } else {
          setErrorsValidate({...errorsValidate, password: false})
        }
        break;
      default: break
    }
  }

  function blurHandler(e){
    switch(e.target.name){
      case "email":
        setInputDirty({...inputDirty, email: true})
        break;
      case "password":
        setInputDirty({...inputDirty, password: true})
        break;
      default: break
    }
  }

  function loginForm(e) {
    e.preventDefault();
    console.log(data);
  }

  return (
    <div className={'login'}>
      <div className={'block'}>
        <h2>Добро пожаловать</h2>
        <form onSubmit={loginForm} method={'POST'}>

          {(errorsValidate.email && inputDirty.email) && <p style={{color: 'red'}}>{ errorsValidate.email }</p>}
          <MyInput
            onBlur={e => blurHandler(e)}
            image_link={"https://assets.stickpng.com/thumbs/585e4beacb11b227491c3399.png"}
            type='text'
            placeholder='Ваша почта'
            name={'email'}
            value={data.email}
            onChange={e => valueForData(e)}
          />

          {(errorsValidate.password && inputDirty.password) && <p style={{color: 'red'}}>{ errorsValidate.password }</p>}
          <MyInput
            onBlur={e => blurHandler(e)}
            image_link={"https://icons.veryicon.com/png/o/miscellaneous/rossi-icon-library/password-lock-10.png"}
            type='password'
            placeholder='Ваш пароль'
            name={'password'}
            value={data.password}
            onChange={e => valueForData(e)}
          />

          <MyButton>Авторизация</MyButton>
        </form>

        <div className={'flex'}>
          <Link to={'/'} className={'backIndexPage'}>Назад</Link>
          <Link to={'/registration'} className={'backIndexPage'}>Регистрация</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
