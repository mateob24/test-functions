const estado = require('../src/estado');

test('Un estado true indica que está habilitado', () => {
  expect(estado(true)).toBe('habilitado');
});