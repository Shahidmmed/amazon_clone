import React from "react";
import { Search, ShoppingCart } from "react-feather";
import { NavLink } from "react-router-dom";
import { NavbarContainer, NavSearch, SubNav, NavOption } from "./Navbar.styles";

function Navbar() {
  return (
    <NavbarContainer className="">
      <img
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="amazon logo"
      />
      <NavSearch>
        <input />
        <Search className="search-icon" />
      </NavSearch>
      <SubNav>
        <NavOption>
          <span className="lineOne">Hello, User</span>
          <span className="lineTwo">Sign In</span>
        </NavOption>
        <NavOption>
          <span className="lineOne">Returns</span>
          <span className="lineTwo">& Orders</span>
        </NavOption>
        <NavOption>
          <span className="lineOne">Your</span>
          <span className="lineTwo">Prime</span>
        </NavOption>
        <NavOption className="basket">
          <NavLink to="/checkout">
            <ShoppingCart />
            <span className="basket-count lineTwo">0</span>
          </NavLink>
        </NavOption>
      </SubNav>
    </NavbarContainer>
  );
}

export default Navbar;
