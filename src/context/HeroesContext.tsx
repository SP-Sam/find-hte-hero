import { FC, ReactNode, createContext } from 'react';

const HeroesContext = createContext({});

interface Props {
  children: ReactNode;
}

const TIMESTAMP = '1632848705';

const HeroesProvider: FC<Props> = ({ children }) => {
  const values = {};

  return (
    <HeroesContext.Provider value={values}>{children}</HeroesContext.Provider>
  );
};

export { HeroesContext, HeroesProvider };
