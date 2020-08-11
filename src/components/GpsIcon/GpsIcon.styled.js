import styled from "styled-components";

// The position must be calculate based on size not precise px size. How to define its current size in syntax?
export const Icon = styled.button`
  position: absolute;
  top: calc(50% - (18px / 2));
  right: calc(50% - (36.156px / 2));
  z-index: 2;
`;
