import React from "react";
import Subtotal from "../Subtotal/Subtotal";
import {
  BasketItem,
  BasketItems,
  BasketSubtotal,
  CheckoutContainer,
} from "./Checkout.styles";

function Checkout() {
  return (
    <CheckoutContainer>
      <BasketItems>
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668.jpg"
          alt="ad"
        />
        <div>
          <h2>Your Shopping Basket</h2>
          <BasketItem></BasketItem>
        </div>
      </BasketItems>
      <Subtotal />
    </CheckoutContainer>
  );
}

export default Checkout;
