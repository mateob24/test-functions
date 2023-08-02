const mayorEdad = require('../src/mayorEdad');

test('La edad de 19 años es igual a true (mayor de edad)', () => {
  expect(mayorEdad(19)).toBe(true);
});