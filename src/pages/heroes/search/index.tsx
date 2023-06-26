import { useEffect, useState } from 'react';

import { NextPage } from 'next';
import { useRouter } from 'next/router';

import type { PaginationProps } from 'antd';
import { Pagination } from 'antd';
import styled from 'styled-components';

import HeroCard from '@/components/HeroCard';
import SearchBar from '@/components/SearchBar';
import {
  GridContainer,
  MainContainer,
  PaginationWrapper,
} from '@/components/layout';
import { useHeroes } from '@/hooks/useHeroes';

const SearchResultText = styled.h2`
  font-size: 1rem;
  color: #eeeeee;
  padding-bottom: 1rem;
  width: 80%;
  max-width: 53rem;
  margin: 0 auto;
`;

const SearchPage: NextPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const router = useRouter();
  const { heroCards, fetchHeroes, total } = useHeroes();

  const onChange: PaginationProps['onChange'] = (page) => {
    setCurrentPage(page);

    if (router.query.q) {
      fetchHeroes(page, String(router.query.q));
    }
  };

  useEffect(() => {
    if (router.query.q) {
      fetchHeroes(1, String(router.query.q));
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
      <PaginationWrapper>
        <Pagination
          current={currentPage}
          onChange={onChange}
          total={total}
          showSizeChanger={false}
          pageSize={20}
        />
      </PaginationWrapper>
    </MainContainer>
  );
};

export default SearchPage;
