const { isValid } = require('./is_cpf_valid')

test("verifica se o cpf é núlo ou undefined.", function() {
  expect(isValid(null)).toBe(false)
})

test("verifica se o cpf é tem 11 digitos.", function () {
  expect(isValid('351.682.875-12')).toBe(false)
})

test("verifica se todos os digitos são iguais.", function () {
  expect(isValid('111.111.111-11')).toBe(false)
})

test("verifica cpf [xxx.xxx.xxx-xx] como válido.", function() {
  expect(isValid('346.481.350-91')).toBe(true)
})

test("verifica cpf [xxxxxxxxxxx] como válido.", function() {
  expect(isValid('34648135091')).toBe(true)
})

test("verifica cpf [xxx.xxx.xxx-xx] como inválido.", function() {
  expect(isValid('a@3.481.350-91')).toBe(false)
})

test("verifica cpf [xxxxxxxxxxx] como inválido.", function() {
  expect(isValid('a@348135091')).toBe(false)
})