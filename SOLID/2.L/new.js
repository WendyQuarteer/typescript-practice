"use strict";
///-----VARIABLE-DISCOUNT-----///
class VariableDiscount extends Discount {
    apply(price) {
        if (this._type === "variable") {
            return (price - (price * this._value / 100));
        }
    }
}
///-----FIXED-DISCOUNT-----//
class FixedDiscount extends Discount {
    apply(price) {
        return Math.max(0, price - this._value);
    }
}
///-----NO-DISCOUNT-----///
class NoDiscount extends Discount {
    apply(price) {
        return price;
    }
}
///-----DISCOUNT-----///
class Discount {
    //CONSTRUCTOR:
    constructor(value = 0) {
        this._value = value;
    }
    //METHODS:
    apply(price) {
        //@todo: instead of using magic values as string in this, it would be a lot better to
        // change them into constant. This would protect us from misspellings. Can you improve this?
    }
    showCalculation(price) {
        if (this._type === "none") {
            return "No discount";
        }
        else if (this._type === "variable") {
            return price + " € -  " + this._value + "%";
        }
        else if (this._type === "fixed") {
            return price + "€ -  " + this._value + "€ (min 0 €)";
        }
        else {
            throw new Error('Invalid type of discount');
        }
    }
}
///-----PRODUCT-----///
class Product {
    //CONSTRUCTOR:
    constructor(name, price, discount) {
        this._name = name;
        this._price = price;
        this._discount = discount;
    }
    //GETTERS:
    get name() {
        return this._name;
    }
    get discount() {
        return this._discount;
    }
    get originalPrice() {
        return this._price;
    }
    //METHODS:
    //The reason we call this function "calculateX" instead of using a getter on Price is because names
    // communicate a lot of meaning between programmers.
    //most programmers would assume a getPrice() would be a simple display of a property that is already
    // calculated, but in fact this function does a (more expensive) operation to calculate on the fly.
    calculatePrice() {
        return this._discount.apply(this._price);
    }
    showCalculation() {
        return this._discount.showCalculation(this._price);
    }
}
///-----SHOPPINGBASKET-----///
class shoppingBasket {
    constructor() {
        //PROPERTIES:
        //this array only accepts Product objects, nothing else
        this._products = [];
    }
    //GETTERS:
    get products() {
        return this._products;
    }
    //METHODS:
    addProduct(product) {
        this._products.push(product);
    }
}
///-----FUNCTIONS-----///
let cart = new shoppingBasket();
cart.addProduct(new Product('Chair', 25, new Discount("fixed", 10)));
//cart.addProduct(new Product('Chair', 25, new Discount("fixed", -10)));
cart.addProduct(new Product('Table', 50, new Discount("variable", 25)));
cart.addProduct(new Product('Bed', 100, new Discount("none")));
const tableElement = document.querySelector('#cart tbody');
cart.products.forEach((product) => {
    let tr = document.createElement('tr');
    let td = document.createElement('td');
    td.innerText = product.name;
    tr.appendChild(td);
    td = document.createElement('td');
    td.innerText = product.originalPrice.toFixed(2) + " €";
    tr.appendChild(td);
    td = document.createElement('td');
    td.innerText = product.calculatePrice().toFixed(2) + " €";
    tr.appendChild(td);
    td = document.createElement('td');
    td.innerText = product.showCalculation();
    tr.appendChild(td);
    tableElement.appendChild(tr);
});
