import { ComicCardTypes, HeroCardTypes, HeroDetailsTypes } from '@/types';

export const heroCardsMock: HeroCardTypes[] = [
  {
    id: 1,
    name: 'Spider-man',
    comics: { available: 500 },
    thumbnail: { path: '/imagens/spider-man', extension: 'png' },
  },
  {
    id: 2,
    name: 'Wolverine',
    comics: { available: 350 },
    thumbnail: { path: '/imagens/wolverine', extension: 'png' },
  },
];

export const heroDetailMock: HeroDetailsTypes = {
  id: 1,
  name: 'Spider-man',
  comics: { available: 500 },
  description:
    'Bitten by a radioactive spider, high school student Peter Parker gained the speed, strength and powers of a spider. Adopting the name Spider-Man, Peter hoped to start a career using his new abilities. Taught that with great power comes great responsibility, Spidey has vowed to use his powers to help people.',
  thumbnail: { path: '/imagens/spider-man', extension: 'png' },
};

export const comicCardsMock: ComicCardTypes[] = [
  {
    id: 1,
    title: 'Amazing Spider-Man (1999) #558 (Turner Variant)',
    thumbnail: { path: '/imagens/spider-man-1', extension: 'png' },
    urls: [
      {
        type: 'detail',
        url: 'https://marvel.com',
      },
    ],
  },
  {
    id: 2,
    title: 'Marvel Age Spider-Man Vol. 2: Everyday Hero (Digest)',
    thumbnail: { path: '/imagens/spider-man-2', extension: 'png' },
    urls: [
      {
        type: 'detail',
        url: 'https://marvel.com',
      },
    ],
  },
  {
    id: 3,
    title: 'Amazing Spider-Man: Facsimile Edition (2023) #122',
    thumbnail: { path: '/imagens/spider-man-3', extension: 'png' },
    urls: [
      {
        type: 'detail',
        url: 'https://marvel.com',
      },
    ],
  },
];
