const cuadrado = require('../src/cuadrado');

test('9 al cuadrado es igual a 81', () => {
  expect(cuadrado(9)).toBe(81);
});