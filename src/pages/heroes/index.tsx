import { useState } from 'react';

import type { PaginationProps } from 'antd';
import { Pagination } from 'antd';

// ** Next
import { NextPage } from 'next';

// ** Hooks
import { useHeroes } from '@/hooks/useHeroes';

// ** Components
import HeroCard from '@/components/HeroCard';
import {
  GridContainer,
  MainContainer,
  PaginationWrapper,
} from '@/components/layout';
import SearchBar from '@/components/SearchBar';

const Home: NextPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const heroes = useHeroes();

  const onChange: PaginationProps['onChange'] = (page) => {
    setCurrentPage(page);
    heroes.fetchHeroes(page);
  };

  return (
    <MainContainer>
      <SearchBar />
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

      <PaginationWrapper>
        <Pagination
          current={currentPage}
          onChange={onChange}
          total={heroes.total}
          showSizeChanger={false}
          pageSize={20}
        />
      </PaginationWrapper>
    </MainContainer>
  );
};

export default Home;
