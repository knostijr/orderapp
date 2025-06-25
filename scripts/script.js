

let myBasket = [];


function init() {
    renderDishes();
    renderBasket();
}

function renderDishes() {
    let contentRef = document.getElementById('pizza-content');
    for(let i = 0; i < myDishes.length; i++) {
        contentRef.innerHTML += getDishesTemplate(i);
    }
}

function renderBasket() {
    let contentRef = document.getElementById('basket-wrapper');
    contentRef.innerHTML += getBasketTemplate();

}


function addToBasket() {

}
