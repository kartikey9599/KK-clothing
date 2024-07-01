import { useContext } from "react";
import "./cart-icon.styles.scss";
import ShoppingIcon from "../../assets/shopping-bag.svg";
import { CartContext } from "../../CONTEXTS/Cart.context";
const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <img src={ShoppingIcon} alt="cart" className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
