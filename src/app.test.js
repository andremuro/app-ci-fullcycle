const calcularAreaRetangulo = require('./app');

test('calcula a área de um retângulo', () => {
  expect(calcularAreaRetangulo(3, 4)).toBe(12);
});

test('calcula a área de um retângulo com comprimento zero', () => {
  expect(calcularAreaRetangulo(0, 4)).toBe(0);
});

test('calcula a área de um retângulo com largura zero', () => {
  expect(calcularAreaRetangulo(3, 0)).toBe(0);
});