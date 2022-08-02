type discountType = "variable" | "fixed" | "none";//This is called a Union, the discountType can only contain the following 2 values:
interface DiscountMethods {
    apply(price: number): number;
    showCalculation(price: number): string;
}
///-----DISCOUNT-----///
class Discount {
    protected _value: number;
    constructor(value: number = 0) {
        this._value = value;
    }
}
///-----VARIABLE-DISCOUNT-----///
class VariableDiscount extends Discount implements DiscountMethods {
    constructor(value: number) {
        super(value);
    }
//METHODS:
    //@todo: instead of using magic values as string in this, it would be a lot better to
    // change them into constant. This would protect us from misspellings. Can you improve this?
    apply(price: number): number {
        return (price - (price * this._value / 100));
    }
    showCalculation(price: number): string {
        return price + " € -  " + this._value + "%";
    }
}
///-----FIXED-DISCOUNT-----//
class FixedDiscount extends Discount implements DiscountMethods {
    constructor(value: number) {
        super(value);
    }
    //METHODS:
    apply(price: number): number {
        return Math.max(0, price - this._value);
    }
    showCalculation(price: number): string {
        return price + "€ -  " + this._value;
    }
}
///-----NO-DISCOUNT-----///
class NoDiscount extends Discount implements DiscountMethods {
    constructor(value: number) {
        super(value);
    }
    //METHODS:
    apply(price: number): number {
        return price;
    }
    showCalculation(): string {
        return "No discount";
    }
}
///-----PRODUCT-----///
class Product {
    private _name: string;
    private _price: number;
    private _discount: DiscountMethods;

    constructor(name: string, price: number, discount: DiscountMethods) {
        this._name = name;
        this._price = price;
        this._discount = discount;
    }
    //GETTERS:
    get name(): string {
        return this._name;
    }
    get discount(): DiscountMethods {
        return this._discount;
    }
    get originalPrice(): number {
        return this._price;
    }
    //METHODS:
    //The reason we call this function "calculateX" instead of using a getter on Price is because names
    // communicate a lot of meaning between programmers.
    //most programmers would assume a getPrice() would be a simple display of a property that is already
    // calculated, but in fact this function does a (more expensive) operation to calculate on the fly.
    calculatePrice(): number {
        return this._discount.apply(this._price);
    }
    showCalculation(): string {
        return this._discount.showCalculation(this._price);
    }
}

///-----SHOPPINGBASKET-----///
class shoppingBasket {
    private _products: Product[] = [];//this array only accepts Product objects, nothing else
    //GETTERS:
    get products(): Product[] {
        return this._products;
    }
    //METHODS:
    addProduct(product: Product) {
        this._products.push(product);
    }
}
///-----FUNCTIONS-----///
let cart = new shoppingBasket();
cart.addProduct(new Product('Chair', 25, new FixedDiscount(10)));
//cart.addProduct(new Product('Chair', 25, new Discount("fixed", -10)));
cart.addProduct(new Product('Table', 50, new VariableDiscount(25)));
cart.addProduct(new Product('Bed', 100, new NoDiscount(0)));

const tableElement = <HTMLTableElement>document.querySelector('#cart tbody');
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