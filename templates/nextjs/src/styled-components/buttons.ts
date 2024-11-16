import styled, { css } from "styled-components";

// Sizes
const sizeSm = css`
  && {
    padding-left: 0.875rem;
    padding-right: 0.875rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;

    font-size: var(--text-sm);
    font-weight: 500;
    box-shadow: var(--shadow--xs);

    svg {
      width: 1.25rem;
      height: 1.25rem;
    }
  }
`;

const sizeMd = css`
  && {
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 0.625rem;
    padding-bottom: 0.625rem;

    font-size: var(--text-sm);
    font-weight: 500;
    box-shadow: var(--shadow--xs);

    svg {
      width: 1.25rem;
      height: 1.25rem;
    }
  }
`;

const sizeLg = css`
  && {
    padding-left: 1.125rem;
    padding-right: 1.125rem;
    padding-top: 0.625rem;
    padding-bottom: 0.625rem;

    font-size: var(--text-md);
    font-weight: 500;
    box-shadow: var(--shadow--xs);

    svg {
      width: 1.25rem;
      height: 1.25rem;
    }
  }
`;

const sizeXl = css`
  && {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    padding-top: 12px;
    padding-bottom: 12px;

    font-size: var(--text-md);
    font-weight: 500;
    box-shadow: var(--shadow--xs);

    svg {
      width: 1.25rem;
      height: 1.25rem;
    }
  }
`;

const size2Xl = css`
  && {
    padding-left: 1.75rem;
    padding-right: 1.75rem;
    padding-top: 1rem;
    padding-bottom: 1rem;

    font-size: var(--text-lg);
    font-weight: 500;
    box-shadow: var(--shadow--xs);

    svg {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`;

// Styles
const stylePrimary = css`
  && {
    background-color: var(--primary--600);
    color: var(--white);

    &:hover {
      background-color: var(--primary--700);
    }

    &:disabled {
      background-color: var(--primary--200);
    }
  }
`;

const styleSecondary = css`
  && {
    background-color: var(--primary--50);
    color: var(--primary--700);

    &:hover {
      background-color: var(--primary--100);
    }

    &:disabled {
      background-color: var(--primary--25);
      color: var(--primary--300);
    }
  }
`;

const styleSecondaryGray = css`
  && {
    background-color: var(--white);
    border: 0.063rem solid var(--gray--300);
    color: var(--gray--700);

    &:hover {
      background-color: var(--gray--50);
    }

    &:disabled {
      border: 0.063rem solid var(--gray--200);
      color: var(--gray--300);
    }
  }
`;

const styleTeritiaryColor = css`
  && {
    background-color: transparent;
    color: var(--primary--700);

    &:hover {
      background-color: var(--primary--50);
    }

    &:disabled {
      color: var(--gray--300);
    }
  }
`;

const styleTeritiaryGray = css`
  && {
    background-color: transparent;
    color: var(--gray--700);

    &:hover {
      background-color: var(--gray--50);
    }

    &:disabled {
      color: var(--gray--300);
    }
  }
`;

const styleError = css`
  && {
    background-color: var(--error--600);
    color: var(--white);

    &:hover {
      background-color: var(--error--700);
    }

    &:disabled {
      background-color: var(--error--200);
    }
  }
`;

const styleErrorSecondary = css`
  && {
    background-color: var(--error--50);
    color: var(--error--700);

    &:hover {
      background-color: var(--error--100);
    }

    &:disabled {
      background-color: var(--error--25);
      color: var(--error--300);
    }
  }
`;

const styleErrorSecondaryGray = css`
  && {
    background-color: var(--white);
    border: 0.063rem solid var(--error--300);
    color: var(--error--700);

    &:hover {
      background-color: var(--error--50);
    }

    &:disabled {
      border: 0.063rem solid var(--error--200);
      color: var(--error--300);
    }
  }
`;

const styleErrorTeritiary = css`
  && {
    background-color: transparent;
    color: var(--error--700);

    &:hover {
      background-color: var(--error--50);
    }

    &:disabled {
      color: var(--error--300);
    }
  }
`;

const styleErrorTeritiaryGray = css`
  && {
    background-color: transparent;
    color: var(--error--700);

    &:hover {
      background-color: var(--error--50);
    }

    &:disabled {
      color: var(--error--300);
    }
  }
`;

interface Props {
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  variant?:
    | "primary"
    | "secondary"
    | "secondary-gray"
    | "teritiary-color"
    | "teritiary-gray"
    | "error"
    | "error-secondary"
    | "error-secondary-gray"
    | "error-teritiary"
    | "error-teritiary-gray";
}

const Button = styled.button<Props>`
  && {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    height: fit-content;

    transition: all 200ms ease;
    font-family: var(--font-inter);

    border-radius: var(--button--border--radius);

    ${({ size }) =>
      size === "sm"
        ? sizeSm
        : size === "md"
          ? sizeMd
          : size === "lg"
            ? sizeLg
            : size === "xl"
              ? sizeXl
              : size === "2xl"
                ? size2Xl
                : sizeMd}

    ${({ variant }) =>
      variant === "primary"
        ? stylePrimary
        : variant === "secondary"
          ? styleSecondary
          : variant === "secondary-gray"
            ? styleSecondaryGray
            : variant === "teritiary-color"
              ? styleTeritiaryColor
              : variant === "teritiary-gray"
                ? styleTeritiaryGray
                : variant === "error"
                  ? styleError
                  : variant === "error-secondary"
                    ? styleErrorSecondary
                    : variant === "error-secondary-gray"
                      ? styleErrorSecondaryGray
                      : variant === "error-teritiary"
                        ? styleErrorTeritiary
                        : variant === "error-teritiary-gray"
                          ? styleErrorTeritiaryGray
                          : stylePrimary}
  }
`;

export default Button;
