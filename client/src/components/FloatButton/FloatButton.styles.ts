import styled from "styled-components";

export const FloatButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #f1f3f5;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #e9ecef;
  }
`;
