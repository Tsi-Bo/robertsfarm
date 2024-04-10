import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${(props) =>
    props.variant === "contained" ? `var(--yellow)` : "white"};
  border: ${(props) =>
    props.variant === "outlined" ? `1px solid ${props.color}` : "none"};
  color: ${(props) => (props.variant === "outlined" ? props.color : "white")};
  padding: var(--pad-l) var(--pad-xl);
  cursor: pointer;
  border-radius: 5px;
  font-size: var(--fs-m);
  outline: none;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};

  &:hover {
    opacity: ${(props) => (props.disabled ? 0.5 : 0.8)};
  }
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
