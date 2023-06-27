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

export type HeroDetailsTypes = {
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

export type HeroesDataTypes = {
  isCardLoading: boolean;
  isDetailsLoading: boolean;
  hero: HeroDetailsTypes | null;
  heroCards: HeroCardTypes[] | null;
  comicCards: ComicCardTypes[] | null;
  fetchHeroes: (page?: number, searchTerm?: string) => void;
  fetchHeroById: (id: number) => void;
  fetchHeroComics: (characterId: number, page: number) => void;
  totalHeroes: number;
  totalComics: number;
};
