export default class OrderItem {
    private id: string;
    private name: string;
    private _price: number;

    constructor(id: string, name: string, price: number) {
        this.id = id;
        this.name = name;
        this._price = price;
    }

    get price(): number {
        return this._price;
    }
}