import Address from "./address";

export default class Customer {
    private id: string;
    private name: string;
    private address!: Address;
    private active = false;

    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
        this.validate()
    }

    changeName(name: string){
        this.name = name
    }

    setAddress(address: Address) {
        this.address = address
    }

    validate() {
        if (this.name.length === 0) {
            throw new Error("Name is required")
        }
        if (this.id.length === 0) {
            throw new Error("Id is required")
        }
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