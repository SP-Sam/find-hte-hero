import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { heroCardsMock } from '../mock';
import { customRender } from '../helpers/customProvider';

import Home from '@/pages/heroes';
import SearchBar from '@/components/SearchBar';

jest.mock('next/router', () => require('next-router-mock'));

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

describe('Home page tests', () => {
  it('should render the search bar and your elements correctly.', () => {
    render(<SearchBar />);

    const searchInput = screen.getByRole('textbox');
    const backButton = screen.getAllByRole('button')[0];
    const homeButton = screen.getAllByRole('button')[1];
    const searchButton = screen.getAllByRole('button')[2];

    expect(searchInput).toBeInTheDocument();
    expect(backButton).toBeInTheDocument();
    expect(homeButton).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
  });

  it('should render the character cards correctly.', () => {
    customRender(<Home />, {
      providerProps: { value: { heroCards: heroCardsMock } },
    });

    const cards = screen.getAllByRole('link');

    expect(cards.length).toBe(2);
  });

  it('should render the card information correctly.', () => {
    customRender(<Home />, {
      providerProps: { value: { heroCards: heroCardsMock } },
    });

    const cardImage = screen.getByAltText('Spider-man');
    const cardTitle = screen.getByText('Spider-man');
    const comicsCount = screen.getByText('Aparece em 500 HQs');

    expect(cardImage).toBeInTheDocument();
    expect(cardTitle).toBeInTheDocument();
    expect(comicsCount).toBeInTheDocument();
  });

  it('the card should be a link that redirects to the character details page.', async () => {
    customRender(<Home />, {
      providerProps: { value: { heroCards: heroCardsMock } },
    });

    const characterDetailPaths = screen.getAllByRole('link');

    characterDetailPaths.forEach((path, index) => {
      expect(path.getAttribute('href')).toBe(
        `/heroes/details/${heroCardsMock[index].id}`
      );
    });
  });
});
