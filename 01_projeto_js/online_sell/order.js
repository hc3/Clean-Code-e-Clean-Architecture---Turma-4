const { isValidCpf } = require('../cpf/is_cpf_valid')

const calculateDiscount = function(order) {
  const sum_items = order.items.reduce((a, b) => a + b.price , 0)
  if(!order.discount) return sum_items
  const discount = sum_items - ( ( order.discount / 100) * sum_items )
  return discount
}

const createOrder = function (order) {
  if(!isValidCpf(order.cpf)) return false
  const total_order = calculateDiscount(order)
  const new_order = { ...order, total_order }
  return new_order
}

module.exports = { createOrder }