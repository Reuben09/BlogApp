import styled from "styled-components";
import { Row, Column } from "@components"

// footer

export const FooterContainer = styled.footer`
  height: 8rem;
  margin-top: 6rem;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1D3153;
  background: #F3F3F9;

  a {
    padding: 0 0.5rem;
    color: #1D3153;
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  color: #1D3153;
`;
