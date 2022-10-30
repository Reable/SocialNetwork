import {useEffect, useState} from "react";

export default function useValidation (value, validations) {

  const [isEmpty, setEmpty] = useState({
    value: true,
    message: 'Это поле обязательное'
  });

  const [minLength, setMinLengthError] = useState({
    value: false,
    message: ''
  })

  const [maxLength, setMaxLengthError] = useState({
    value: false,
    message: ''
  })

  const [emailError, setEmailError] = useState({
    value: true,
    message: 'Здесь должна находиться почта'
  });

  const [buttonDisabled, setButtonDisabled] = useState(false);

  useEffect(() => {
    for (const valid in validations) {
      switch (valid) {
        case 'minLength':
          value.length < validations[valid]
            ? setMinLengthError({value: true, message: `Минимальная длина ${validations[valid]} символов`})
            : setMinLengthError({value: false, message: ''})
          break
        case 'maxLength':
          value.length > validations[valid]
            ? setMaxLengthError({value: true, message: `Длина не должна превышать ${validations[valid]} символов`})
            : setMaxLengthError({value: false, message: ''})
          break
        case 'isEmpty':
          value
            ? setEmpty({ value: false, message: '' })
            : setEmpty({ value: true, message: 'Это поле обязательное' });
          break
        case 'isEmail':
          const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          re.test(String(value).toLowerCase())
            ? setEmailError({value: false, message: ''})
            : setEmailError({value: true, message: 'Здесь должна находиться почта'})
          break;
        default: break;
      }
    }
  }, [value]);

  useEffect(() => {
    if (isEmpty.value === true || emailError.value === true || minLength.value === true || maxLength.value === true ){
      setButtonDisabled(true);
    } else {
      setButtonDisabled(false);
    }
  }, [isEmpty, minLength, maxLength, emailError]);


  return {
    isEmpty,
    minLength,
    maxLength,
    emailError,
    buttonDisabled
  }
}