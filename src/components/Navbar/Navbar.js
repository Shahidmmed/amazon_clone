import React from "react";
import { Search, ShoppingCart } from "react-feather";
import { NavLink } from "react-router-dom";
import { auth } from "../../firebase";
import { useStateValue } from "../../StateProvider";
import { NavbarContainer, NavSearch, SubNav, NavOption } from "./Navbar.styles";

function Navbar() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <NavbarContainer className="">
      <NavLink to="/">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon logo"
        />
      </NavLink>
      <NavSearch>
        <input />
        <Search className="search-icon" />
      </NavSearch>
      <SubNav className="subNav">
        <NavLink to={!user && "/login"}>
          <NavOption onClick={handleAuthenticaton} className="navOption">
            <span className="lineOne">
              Hello, {!user ? "Guest" : user.email}
            </span>
            <span className="lineTwo">{user ? "Sign Out" : "Sign In"}</span>
          </NavOption>
        </NavLink>
        <NavOption className="navOption">
          <span className="lineOne">Returns</span>
          <span className="lineTwo">& Orders</span>
        </NavOption>
        <NavOption className="navOption">
          <span className="lineOne">Your</span>
          <span className="lineTwo">Prime</span>
        </NavOption>
        <NavOption className="basket">
          <NavLink to="/checkout">
            <ShoppingCart />
            <span className="basket-count lineTwo">{basket?.length}</span>
          </NavLink>
        </NavOption>
      </SubNav>
    </NavbarContainer>
  );
}

export default Navbar;
