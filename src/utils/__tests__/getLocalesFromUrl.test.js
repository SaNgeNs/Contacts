import getLocaleFromUrl from '../getLocalesFromUrl';

test('getLocalesFromUrl: ', () => {
  expect(getLocaleFromUrl('https:/templatemonster.com/ru/')).toBe('ru');
  expect(getLocaleFromUrl('https:/templatemonster.com/')).toBe('en');
});
