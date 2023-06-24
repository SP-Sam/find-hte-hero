import { useHeroes } from '@/hooks/useHeroes';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const HeroDetails = () => {
  const router = useRouter();
  const heroes = useHeroes();

  useEffect(() => {
    if (router.query.id) {
      heroes.fetchHeroById(+router.query.id);
    }
  }, []);

  return <div>{router.query.id}</div>;
};

export default HeroDetails;
