import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import styled from 'styled-components';

const Card = styled(Link)`
  min-width: 12.5rem;
  overflow: hidden;
  text-decoration: none;
  border-radius: 0.5rem;
  padding-bottom: 0.5rem;
  background-color: #fff;
  border: 1px solid #fff;
  box-shadow: 10px 10px 15px -5px #0000004c;
  transition: 150ms;

  :hover {
    box-shadow: 10px 10px 15px -5px #00000099;
  }
`;

const CardImage = styled(Image)`
  max-width: 12.5rem;
  max-height: 18.9375rem;
  border-radius: 0 0 0.6rem 0.6rem;
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
      <Card href={detailsUrl} target="_blank">
        <CardImage src={thumbnail} width={560} height={850} alt={title} />
        <CardTitle>{title}</CardTitle>
      </Card>
    </>
  );
};

export default ComicCard;
