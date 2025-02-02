import Address from "./domain/customer/value-object/address";
import Customer from "./domain/customer/entity/customer";
import OrderItem from "@checkout/entity/order_item";
import Order from "@checkout/entity/order";

const customer = new Customer("123", "Tállyto Rodrigues")

const address = new Address("Rua dos bobos", 0, "12345678", "São Paulo")

customer.changeAddress(address)
customer.activate()

const item1 = new OrderItem("1", "Item 1", 10, "product1", 1)
const item2 = new OrderItem("2", "Item 2", 20, "product2", 2)

const order = new Order("1", "123", [item1, item2])

console.log(customer)
console.log(order)