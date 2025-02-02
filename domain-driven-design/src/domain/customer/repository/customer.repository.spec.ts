import { Sequelize } from "sequelize-typescript";
import Address from "../value-object/address";
import Customer from "../entity/customer";
import CustomerModel from "../../../infra/db/sequelize/model/customer.model";
import CustomerRepository from "./customer.repository";

describe("Customer repository test", () => {
    let sequelize: Sequelize;

    beforeEach(async () => {
        sequelize = new Sequelize({
            dialect: "sqlite",
            storage: ":memory:",
            logging: false,
            sync: { force: true }
        })

        sequelize.addModels([CustomerModel])

        await sequelize.sync()
    })

    afterEach(async () => {
        await sequelize.close()
    })

    it("should create a customer", async () => {
        const customerRepository = new CustomerRepository()
        const customer = new Customer("123", "Customer 1")
        const address = new Address("Street 1", 1, "Zipcode 1", "City 1")
        customer.changeAddress(address)

        await customerRepository.create(customer)

        const customerModel = await CustomerModel.findOne({ where: { id: "123" } })

        expect(customerModel.toJSON()).toStrictEqual({
            id: "123",
            name: "Customer 1",
            active: false,
            rewardPoints: 0,
            street: "Street 1",
            number: 1,
            zipcode: "Zipcode 1",
            city: "City 1"
        })
    })

    it("should update a customer", async () => {
        const customerRepository = new CustomerRepository()
        const customer = new Customer("123", "Customer 1")
        const address = new Address("Street 1", 1, "Zipcode 1", "City 1")
        customer.changeAddress(address)

        await customerRepository.create(customer)

        customer.changeName("Customer 2")
        await customerRepository.update(customer)

        const customerModel = await CustomerModel.findOne({ where: { id: "123" } })

        expect(customerModel.toJSON()).toStrictEqual({
            id: "123",
            name: "Customer 2",
            active: false,
            rewardPoints: 0,
            street: "Street 1",
            number: 1,
            zipcode: "Zipcode 1",
            city: "City 1"
        })
    })

    it("should find a customer", async () => {
        const customerRepository = new CustomerRepository()
        const customer = new Customer("123", "Customer 1")
        const address = new Address("Street 1", 1, "Zipcode 1", "City 1")
        customer.changeAddress(address)

        await customerRepository.create(customer)

        const customerFound = await customerRepository.find("123")

        expect(customerFound).toStrictEqual(customer)
    })

    it("should throw an error when customer is not found", async () => {
        const customerRepository = new CustomerRepository()

        expect(async () => {
            await customerRepository.find("456")
        }).rejects.toThrow("Customer not found")
    })

    it("should find all customers", async () => {
        const customerRepository = new CustomerRepository()
        const customer1 = new Customer("123", "Customer 1")
        const address1 = new Address("Street 1", 1, "Zipcode 1", "City 1")
        customer1.changeAddress(address1)
        customer1.addRewardPoints(10)
        customer1.activate()

        const customer2 = new Customer("456", "Customer 2")
        const address2 = new Address("Street 2", 2, "Zipcode 2", "City 2")
        customer2.changeAddress(address2)
        customer2.addRewardPoints(20)

        await customerRepository.create(customer1)
        await customerRepository.create(customer2)

        const customers = await customerRepository.findAll()

        expect(customers).toHaveLength(2)
        expect(customers).toContainEqual(customer1)
        expect(customers).toContainEqual(customer2)
    })
})