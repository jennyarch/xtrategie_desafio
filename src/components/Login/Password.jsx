import React from "react";
import {FormControl, InputLabel, Input, IconButton, InputAdornment} from '@material-ui/core';
import { useState } from "react";
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Form from './Form';


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


    return(
        
            <FormControl>
                <InputLabel htmlFor="standard-adornment-password">Senha</InputLabel>
                <Input
                    
                    id="password"
                    type={Form.valuePassword ? 'text' : 'password'}
                    value={Form.password}
                    onChange={({ target }) => Form.setPassword(target.value)}
                    error={Form.errorPassword}
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
        
        )
    }
    
    export default InputAdornments;