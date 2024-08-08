import { Address } from "./address";

export class Custumer {
    _id: string;
    _name: string;
    _address!: Address;
    _active = false;

    constructor(id: string, name: string) {
        this._id = id;
        this._name = name;
        this.validate()
    }

    setAddress(address: Address) {
        this._address = address
    }

    validate() {
        if (this._name.length === 0) {
            throw new Error("Name is required")
        }
        if (this._id.length) {
            throw new Error("Id is required")
        }
    }

    activate() {
        if(this._address === undefined) {
            throw new Error("Address is mandatory to activate a customer");
            
        }
        this._active = true;
    }

    changeName(name: string){
        this._name = name
    }

    deactivate() {
        this._active = false;
    }
}