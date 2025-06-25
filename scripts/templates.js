// HTML return

function getDishesTemplate(i) {
    return `   
                    <div onclick="addToBasket()"class="pizza">
                        <div class="border-controller">
                            <h3 id="pizza-name">${myDishes[i].name}</h3>
                            <span id="pizza-description">${myDishes[i].description}</span>
                            <p id="pizza-price">${myDishes[i].price}€</p>
                        </div>
                    </div>
                `;
} 

function getBasketTemplate() {
    return ` <div class="basked">
                <div class="basked-input">
                    <h3>Warenkorb</h3>
                </div>
                <hr>

                <div id="basket-wrapper" class="basked-dishes-input">
                    <div class="dishes">
                        <span id="dish">${myDishes.name}</span>
                    </div>
                    <div class="amount-price-delete">
                        <img class="change-icon-1" src="./assets/icon/icon-minus-orange.png">
                        <span id="amount"> 2</span>
                        <img onclick="" class="change-icon-2" src="./assets/icon/icon-plus-orange.png">
                        <span id="price">${myDishes.name}</span>
                        <img onclick="" src="./assets/icon/icon-trash-black.png">
                    </div>
                </div>
                <hr class="seperation">
                <div class="total-price">
                    <span>Zwischensumme</span>
                    <p id="price-without-order"> XXX</p>
                </div>
                <div class="total-price">
                    <span>Lieferkosten</span>
                    <p id="price-without-order"> XXX</p>
                </div>
                <div class="total-price">
                    <span style="font-weight: 800;">Gesamtkosten</span>
                    <p id="price-without-order"> XXX</p>
                </div>

            </div>`;
}