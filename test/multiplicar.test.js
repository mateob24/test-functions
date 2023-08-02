const multiplicar = require ('../src/multiplicar')

test('multiplicar 2 * 4 es igual a 8', () => {
    expect(multiplicar(2, 4)).toBe(8)
})