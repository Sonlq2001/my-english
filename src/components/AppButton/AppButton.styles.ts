import { styled, css } from "styled-components";

import { Attributes, ObjectRulesCss } from "@app/types/them.types";

const BaseButton = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s ease;
    background-color: transparent;
    border-radius: 0.4rem;
    overflow: hidden;
    user-select: none;
    min-width: 6.4rem;
    font-weight: 600;
    .icon {
      line-height: 0;
    }
    .icon path {
      fill: currentColor;
    }
    .left-icon {
      margin-right: 1rem;
    }
    .right-icon {
      margin-left: 1rem;
    }
    &.disabled {
      cursor: default;
      pointer-events: none;
      color: ${theme.palette.disabled.disabledColor};
    }
  `}
`;

export const Button = styled(BaseButton)<Attributes>`
  ${({ theme, size, variant, disabled }) => {
    if (!size || !variant) return;

    const variantBtn: ObjectRulesCss = {
      text: css`
        color: ${theme.palette.primary.main};
        &:hover {
          background-color: ${theme.palette.button.lightBg};
        }
      `,
      contained: css`
        background-color: ${theme.palette.primary.main};
        color: ${theme.palette.white};
        &:hover {
          background-color: ${theme.palette.primary.dark};
        }
      `,
      outlined: css`
        border: 1px solid ${theme.palette.primary.main};
        color: ${theme.palette.primary.main};
        &:hover {
          background-color: ${theme.palette.button.lightBg};
        }
      `,
    };

    const isVariantOutlined = variant === "outlined";

    const sizeBtn: ObjectRulesCss = {
      small: css`
        padding: ${isVariantOutlined ? "0.3rem 0.9rem" : "0.4rem 1rem"};
        line-height: 2.3rem;
        font-size: 1.5rem;
        .icon svg {
          width: 1.8rem;
          height: 1.8rem;
        }
      `,
      medium: css`
        padding: ${isVariantOutlined ? "0.5rem 1.5rem" : "0.6rem 1.6rem"};
        line-height: 2.5rem;
        font-size: 1.6rem;
        .icon svg {
          width: 2rem;
          height: 2rem;
        }
      `,
      large: css`
        padding: ${isVariantOutlined ? "0.7rem 2.1rem" : "0.8rem 2.2rem"};
        line-height: 2.6rem;
        font-size: 1.7rem;
        .icon svg {
          width: 2.2rem;
          height: 2.2rem;
        }
      `,
    };

    const disabledBtn: ObjectRulesCss = {
      contained: css`
        background-color: ${theme.palette.disabled.disabledBg};
      `,
      outlined: css`
        border: 1px solid ${theme.palette.disabled.disabledColor};
      `,
    };

    return css`
      ${variantBtn[variant]}
      ${sizeBtn[size]}
      ${disabled ? disabledBtn[variant] : ""}
    `;
  }}
`;

Button.defaultProps = {
  size: "medium",
  variant: "contained",
};
