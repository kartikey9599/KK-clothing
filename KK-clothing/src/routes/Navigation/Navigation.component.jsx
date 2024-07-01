import { Outlet, Link } from "react-router-dom";
import CrwnLogo from "../../assets/crown.svg";
import "./navigation.style.scss";
import CartIcon from "../../components/cart/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { UserContext } from "../../CONTEXTS/User.context";
import { useContext } from "react";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { CartContext } from "../../CONTEXTS/Cart.context";

function Navigation() {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  // console.log(currentUser);

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img src={CrwnLogo} className="logo" alt="Logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              {" "}
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </>
  );
}
export default Navigation;
