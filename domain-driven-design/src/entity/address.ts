export default class Address {
    private street: string;
    private number = 0;
    private zip: string;
    private city: string;

    constructor(street: string, number: number, zip: string, city: string) {
        this.street = street;
        this.number = number;
        this.zip = zip;
        this.city = city;
        this.validate();
    }

    private validate(): void {
        if (this.street.length == 0) {
            throw new Error("Street is required");
        }
        if (this.number == undefined) {
            throw new Error("Number is required");
        }
        if (this.zip.length == 0) {
            throw new Error("Zip is required");
        }
        if (this.city.length == 0) {
            throw new Error("City is required");
        }
    }

     toString(): string {
        return `${this.street} ${this.number}, ${this.zip} ${this.city}`;
    }
}