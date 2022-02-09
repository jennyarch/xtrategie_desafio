import React from "react";
import Password from './Password';
import EmailIcon from '@material-ui/icons/Email';
import  styled  from "styled-components";
import { FormControl, InputLabel, Input, FormLabel,InputAdornment, Button } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { useDispatch } from "react-redux";
import  { useState }  from "react";


// Esilo
const BoxForm = styled.form
    `
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:5px;
        width:340px;
    `;



/* //Essa função serve como encapsulamento dos paramentros para criar um action
function userAction(email, password) {
    return {
        type: "USER",
        response: {
            email,
            password
        }
    }
}

//função serve para retornar o objeto de user
function user(state = {value: ""}, action) {
    return action.response && action.response  
}

//Redux
//serve para criar o store do redux com o user
let store = createStore(user) 
//ficar observando e quando valor alterado, ele faz a ação
store.subscribe(() => console.log(store.getState())) */



const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorEmail, setErrorEmail] = useState(false);
    const [erro, setErro] = useState(null);

    const dispatch = useDispatch();
    
    
    
    function handleClick(state){
        if(email.length <= 0 || password.length <= 0) {

            setErro(<Alert severity="error">Preencha todos os campos!</Alert>)
            setTimeout(() => {
                setErro('');

            }, 3000)

            return erro;

        }else if (errorEmail) {
            setErro(<Alert severity="error">Email inválido"</Alert>);
            setTimeout(() => {
                setErro('');

            }, 3000)

            return erro;

        }else if (password.length < 6) {

            setErro(<Alert severity="error">Sua senha deve ter no mínimo 6 caracteres!</Alert>);
            setTimeout(() => {
                setErro('');
            }, 3000)

            return erro
        }else{
            dispatch({
                type: "DADOS_LOGIN",
                email:email,
                password: password,
            });

            //colocar um retorno
        }
    }






    function validateEmail({ target }) {
        const email = target.value;
        var re = /\S+@\S+\.\S+/;
        const res = re.test(email);
        if (email.length <= 0) {
        setErrorEmail(true);
        } else {
        setErrorEmail(!res);
        }
        return res;
    }
  
    

        /* function Click(email = "bruno@ola.com", password = "1234"){
            //serve para disparar um action e o subscribe ser acionado.
            store.dispatch(userAction(email, password))
        } */

        return(
            <BoxForm>
                <FormLabel>
                    Faça seu Login
                </FormLabel>
                <FormControl>
                    <InputLabel htmlFor="my-input">Email</InputLabel>
                    <Input
                        id="email" 
                        aria-describedby="my-helper-text" 
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
                <Password/>
                <Button variant="outlined" color="primary" onClick={handleClick}>Entrar</Button>
            </BoxForm>
        )
        
    
}
export default Login;
