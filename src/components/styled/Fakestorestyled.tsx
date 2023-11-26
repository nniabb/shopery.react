import styled from "styled-components";

export const Div = styled.div`
display: grid;
justify-content: right;
grid-template-columns: auto auto auto;
margin-top: 60px;
`

export const Itemsbox = styled.div`
display:flex;
flex-direction:column;
justify-content: space-evenly;
gap:25px;
height:350px;
width:270px;
border: 1px solid #E6E6E6;
border-radius: 8px;
margin:10px;
box-shadow: 0px 2px 3px gray;
`
export const Imgside = styled.div`
display: flex;
justify-content: center;
margin-top:10px;
`

export const Itemsheading = styled.h3`
color: #4D4D4D;
font-size: 14px;
font-weight: 400;
`
export const Itemsprice = styled.p`
font-size: 16px;
font-weight: 600;
color: #1A1A1A;
`
export const Itemtextside = styled.div`
display:flex;
flex-direction:column;
padding: 0 10px 10px 10px;
`