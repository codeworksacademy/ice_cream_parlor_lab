const iceCreams = [{
  name: 'Cookie Dough',
  price: 1.25,
  quantity: 0
},
{
  name: 'Vanilla',
  price: 1,
  quantity: 0
},
{
  name: 'Strawberry',
  price: 1.25,
  quantity: 0
}]

const toppings = [{
  name: 'Sprinkles',
  quantity: 0,
  price: .25
},
{
  name: 'Chocolate Chips',
  price: .25,
  quantity: 0
},
{
  name: 'Cookie Chunks',
  price: .5,
  quantity: 0
}]

function orderVanilla() {
  const vanilla = iceCreams.find(iceCream => iceCream.name == 'Vanilla')
  vanilla.quantity++
  drawVanilla()
}

function drawVanilla() {
  const vanilla = iceCreams.find(iceCream => iceCream.name == 'Vanilla')
  const tableRowElem = `<tr>
                          <td>${vanilla.name}</td>
                          <td>${vanilla.quantity}</td>
                          <td>$${vanilla.price.toFixed(2)}</td>
                          <td>$${(vanilla.price * vanilla.quantity).toFixed(2)}</td>
                        <tr>`

  const cartTableBody = document.getElementById('cartItems')
  cartTableBody.innerHTML = tableRowElem
}