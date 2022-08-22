import React from "react";
import {
  ProductBtn,
  ProductContainer,
  ProductImage,
  ProductPrice,
  ProductTitle,
} from "./Product.styles";
import StarRatings from "react-star-ratings";
import { useStateValue } from "../../StateProvider";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  console.log("basket", basket);

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <ProductContainer>
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
      </div>
      <ProductImage src={image} />
      <ProductBtn onClick={addToBasket}>Add to Basket</ProductBtn>
    </ProductContainer>
  );
}

export default Product;
