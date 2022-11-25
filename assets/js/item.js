const shopData = JSON.parse(data);
const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

if (params["id"]) {
    const item = shopData.find(item => +item.id === +params["id"])

    initItemReview(item.id)

    if (item) {
        html = `<div class="row">
                    <div class="col">
                        <img src="${item.image}" alt="dress">
                    </div>
    
                    <div class="col">
                        <p>${item.title}</p>
                        <p>${item.description}</p>
                        <p>Rating: ${item.rating}/5</p>
                        <p>$${item.price}.00</p>
    
                        <p>Dress Size</p>
                        <button class="btn btn-dark" onClick='addToCart(${JSON.stringify(item)})'>Add to Cart</button>
                        <a href="checkout.html" class="btn btn-secondary">Rental</a>
    
                        <br>
                        <a href="#" >Size & Fit</a>
                        <br>
                        <a href="#" >Shipping & Return</a>
    
                    </div>
    
                </div>
                <hr>
                <div class="row">
                    <h3>Reviews</h3>
                </div>
                <div class="row">
                    <div class="col">
                        <input type="text" class="form-control" id="reviewInput" placeholder="Write your review"><br>
                    </div>
                    <div class="col">
                        <input type="number" class="form-control" id="reviewRatingInput" placeholder="5" min="1" max="5"><br>
                    </div>
                    <div class="col">
                       <button id="reviewBtn" class="btn btn-dark" onClick='addItemReview(${item.id})'>Add Review</button>
                    </div>
                </div>
                <div id="reviews"></div>
                `

        document.querySelector("#item").innerHTML = html;
        getReviews(item.id)
    } else {
        document.querySelector("#item").innerHTML = "Not a valid link!";
    }
}

function addToCart(item) {
    const cartIds = cart.map(item => item.id)
    if (cartIds.includes(item.id)) {
        const cartItem = cart.find(_item => _item.id === item.id);
        cartItem.quantity += 1;
    } else {
        item.quantity = 1;
        cart.push(item)
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    document.querySelector("#cartBadge").innerHTML = cart.length;
    window.location.href = 'checkout.html';
}

function initItemReview(itemId) {
    const reviews = localStorage.getItem('item' + itemId);
    if (!reviews) {
        localStorage.setItem('item' + itemId, JSON.stringify([]));
    }
}

function getReviews(itemId) {
    const reviews = JSON.parse(localStorage.getItem('item' + itemId));

    let html = ''
    reviews.forEach(review => {
        html += `<hr><b>${review.user} - ${review.rating}/5</b><p>${review.review}</p><i>${review.date.split("T")[0]}</i>`
    })

    document.querySelector("#reviews").innerHTML = html;
}

function addItemReview(itemId) {
    const inputValue = document.querySelector("#reviewInput").value;
    let ratingValue = document.querySelector("#reviewRatingInput").value;
    ratingValue = ratingValue ? ratingValue : 5
    ratingValue = ratingValue < 0 ? 0 : ratingValue
    ratingValue = ratingValue > 5 ? 5 : ratingValue

    if (inputValue) {
        let reviews = JSON.parse(localStorage.getItem('item' + itemId));
        // reviews = []
        reviews.push({
            user: "Guest User",
            review: inputValue,
            date: new Date(),
            rating: ratingValue
        })
        localStorage.setItem('item' + itemId, JSON.stringify(reviews));
        window.location.reload()
    } else {
        alert("No review entered!")
    }

}
