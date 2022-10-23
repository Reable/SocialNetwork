import {useState} from "react";
import useValidation from "./useValidation";

export default function useInput (defaultValue, rules) {
  const [value, setValue] = useState(defaultValue);
  const [isDirty, setDirty] = useState(false);

  const validations = useValidation(value, rules);

  const onChange = (e) => {
    setValue(e.target.value);
  }

  const onBlur = (e) => {
    setDirty(true);
  }

  return {
    value,
    isDirty,
    onChange,
    onBlur,
    ...validations,
  }
}