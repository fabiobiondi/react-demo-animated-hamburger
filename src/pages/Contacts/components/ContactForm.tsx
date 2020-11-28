import React, { useState } from 'react';
import classNames from 'classnames';


interface FormData {
  username: string;
  email: string;
  isCompany: string;
}

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ username: '', email: '', isCompany: ''});
  const [dirty, setDirty] = useState(false);

  const isUserNameValid = formData.username.length > 3;
  const isEmailValid = validateEmail(formData.email);
  const isCompanyValid = formData.isCompany !== '';

  const isValid = isUserNameValid && isEmailValid && isCompanyValid;

  const onChangeHandler = (e: React.FormEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.currentTarget.name]: e.currentTarget.value,
    })
    setDirty(true);
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (isValid) {
      window.alert(JSON.stringify(formData));
    }
  };

  return <div>
    <form onSubmit={onSubmitHandler}>
        <input
          name="username"
          className={classNames(
            'form-control mb-3',
            { 'is-valid': isUserNameValid },
            { 'is-invalid': !isUserNameValid && dirty },
          )}
          type="text"
          placeholder="Write your username..."
          onChange={onChangeHandler}
          value={formData.username}
        />

      <input
        name="email"
        className={classNames(
          'form-control mb-3',
          { 'is-valid': isEmailValid },
          { 'is-invalid': !isEmailValid && dirty },
        )}
        type="text"
        placeholder="Write your email..."
        onChange={onChangeHandler}
        value={formData.email}
      />

      <select
        name="isCompany"
        className="form-control mb-3"
        onChange={onChangeHandler}
        value={formData.isCompany}
      >
        <option value="">Are you a company?</option>
        <option value="yes">Yes, i am a company</option>
        <option value="no">No, I', not</option>
      </select>


      <button type="submit" className="btn btn-primary mb-3" disabled={!isValid}>SUBMIT</button>
    </form>
  </div>
};

// ....

function validateEmail(email: string) {
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
