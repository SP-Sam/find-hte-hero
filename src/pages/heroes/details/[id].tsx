import { useEffect, useState } from 'react';

import { NextPage } from 'next';
import { useRouter } from 'next/router';

import { useHeroes } from '@/hooks/useHeroes';

import type { PaginationProps } from 'antd';
import { Pagination } from 'antd';

import ComicCard from '@/components/ComicCard';
import {
  ComicsContainer,
  ComicsWrapper,
  DetailDescription,
  DetailHeader,
  DetailImage,
  DetailTitle,
  DetailsTextWrapper,
  MainContainer,
  PaginationWrapper,
  SubtitleText,
} from '@/components/layout';
import SearchBar from '@/components/SearchBar';

const HeroDetails: NextPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();
  const { hero, fetchHeroById, fetchHeroComics, comicCards, totalComics } =
    useHeroes();

  useEffect(() => {
    if (router.query.id) {
      fetchHeroById(+router.query.id);
      fetchHeroComics(+router.query.id, currentPage);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  const onChange: PaginationProps['onChange'] = (page) => {
    setCurrentPage(page);
    if (router.query.id) {
      fetchHeroComics(+router.query.id, page);
    }
  };

  return (
    <MainContainer>
      <SearchBar />
      {hero ? (
        <>
          <DetailHeader>
            <DetailImage
              src={`${hero?.thumbnail.path}.${hero?.thumbnail.extension}`}
              alt={hero!.name}
              width={500}
              height={500}
            />

            <DetailsTextWrapper>
              <DetailTitle>{hero!.name}</DetailTitle>
              <DetailDescription>
                {hero!.description || 'Descrição indisponível'}
              </DetailDescription>
            </DetailsTextWrapper>
          </DetailHeader>

          <ComicsWrapper>
            {comicCards && comicCards.length > 0 ? (
              <>
                <SubtitleText>
                  {`Aparece em ${hero.comics.available} HQs`}
                </SubtitleText>
                <ComicsContainer>
                  {comicCards &&
                    comicCards.map((comic) => (
                      <ComicCard
                        key={comic.id}
                        title={comic.title}
                        thumbnail={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                        detailsUrl={comic.urls[0].url}
                      />
                    ))}
                </ComicsContainer>

                <PaginationWrapper>
                  <Pagination
                    current={currentPage}
                    onChange={onChange}
                    total={totalComics}
                    showSizeChanger={false}
                    pageSize={20}
                  />
                </PaginationWrapper>
              </>
            ) : (
              <SubtitleText>
                Este personagem não aparece em nenhuma HQ
              </SubtitleText>
            )}
          </ComicsWrapper>
        </>
      ) : (
        <p>Carregando...</p>
      )}
    </MainContainer>
  );
};

export default HeroDetails;
