import styled, { css } from 'styled-components';

export const Button = styled.button`
background: #f8646c;
border-radius: 8px;
padding: 0.75rem 2.85rem;
cursor: pointer;
color: rgba(255, 255, 255, 1);
font-size: 1.125rem;
border: 1px solid #f8646c;

@media screen and (max-width: 1024px) {
  padding: 0.75rem 1.5rem;
}
`