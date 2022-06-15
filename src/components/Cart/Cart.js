import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.fetchedItems);
  console.log(cartItems)

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <CartItem
            key={item.itemId}
            item={{
              id: item.id,
              title: item.title,
              price: item.price,
              description: item.description
            }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
