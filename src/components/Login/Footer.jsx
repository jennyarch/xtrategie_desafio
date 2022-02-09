import React from "react";
import styled from "styled-components";

// Estilos
const BoxFooter = styled.footer
    `
        display:flex;
        flex-direction:column;
        align-items:center;
        margin-top:80px;
        margin-bottom:-75px;
        justify-content:flex-end;
    `;
const Paragraph = styled.p
    `
        font-size:16px;
        font-style:normal;
        font-weight:400;
        color:#6E7B8B;
    `


function Footer(){
    return(
        <BoxFooter>
            <Paragraph>Desenvolvido por <strong>Jennyfer</strong> by Xtrategie</Paragraph>
            <Paragraph>2022</Paragraph>
        </BoxFooter>
    )
}
export default Footer;