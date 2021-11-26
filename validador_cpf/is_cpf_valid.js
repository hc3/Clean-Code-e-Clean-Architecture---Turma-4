const COEFFICIENT = 11;

const isSameCaracter = (cpf) => new Set(cpf).size === 1

const isValidInput = (cpf) => {
  if(cpf === null || cpf === undefined) return false
  if(cpf.length !== 11) return false
  if(isSameCaracter(cpf)) return false
  return true
}

const onlyNumbers = (cpf) => cpf.replace(/\D/g, "")

const calculateDigit = (cpf, is_first_digit = true) => {
  let max_value_to_verify = is_first_digit ? 10 : 11
  let sum_digits = 0
  cpf.map((digit) => {
    const sum = digit * max_value_to_verify
    --max_value_to_verify
    sum_digits += sum
  })
  const coefficient_value = sum_digits % COEFFICIENT
  const digit = coefficient_value < 2 ? 0 : COEFFICIENT - (coefficient_value)
  cpf.push(String(digit))
  return { digit, cpf_plus_digit : cpf }
}

const isValid = function (cpf) {
  if(!cpf) return false
  const cpf_numbers = onlyNumbers(String(cpf))
  if(!isValidInput(cpf_numbers)) return false
  const cpf_to_calculate_digits = cpf_numbers.substring(0, 9).split('')
  const first_calculate_digit = calculateDigit(cpf_to_calculate_digits)
  const second_calculate_digit = calculateDigit(first_calculate_digit.cpf_plus_digit, false)
  const validated_cpf = onlyNumbers(second_calculate_digit.cpf_plus_digit.toString())
  return cpf_numbers === validated_cpf;
}

module.exports = { isValid }