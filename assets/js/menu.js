
html = '<nav class="navbar navbar-expand-md navbar-light bg-light">' +
            '<a class="navbar-brand" href="index.html"><img src="assets/images/logo.png" alt="logo" width="50%"></a>' +

            '<ul class="navbar-nav ml-auto">' +
                '<li class="nav-item">' +
                    '<div class="navbar-brand form-group">' +
                        '<input class="form-control" type="text" name="Search" placeholder="Search...">' +
                    '</div>' +
                '</li>' +
                '<li class="nav-item"><a class="nav-link" href="" data-target="#myModal" data-toggle="modal"><i class="material-icons">account_circle</i></a></li>' +
                '<li class="nav-item"><a class="nav-link" href="" data-target="#myModal" data-toggle="modal"><i class="material-icons">favorite</i></a></li>' +
                '<li class="nav-item"><a class="nav-link" href="checkout.html" data-target="#myModal" data-toggle="modal"><i class="material-icons">shopping_cart</i></a></li>' +
            '</ul>' +
        '</nav>' +
        '<nav class="navbar navbar-expand-md navbar-light bg-light justify-content-center">' +
            '<a class="navbar-brand" href="index.html">NEW</a>' +
            '<a class="navbar-brand" href="index.html">BRIDAL DRESS</a>' +
            '<a class="navbar-brand" href="index.html">PROM DRESS</a>' +
            '<a class="navbar-brand" href="index.html">SALE</a>' +
            '<a class="navbar-brand" href="index.html">RENTALS</a>' +
            '<a class="navbar-brand" href="index.html">GET INSPIRED</a>' +
        '</nav>'

document.querySelector("#menu").innerHTML = html;
