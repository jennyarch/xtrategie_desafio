import React from "react";
import styled from "styled-components";
import Img from "../../assets/img/logo.png";

const ImgLogo = styled.img
`
    
    width:350px;
    height:auto;
`;


function Image() {
    return(
        <div>
            <ImgLogo src={Img} alt="Logo XTrategie"></ImgLogo> 
        </div>
       
        
    )
}
export default Image;