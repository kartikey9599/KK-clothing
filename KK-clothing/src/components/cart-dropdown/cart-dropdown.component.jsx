import { useContext } from "react";
import { CartContext } from "../../CONTEXTS/Cart.context";
import "./cart-dropdown.styles.scss";
import Button from "../button/Button.component";
import CartItem from "../cart-items/cart-item.component";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
