const shopData = JSON.parse(data);
loadItems(shopData)

function loadItems(shopData) {
    let html = ''
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

function filter(self, attribute) {
    const select = document.querySelector('#' + self.id)
    const selectedValues = [].filter
        .call(select.options, option => option.selected)
        .map(option => +option.value);

    let shopData = JSON.parse(data);
    shopData = shopData.filter(item => selectedValues.includes(item[attribute]))

    loadItems(shopData)
}
