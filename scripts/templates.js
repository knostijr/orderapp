// HTML return

function getDishesTemplate(pizzas, i) {
    return `   
                    <div onclick="addToBasket(${i})"class="pizza">
                        <div class="border-controller">
                            <h3 id="pizza-name">${pizzas.name}</h3>
                            <span id="pizza-description">${pizzas.description}</span>
                            <p id="pizza-price">${pizzas.price}€</p>
                        </div>
                    </div>
                `;
} 



function getOrderedDishes(dish, i) {
    return ` <div class="dishes">
                        <span id="dish">${dish.name}</span>
                    </div>
                    <div class="amount-price-delete">
                        <img onclick="dishCountMinus(${i})"class="change-icon-1" src="./assets/icon/icon-minus-orange.png">
                        <span id="count">${dish.count}</span>
                        <img onclick="dishesCountAdd(${i})" class="change-icon-2" src="./assets/icon/icon-plus-orange.png">
                        <span id="price">${(dish.price * dish.count).toFixed(2)}€</span>
                        <img onclick="deleteDishes(${i})" src="./assets/icon/icon-trash-black.png">
                    </div>`;
}
