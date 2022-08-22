import React from "react";
import StarRatings from "react-star-ratings";
import { useStateValue } from "../../StateProvider";
import {
  CheckoutItemContainer,
  ProductBtn,
  ProductImage,
  ProductPrice,
  ProductTitle,
} from "./CheckoutItem.styles";

function CheckoutItem({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      item: {
        id: id,
      },
    });
  };

  return (
    <CheckoutItemContainer>
      <ProductImage src={image} />
      <div className="product-info">
        <ProductTitle>{title}</ProductTitle>
        <ProductPrice>
          <small>$</small>
          {price}
        </ProductPrice>
        <StarRatings
          starRatedColor="gold"
          numberOfStars={5}
          rating={rating}
          name="rating"
          starDimension="20px"
          starSpacing="0px"
        />
        <ProductBtn onClick={removeFromBasket}>Remove from Basket</ProductBtn>
      </div>
    </CheckoutItemContainer>
  );
}

export default CheckoutItem;
