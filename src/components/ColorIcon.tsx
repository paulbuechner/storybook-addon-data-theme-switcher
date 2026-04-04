import { styled } from "storybook/theming";

export const ColorIcon = styled.span(
  ({ background }: { background: string }) => ({
    borderRadius: "50%",
    display: "block",
    height: 14,
    width: 14,
    flexShrink: 0,
    background,
  }),
  ({ theme }) => ({
    boxShadow: `${theme.appBorderColor} 0 0 0 1px inset`,
  })
);
