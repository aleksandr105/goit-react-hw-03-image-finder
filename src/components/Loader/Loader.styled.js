import styled from '@emotion/styled/';

export const SpinerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SpinerText = styled.p`
  font-size: 25px;
  font-weight: 600;
  margin: 0;
  color: black;
  /* background-color: #f8ff00; */
  background: rgb(13, 89, 185);
  background: linear-gradient(
    180deg,
    rgba(13, 89, 185, 1) 28%,
    rgba(249, 250, 15, 1) 62%
  );
`;
