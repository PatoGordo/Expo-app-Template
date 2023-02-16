import React from "react";

import styled from "styled-components/native";
import { TouchableOpacityProps } from "react-native";
import { styled as nwstyled } from "nativewind";

import { Text } from "../Typography/Text";

interface TouchableType extends TouchableOpacityProps {
  color: string;
}

export const Touchable = nwstyled(styled.TouchableOpacity<TouchableType>`
  height: 42px;
  width: 100%;
  background: ${(props) => props.color || "#fff"};
  opacity: ${(props) => (props.disabled ? "0.6" : "1")};
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-radius: 6px;
`);

interface ButtonProps extends TouchableOpacityProps {
  isDisabled?: boolean;
  color?: string;
  textColor?: string;
  children: string;
  className?: string;
}

export const Button: React.ElementType<ButtonProps> = ({
  color = "#2196f3",
  textColor = "#fff",
  children,
  className,
  ...props
}: ButtonProps) => {
  return (
    <Touchable color={color} {...props} className={className}>
      <Text color={textColor}>{children}</Text>
    </Touchable>
  );
};
