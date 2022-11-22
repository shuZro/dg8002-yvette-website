const shopData = JSON.parse(data);
loadItems(shopData)
filterBuilder()

function loadItems(shopData) {
    let html = ''
    if (shopData.length === 0) html = "No Items To Display"
    shopData.forEach(function myFunction(item) {
        html += `<div class="p-2">
                <div class="card" style="width: 11rem;">
                    <a href="item.html"><img class="card-img-top" src="${item.image}" alt="Card image cap"></a>
                    <div class="card-body">
                        <p class="card-text">${item.title}: <b>$${item.price}</b></p>
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
                    value: "blue",
                    display: "Blue"
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

function filterItems(input, attribute, value) {
    let shopData = JSON.parse(data);
    if (attribute === "rating") {
        if (input.checked)
            ratingFilter.push(+value)
        else
            ratingFilter = ratingFilter.filter(item => item !== +value)

    }
    if (attribute === "colour") {
        if (input.checked)
            colourFilter.push(value)
        else
            colourFilter = colourFilter.filter(item => item !== value)
    }

    if (colourFilter.length > 0)
        shopData = shopData
        .filter(item => colourFilter.includes(item["colour"]))
    if (ratingFilter.length > 0)
        shopData = shopData
            .filter(item => ratingFilter.includes(item["rating"]))

    loadItems(shopData)
}
