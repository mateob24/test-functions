const sumaDos = require ('../src/sumarDos')

test('sumar 10 + 15 es igual a 25', () => {
    expect(sumaDos(10 , 15)).toBe(25);
})

