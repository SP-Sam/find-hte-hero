import { api } from '@/services/api';
import {
  ComicCardTypes,
  HeroCardTypes,
  HeroDetailTypes,
  HeroesDataTypes,
} from '@/types';
import { useRouter } from 'next/router';
import { FC, ReactNode, createContext, useEffect, useState } from 'react';

const defaultValues: HeroesDataTypes = {
  isCardLoading: false,
  isDetailsLoading: false,
  heroCards: [],
  hero: {
    id: 0,
    name: '',
    description: '',
    comics: {
      available: 0,
    },
    thumbnail: {
      path: '',
      extension: '',
    },
  },
  comicCards: [],
  fetchHeroes: () => Promise.resolve(),
  fetchHeroById: () => Promise.resolve(),
  fetchHeroComics: () => Promise.resolve(),
  total: 0,
  totalComics: 0,
};

const HeroesContext = createContext(defaultValues);

interface Props {
  children: ReactNode;
}

const HeroesProvider: FC<Props> = ({ children }) => {
  const [isCardLoading, setIsCardLoading] = useState<boolean>(false);
  const [isDetailsLoading, setIsDetailsLoading] = useState<boolean>(false);
  const [heroCards, setHeroCards] = useState<HeroCardTypes[] | null>(null);
  const [hero, setHero] = useState<HeroDetailTypes | null>(null);
  const [comicCards, setComicCards] = useState<ComicCardTypes[] | null>(null);
  const [total, setTotal] = useState<number>(0);
  const [totalComics, setTotalComics] = useState<number>(0);

  const router = useRouter();

  useEffect(() => {
    if (router.pathname === '/heroes') {
      fetchHeroes();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  const fetchHeroes = async (page = 1, searchTerm = '') => {
    const skip = page * 20 - 20;

    try {
      setIsCardLoading(true);
      const {
        data: { data },
      } = await api.get('/characters', {
        params: {
          limit: 20,
          offset: skip,
          nameStartsWith: searchTerm ? searchTerm : undefined,
        },
      });

      setTotal(data.total);
      setHeroCards(data.results);
    } catch (e: any) {
      console.error(e.message);
    } finally {
      setIsCardLoading(false);
    }
  };

  const fetchHeroById = async (id: number) => {
    try {
      setIsDetailsLoading(true);

      const { data } = await api.get(`characters/${id}`);

      setHero(data.data.results[0]);
    } catch (e: any) {
      console.error(e.message);
    } finally {
      setIsDetailsLoading(false);
    }
  };

  const fetchHeroComics = async (characterId: number, page = 1) => {
    const skip = page * 20 - 20;

    try {
      setIsCardLoading(true);

      const {
        data: { data },
      } = await api.get(`characters/${characterId}/comics`, {
        params: {
          limit: 20,
          offset: skip,
        },
      });

      setTotalComics(data.total);
      setComicCards(data.results);
    } catch (e: any) {
      console.error(e.message);
    } finally {
      setIsCardLoading(false);
    }
  };

  const values = {
    isCardLoading,
    isDetailsLoading,
    heroCards,
    hero,
    comicCards,
    fetchHeroes,
    fetchHeroById,
    fetchHeroComics,
    total,
    totalComics,
  };

  return (
    <HeroesContext.Provider value={values}>{children}</HeroesContext.Provider>
  );
};

export { HeroesContext, HeroesProvider };
