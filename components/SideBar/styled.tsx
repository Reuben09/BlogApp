import styled from "styled-components";
import { Row, Column } from "@components"

// side bar

export const SideBarContainer = styled.div`
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 111;
  background: rgba(0, 0, 0, 0.5);
  padding: 0 0rem;
  height: 100%;
  width: 100%;
  z-index: 111;
  visibility: visible;
  opacity: 1;
  transition: visibility 0s, opacity 0.5s;
`;

export const SideBar = styled.div`
  top: 0;
  bottom: 0;
  width: 75%;
  background: #F3F3F9;;
  position: absolute;
  z-index: 111;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  li {
    padding: 0.5rem 0;
    cursor: pointer;
    font-size: 1.125rem;
    line-height: 1.75rem;
    font-weight: 500;
    color: #1D3153;
  }

  li:hover {
    color: #f8646c;
  }
`;

export const Cancel = styled.div`
  top: 0;
  position: absolute;
  right: 0;
  cursor: pointer;
  margin-right: 1rem;
  margin-top: 1rem;
  font-size: 1.5rem;
  color: #1D3153;
`;
