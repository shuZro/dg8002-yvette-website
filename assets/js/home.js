const cart = localStorage.getItem('cart');
console.log(cart)
if (!cart) {
    console.log(3)
    localStorage.setItem('cart', JSON.stringify([]));
}


