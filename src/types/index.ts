export type HeroCardTypes = {
  id: number;
  name: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  comics: {
    available: number;
  };
};

export type HeroDetailTypes = {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  comics: {
    available: number;
  };
};

export type ComicCardTypes = {
  id: number;
  title: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  urls: {
    type: string;
    url: string;
  }[];
};

export type HeroesDataTypes = {
  isCardLoading: boolean;
  isDetailsLoading: boolean;
  heroCards: HeroCardTypes[] | null;
  hero: HeroDetailTypes | null;
  comicCards: ComicCardTypes[] | null;
  fetchHeroes: (page?: number, searchTerm?: string) => void;
  fetchHeroById: (id: number) => void;
  fetchHeroComics: (characterId: number, page: number) => void;
  total: number;
  totalComics: number;
};
