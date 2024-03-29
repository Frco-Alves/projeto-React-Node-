import styled from "styled-components";
import Background from '../../assets/background.svg'

export const Container = styled.div`
    background: url("${Background}");
    background-size: cover;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;

    
`;

export const Image = styled.img`
   margin-top: 30px;

`;

export const InputLabel = styled.p`
   letter-spacing: -0.408px;
   font-style: normal;
   font-weight: bold;
   font-size: 18px;
   line-height: 22px;
   color: #EEEEEE;

   margin-left: 25px;
`;

export const Input = styled.input`
   background: rgba(225, 225, 225, 0.25);
   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
   border-radius: 14px;

   width: 342px;
   height: 58px;
   margin-bottom: 25px;
   
   padding-left: 25px;

   border: none;
   outline: none;

   font-style: normal;
   font-weight: normal;
   font-size: 20px;
   line-height: 28px;
   color: #FFFFFF;
`;



