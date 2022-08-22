import tw, { styled } from "twin.macro";

export const CheckoutContainer = styled.div`
  ${tw`
  flex
  bg-white
`}

  padding: 20px;
  height: max-content;

  img {
    width: 100%;
    margin-bottom: 10px;
  }

  h2 {
    margin-top: 0px;
    padding: 10px;
    border-bottom: 1px solid lightgray;
    margin-right: 10px;
  }
`;

export const BasketItems = styled.div`
  ${tw`
  
`}

  hr {
    background: black;
    height: 1px;
  }
`;

export const BasketItem = styled.div`
  ${tw`
  
`}
`;

export const BasketSubtotal = styled.div`
  ${tw`
  
`}
`;
