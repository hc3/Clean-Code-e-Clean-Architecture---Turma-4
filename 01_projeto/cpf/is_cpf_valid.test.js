const { isValidCpf } = require('./is_cpf_valid')

test("verifica se o cpf é núlo ou undefined.", function() {
  expect(isValidCpf(null)).toBe(false)
})

test("verifica se o cpf é tem 11 digitos.", function () {
  expect(isValidCpf('351.682.875-12')).toBe(false)
})

test("verifica se todos os digitos são iguais.", function () {
  expect(isValidCpf('111.111.111-11')).toBe(false)
})

test("verifica cpf [xxx.xxx.xxx-xx] como válido.", function() {
  expect(isValidCpf('346.481.350-91')).toBe(true)
})

test("verifica cpf [xxxxxxxxxxx] como válido.", function() {
  expect(isValidCpf('34648135091')).toBe(true)
})

test("verifica cpf [xxx.xxx.xxx-xx] como inválido.", function() {
  expect(isValidCpf('a@3.481.350-91')).toBe(false)
})

test("verifica cpf [xxxxxxxxxxx] como inválido.", function() {
  expect(isValidCpf('a@348135091')).toBe(false)
})