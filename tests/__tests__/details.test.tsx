import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { heroDetailMock, comicCardsMock } from '../mock';
import { customRender } from '../helpers/customProvider';
import HeroDetails from '@/pages/heroes/details/[id]';

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

describe('Hero details page', () => {
  beforeEach(() =>
    customRender(<HeroDetails />, {
      providerProps: {
        value: { hero: heroDetailMock, comicCards: comicCardsMock },
      },
    })
  );

  it('should be an image.', () => {
    const heroImage = screen.getByAltText('Spider-man');

    expect(heroImage).toBeInTheDocument();
  });

  it("should be an h1 tag with the character's name.", () => {
    const heroName = screen.getByRole('heading', { name: 'Spider-man' });

    expect(heroName).toBeInTheDocument();
  });

  it('should be a character description.', () => {
    const heroDescription = screen.getByText(
      'Bitten by a radioactive spider, high school student Peter Parker gained the speed, strength and powers of a spider. Adopting the name Spider-Man, Peter hoped to start a career using his new abilities. Taught that with great power comes great responsibility, Spidey has vowed to use his powers to help people.'
    );

    expect(heroDescription).toBeInTheDocument();
  });

  it('should render a text indicating the number of comic books in which that character appears.', () => {
    const comicsCount = screen.getByRole('heading', {
      name: 'Aparece em 500 HQs',
    });

    expect(comicsCount).toBeInTheDocument();
  });

  it("should render the character's comic book cards correctly.", () => {
    const cards = screen.getAllByRole('link');

    expect(cards.length).toBe(3);
  });

  it('should render the card information correctly.', () => {
    const cards = screen.getAllByRole('link')[0];

    const cardImage = screen.getByAltText(
      'Amazing Spider-Man (1999) #558 (Turner Variant)'
    );
    const cardTitle = screen.getByText(
      'Amazing Spider-Man (1999) #558 (Turner Variant)'
    );

    expect(cardImage).toBeInTheDocument();
    expect(cardTitle).toBeInTheDocument();
  });

  it('the card should be a link that redirects to the comic details page on Marvel.com', () => {
    const comicCards = screen.getAllByRole('link');

    comicCards.forEach((card) => {
      expect(card.getAttribute('href')).toBe('https://marvel.com');
    });
  });
});
