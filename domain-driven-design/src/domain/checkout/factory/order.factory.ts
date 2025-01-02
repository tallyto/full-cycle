import Order from "@checkout/entity/order";
import OrderItem from "@checkout/entity/order_item";

interface OrderFactoryProps {
    id: string;
    customerId: string;
    items: {
        id: string;
        name: string;
        productId: string;
        price: number;
        quantity: number;
    }[]
}

export default class OrderFactory {
    public static create(props: OrderFactoryProps): Order {
        const items = props.items.map(item => (
            new OrderItem(item.id, item.name, item.price, item.productId, item.quantity)
        ));

        return new Order(props.id, props.customerId, items);

    }
}