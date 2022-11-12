import styled, { css } from "styled-components";

/**
 *  버튼 스타일
 */
export const Button = styled.button<{ isHeader: boolean }>`
  ${({ isHeader }) =>
    isHeader
      ? css`
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          right: 1rem;
          border: none;
          background: none;
          flex-basis: auto;
          color: white;
          cursor: pointer;
        `
      : css`
          background-color: #4caf50;
          border: none;
          border-radius: 4px;
          color: white;
          padding: 15px 32px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: 16px;
          margin: 4px 2px;
        `}
  cursor: pointer;
`;
