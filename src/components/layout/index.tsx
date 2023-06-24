import { styled } from 'styled-components';

export const MainContainer = styled.main`
  width: 100%;
  height: 100vh;
`;

export const GridContainer = styled.div`
  display: grid;
  gap: 1rem;
  margin: 0 auto;
  place-items: center;

  @media screen and (min-width: 640px) {
    max-width: 26rem;
    grid-template-columns: auto auto;
  }
  @media screen and (min-width: 960px) {
    max-width: 39.5rem;
    grid-template-columns: auto auto auto;
  }
  @media screen and (min-width: 1024px) {
    max-width: 53rem;
    grid-template-columns: auto auto auto auto;
  }
`;
