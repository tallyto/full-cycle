export default class Address {
    private _street: string;
    private _number = 0;
    private _zip: string;
    private _city: string;

    constructor(street: string, number: number, zip: string, city: string) {
        this._street = street;
        this._number = number;
        this._zip = zip;
        this._city = city;
        this.validate();
    }

    get streetName(): string {
        return this._street;
    }

    get number(): number {
        return this._number;
    }

    get zip(): string {
        return this._zip;
    }

    get city(): string {
        return this._city;
    }

    get street(): string {
        return this._street;
    }
 


    private validate(): void {
        if (this._street.length == 0) {
            throw new Error("Street is required");
        }
        if (this._number == undefined) {
            throw new Error("Number is required");
        }
        if (this._zip.length == 0) {
            throw new Error("Zip is required");
        }
        if (this._city.length == 0) {
            throw new Error("City is required");
        }
    }

     toString(): string {
        return `${this._street} ${this._number}, ${this._zip} ${this._city}`;
    }
}