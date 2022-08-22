import tw, { styled } from "twin.macro";

export const CheckoutItemContainer = styled.div`
  ${tw`
  flex
`}

  margin-top:20px;
  margin-bottom: 20px;

  .product-info {
    padding-left: 20px;
    display: flex;
    flex-direction: column;
  }
`;

export const ProductImage = styled.img`
  ${tw`
  `}

  height: 180px;
  width: 180px;
  object-fit: contain;
`;

export const ProductTitle = styled.div`
  ${tw`
  
`}

  font-size: 17px;
  font-weight: 800;
`;

export const ProductPrice = styled.div`
  ${tw`
  
`}
  text-align: inherit;
`;

export const ProductBtn = styled.button`
  ${tw`
  
  `}

  background: #f0c14b;
  color: #111;
  border: 1px solid;
  margin-top 10px;
  border-color: #a88734 #9c7e31 #846a29;
  width: 50%
`;
