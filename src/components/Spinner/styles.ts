import styled from "styled-components";

const SpinnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;

const StyledSpinner = styled.div`
  display: block;
  width: 70px;
  height: 70px;
  border: 7px solid #ff23693b;
  border-radius: 50%;
  border-top-color: #ff2369;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;

export { SpinnerWrapper, StyledSpinner };
