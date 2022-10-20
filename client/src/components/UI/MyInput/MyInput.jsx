import React from 'react';
import './MyInput.css'

const MyInput = ({image_link, ...props}) => {
  return (
    <label>
      {image_link && <img src={ image_link } alt=""/>}
      <input {...props} />
    </label>
  );
};

export default MyInput;
