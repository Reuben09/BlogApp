import styled from "styled-components"
import { Column, Row} from "@components";

export const HomeContainer = styled(Column)`
  background: #F3F3F9;
  color: #1D3153;
`
export const BlogGrid = styled.section`
  background: #F3F3F9;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  padding: 6rem;
  width: 80%;
  margin: auto;
  border-radius: 8px;
  color: #1D3153;
  margin-bottom: 4rem;

  @media screen and (max-width: 1024px) {
    background: #F3F3F9;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 2rem;
    padding: 4rem 1rem;
    width: 90%;
  }
`

export const Grid = styled(Column)`
  cursor: pointer;
  border: 1px solid #1D3153;
  padding: 1rem;
  border-radius: 0.5rem;

  @media screen and (max-width: 1024px) {
    margin-bottom: 1rem;
}
`

export const GridImage = styled(Row)`
  img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}
`
