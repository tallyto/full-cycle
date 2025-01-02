import Address from "../value-object/address"
import CustomerFactory from "./customer.factory"

describe("Customer factory unit test", () => {
    it("should create a customer", () => {
        const customer = CustomerFactory.create("João")
        expect(customer.id).toBeDefined()
        expect(customer.name).toBe("João")
        expect(customer.address).toBeUndefined()
    })

    it("should create a customer with address", () => {
        const address = new Address("Rua dos Bobos", 0, "12345-678", "São Paulo")
        const customer = CustomerFactory.createWithAddress("João", address)
        expect(customer.id).toBeDefined()
        expect(customer.name).toBe("João")
        expect(customer.address).toBe(address)
    })
})