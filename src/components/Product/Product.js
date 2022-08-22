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
import toast from "react-hot-toast";

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
    toast.custom((t) => (
      <div
        className={`${
          t.visible ? "animate-enter" : "animate-leave"
        } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
      >
        <div className="flex-1 w-0 p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 pt-0.5">
              <img className="h-10 w-10 rounded-full" src={image} alt="" />
            </div>
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-gray-900">{title}</p>
              <p className="mt-1 text-sm text-gray-500">Added to cart!</p>
            </div>
          </div>
        </div>
        <div className="flex border-l border-gray-200">
          <button
            onClick={() => toast.dismiss(t.id)}
            className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Close
          </button>
        </div>
      </div>
    ));
  };

  return (
    <ProductContainer className="product">
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
