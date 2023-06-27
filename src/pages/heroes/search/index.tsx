import { useEffect, useState } from 'react';

// ** Next
import { NextPage } from 'next';
import { useRouter } from 'next/router';

// ** Libs
import type { PaginationProps } from 'antd';
import { Pagination } from 'antd';
import styled from 'styled-components';

// ** Hooks
import { useHeroes } from '@/hooks/useHeroes';

// ** Components
import HeroCard from '@/components/HeroCard';
import SearchBar from '@/components/SearchBar';
import Skeleton from '@/components/skeletons';
import { GridContainer, PaginationWrapper } from '@/components/layout';

const SearchResultText = styled.h2`
  font-size: 1rem;
  color: #ffffff;
  padding-bottom: 1rem;
  width: 80%;
  max-width: 53rem;
  margin: 0 auto;
`;

const SearchPage: NextPage = () => {
  const skeletonArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const [currentPage, setCurrentPage] = useState(1);

  const { heroCards, fetchHeroes, totalHeroes, isCardLoading } = useHeroes();

  const router = useRouter();

  const onChange: PaginationProps['onChange'] = (page) => {
    setCurrentPage(page);

    fetchHeroes(page, String(router.query.q));
  };

  useEffect(() => {
    if (router.query.q) {
      fetchHeroes(1, String(router.query.q));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  return (
    <>
      <SearchBar />

      <main>
        {heroCards && heroCards.length > 0 ? (
          <SearchResultText>
            Resultado da busca: &quot;{router.query.q}&quot;
          </SearchResultText>
        ) : (
          <SearchResultText>
            Nenhum resultado encontrado para a busca: &quot;{router.query.q}
            &quot;
          </SearchResultText>
        )}

        <GridContainer>
          {!isCardLoading && heroCards
            ? heroCards.map((hero) => (
                <HeroCard
                  key={hero.id}
                  id={hero.id}
                  name={hero.name}
                  thumbnail={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                  comicsCount={hero.comics.available}
                />
              ))
            : skeletonArr.map((item) => <Skeleton key={item} content="card" />)}
        </GridContainer>
      </main>

      {heroCards && heroCards.length > 0 && (
        <PaginationWrapper>
          <Pagination
            current={currentPage}
            onChange={onChange}
            total={totalHeroes}
            showSizeChanger={false}
            pageSize={20}
          />
        </PaginationWrapper>
      )}
    </>
  );
};

export default SearchPage;
