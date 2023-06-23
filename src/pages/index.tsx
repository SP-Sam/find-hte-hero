import { useHeroes } from '@/hooks/useHeroes';
import { NextPage } from 'next';

const Home: NextPage = () => {
  const heroes = useHeroes();

  return <h1>Hello, world!</h1>;
};

export default Home;
