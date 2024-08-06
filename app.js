const iceCreams = [
  {
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
  }
]

const toppings = [
  {
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
    name: 'Gummy Worms',
    price: .75,
    quantity: 0
  }
]

function orderVanilla() {
  const vanilla = iceCreams.find(iceCream => iceCream.name == 'Vanilla')
  vanilla.quantity++
  drawVanilla()
}

function drawVanilla() {
  const vanilla = iceCreams.find(iceCream => iceCream.name == 'Vanilla')
  const cartItem = `<tr>
                      <td>${vanilla.name}</td>
                      <td>${vanilla.quantity}</td>
                      <td>$${vanilla.price.toFixed(2)}</td>
                      <td>$${(vanilla.price * vanilla.quantity).toFixed(2)}</td>
                    <tr>`

  const cartElem = document.getElementById('cartItems')
  cartElem.innerHTML = cartItem
}

function orderIceCream(name) {
  const foundIceCream = iceCreams.find(iceCream => iceCream.name == name)
  foundIceCream.quantity++
  drawIceCreams()
}


function drawIceCreams() {
  let cartContent = ''

  for (let i = 0; i < iceCreams.length; i++) {
    const iceCream = iceCreams[i]

    if (iceCream.quantity == 0) {
      continue
    }

    const cartItemHTML = `
      <tr>
        <td>${iceCream.name}</td>
        <td>${iceCream.quantity}</td>
        <td>$${iceCream.price.toFixed(2)}</td>
        <td>$${(iceCream.price * iceCream.quantity).toFixed(2)}</td>
      <tr>
    `
    cartContent += cartItemHTML
  }

  const cartElem = document.getElementById('cartItems')
  cartElem.innerHTML = cartContent
}