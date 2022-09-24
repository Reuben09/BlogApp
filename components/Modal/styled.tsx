import styled from "styled-components";
import { Row, Column } from "@components"

//modal

export const NewsLetter = styled.div`
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 111;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  height: 100%;
  width: 100%;
  z-index: 111;
  visibility: visible;
  opacity: 1;
  transition: visibility 0s, opacity 0.5s;
`;

export const Form = styled.form`
  background: #f2f3f7;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 8px;
  position: relative;
  padding: 2rem 1rem;

  input {
    padding: 0.85rem 2.85rem;
    border: 1px solid #f8646c;
    margin-bottom: 0.5rem;
    border-radius: 4px;
    background: transparent;
    font-family: "Nunito", sans-serif;
    font-size: 1rem;
  }
  input:focus {
    outline: none;
  }
  input::placeholder {
    font-family: "Nunito", sans-serif;
    font-size: 1rem;
  }
  button {
    padding: 0.75rem 0;
    border: 1px solid #f8646c;
    background-color: #f8646c;
    color: #fafafa;
    width: 100%;
    border-radius: 4px;
    cursor: pointer;
    margin-bottom: 1rem;
  }
`;

export const FormImageContainer = styled.div`
  text-align: center;
  margin-bottom: 0.3rem;
`;

export const ModalCancel = styled.div`
  top: 0;
  right: 0;
  position: absolute;
  margin-right: 1rem;
  margin-top: 1rem;
  cursor: pointer;
  font-size: 1.5rem;
`;