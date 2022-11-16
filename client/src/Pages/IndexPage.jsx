import React from 'react';
import {Link} from "react-router-dom";
import './IndexPage.css'

const IndexPage = () => {
  return (
    <div className={'index'}>
      <nav>
        <Link className={'indexPage'} to={'/login'}>
            <h2>Авторизация</h2>
        </Link>
        <Link className={'indexPage'} to={'/register'}>
          <h2>Регистрация</h2>
        </Link>
      </nav>
    </div>
  );
};

export default IndexPage;
