import styled from "styled-components";
import backgroundImage from "../../images/headerbck.png";

export const Headerstyle = styled.header`
  display: flex;
  gap: 15px;
  align-items: center;
  padding: 0 0 0 8%;
  height: 120px;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`
export const Categories = styled.p`
font-size: 16px;
font-weight: 400;
color: var(--gray-scale-gray-400, #999);
`
export const Category = styled.p`
font-size: 16px;
font-weight: 400;
color: #3457D5;
`

