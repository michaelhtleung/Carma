import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  font-size: 20px;
  font-weight: 500;
  line-height: 20px;
  font-family: 'Heebo', sans-serif;
  color: white;
  width: 173px;
  height: 49px;
  background: #4D5DDD;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.39);
  border-radius: 12px;
  border-width: 0px;
  letter-spacing: 0.05em;
  cursor: pointer;
`;

const Button = (props) => {
  const { disabled, children, onClick } = props;

  const handleOnClick = (event) => {
    if (onClick) onClick(event);
  }

  return (
    <StyledButton
      disabled={disabled}
      onClick={handleOnClick}
      type="button"
    >
    {children}
    </StyledButton>
  );
}

export default Button;