import { faker } from '@faker-js/faker/locale/en';

// This file has nothing to do with Redux
// It exports functions that create random
// movies and song

export interface Media {
  id: string;
  title: string;
}

export type Song = Media;
export type Movie = Media;

export const createRandomMovie = (): Media => {
  return {
    id: faker.string.uuid(),
    title: `${faker.word.adjective()} ${faker.word.noun()}`,
  };
};

export const createRandomSong = (): Media => {
  return {
    id: faker.string.uuid(),
    title: faker.music.songName(),
  };
};
