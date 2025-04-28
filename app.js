"use strict";
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    // return `${this.name} - ${this.price}`
    getPrice() {
        return this.price;
    }
}
class PhysicalProduct extends Product {
    constructor(id, name, price, weight) {
        super(id, name, price);
        this.weight = weight;
    }
    getShippingWeight() {
        return this.weight;
    }
    getInfo() {
        return `${this.weight}`;
    }
}
class DigitalProduct extends Product {
    constructor(id, name, price, fileSize) {
        super(id, name, price);
        this.fileSize = fileSize;
    }
    getInfo() {
        return `${this.fileSize}`;
    }
    getDownloadSize() {
        return this.fileSize;
    }
}
class User {
    constructor(name, email) {
        this.cart = [];
        this.id = User.generateId(),
            this.name = name,
            this.email = email;
    }
    addToCart(product) {
        this.cart.push(product);
    }
    showCart() {
        this.cart.forEach((prod) => console.log(prod.getInfo()));
    }
    clearCart() {
        this.cart = [];
    }
    static generateId() {
        return User.userCount++;
    }
}
User.userCount = 0;
class OrderItem {
    constructor(name, price, quantity, createdAt) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.createdAt = createdAt;
    }
    getTotalPrice() {
        return this.price * this.quantity;
    }
}
class FoodItem extends OrderItem {
    constructor(name, price, quantity, createdAt, isVegan) {
        super(name, price, quantity, createdAt);
        this.isVegan = isVegan;
    }
    getInfo() {
        return `${this.name} - Vegan: ${this.isVegan} - Ordered at: ${this.createdAt}`;
    }
}
class DrinkItem extends OrderItem {
    constructor(name, price, quantity, createdAt, isAlcoholic) {
        super(name, price, quantity, createdAt);
        this.isAlcoholic = isAlcoholic;
    }
    getInfo() {
        return `${this.name} - Alcoholic: ${this.isAlcoholic} - Ordered at: ${this.createdAt}`;
    }
}
class CustomedOrder {
    constructor(items = []) {
        this.items = [];
        this.items = items;
    }
    addItem(arg1, arg2, arg3, arg4) {
        if (arg1 instanceof OrderItem) {
            this.items.push(arg1);
        }
        else if (typeof arg1 === 'string' && typeof arg2 === 'number' && typeof arg3 === 'number' && typeof arg4 === 'string') {
            let now = new Date();
            if (arg4 === 'food') {
                this.items.push(new FoodItem(arg1, arg2, arg3, now, true)); // допустим, всегда vegan = true для примера
            }
            else if (arg4 === 'drink') {
                this.items.push(new DrinkItem(arg1, arg2, arg3, now, false)); // допустим, всегда isAlcoholic = false
            }
        }
        else {
            console.log('Invalid arguments provided to addItem');
        }
    }
    getOrderSummary() {
        console.log("Order summary: ");
        this.items.forEach((item, index) => {
            console.log(`${index + 1}. ${item.getInfo()} - Total Price: $${item.getTotalPrice()}`);
        });
    }
}
