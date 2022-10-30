import React from 'react';
import {Link} from "react-router-dom";
import cl from './NotFound.module.css'
import image404 from './404.jpg'
const NotFound = () => {
  return (
    <div className={cl.notFound}>
      <div className={cl.block}>
        <div className={cl.info}>
          <h1>Извините вы ошиблись</h1>
          <img className={cl.image} src={image404} alt=""/>
        </div>
        <div className={cl.navbar}>
          <Link className={cl.a} to={'/'}>Главная страница</Link>
          <Link className={cl.a} to={'/login'}>Авторизация</Link>
          <Link className={cl.a} to={'/registration'}>Регистрация</Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
