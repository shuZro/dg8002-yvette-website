const shopData = JSON.parse(data);

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

if (params["id"]) {
    const item = shopData.find(item => +item["id"] === +params["id"])

    if (item) {
        html = `<div class="row">
                    <div class="col">
                        <img src="${item.image}" alt="dress">
                    </div>
    
                    <div class="col">
                        <p>${item.title}</p>
                        <p>${item.description}</p>
                        <p>Rating: ${item.rating}/5</p>
                        <p>$${item.price}</p>
    
                        <p>Dress Size</p>
                        <a href="#" class="btn btn-dark">Add to Cart</a>
                        <a href="#" class="btn btn-secondary">Rental</a>
    
                        <br>
                        <a href="#" >Size & Fit</a>
                        <br>
                        <a href="#" >Shipping & Return</a>
    
                    </div>
    
                </div>
                <hr>
                <div class="row">
                    <p>Reviews</p><br>
                    <a href="#" class="btn btn-dark">Add Review</a>
                </div>`

        document.querySelector("#item").innerHTML = html;
    } else {
        document.querySelector("#item").innerHTML = "Not a valid link!";
    }
}
