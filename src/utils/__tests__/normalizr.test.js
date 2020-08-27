import MockCards from 'Mock/cards';
import normalizr from '../normalizr';

describe('normalizr: ', () => {
  it('Should return normalize array', () => {
    expect(normalizr(MockCards)).toEqual({
      entities: {
        1: {
          email: "test@mail.ru",
          id: 1,
          isFavourite: false,
          name: "test1",
          phone: 1234567890
        },
        2: {
          email: "test2@mail.ru",
          id: 2,
          isFavourite: true,
          name: "qwerty",
          phone: 12345678909
        }
      },
      result: [1, 2],
    });
  });

  it('Should return normalize object', () => {
    expect(normalizr(MockCards[0])).toEqual({
      entities: {
        1: {
          email: "test@mail.ru",
          id: 1,
          isFavourite: false,
          name: "test1",
          phone: 1234567890
        },
      },
      result: [1],
    });
  });

  it('Should return incoming data', () => {
    expect(normalizr('test')).toEqual('test');
  });
});
