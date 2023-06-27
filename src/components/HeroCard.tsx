import { FC } from 'react';

// ** Next
import Link from 'next/link';
import Image from 'next/image';

// ** Libs
import styled from 'styled-components';

const Card = styled(Link)`
  width: 12.5rem;
  height: 18.75rem;
  border: 1px solid #f0f0f0;
  border-radius: 0.5rem;
  overflow: hidden;
  text-decoration: none;
  background-color: #fff;
  box-shadow: 3px 3px 15px 3px #0000004c;
  transition: 150ms;

  :hover {
    box-shadow: 3px 3px 15px 3px #00000099;
  }
`;

const CardImage = styled(Image)`
  border-radius: 0 0 0.6rem 0.6rem;
  max-width: 12.5rem;
  max-height: 12.5rem;
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
    <Card href={`/heroes/details/${id}`}>
      <CardImage src={thumbnail} width={850} height={850} alt={name} />
      <CardTitle>{name}</CardTitle>
      <CardText>Aparece em {comicsCount} HQs</CardText>
    </Card>
  );
};

export default HeroCard;
