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

const StyledButton = styled.button`
  color: var(--night);
  background-color: transparent;
  border: none;
  border-bottom: 2px solid var(--night);
  font-size: var(--fs-s);
  padding: 0 var(--pad-s);
  transition: all 0.2s;

  &:hover {
    padding: 0 var(--pad-xl);
  }
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
      <StyledButton onClick={toggleLogin}>Login</StyledButton>
      {showLogin ? <Login toggleLogin={toggleLogin} /> : ""}

      <StyledButton onClick={toggleCart}>Cart</StyledButton>
      {showCart ? <Cart toggleCart={toggleCart} /> : ""}
    </StyledLoginHeader>
  );
}

export default LoginHeader;
