import tw, { styled } from "twin.macro";

export const HeroContainer = styled.div`
  ${tw`
  w-full
  
`}

  .hero-img {
    margin-bottom: -150px;
    margin-top: 0;
    z-index: -1;
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
    width: 100%;
  }
`;

export const HeroNav = styled.div`
  ${tw`

`}
`;
