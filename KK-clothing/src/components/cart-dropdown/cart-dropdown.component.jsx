import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../CONTEXTS/Cart.context";
import "./cart-dropdown.styles.scss";
import Button from "../button/Button.component";
import CartItem from "../cart-items/cart-item.component";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <span className="empty-cart-text">YOUR CART IS EMPTY</span>
        )}
      </div>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
