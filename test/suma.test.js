const suma = require('../src/suma');

test('sumar 1 + 2 es igaul a 3', () =>{
    expect(suma(1, 2)). toBe(3);
});