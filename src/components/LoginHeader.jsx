import { useState } from "react";
import styled from "styled-components";
import Login from "./Login";
import Cart from "./Cart";

const StyledLoginHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: var(--gap-m);
  font-size: var(--fs-s);
`;

function LoginHeader() {
  const [showLogin, setShowLogin] = useState(false);
  const [showCart, setShowCart] = useState(false);

  function toggleLogin() {
    setShowLogin(!showLogin);
  }

  function toggleCart() {
    setShowCart(!showCart);
  }

  return (
    <StyledLoginHeader>
      <button onClick={toggleLogin}>Login</button>
      {showLogin ? <Login toggleLogin={toggleLogin} /> : ""}

      <button onClick={toggleCart}>Cart</button>
      {showCart ? <Cart toggleCart={toggleCart} /> : ""}
    </StyledLoginHeader>
  );
}

export default LoginHeader;
