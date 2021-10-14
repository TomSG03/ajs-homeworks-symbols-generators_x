import canIterate from '../Sevice';

test.each([
  ['filter', [], true],
  [Symbol.iterator, new Map(), true],
  [Symbol.iterator, new Set(), true],
  [Symbol.iterator, null, false],
  [Symbol.iterator, 10, false],
  [Symbol.iterator, 'Netology', true],
  ['length', 'Netology', true],
  ['filter', 'Netology', false],
])(
  'Check valid name',
  (method, obj, expected) => {
    expect(canIterate(method, obj)).toBe(expected);
  },
);
