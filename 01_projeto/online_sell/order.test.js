const { createOrder } = require("./order")

function orderFactory(cpf, discount, items_size) {
  const items = []
  const loop_size = Array.apply(null, Array(items_size))
  loop_size.map((null_value, index) => {
    const item = { id: index + 1, description: `item 0${index}`, price: 10 }
    items.push(item)
  })
  return { cpf, discount, items }
}

test("Não deve fazer um pedido com cpf inválido", function() {
  const order = orderFactory('051.369.666-000', 10, 4)
  expect(createOrder(order)).toBe(false)
})

test("Deve fazer um pedido com 3 itens", function() {
  const order = orderFactory('608.926.770-82', 0, 4)
  const created_order = createOrder(order)
  expect(created_order.total_order).toBe(40)
})

test("Deve fazer um pedido com 3 itens", function() {
  const order = orderFactory('608.926.770-82', 10, 4)
  const created_order = createOrder(order)
  expect(created_order.total_order).toBe(36)
})