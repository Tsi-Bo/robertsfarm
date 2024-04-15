import styled from "styled-components";

const StyledButton = styled.button`
  background-color: transparent;
  color: var(--ivory);
  border: 2px solid var(--ivory);
  padding: var(--pad-l) var(--pad-xl);
  cursor: pointer;
  border-radius: 5px;
  font-size: var(--fs-m);
  outline: none;
  transition: all 0.2s;

  &:hover {
    background-color: var(--ivory);
    color: var(--night);
  }
  margin-top: var(--gap-l);
`;

Button.defaultProps = {
  variant: "contained",
  disabled: false,
};

// eslint-disable-next-line react/prop-types
function Button({ onClick, children, color, variant, disabled }) {
  return (
    <StyledButton onClick={onClick} variant={variant} disabled={disabled}>
      {children}
    </StyledButton>
  );
}

export default Button;
