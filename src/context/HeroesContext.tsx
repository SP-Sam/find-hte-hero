import { api } from '@/services/api';
import { HeroCardTypes, HeroDetailTypes, HeroesDataTypes } from '@/types';
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
  fetchHeroes: () => Promise.resolve(),
  fetchHeroById: () => Promise.resolve(),
};

const HeroesContext = createContext(defaultValues);

interface Props {
  children: ReactNode;
}

const HeroesProvider: FC<Props> = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [heroCards, setHeroCards] = useState<HeroCardTypes[] | null>(null);
  const [hero, setHero] = useState<HeroDetailTypes | null>(null);

  useEffect(() => {
    fetchHeroes();
  }, []);

  const fetchHeroes = async (page = 1, perPage = 20, searchTerm = '') => {
    const skip = page * perPage - perPage;

    try {
      setIsLoading(true);

      api.defaults.baseURL = `${process.env.NEXT_PUBLIC_MARVEL_API_BASE_URL}?ts=${process.env.NEXT_PUBLIC_MARVEL_API_TIMESTAMPS}&apikey=${process.env.NEXT_PUBLIC_MARVEL_API_PUBLIC_KEY}&hash=${process.env.NEXT_PUBLIC_MARVEL_API_HASH}`;

      const {
        data: { data },
      } = await api.get('', {
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

      api.defaults.baseURL = `${process.env.NEXT_PUBLIC_MARVEL_API_BASE_URL}/${id}?ts=${process.env.NEXT_PUBLIC_MARVEL_API_TIMESTAMPS}&apikey=${process.env.NEXT_PUBLIC_MARVEL_API_PUBLIC_KEY}&hash=${process.env.NEXT_PUBLIC_MARVEL_API_HASH}`;

      const { data } = await api.get('');

      setHero(data.data.results[0]);
    } catch (e: any) {
      console.error(e.message);
    } finally {
      setIsLoading(false);
    }
  };

  const values = { isLoading, heroCards, hero, fetchHeroes, fetchHeroById };

  return (
    <HeroesContext.Provider value={values}>{children}</HeroesContext.Provider>
  );
};

export { HeroesContext, HeroesProvider };
