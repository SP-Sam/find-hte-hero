import { useState } from 'react';

// ** Next
import { NextPage } from 'next';

// ** Libs
import type { PaginationProps } from 'antd';
import { Pagination } from 'antd';

// ** Hooks
import { useHeroes } from '@/hooks/useHeroes';

// ** Components
import HeroCard from '@/components/HeroCard';
import { GridContainer, PaginationWrapper } from '@/components/layout';
import SearchBar from '@/components/SearchBar';
import Skeleton from '@/components/skeletons';

const Home: NextPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const skeletonArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  const { isCardLoading, heroCards, totalHeroes, fetchHeroes } = useHeroes();

  const onChange: PaginationProps['onChange'] = (page) => {
    setCurrentPage(page);
    fetchHeroes(page);
  };

  return (
    <>
      <SearchBar />

      <main>
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

      <PaginationWrapper>
        <Pagination
          current={currentPage}
          onChange={onChange}
          total={totalHeroes}
          showSizeChanger={false}
          pageSize={20}
        />
      </PaginationWrapper>
    </>
  );
};

export default Home;
