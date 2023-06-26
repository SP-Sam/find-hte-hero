import Image from 'next/image';
import styled from 'styled-components';

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

export const DetailHeader = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: center;
  width: 90%;
  max-width: 48rem;
  margin: 0 auto 0 auto;
  padding: 2rem 1rem 1rem 1rem;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const DetailImage = styled(Image)`
  width: 80%;
  max-width: 18.75rem;
  height: 100%;
  border-radius: 0.625rem;
`;

export const DetailsTextWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DetailTitle = styled.h1`
  color: #3d3d3d;
  width: 100%;
  max-width: 18.75rem;
  text-align: center;

  @media screen and (min-width: 768px) {
    text-align: start;
  }
`;

export const DetailDescription = styled.p`
  color: #7a7a7a;
  width: 100%;
  max-width: 18.75rem;
  text-align: center;

  @media screen and (min-width: 768px) {
    text-align: start;
  }
`;

export const ComicsContainer = styled.section`
  display: flex;
  gap: 1rem;
  width: 100%;
  overflow-x: scroll;
  padding: 1rem;
  margin: 0 auto;
`;

export const ComicsWrapper = styled.div`
  max-width: 48rem;
  width: 90%;
  margin: 0 auto;
  padding: 0 0 1.5rem 0;
`;

export const SubtitleText = styled.h2`
  font-size: 1rem;
  color: #3d3d3d;
  padding: 1rem 0 0 1rem;
`;
