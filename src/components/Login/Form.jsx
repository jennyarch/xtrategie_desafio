import React from "react";
import { useState } from "react";
import { FormControl, InputLabel, Input, IconButton, InputAdornment, FormLabel, Button } from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import  styled  from "styled-components";

// Esilo
const BoxForm = styled.form
    `
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:5px; 
        width:340px;
    `;

function InputAdornments() {
  const [values, setValues] = useState({

    password: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  const [form, setForm] = useState({ email: '', password: '' })

  function changeForm(e) {
    const { name, value } = e.target

    setForm({ ...form, [name]: value })
  }
  function submitForm(e){
    e.preventDefault()

    console.log(form);
  }


  return (
    <BoxForm>
      <FormLabel>
        Faça seu Login
      </FormLabel>


      <FormControl>
        <InputLabel htmlFor="my-input">Email</InputLabel>
        <Input
          name="email"
          value={form.email}
          id="email"
          aria-describedby="my-helper-text"
          onChange={changeForm}
          fullWidth
          endAdornment={
            <InputAdornment position="end">
              <EmailIcon
                aria-label="toggle password visibility"
              >

              </EmailIcon>
            </InputAdornment>
          }
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="standard-adornment-password">Senha</InputLabel>
        <Input
          name="password"
          id="standard-adornment-password"
          type={values.showPassword ? 'text' : 'password'}
          value={values.password}
          onChange={handleChange('password') || {changeForm}}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {values.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>

      <Button variant="outlined" color="primary" onSubmit={form}>Entrar</Button>
    </BoxForm>
  )
}

export default InputAdornments;