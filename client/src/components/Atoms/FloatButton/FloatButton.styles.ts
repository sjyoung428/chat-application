import styled from "styled-components";

export const FloatButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #f5f5f5;
  border: 1px solid #e0e0e0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  svg {
    transform: rotate(45deg);
    color: #757575;
  }

  &:hover {
    background-color: #e0e0e0;
    svg {
      color: #424242;
    }
  }
`;
