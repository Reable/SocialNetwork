import React from 'react';
import './Auth.css';
import MyInput from "../../components/UI/MyInput/MyInput";
import MyButton from "../../components/UI/MyButton/MyButton";
import {Link} from "react-router-dom";
import useInput from "../../helpers/useInput";

const RegisterPage = () => {

  const data = {
    name: useInput('', {minLength: 2, isEmpty: true, maxLength: 25}),
    surname: useInput('', {minLength: 3, isEmpty: true, maxLength: 25}),
    email: useInput('', {minLength: 6, isEmpty: true, isEmail: true}),
    password: useInput('', {minLength: 6, isEmpty: true})
  }

  function registrationForm(event) {
    event.preventDefault()
    console.log(data)
    console.log({
      name: data.name.buttonDisabled,
      surname: data.surname.buttonDisabled,
      email: data.email.buttonDisabled,
      password: data.password.buttonDisabled
    })
  }


  return (
    <div className={'register'}>
      <div className={'block'}>
        <h2>Добро пожаловать</h2>
        <form method={'POST'}>

          { (data.name.isDirty && data.name.isEmpty.value) && <p style={{color: 'red'}}>{ data.name.isEmpty.message }</p> }
          { (data.name.isDirty && data.name.minLength.value) && <p style={{color: 'red'}}>{ data.name.minLength.message }</p> }
          { (data.name.isDirty && data.name.maxLength.value) && <p style={{color: 'red'}}>{ data.name.maxLength.message }</p> }
          <MyInput
            type='text'
            placeholder='name'
            name={'name'}
            value={data.name.value}
            onChange={e => data.name.onChange(e)}
            onBlur={e => data.name.onBlur(e)}
          />

          { (data.surname.isDirty && data.surname.isEmpty.value) && <p style={{color: 'red'}}>{ data.surname.isEmpty.message }</p> }
          { (data.surname.isDirty && data.surname.minLength.value) && <p style={{color: 'red'}}>{ data.surname.minLength.message }</p> }
          { (data.surname.isDirty && data.surname.maxLength.value) && <p style={{color: 'red'}}>{ data.surname.maxLength.message }</p> }
          <MyInput
            type='text'
            placeholder='surname'
            name={'surname'}
            value={data.surname.value}
            onChange={e => data.surname.onChange(e)}
            onBlur={e => data.surname.onBlur(e)}
          />

          { ( data.email.isDirty && data.email.isEmpty.value ) && <p style={{color: 'red'}}>{ data.email.isEmpty.message }</p> }
          { ( data.email.isDirty && data.email.emailError.value ) && <p style={{color: 'red'}}>{ data.email.emailError.message }</p> }
          { ( data.email.isDirty && data.email.minLength.value ) && <p style={{color: 'red'}}>{ data.email.minLength.message }</p> }
          <MyInput
            type='text'
            placeholder='email'
            name={'email'}
            value={data.email.value}
            onChange={data.email.onChange}
            onBlur={data.email.onBlur}
          />

          { (data.password.isDirty && data.password.isEmpty.value) && <p style={{color: 'red'}}>{ data.password.isEmpty.message }</p> }
          { (data.password.isDirty && data.password.minLength.value) && <p style={{color: 'red'}}>{ data.password.minLength.message }</p> }
          <MyInput
            type='text'
            placeholder='password'
            name={'password'}
            value={data.password.value}
            onChange={data.password.onChange}
            onBlur={data.password.onBlur}
          />

          <MyButton onClick={registrationForm}>Регистрация</MyButton>

        </form>

        <div className={'flex'}>
          <Link to={'/'} className={'backIndexPage'}>Назад</Link>
          <Link to={'/login'} className={'backIndexPage'}>Войти</Link>
          <Link to={'/personal_page'} className={'backIndexPage'}>Личный кабинет</Link>
        </div>
      </div>
    </div>
  );

};

export default RegisterPage;
