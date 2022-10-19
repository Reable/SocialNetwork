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

  async function registrationForm(event){
    event.preventDefault()
    await axios.post(SERVER + '/api/user/registration', data )
      .then(res => console.log(res))
      .catch(err => {
        const status = err.response.status;
        const errors = err.response.data.error.message;
        errors.forEach(elem => {
          console.log(elem.split('"'));
        })
      })
  }


  return (
    <div className={'register'}>
      <div className={'block'}>
        <h2>Добро пожаловать</h2>
        <form onSubmit={registrationForm} method={'POST'}>
          <MyInput
            type='text'
            placeholder='name'
            name={'name'}
            value={data.name}
            onChange={e => setData({...data, name: e.target.value})}
          />
          <MyInput
            type='text'
            placeholder='surname'
            name={'surname'}
            value={data.surname}
            onChange={e => setData({...data, surname: e.target.value})}
          />
          <MyInput
            type='text'
            placeholder='email'
            name={'email'}
            value={data.email}
            onChange={e => setData({...data, email: e.target.value})}
          />
          <MyInput
            type='text'
            placeholder='password'
            name={'password'}
            value={data.password}
            onChange={e => setData({...data, password: e.target.value})}
          />

          <MyButton>Регистрация</MyButton>

        </form>
      </div>
    </div>
  );

};

export default RegisterPage;
