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

let cartTotal = cart.map(item => item.price * item.quantity).reduce((a, b) => a + b, 0)
document.querySelector("#totalPrice").innerHTML = `$${cartTotal}.00`

if (cartTotal === 0) {
    document.querySelector("#checkoutBtn").disabled = true;
}

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

function checkout() {
    const promoCode = document.querySelector("#promoCode").value
    if (promoCode !== "DG8002" && promoCode !== "") {
        alert("Invalid Promo Code!")
    } else if (!validateCardInfo()) {
        alert("Invalid Card Info! Payment Declined!")
    } else {
        alert("Purchase complete and processing! Your invoice and shipping information will be emailed to you! Thank you for shopping with Yvette")
        cart = [];
        localStorage.setItem('cart', JSON.stringify([]));
        window.location.replace("index.html");
    }
}

function validateCardInfo() {
    let cardNumber = document.querySelector("#cardNumber").value;
    let cvc = document.querySelector("#cvc").value;
    let cardExp = document.querySelector("#cardExp").value;
    let cardName = document.querySelector("#cardName").value;

    const cvcReg = "\\d{3}";
    const numberReg = "\\b(\\d{4}[- ]?){4}";
    return !!cardNumber.match(numberReg) && !!cvc.match(cvcReg) && cardName !== "" && cardExp !== "";
}

function formatCardNumber() {
    let value = document.querySelector("#cardNumber").value;

    if (value.length === 4 || value.length === 9 || value.length === 14) {
        value += " "
    }
    document.querySelector("#cardNumber").value = value;
}

function applyPromo() {
    const promoCode = document.querySelector("#promoCode").value
    if (promoCode === "DG8002") {
        const promo = cartTotal * 0.5
        cartTotal -= promo
        document.querySelector("#totalPrice").innerHTML = `$${cartTotal}.00`;

        document.querySelector("#promoCode").disabled = true;
        document.querySelector("#codeLabel").innerHTML = "Promo Code Applied! (-50%)";
    }
}
