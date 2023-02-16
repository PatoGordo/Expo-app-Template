import { TextProps } from "react-native";
import styled from "styled-components/native";

import { styled as nwstyled } from "nativewind";

export interface TextType extends TextProps {
  isDisabled?: boolean;
}

export const Text = nwstyled(styled.Text<TextType & { color?: string }>`
  color: ${(props) => (props?.isDisabled ? "#CCC" : props.color || "#000")};
  font-size: 15px;
  font-weight: 400;
`);

export const Title = nwstyled(styled.Text<TextType>`
  color: ${(props) => (props?.isDisabled ? "#CCC" : "#000")};
  font-size: 24px;
  font-weight: 700;
`);

export const SubTitle = nwstyled(styled.Text<TextType>`
  color: ${(props) => (props?.isDisabled ? "#CCC" : "#000")};
  font-size: 18px;
  font-weight: 600;
`);
