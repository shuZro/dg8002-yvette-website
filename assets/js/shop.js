const shopData = JSON.parse(data);

let html = ''
shopData.forEach(function myFunction(item) {
    html += '<div class="p-2">' +
            '<div class="card" style="width: 11rem;">' +
                '<a href="item.html"><img class="card-img-top" src="' + item.image + '" alt="Card image cap"></a>' +
                    '<div class="card-body">' +
                       '<p class="card-text">' + item.title + ': <b>$' + item.price + '</b></p>' +
                    '</div>' +
            '</div>' +
        '</div>'
})

document.querySelector("#items").innerHTML = html;
