import { FC } from 'react';

import styled from 'styled-components';

export const CardSkeleton = styled.div`
  min-width: 12.5rem;
  height: 18.75rem;
  background-color: #f5f5f5;
  border-radius: 0.5rem;

  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;

  @keyframes pulse {
    50% {
      opacity: 0.5%;
    }
  }
`;

export const DetailHeaderSkeleton = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;

  gap: 0.8rem;
  max-width: 48rem;
  margin: 0 auto 0 auto;
  padding: 0 1rem 1rem 1rem;
  height: 300px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }

  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;

  @keyframes pulse {
    50% {
      opacity: 0.5%;
    }
  }
`;

export const DetailImageSkeleton = styled.div`
  width: 100%;
  max-width: 9.375rem;
  max-height: 16rem;
  border-radius: 0.625rem;
  background-color: #fff;
  height: 100%;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    max-width: 16rem;
  }
`;

export const DetailTitleSkeletonSkeleton = styled.div`
  width: 100%;
  max-width: 18.75rem;
  height: 60px;
  background-color: #fff;
  border-radius: 0.5rem;
  display: none;

  @media screen and (min-width: 768px) {
    display: inline-block;
  }
`;

export const DetailsTextWrapperSkeleton = styled.div`
  width: 80%;
  height: 300px;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const DetailDescriptionSkeleton = styled.div`
  width: 100%;
  height: 15px;
  max-width: 18.75rem;
  background-color: #fff;
  border-radius: 0.5rem;
`;

interface Props {
  content: 'card' | 'hero-details';
}

const Skeleton: FC<Props> = ({ content }) => {
  return (
    <>
      {content === 'card' && <CardSkeleton />}
      {content === 'hero-details' && (
        <DetailHeaderSkeleton>
          <DetailImageSkeleton />

          <DetailsTextWrapperSkeleton>
            <DetailTitleSkeletonSkeleton />
            <DetailDescriptionSkeleton />
            <DetailDescriptionSkeleton />
            <DetailDescriptionSkeleton />
            <DetailDescriptionSkeleton />
          </DetailsTextWrapperSkeleton>
        </DetailHeaderSkeleton>
      )}
    </>
  );
};

export default Skeleton;
