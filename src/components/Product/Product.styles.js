import tw, { styled } from "twin.macro";

export const ProductContainer = styled.div`
  ${tw`
  flex
  flex-col
  items-center
  justify-end
  w-full
  z-10
  bg-white
`}

  min-width: 100px;
  max-height: 400px;
  margin: 10px;
  padding: 20px;
  text-align: inherit;

  .product-info {
    height: 100px;
    margin-bottom: 15px;
  }
`;

export const ProductTitle = styled.div`
  ${tw`
  
`}
`;

export const ProductPrice = styled.div`
  ${tw`
  
`}
  text-align: inherit;
`;

export const ProductImage = styled.img`
  ${tw`
  w-full
  `}

  max-height: 200px;
  object-fit: contain;
  margin-bottom: 15px;
`;

export const ProductBtn = styled.button`
  ${tw`
  
  `}

  background: #f0c14b;
  color: #111;
  border: 1px solid;
  margin-top 10px;
  border-color: #a88734 #9c7e31 #846a29;
`;
