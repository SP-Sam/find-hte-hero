import { useEffect, useState } from 'react';

// ** Next
import { NextPage } from 'next';
import { useRouter } from 'next/router';

// ** Libs
import styled from 'styled-components';
import type { PaginationProps } from 'antd';
import { Pagination } from 'antd';

// ** Hooks
import { useHeroes } from '@/hooks/useHeroes';

// ** Components
import ComicCard from '@/components/ComicCard';
import { PaginationWrapper } from '@/components/layout';
import SearchBar from '@/components/SearchBar';
import Skeleton from '@/components/skeletons';
import Image from 'next/image';

const DetailHeader = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: center;
  width: 90%;
  max-width: 48rem;
  margin: 0 auto 0 auto;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 2rem;
  }
`;

const ImageWrapper = styled.div`
  width: 80%;
  max-width: 14.0625rem;
  max-height: 14.0625rem;
  height: 100%;
  border-radius: 0.5rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const DetailImage = styled(Image)`
  width: 100%;
  height: 100%;
`;

const DetailsTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem;
  width: 100%;

  @media screen and (min-width: 768px) {
    padding: 0;
    align-items: flex-start;
  }
`;

const DetailTitle = styled.h1`
  color: #ffffff;
  max-width: 31.25rem;
  text-align: center;

  @media screen and (min-width: 768px) {
    text-align: start;
  }
`;

const DetailDescription = styled.p`
  color: #ececec;
  max-width: 31.25rem;
  text-align: center;

  @media screen and (min-width: 768px) {
    text-align: start;
  }
`;

const ComicsWrapper = styled.div`
  max-width: 48rem;
  width: 90%;
  margin: 0 auto;
`;

const ComicsContainer = styled.section`
  display: flex;
  gap: 1rem;
  width: 100%;
  overflow-x: scroll;
  padding: 1rem 1.25rem 1.25rem 0;
  margin: 0 auto;
`;

const SubtitleText = styled.h2`
  font-size: 1rem;
  color: #ffffff;
  padding-top: 1rem;
`;

const HeroDetails: NextPage = () => {
  const skeletonArr = [0, 1, 2, 3];
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();
  const {
    hero,
    fetchHeroById,
    fetchHeroComics,
    comicCards,
    totalComics,
    isDetailsLoading,
    isCardLoading,
  } = useHeroes();

  useEffect(() => {
    if (router.query.id) {
      fetchHeroComics(+router.query.id, currentPage);
      fetchHeroById(+router.query.id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  const onChange: PaginationProps['onChange'] = (page) => {
    setCurrentPage(page);

    fetchHeroComics(+router.query.id!, page);
  };

  return (
    <>
      <SearchBar />

      <main>
        {!isDetailsLoading && hero ? (
          <DetailHeader>
            <ImageWrapper>
              <DetailImage
                src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                alt={hero.name}
                width={850}
                height={850}
              />
            </ImageWrapper>

            <DetailsTextWrapper>
              <DetailTitle>{hero.name}</DetailTitle>
              <DetailDescription>
                {hero.description || 'Descrição indisponível'}
              </DetailDescription>
            </DetailsTextWrapper>
          </DetailHeader>
        ) : (
          <Skeleton content="hero-details" />
        )}

        <ComicsWrapper>
          {hero && comicCards && comicCards.length > 0 ? (
            <>
              <SubtitleText>
                {`Aparece em ${hero.comics.available} HQs`}
              </SubtitleText>
              <ComicsContainer>
                {!isCardLoading && comicCards
                  ? comicCards.map((comic) => (
                      <ComicCard
                        key={comic.id}
                        title={comic.title}
                        thumbnail={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                        detailsUrl={comic.urls[0].url}
                      />
                    ))
                  : skeletonArr.map((item) => (
                      <Skeleton key={item} content="card" />
                    ))}
              </ComicsContainer>
            </>
          ) : (
            <SubtitleText>
              Este personagem não aparece em nenhuma HQ
            </SubtitleText>
          )}
        </ComicsWrapper>
      </main>

      {comicCards && comicCards.length > 0 && (
        <PaginationWrapper>
          <Pagination
            current={currentPage}
            onChange={onChange}
            total={totalComics}
            showSizeChanger={false}
            pageSize={20}
          />
        </PaginationWrapper>
      )}
    </>
  );
};

export default HeroDetails;
