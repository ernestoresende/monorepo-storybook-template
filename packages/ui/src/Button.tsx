import {
  Button as ButtonPrimitive,
  type ButtonProps as ButtonPropsBase,
} from "@chakra-ui/react";

export type ButtonProps = ButtonPropsBase;

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <ButtonPrimitive {...props}>{children}</ButtonPrimitive>;
};
