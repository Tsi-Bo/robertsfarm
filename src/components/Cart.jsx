/* eslint-disable react/prop-types */
import styled from "styled-components";

const StyledCart = styled.div`
  position: fixed;
  width: 45%;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  z-index: 20;

  display: flex;
  flex-direction: column;

  padding: var(--gap-m);
`;

const CartOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #00000041;
  z-index: 10;
`;

function Cart({ toggleCart }) {
  return (
    <div>
      <CartOverlay />
      <StyledCart>
        <h2>Cart</h2>
        <p>This is the cart yo</p>
        <button onClick={toggleCart}>Close</button>
      </StyledCart>
    </div>
  );
}

export default Cart;
