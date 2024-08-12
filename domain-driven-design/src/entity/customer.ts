import Address from "./address";

export default class Customer {
    private id: string;
    private _name: string;
    private address!: Address;
    private active = false;

    constructor(id: string, name: string) {
        this.id = id;
        this._name = name;
        this.validate()
    }

    get name(): string {
        return this._name
    }

    changeName(name: string){
        this._name = name
    }

    setAddress(address: Address) {
        this.address = address
    }

    validate() {
        if (this._name.length === 0) {
            throw new Error("Name is required")
        }
        if (this.id.length === 0) {
            throw new Error("Id is required")
        }
    }

    isActive(): boolean {
        return this.active
    }

    activate() {
        if(this.address === undefined) {
            throw new Error("Address is mandatory to activate a customer");
            
        }
        this.active = true;
    }

    deactivate() {
        this.active = false;
    }
}