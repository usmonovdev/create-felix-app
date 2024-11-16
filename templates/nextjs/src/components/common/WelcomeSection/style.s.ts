import styled from "styled-components";

export const Wrapper = styled.div`
  && {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

export const Container = styled.div`
  && {
    display: flex;
    flex-direction: column;
    max-width: 600px;
    margin: 0 auto;
    padding: 0 16px;
    gap: 16px;
  }
`;

export const Logo = styled.div`
  && {
    transform: scale(0.5);
  }
`;

export const Code = styled.p`
  && {
    width: fit-content;
    display: inline;
    padding: 2px;
    background-color: var(--gray--100);
  }
`;
