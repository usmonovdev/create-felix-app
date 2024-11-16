import styled from "styled-components";

export const InputWrap = styled.div`
  && {
    display: flex;
    flex-direction: column;
    gap: 0.375rem;
  }
`;

export const InputBox = styled.div<{error?: boolean}>`
  && {
    padding: 10px 14px;
    box-shadow: var(--shadow--xs);
    border: 1px solid var(--gray--300);
    border-color: ${(props) => (props.error ? "var(--error--500)" : "var(--gray--300)")};
    border-radius: var(--input--border--radius);

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
  }
`;

export const InputItem = styled.input`
  && {
    height: 100%;
    width: 100%;
    color: var(--gray--900);

    font-size: var(--text-md);
    font-family: var(--font-inter);

    &::placeholder {
      color: var(--gray--500);
    }

    &:disabled {
      background-color: var(--gray--50);
    }
    
  }
`;
