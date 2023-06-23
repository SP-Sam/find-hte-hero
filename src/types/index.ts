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

export type HeroesDataTypes = {
  isLoading: boolean;
  heroCards: HeroCardTypes[] | null;
  hero: HeroDetailTypes | null;
  fetchHeroes: (page?: number, perPage?: number, searchTerm?: string) => void;
};
