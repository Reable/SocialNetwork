import React, {useState} from 'react';
import MyInput from "../../components/UI/MyInput/MyInput";
import { SERVER } from "../../Constants";
import './Auth.css'
import axios from "axios";
import MyButton from "../../components/UI/MyButton/MyButton";

const RegisterPage = () => {

  const [data, setData] = useState({
    name: '',
    surname: '',
    email: '',
    password: ''
  });

  const [errorsValidate, setErrorsValidate] = useState({
    name: 'Поле имени не может быть пустым',
    surname: 'Поле фамилии не может быть пустым',
    email: 'Поле почты не может быть пустым',
    password: 'Поле пароля не может быть пустым'
  });

  const [inputDirty, setInputDirty] = useState({
    name: false,
    surname: false,
    email: false,
    password: false
  });

  async function registrationForm(event){
    event.preventDefault()
    console.log(data)
    // await axios.post(SERVER + '/api/user/registration', data )
    //   .then(res => console.log(res))
    //   .catch(err => {
    //     // const status = err.response.status;
    //     const errors = err.response.data.error.message;
    //     errors.forEach(elem => {
    //       console.log(elem.split('"'));
    //     })
    //   })
  }

  function valueForData(e){
    let valueInput = e.target.value;
    switch(e.target.name) {
      case "name":
        setData({...data, name: valueInput})
        if(!valueInput || valueInput.length < 2) {
          setErrorsValidate({...errorsValidate, name: 'Имя должно быть не меньше 2-х символов'})
          if(!valueInput){
            setErrorsValidate({...errorsValidate, name: 'Поле имени не может быть пустым'})
          }
        } else {
          setErrorsValidate({...errorsValidate, name: false})
        }

        break;
      case "surname":
        setData({...data, surname: valueInput})
        if(valueInput.length < 2 ) {
          setErrorsValidate({...errorsValidate, surname: 'Фамилия должно быть не меньше 2-х символов'})
          if(!valueInput){
            setErrorsValidate({...errorsValidate, surname: 'Поле фамилии не может быть пустым'})
          }
        } else {
          setErrorsValidate({...errorsValidate, surname: false})
        }
        break;
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
    }
  }

  function blurHandler(e){
    switch(e.target.name){
      case "name":
        setInputDirty({...inputDirty, name: true})
        break;
      case "surname":
        setInputDirty({...inputDirty, surname: true})
        break;
      case "email":
        setInputDirty({...inputDirty, email: true})
        break;
      case "password":
        setInputDirty({...inputDirty, password: true})
        break;
    }
  }

  return (
    <div className={'register'}>
      <div className={'block'}>
        <h2>Добро пожаловать</h2>
        <form onSubmit={registrationForm} method={'POST'}>

          {(errorsValidate.name && inputDirty.name) && <p style={{color: 'red'}}>{ errorsValidate.name }</p>}
          <MyInput
            onBlur={e => blurHandler(e)}
            type='text'
            placeholder='name'
            name={'name'}
            value={data.name}
            onChange={e => valueForData(e)}
          />

          {(errorsValidate.surname && inputDirty.surname) && <p style={{color: 'red'}}>{ errorsValidate.surname }</p>}
          <MyInput
            onBlur={e => blurHandler(e)}
            type='text'
            placeholder='surname'
            name={'surname'}
            value={data.surname}
            onChange={e => valueForData(e)}
          />

          {(errorsValidate.email && inputDirty.email)  && <p style={{color: 'red'}}>{ errorsValidate.email }</p>}
          <MyInput
            onBlur={e => blurHandler(e)}
            type='text'
            placeholder='email'
            name={'email'}
            value={data.email}
            onChange={e => valueForData(e)}
          />

          {(errorsValidate.password && inputDirty.password)  && <p style={{color: 'red'}}>{ errorsValidate.password }</p>}
          <MyInput
            onBlur={e => blurHandler(e)}
            type='text'
            placeholder='password'
            name={'password'}
            value={data.password}
            onChange={e => valueForData(e)}
          />

          <MyButton>Регистрация</MyButton>

        </form>
      </div>
    </div>
  );

};

export default RegisterPage;
