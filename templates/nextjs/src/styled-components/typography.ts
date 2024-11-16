import { TVariables, variables } from "@/constants/variables";
import styled, { css } from "styled-components";

export type TTypographyProps = {
  color?: TVariables;
  align?: "center" | "end" | "justify" | "left" | "right" | "start";
  spanColor?: TVariables;
  hoverColor?: TVariables;
  weight?: 400 | 500 | 600 | 700;
};

const spanColorStyle = css<TTypographyProps>`
  && {
    span {
      ${({ spanColor }) => {
        return spanColor?.substring(0, 8) === "gradient"
          ? css`
              background: ${variables[spanColor]};
              background-clip: text;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            `
          : css`
              color: ${spanColor ? variables[spanColor] : "var(--gray--900)"};
            `;
      }}
    }
  }
`;

const hoverColorstyle = css<TTypographyProps>`
  && {
    ${({ hoverColor }) => {
      return css`
        &:hover {
          color: ${hoverColor ? variables[hoverColor] : "unset"};
        }
      `;
    }}
  }
`;

const globalStyle = css<TTypographyProps>`
  ${({ color }) => {
    return color?.substring(0, 8) === "gradient"
      ? css`
          background: ${variables[color]};
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        `
      : css`
          color: ${color ? variables[color] : "var(--black)"};
        `;
  }}
  ${({ align }) =>
    align &&
    css`
      text-align: ${align};
    `}
  ${({ spanColor }) => spanColor && spanColorStyle}
  ${({ hoverColor }) => hoverColor && hoverColorstyle}
  font-family: var(--font-inter);
  font-weight: ${({ weight }) => weight ? weight : 400};
`;

export const Display2xl = styled.h1<TTypographyProps>`
  && {
    ${globalStyle};

    /* Display2xl */
    font-size: var(--display-2xl);
    letter-spacing: -2%;
    line-height: 5.625rem;

    @media (max-width: 425px) {
      font-size: calc(var(--font-size-base) + 32px);
    }
  }
`;

export const Displayxl = styled.h2<TTypographyProps>`
  && {
    ${globalStyle};

    /* Displayxl */
    font-size: var(--display-xl);
    letter-spacing: -2%;
    line-height: 4.625rem;

    @media (max-width: 425px) {
      font-size: var(--display-md);
    }
  }
`;

export const Displaylg = styled.h3<TTypographyProps>`
  && {
    ${globalStyle};

    /* Displaylg */
    font-size: var(--display-lg);
    letter-spacing: -2%;
    line-height: 3.75rem;

    @media (max-width: 425px) {
      font-size: var(--display-md);
    }
  }
`;

export const Displaymd = styled.h4<TTypographyProps>`
  && {
    ${globalStyle};

    /* Displaymd */
    font-size: var(--display-md);
    line-height: 2.75rem;

    @media (max-width: 425px) {
      font-size: var(--display-sm);
    }
  }
`;

export const Displaysm = styled.h5<TTypographyProps>`
  && {
    ${globalStyle};

    /* Displaysm */
    font-size: var(--display-sm);
    line-height: 2.375rem;
  }
`;

export const Displayxs = styled.h6<TTypographyProps>`
  && {
    ${globalStyle};

    /* Displayxs */
    font-size: var(--display-xs);
    line-height: 2rem;
  }
`;

export const Textxl = styled.h6<TTypographyProps>`
  && {
    ${globalStyle};

    /* Textxl */
    font-size: var(--text-xl);
    line-height: 1.875rem;

    @media (max-width: 425px) {
      font-size: var(--text-lg);
    }
  }
`;

export const Textlg = styled.p<TTypographyProps>`
  && {
    ${globalStyle};

    /* Textlg */
    font-size: var(--text-lg);
    line-height: 1.75rem;
  }
`;

export const Textmd = styled.p<TTypographyProps>`
  && {
    ${globalStyle};

    /* Textmd */
    font-size: var(--text-md);
    line-height: 1.5rem;
  }
`;

export const Textsm = styled.p<TTypographyProps>`
  && {
    ${globalStyle};

    /* Textsm */
    font-size: var(--text-sm);
    line-height: 1.25rem;
  }
`;

export const Textxs = styled.p<TTypographyProps>`
  && {
    ${globalStyle};

    /* Textsm */
    font-size: var(--text-xs);
    line-height: 1.125rem;
  }
`;
