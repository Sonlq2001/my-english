import { styled, css } from "styled-components";

import { Attributes, ObjectRulesCss } from "@app/types/them.types";

const BaseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease;
  background-color: transparent;
  .icon {
    line-height: 0;
  }
  .left-icon {
    margin-right: 1rem;
  }
  .right-icon {
    margin-left: 1rem;
  }
  .text {
    font-weight: 600;
  }
`;

export const Button = styled(BaseButton)<Attributes>`
  ${({ theme, size, variant }) => {
    if (!size || !variant) return;

    const variantBtn: ObjectRulesCss = {
      text: css`
        color: ${theme.palette.primary.main};
        .icon path {
          fill: ${theme.palette.primary.main};
        }
      `,
      contained: css`
        background-color: ${theme.palette.primary.main};
        color: ${theme.palette.white};
        .icon path {
          fill: ${theme.palette.white};
        }
      `,
      outlined: css`
        border: 1px solid ${theme.palette.primary.main};
        color: ${theme.palette.primary.main};
        .icon path {
          fill: ${theme.palette.primary.main};
        }
      `,
    };

    const sizeBtn: ObjectRulesCss = {
      small: css`
        padding: 0.4rem 1rem;
        .text {
          font-size: 1.5rem;
        }
      `,
      medium: css`
        padding: 0.6rem 1.6rem;
        .text {
          font-size: 1.6rem;
        }
      `,
      large: css`
        padding: 0.8rem 2.2rem;
        .text {
          font-size: 1.7rem;
        }
      `,
    };

    return css`
      ${variantBtn[variant]}
      ${sizeBtn[size]}
    `;
  }}
`;

Button.defaultProps = {
  size: "medium",
  variant: "contained",
};
