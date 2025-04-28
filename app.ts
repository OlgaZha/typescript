/////
interface Shippable {
    getShippingWeight(): number
}

interface Downloadable {
    getDownloadSize(): number
}

interface IUser {
    id: number;
    name: string;
    email?: string;
}

interface IOrder {
    orderId: number;
    user: IUser;
    products: Product[];
    getTotal(): number;
}

abstract class Product {
    readonly id: number
    protected name: string
    protected price: number

    constructor(id: number, name: string, price: number) {
        this.id = id;
        this.name = name;
        this.price = price
    }

    public abstract getInfo(): string 
        // return `${this.name} - ${this.price}`
    

    getPrice(): number {
        return this.price
    }
}

class PhysicalProduct extends Product implements Shippable{
    private weight: number
    constructor(id: number, name: string, price: number, weight: number,) {
        super(id, name, price)
        this.weight = weight
    }
    getShippingWeight(): number {
        return this.weight
    }

    override getInfo(): string {
        return `${this.weight}`
    }
}

class DigitalProduct extends Product implements Downloadable {
    private fileSize: number
    constructor(id: number, name: string, price: number, fileSize: number,) {
        super(id, name, price)
        this.fileSize = fileSize
    }

    override getInfo(): string {
        return `${this.fileSize}`
    }

    getDownloadSize(): number {
        return this.fileSize
    }
}

class User implements IUser{
    id: number;
    name: string;
    email?: string;
    private cart: Product[] = []
    static userCount = 0
    constructor(name: string, email?: string) {
        this.id = User.generateId(),
        this.name = name,
        this.email = email
    }

    addToCart(product: Product): void {
        this.cart.push(product)
    }

    showCart(): void {
        this.cart.forEach((prod:Product) => console.log(prod.getInfo()))
    }

    clearCart(): void {
        this.cart = []
    }

    static generateId(): number {
        return User.userCount++
    }
}

// class OnlineOrder implements IOrder{
//     orderId: number;
//      user: IUser;
//     products: Product[];
//     constructor(orderId: number, user: string, products: Product[]){
//         this.orderId = orderId,
//         this.user = user,
//         this.products = products
//     }

//     getTotal(): number {
//         return this.products.reduce((calc, item: Product)=> calc + item.getPrice(), 0)
//     }

// }

//homework

interface IMenuItem {
    name: string;
    price: number;
    getInfo(): string
}

abstract class OrderItem implements IMenuItem {
    name: string;
    price: number;
    protected quantity: number;
    readonly createdAt: Date | undefined;
    constructor(name:string, price: number, quantity: number, createdAt: Date) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.createdAt = createdAt;
    }
    abstract getInfo(): string;

    getTotalPrice(): number {
        return this.price * this.quantity;
    }
}

class FoodItem extends OrderItem {
    isVegan: boolean;
    constructor(name:string, price: number, quantity: number, createdAt: Date, isVegan: boolean) {
        super(name, price, quantity, createdAt)
        this.isVegan = isVegan;
    }
    getInfo(): string {
        return `${this.name} - Vegan: ${this.isVegan} - Ordered at: ${this.createdAt}`
    }
}

class DrinkItem extends OrderItem {
    isAlcoholic: boolean;
    constructor(name:string, price: number, quantity: number, createdAt: Date, isAlcoholic: boolean) {
        super(name, price, quantity, createdAt)
        this.isAlcoholic = isAlcoholic;
    }
    getInfo(): string {
        return `${this.name} - Alcoholic: ${this.isAlcoholic} - Ordered at: ${this.createdAt}`
    }
}

class CustomedOrder {
    private items: OrderItem[] = [];
    constructor(items: OrderItem[] = []) {
        this.items = items;
    }
    addItem(item: OrderItem): void;
    addItem(name: string, price: number, quantity: number, type: 'food' | 'drink'): void;

    addItem(arg1: OrderItem | string, arg2?: number, arg3?: number, arg4?: 'food' | 'drink'): void {
        if (arg1 instanceof OrderItem) {
            this.items.push(arg1);
        } else if (typeof arg1 === 'string' && typeof arg2 === 'number' && typeof arg3 === 'number' && typeof arg4 === 'string') {
            let now = new Date();
            if (arg4 === 'food') {
                this.items.push(new FoodItem(arg1, arg2, arg3, now, true)); // допустим, всегда vegan = true для примера
            } else if (arg4 === 'drink') {
                this.items.push(new DrinkItem(arg1, arg2, arg3, now, false)); // допустим, всегда isAlcoholic = false
            }
        } else {
            console.log('Invalid arguments provided to addItem');
        }
    }

    getOrderSummary(): void {
        console.log("Order summary: ");
        this.items.forEach((item, index) => {
            console.log(`${index + 1}. ${item.getInfo()} - Total Price: $${item.getTotalPrice()}`);
        })
    }
}