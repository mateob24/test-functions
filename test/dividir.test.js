const dividir = require ('../src/dividir');

test('dividir 10 / 2 es igual a 5', () => {
    expect(dividir(10 , 2)).toBe(5)
});