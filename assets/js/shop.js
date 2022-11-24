const shopData = JSON.parse(data);
loadItems(shopData)
filterBuilder()

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

if (params["title"])
    document.querySelector("#title").innerHTML = params["title"];

function loadItems(shopData) {
    let html = ''
    if (shopData.length === 0) html = "No Items To Display"
    shopData.forEach(item => {
        html += `<div class="p-2">
                <div class="card" style="width: 11rem;">
                    <a href="item.html?id=${item.id}"><img class="card-img-top" src="${item.image}" alt="image"></a>
                    <div class="card-body">
                        <p class="card-text">${item.title}: <b>$${item.price}.00</b></p>
                    </div>
                </div>
            </div>`
    })

    document.querySelector("#items").innerHTML = html;
}

function filterBuilder() {
    let filters = [
        {
            name: "Colour",
            options: [
                {
                    value: "white",
                    display: "White"
                },
                {
                    value: "pink",
                    display: "Pink"
                },
                {
                    value: "red",
                    display: "Red"
                },
                {
                    value: "blue",
                    display: "Blue"
                },
                {
                    value: "grey",
                    display: "Grey"
                }]
        },
        {
            name: "Rating",
            options: [
                {
                    value: 1,
                    display: "1 Star"
                },
                {
                    value: 2,
                    display: "2 Star"
                },
                {
                    value: 3,
                    display: "3 Star"
                },
                {
                    value: 4,
                    display: "4 Star"
                },
                {
                    value: 5,
                    display: "5 Star"
                }]
        },
        {
            name: "Price",
            options: [
                {
                    value: "0-100",
                    display: "Under $100"
                },
                {
                    value: "100-500",
                    display: "$100 - $500"
                },
                {
                    value: "500-10000",
                    display: "Above $500"
                }]
        }
    ]

    let html = ''
    filters.forEach(filter => {
        html += `<ul class="list-group">${filter.name}<li class="list-group-item">`
        filter.options.forEach((option, index) => {
            html += `
            <input type="checkbox" id="${filter.name}${index}" 
                onClick="filterItems(
                ${filter.name}${index}, '${filter.name.toLowerCase()}', '${option.value}')">
            <label class="star1">${option.display}</label><br>
            `
        })
        html += `</li></ul>`
    })

    document.querySelector("#filters").innerHTML = html;
}

let ratingFilter = []
let colourFilter = []
let priceFilter = []

function filterItems(input, attribute, value) {
    let shopData = JSON.parse(data);
    if (attribute === "rating") {
        if (input.checked)
            ratingFilter.push(value)
        else
            ratingFilter = ratingFilter.filter(item => item !== value)

    }
    if (attribute === "colour") {
        if (input.checked)
            colourFilter.push(value)
        else
            colourFilter = colourFilter.filter(item => item !== value)
    }
    if (attribute === "price") {
        if (input.checked)
            priceFilter.push(value)
        else
            priceFilter = priceFilter.filter(item => item !== value)
    }
    if (colourFilter.length > 0)
        shopData = shopData
        .filter(item => colourFilter.includes(item["colour"]))
    if (priceFilter.length > 0)
        shopData = shopData
            .filter(item => {
                const prices = priceFilter[priceFilter.length-1].split("-")
                return +prices[0] < item["price"] && +prices[1] > item["price"]
            })
    if (ratingFilter.length > 0)
        shopData = shopData
            .filter(item => ratingFilter.includes(item["rating"].toString()))

    loadItems(shopData)
}
