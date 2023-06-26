import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import styled from 'styled-components';

const CardContainer = styled(Link)`
  min-width: 12.5rem;
  max-width: 12.5rem;
  height: 100%;
  overflow: hidden;
  text-decoration: none;
  border-radius: 0.3rem;
  padding-bottom: 0.5rem;
  transition: 150ms;
  box-shadow: 3px 3px 15px 3px rgba(0, 0, 0, 0.3);
  background-color: #fff;

  :hover {
    box-shadow: none;
    box-shadow: 3px 3px 15px 3px rgba(0, 0, 0, 0.5);
  }
`;

const CardImage = styled(Image)`
  width: 12.5rem;
  height: 18.9375rem;
  border-radius: 0.3rem;
`;

const CardTitle = styled.h3`
  font-size: 0.8rem;
  color: #4b4b4b;
  text-align: center;
  padding: 0 0.8rem;
`;

interface Props {
  title: string;
  thumbnail: string;
  detailsUrl: string;
}

const ComicCard: FC<Props> = ({ title, thumbnail, detailsUrl }) => {
  return (
    <>
      <CardContainer href={detailsUrl} target="_blank">
        <CardImage src={thumbnail} width={150} height={230} alt={title} />
        <CardTitle>{title}</CardTitle>
      </CardContainer>
    </>
  );
};

export default ComicCard;
