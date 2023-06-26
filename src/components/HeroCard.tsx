import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

const CardContainer = styled(Link)`
  width: 12.5rem;
  height: 18.75rem;
  border: 1px solid #f0f0f0;
  border-radius: 0.5rem;
  overflow: hidden;
  text-decoration: none;
  box-shadow: 3px 3px 15px 3px #0000004c;
  background-color: #fff;
  transition: 150ms;

  :hover {
    box-shadow: none;
    box-shadow: 3px 3px 15px 3px rgba(0, 0, 0, 0.5);
  }
`;

const CardImage = styled(Image)`
  width: 12.5rem;
  border-radius: 0 0 0.6rem 0.6rem;
`;

const CardTitle = styled.h3`
  font-size: 1rem;
  color: #3d3d3d;
  text-align: center;
`;

const CardText = styled.p`
  font-size: 0.8rem;
  color: #7a7a7a;
  text-align: center;
`;

interface Props {
  id: number;
  name: string;
  thumbnail: string;
  comicsCount: number;
}

const HeroCard: FC<Props> = ({ id, thumbnail, name, comicsCount }) => {
  return (
    <CardContainer href={`/heroes/details/${id}`}>
      <CardImage src={thumbnail} width={200} height={200} alt={name} />
      <CardTitle>{name}</CardTitle>
      <CardText>Aparece em {comicsCount} HQs</CardText>
    </CardContainer>
  );
};

export default HeroCard;
