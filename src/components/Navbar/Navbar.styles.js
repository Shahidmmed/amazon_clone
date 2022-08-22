import tw, { styled } from "twin.macro";

export const NavbarContainer = styled.div`
  ${tw`
  flex
  pt-4
  pb-2
  px-8
  sticky
  top-0
  w-full
  transition-all
  bg-black
  items-center
`}

  color: white;
  z-index: 100;

  img {
    ${tw`
    h-8
  `}
    width: 100px;
  }

  .basket {
    flex-direction: row !important;
  }

  a {
    color: white !important;
    text-decoration: none;
  }
`;

export const NavSearch = styled.form`
  ${tw`
  flex
  flex-1
  `}

  input {
    width: 100%;
    display: inline-block;
  }
  .search-icon {
    background-color: #cd9042;
    color: black;
    height: 22px;
    padding: 5px;
  }
  margin-left: 20px;
  margin-right: 20px;
`;

export const SubNav = styled.div`
  ${tw`
  flex
  justify-evenly
  `}

  padding-right: 4rem;
`;

export const NavOption = styled.div`
  ${tw`
  flex
  flex-col
  mx-2
  `}
  align-items: center;
  .lineOne {
    font-size: 10px;
  }
  .lineTwo {
    font-size: 13px;
    font-weight: 800;
  }

  .basket-count {
    margin-left: 10px;
  }
`;
