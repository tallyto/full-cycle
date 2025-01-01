import Address from "../value-object/address";
import Customer from "../entity/customer";
import CustomerRepositoryInterface from "./customer-repository.interface";
import CustomerModel from "../../../infra/db/sequelize/model/customer.model";

export default class CustomerRepository implements CustomerRepositoryInterface {
    async create(entity: Customer): Promise<void> {
        await CustomerModel.create({
            id: entity.id,
            name: entity.name,
            street: entity.address.street,
            number: entity.address.number,
            zipcode: entity.address.zip,
            city: entity.address.city,
            active: entity.isActive(),
            rewardPoints: entity.rewardPoints
        })
    }

    async update(entity: Customer): Promise<void> {
        await CustomerModel.update({
            name: entity.name,
            street: entity.address.street,
            number: entity.address.number,
            zipcode: entity.address.zip,
            city: entity.address.city,
            active: entity.isActive(),
            rewardPoints: entity.rewardPoints
        }, {
            where: {
                id: entity.id
            }
        })
    }

    async find(id: string): Promise<Customer> {
        let customerModel: CustomerModel;

        try {
            customerModel = await CustomerModel.findOne({
                where: {
                    id
                },
                rejectOnEmpty: true
            })
        } catch (error) {
            console.log(error)
            throw new Error("Customer not found");
        }

        const customer = new Customer(id, customerModel.name);
        const address = new Address(
            customerModel.street,
            customerModel.number,
            customerModel.zipcode,
            customerModel.city
        )
        customer.changeAddress(address);

        return customer;
    }

    async findAll(): Promise<Customer[]> {
        const customerModels = await CustomerModel.findAll();

        const customers = customerModels.map(customerModel => {
            const customer = new Customer(customerModel.id, customerModel.name);
            customer.addRewardPoints(customerModel.rewardPoints);
            const address = new Address(
                customerModel.street,
                customerModel.number,
                customerModel.zipcode,
                customerModel.city
            )
            customer.changeAddress(address);

            if (customerModel.active) {
                customer.activate();
            }

            return customer;
        })

        return customers;
    }
}

