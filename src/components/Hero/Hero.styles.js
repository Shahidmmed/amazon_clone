import tw, { styled } from "twin.macro";

export const HeroContainer = styled.div`
  ${tw`
  w-full
  
`}

  img {
    margin-bottom: -150px;
    z-index: -1;
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  }
`;
