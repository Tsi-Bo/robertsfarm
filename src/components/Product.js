import styled from "styled-components";
import vegetables from "../gallery/vegetables.jpg";

const StyledProduct = styled.div`
  margin: var(--gap-l) auto;
  text-align: center;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--gap-l);
`;

const StyledImage = styled.img`
  height: auto;
  width: 100%;
`;

function Product() {
  return (
    <>
      <StyledImage src={vegetables} />
      <StyledProduct>
        <h1>Products</h1>
        Apologies, but our products are currently undergoing maintenance. We are
        working diligently to ensure they are back up and running soon. In the
        meantime, feel free to explore the rest of our site and learn more about
        our farm and practices. Thank you for your patience and understanding.
      </StyledProduct>
    </>
  );
}

export default Product;
