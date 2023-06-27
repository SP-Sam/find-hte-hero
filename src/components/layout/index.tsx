import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  gap: 1rem;
  margin: 0 auto;
  place-items: center;

  @media screen and (min-width: 500px) {
    max-width: 26rem;
    grid-template-columns: auto auto;
  }
  @media screen and (min-width: 750px) {
    max-width: 39.5rem;
    grid-template-columns: auto auto auto;
  }
  @media screen and (min-width: 1024px) {
    max-width: 53.125rem;
    grid-template-columns: auto auto auto auto;
  }
`;

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0 1.5rem;
`;
