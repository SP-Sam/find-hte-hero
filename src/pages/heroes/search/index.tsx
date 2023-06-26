import HeroCard from '@/components/HeroCard';
import SearchBar from '@/components/SearchBar';
import { GridContainer, MainContainer } from '@/components/layout';
import { useHeroes } from '@/hooks/useHeroes';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import styled from 'styled-components';

const SearchResultText = styled.h2`
  font-size: 1rem;
  color: #eeeeee;
  padding-bottom: 1rem;
  width: 80%;
  max-width: 53rem;
  margin: 0 auto;
`;

const SearchPage: NextPage = () => {
  const router = useRouter();
  const { heroCards, fetchHeroes } = useHeroes();

  useEffect(() => {
    if (router.query.q) {
      console.log(router.query.q);

      fetchHeroes(1, 20, String(router.query.q));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  return (
    <MainContainer>
      <SearchBar />
      <SearchResultText>
        Resultado da busca: &quot;{router.query.q}&quot;
      </SearchResultText>
      <GridContainer>
        {heroCards ? (
          heroCards.map((hero) => (
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

export default SearchPage;
