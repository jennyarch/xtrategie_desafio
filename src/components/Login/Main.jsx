import React from "react";
import styled from "styled-components";
import Image from "./Image";
import Form from "./Form";


//Estilos

const MainBox = styled.div
    `
        align-items:center;
        background-color:#ffffff;
        border-radius:5px;
        display:flex;
        flex-direction:row;
        justify-content:space-around;
        width:800px;
        height:400px;
        
    `;



function Main() {
    return(
        
        <MainBox>
            <Image/>
            <Form/>
        </MainBox>

            
    )
}
export default Main;