import { useState } from 'react';

const useForm = (initialState = {}) => {
  const [formValue, setFormValue] = useState(initialState);

  const handleInputChange = ({ target }) => {
    setFormValue({
      ...formValue,
      [target.name]: target.value,
    });
  };

  const formValueChange = (e, value) => {
    setFormValue({
      ...formValue,
      [value]: e,
    });
  };

  const reset = () => {
    setFormValue(initialState);
  };

  return [formValue, handleInputChange, formValueChange, reset];
};

export default useForm;
