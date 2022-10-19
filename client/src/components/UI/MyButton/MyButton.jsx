import React from 'react';
import './MyButon.css'

const MyButton = ({children, ...props}) => {
  return (
    <>
      <button {...props}>{children}</button>
    </>
  );
};

export default MyButton;
