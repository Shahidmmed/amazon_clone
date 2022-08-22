import React from "react";
import { useStateValue } from "../../StateProvider";
import Subtotal from "../Subtotal/Subtotal";
import { BasketItems, CheckoutContainer } from "./Checkout.styles";
import CheckoutItem from "./CheckoutItem";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  console.log("check", basket);

  return (
    <CheckoutContainer>
      <BasketItems>
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668.jpg"
          alt="ad"
          className="amazon-ad"
        />

        <div>
          <h3>Hello, {user?.email}</h3>
          <h2>Your Shopping Basket</h2>
          {basket.map((item, index) => (
            <CheckoutItem
              key={index}
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </BasketItems>
      <Subtotal />
    </CheckoutContainer>
  );
}

export default Checkout;
