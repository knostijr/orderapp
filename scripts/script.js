
function init() {
    renderDishes();

}


function renderDishes() {
    let contentRef = document.getElementById('pizza-content');
    for(let i = 0; i < myDishes.length; i++) {
        contentRef.innerHTML += getDishesTemplate(myDishes[i],i);
    }
}


function addToBasket(i) {
    let dish = myDishes[i];
    for(let j = 0; j < myBasket.length; j++) {
        if(myBasket[j].name == dish.name) {
            myBasket[j].count++;
            updateBasket();
            priceCalculator();
            return;
        }
    }
    myBasket.push({
        "name": dish.name,
        "price": dish.price,
        "count": 1
    });

    document.getElementById('order-succesfull').innerHTML = '';
    updateBasket();
    priceCalculator();
}


function updateBasket() {
    document.getElementById('basket-wrapper').innerHTML = '';
    for(let k = 0; k < myBasket.length; k++ ) {
        document.getElementById('basket-wrapper').innerHTML += getOrderedDishes(myBasket[k], k);
    }
}


function deleteDishes(i) {
    myBasket.splice(i, 1);
    updateBasket();
    priceCalculator();
}


function dishCountMinus(i) {
    if(myBasket[i].count == 1) {
        deleteDishes(i);
    } else {
        myBasket[i].count--;
    }
    updateBasket();
    priceCalculator();
}


function dishesCountAdd(i) {
    myBasket[i].count++;
    updateBasket();
    priceCalculator();
}


function priceCalculator() {
    let endPrice =  0;
    for(let l = 0; l < myBasket.length; l++) {
        endPrice += myBasket[l].count * myBasket[l].price;
    }
    document.getElementById('subtotal').innerHTML = `${endPrice.toFixed(2)}€`;
    if (myBasket.length > 0 ) {
        document.getElementById('totalPrice').innerHTML = `${(endPrice + 5).toFixed(2)}€`;
    } else {
        document.getElementById('totalPrice').innerHTML = `${endPrice.toFixed(2)}€`;
    }
}


function sendBasket() {
    myBasket.length = 0;
    document.getElementById('order-succesfull').innerHTML = 'Deine Bestellung war erfolgreich';
    updateBasket();
    priceCalculator();
}


function toggleButton() {
    document.getElementById('orderBasket').classList.toggle('right-container');

}


