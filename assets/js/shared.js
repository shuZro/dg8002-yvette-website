
navHtml = `<nav class="navbar navbar-expand-md navbar-light bg-light">
            <a class="navbar-brand" href="index.html"><img src="assets/images/logo.png" alt="logo" width="50%"></a>

            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <div class="navbar-brand form-group">
                        <input class="form-control" type="text" name="Search" placeholder="Search...">
                    </div>
                </li>
                <li class="nav-item"><a class="nav-link" href=""><i class="material-icons">account_circle</i></a></li>
                <li class="nav-item">
                    <a class="nav-link" href="checkout.html">
                        <i class="material-icons">shopping_cart</i>
                        <span id="cartBadge" class="badge badge-secondary">0</span>
                    </a>
                </li>
            </ul>
        </nav>
        <nav class="navbar navbar-expand-md navbar-light bg-light justify-content-center">
           <a class="navbar-brand" href="shop.html">ALL</a>
            <a class="navbar-brand" href="shop.html?type=BRIDAL">BRIDAL</a>
            <a class="navbar-brand" href="shop.html?type=PROM">PROM</a>
            <a class="navbar-brand" href="shop.html?type=SALE">SALE</a>
            <a class="navbar-brand" href="shop.html?type=RENTAL">RENTAL</a>
        </nav>`

document.querySelector("#menu").innerHTML = navHtml;

footerHtml = `<footer>
            <div class="text-center py-3">© 2022 Copyright:
                <a href="/index.html">Yevette's</a>
            </div>
        </footer>`

document.querySelector("#footer").innerHTML = footerHtml;

let cart = localStorage.getItem('cart');
if (!cart) {
    localStorage.setItem('cart', JSON.stringify([]));
}

cart = JSON.parse(localStorage.getItem('cart'));
document.querySelector("#cartBadge").innerHTML = cart.length;
