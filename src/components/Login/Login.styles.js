import tw, { styled } from "twin.macro";

export const LoginContainer = styled.div`
  ${tw`
  flex
  flex-col
  `}

  width: 300px;
  height: fit-content;
  border-radius: 5px;
  border: 1px solid lightgray;
  padding: 20px;

  h1 {
    font-weight: 500;
    margin-bottom: 20px;
  }
  h5 {
    margin-bottom: 5px;
    margin-top: 5px;
  }
  input {
    height: 30px;
    margin-bottom: 10px;
    background-color: white;
    width: 98%;
  }
  p {
    margin-top: 15px;
    font-size: 12px;
  }
  .signInButton {
    background: #f0c14b;
    border-radius: 2px;
    width: 100%;
    height: 30px;
    border: 1px solid;
    margin-top: 10px;
    border-color: #a88734 #9c7e31 #846a29;
  }
  .registerButton {
    border-radius: 2px;
    width: 100%;
    height: 30px;
    border: 1px solid;
    margin-top: 10px;
    border-color: darkgray;
  }
`;
