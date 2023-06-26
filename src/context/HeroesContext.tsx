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
  isLoading: false,
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
};

const HeroesContext = createContext(defaultValues);

interface Props {
  children: ReactNode;
}

const HeroesProvider: FC<Props> = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [heroCards, setHeroCards] = useState<HeroCardTypes[] | null>(null);
  const [hero, setHero] = useState<HeroDetailTypes | null>(null);
  const [comicCards, setComicCards] = useState<ComicCardTypes[] | null>(null);

  const router = useRouter();

  useEffect(() => {
    if (router.pathname === '/heroes') {
      fetchHeroes();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  const fetchHeroes = async (page = 1, perPage = 20, searchTerm = '') => {
    const skip = page * perPage - perPage;

    try {
      setIsLoading(true);

      const {
        data: { data },
      } = await api.get('/characters', {
        params: {
          limit: perPage,
          offset: skip,
          nameStartsWith: searchTerm ? searchTerm : undefined,
        },
      });

      setHeroCards(data.results);
    } catch (e: any) {
      console.error(e.message);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchHeroById = async (id: number) => {
    try {
      setIsLoading(true);

      const { data } = await api.get(`characters/${id}`);

      setHero(data.data.results[0]);
    } catch (e: any) {
      console.error(e.message);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchHeroComics = async (characterId: number) => {
    try {
      const {
        data: { data },
      } = await api.get(`characters/${characterId}/comics`);

      setComicCards(data.results);
    } catch (e: any) {
      console.error(e.message);
    }
  };

  const values = {
    isLoading,
    heroCards,
    hero,
    comicCards,
    fetchHeroes,
    fetchHeroById,
    fetchHeroComics,
  };

  return (
    <HeroesContext.Provider value={values}>{children}</HeroesContext.Provider>
  );
};

export { HeroesContext, HeroesProvider };
