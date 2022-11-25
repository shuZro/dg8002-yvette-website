let cartHtml = ""
if (cart.length === 0) cartHtml = "<b>No Items In Cart</b>"
cart.forEach(item => {
    cartHtml += `<div class="row">
                    <div class="col-3">
                        <img src="${item.image}" width="100">
                    </div>
                    <div class="col-3" style="font-size: 12px">
                        ${item.title} <br>

                        Size: M <br>
                        Color: ${item.colour.toUpperCase()} <br>
                        <label for="rentalDate">Rental Date</label>
                        <input type="date"
                               id="rentalDate"
                               name="rentalDate"
                               min="2022-11-24"
                               max="2022-12-31"><br><br>

                    </div>
                    <div class="col-2">
                        <a onclick='updateQuantity(${item.id}, 1) 'href="#"><i class="material-icons">add</i></a>
                        <div id="quantity">${item.quantity}</div>
                        <a onclick='updateQuantity(${item.id}, -1)' href="#"><i class="material-icons">remove</i></a>

                    </div>
                    <div class="col-2" style="font-size: 12px">
                        $${item.price}.00
                    </div>
                    <div class="col-2">
                        <a onclick="removeFromCart(${item.id})" href="#"><i class="material-icons">delete</i></a>
                    </div>
                </div><hr>`
})

document.querySelector("#cartItems").innerHTML = cartHtml;

const cartTotal = cart.map(item => item.price * item.quantity).reduce((a, b) => a + b, 0)
document.querySelector("#totalPrice").innerHTML = `$${cartTotal}.00`


function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id)
    localStorage.setItem('cart', JSON.stringify(cart));
    window.location.reload()
}

function updateQuantity(id, multiplier) {
    const cartItem = cart.find(item => item.id === id);
    cartItem.quantity += 1 * multiplier
    if (cartItem.quantity < 1) cartItem.quantity = 1;

    localStorage.setItem('cart', JSON.stringify(cart));
    window.location.reload()
}
