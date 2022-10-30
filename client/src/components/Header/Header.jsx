import React from 'react';
import MyInput from "../UI/MyInput/MyInput";
import classes from './Header.css';

const Headers = () => {

  const headerStyle = [classes.header_flex].join(' ')
  return (
    <header className={headerStyle}>
      <MyInput placeholder={'Поиск'}/>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem beatae deserunt eligendi illo, laborum laudantium placeat totam voluptates. Alias beatae dolores eos fugiat incidunt libero quasi quibusdam quidem saepe vero!
    </header>
  );
};

export default Headers;
