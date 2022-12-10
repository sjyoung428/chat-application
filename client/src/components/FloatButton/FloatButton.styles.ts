import styled from "styled-components";

export const FloatButton = styled.button`
  position: fixed;
  bottom: 4rem;
  right: 4rem;
  :hover {
    svg {
      g {
        stroke: #17c964;
      }
    }
  }
  svg {
    g {
      stroke: #282c34;
      transition: stroke 0.3s;
    }
  }
`;
