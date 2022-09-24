import styled from "styled-components";
import { Row } from "@components"

export const Nav = styled(Row)`
flex-direction: row-reverse;
align-items: center;
@media screen and (max-width: 1024px) {
  padding: 0 1rem;
}
`;



export const FirstNav = styled.ul`
display: flex;
@media screen and (max-width: 1024px) {
  display: none;
}
li {
  padding: 0 1rem;
  cursor: pointer;
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 500;
  color: #1D3153;
}

li:hover {
  color: #1D3153;
}
`;

export const Toggle = styled.div`
font-size: 1.5rem;
line-height: 1.75rem;
font-weight: 500;
color: #1D3153;
cursor: pointer;
display: none;

@media screen and (max-width: 1024px) {
  display: block;
}
`;
