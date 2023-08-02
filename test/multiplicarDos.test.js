const multiplicarDos = require ('../src/multiplicarDos');

test('multiplicar 10 * 2 es igual a 20', () => {
    expect(multiplicarDos(10 , 2)).toBe(20)
});
