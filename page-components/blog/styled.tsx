import styled from "styled-components";

export const BlogContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0 4rem;
  margin-top: 3rem;
  color: #1D3153;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    padding: 0 1rem;
  }
`;

export const GridOne = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  width: 40rem;
  h1 {
    font-size: 2rem;
    font-family: "Poppins", sans-serif;
    margin-bottom: 0.8rem;
    text-align: left;
    margin-bottom: 2rem;
  }

  p {
    text-align: left;
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
    line-height: 1.5rem;
    margin-bottom: 1rem;
  }
  img {
    margin-bottom: 2rem;
    text-align: left;
  }
  @media screen and (max-width: 1024px) {
    img {
      width: 100%;
      height: auto;
      margin-bottom: 2rem;
    }
  }
`;

export const BlogGridContainer = styled.div`
  margin: auto;
  border-radius: 8px;
  color: #1D3153;
  margin-bottom: 4rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;
  padding: 4rem 2rem;
  width: 90%;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

