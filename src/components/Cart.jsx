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

const StyledButton = styled.button`
  background-color: var(--yellow);
  color: var(--night);
  border: 2px solid var(--yellow);
  padding: var(--pad-l) var(--pad-xl);
  cursor: pointer;
  border-radius: 5px;
  font-size: var(--fs-m);
  outline: none;
  transition: all 0.2s;

  &:hover {
    border: 2px solid var(--night);
  }
  margin-top: var(--gap-l);
`;

function Cart({ toggleCart }) {
  return (
    <div>
      <CartOverlay onClick={toggleCart} />
      <StyledCart>
        <h2>Cart</h2>
        <p>
          Our cart is currently undergoing maintenance to improve your shopping
          experience. We apologize for any inconvenience this may cause. In the
          meantime, feel free to continue browsing our site or reach out to us
          directly if you have any questions or need assistance. Thank you for
          your patience and understanding.
        </p>
        <StyledButton onClick={toggleCart}>Close</StyledButton>
      </StyledCart>
    </div>
  );
}

export default Cart;
