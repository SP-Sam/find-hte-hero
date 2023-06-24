// ** Next
import { NextPage } from 'next';

// ** Hooks
import { useHeroes } from '@/hooks/useHeroes';

// ** Components
import HeroCard from '@/components/HeroCard';
import { GridContainer, MainContainer } from '@/components/layout';

const Home: NextPage = () => {
  const heroes = useHeroes();

  return (
    <MainContainer>
      <GridContainer>
        {heroes.heroCards ? (
          heroes.heroCards.map((hero) => (
            <HeroCard
              key={hero.id}
              id={hero.id}
              name={hero.name}
              thumbnail={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
              comicsCount={hero.comics.available}
            />
          ))
        ) : (
          <p>Carregando...</p>
        )}
      </GridContainer>
    </MainContainer>
  );
};

export default Home;
