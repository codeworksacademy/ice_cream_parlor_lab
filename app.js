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

function orderIceCream(name) {
  const foundIceCream = iceCreams.find(iceCream => iceCream.name == name)
  foundIceCream.quantity++
  drawCart()
  drawTotal()
}

function orderTopping(name) {
  const foundTopping = toppings.find(topping => topping.name == name)
  foundTopping.quantity++
  drawCart()
  drawTotal()
}

function orderItem() {

}

function drawVanilla() {
  const vanilla = iceCreams.find(iceCream => iceCream.name == 'Vanilla')
  const cartItem = `
    <tr>
      <td>${vanilla.name}</td>
      <td>${vanilla.quantity}</td>
      <td>$${vanilla.price.toFixed(2)}</td>
      <td>$${(vanilla.price * vanilla.quantity).toFixed(2)}</td>
    <tr>`

  const cartElem = document.getElementById('cartItems')
  cartElem.innerHTML = cartItem
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

function drawCart() {
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


  for (let i = 0; i < toppings.length; i++) {
    const topping = toppings[i]

    if (topping.quantity == 0) {
      continue
    }

    const cartItemHTML = `
      <tr>
        <td>${topping.name}</td>
        <td>${topping.quantity}</td>
        <td>$${topping.price.toFixed(2)}</td>
        <td>$${(topping.price * topping.quantity).toFixed(2)}</td>
      <tr>
    `
    cartContent += cartItemHTML
  }

  const cartElem = document.getElementById('cartItems')
  cartElem.innerHTML = cartContent
}

function drawTotal() {
  let total = 0
  for (let i = 0; i < iceCreams.length; i++) {
    const iceCream = iceCreams[i]
    total += iceCream.quantity * iceCream.price
  }
  for (let i = 0; i < toppings.length; i++) {
    const topping = toppings[i]
    total += topping.quantity * topping.price
  }
  const cartTotalElem = document.getElementById('cartTotal')
  cartTotalElem.innerText = `$${total.toFixed(2)}`
}

function checkout() {
  const wantsToCheckout = window.confirm('Are you sure that you are ready to check out?')

  if (wantsToCheckout == false) {
    return
  }

  for (let i = 0; i < iceCreams.length; i++) {
    const iceCream = iceCreams[i];
    iceCream.quantity = 0
  }

  for (let i = 0; i < toppings.length; i++) {
    const topping = toppings[i];
    topping.quantity = 0
  }

  drawCart()
  drawTotal()
  window.alert("Enjoy your tasty treats, big dawg!")
}