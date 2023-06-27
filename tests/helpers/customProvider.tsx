import { render } from '@testing-library/react';
import { HeroesContext } from '@/context/HeroesContext';
import { ReactNode } from 'react';

export const customRender = (
  ui: ReactNode,
  { providerProps, ...renderOptions }: { providerProps: any }
) => {
  return render(
    <HeroesContext.Provider {...providerProps}>{ui}</HeroesContext.Provider>,
    renderOptions
  );
};
