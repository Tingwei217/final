window.onload = function() {
    let totalPrice = 0;
    var block2 = document.createElement('div');
    block2.id = 'block2';

    for (var i=1; i<=20; i++) {
        var name = sessionStorage.getItem("n"+i);
        var price = sessionStorage.getItem("p"+i);
        var quantity = sessionStorage.getItem("q"+i);
        price = price * quantity;
        totalPrice += price;

        if (quantity !== null) {
            var blkDiv = document.createElement('div');
            blkDiv.classList.add('block');

            var picDiv = document.createElement('div');
            picDiv.classList.add('item');

            var picture = document.createElement('img');
            picture.src = "../image/product/" + i + ".png";
            picture.alt = name;
            picDiv.appendChild(picture);

            var txtDiv = document.createElement('div');
            txtDiv.classList.add('info');

            var name2 = document.createElement('p');
            name2.textContent = "名稱：" + name;
            txtDiv.appendChild(name2);
            
            var quantity2 = document.createElement('p');
            quantity2.textContent = "數量：" + quantity;
            txtDiv.appendChild(quantity2);

            var price2 = document.createElement('p');
            price2.textContent = "總價：" + price;
            txtDiv.appendChild(price2);

            

            picDiv.appendChild(txtDiv);

            blkDiv.appendChild(picDiv);            
            
            block2.appendChild(blkDiv);
            block2.appendChild(document.createElement('br'));

        }
    }

    document.body.appendChild(block2);

    var x = document.getElementById('total');
    x.textContent = "$" + totalPrice ;

    var y = document.getElementById('fee');
    var fee = 60;
    if(totalPrice >= 1200) {
        y.textContent = "$0";
        fee = 0;
    }
    else {
        y.textContent = "$60";
        fee = 60;
    }
    var z = document.getElementById('total2');
    z.textContent = "$" + (totalPrice + fee);

    document.body.appendChild(document.createElement('br'));
    document.body.appendChild(document.createElement('br'));
    document.body.appendChild(document.createElement('br'));

}