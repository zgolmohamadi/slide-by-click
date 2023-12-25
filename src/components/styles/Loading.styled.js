import styled from "styled-components";

export const LoadingBox = styled.div`
  height: 70px;
  width: 70px;
  border-radius: 50%;
  border: 2px solid;
  border-color: orange transparent;
  animation: spin 1s infinite ease-out;
  margin-top:1rem;

  
@keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
