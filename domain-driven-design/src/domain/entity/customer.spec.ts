/* eslint-disable @typescript-eslint/no-unused-vars */
import Address from "./address"
import Customer from "./customer"

describe("Customer unit tests", ()=> {
    it("should throw error when id is empty", ()=> {
        expect(()=> {
            const customer = new Customer("", "John")
        }).toThrow("Id is required")
    })

    it("should throw error when name is empty", ()=> {
        expect(()=> {
            const customer = new Customer("123", "")
        }).toThrow("Name is required")
    })

    it("should change name", ()=> {
        // Arrange 
        const customer = new Customer("123", "John")

        // Act
        customer.changeName("Jane")

        // Assert
        expect(customer.name).toBe("Jane")
    })

    it("should activate customer", ()=> {
        const customer = new Customer("1", "John")
        const address = new Address("Rua dos bobos", 0, "12345678", "São Paulo")

        customer.setAddress(address)
        customer.activate()

        expect(customer.isActive()).toBe(true)
    })

    it("should deactivate customer", ()=> {
        const customer = new Customer("1", "John")
        
        customer.deactivate()

        expect(customer.isActive()).toBe(false)
    })

    it("should throw error when address is undefined when you activate a customer", ()=> {
        const customer = new Customer("1", "John")

        expect(()=> customer.activate()).toThrow("Address is mandatory to activate a customer")
    })

    it("should add reward points", ()=> {
        const customer = new Customer("1", "John")
        
        expect(customer.rewardPoints).toBe(0)

        customer.addRewardPoints(10)
        expect(customer.rewardPoints).toBe(10)

        customer.addRewardPoints(10)
        expect(customer.rewardPoints).toBe(20)
    })
})