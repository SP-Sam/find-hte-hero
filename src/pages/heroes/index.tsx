import { useState } from 'react';

// ** Libs
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
import Skeleton from '@/components/skeletons';

const Home: NextPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const skeletonArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  const { isCardLoading, heroCards, total, fetchHeroes } = useHeroes();

  const onChange: PaginationProps['onChange'] = (page) => {
    setCurrentPage(page);
    fetchHeroes(page);
  };

  return (
    <MainContainer>
      <SearchBar />
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

export default Home;
