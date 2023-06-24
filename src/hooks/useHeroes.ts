import { useContext } from 'react';
import { HeroesContext } from '@/context/HeroesContext';

export const useHeroes = () => useContext(HeroesContext);
