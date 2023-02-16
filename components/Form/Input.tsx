import React from "react";

import styled from "styled-components/native";
import { TextInput as RNTextInput, TextInputProps } from "react-native";
import { styled as nwstyled } from "nativewind";
import { useState } from "react";

import { Text, TextType } from "../Typography/Text";

interface TextInputType extends TextInputProps {
  outlined?: boolean;
  disabled?: boolean;
}

export const TextInput = nwstyled(styled.TextInput<TextInputType>`
  height: 42px;
  width: 100%;
  border: ${(props) => (props.outlined ? "1px solid #ccc" : "")};
  opacity: ${(props) => (props.disabled ? "0.6" : "1")};
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-radius: 6px;
  padding: 6px 12px;
`);

interface InputProps extends TextInputProps {
  isDisabled?: boolean;
  outlined?: boolean;
  children?: any;
  className?: string;
  labelProps?: TextType & { color?: string; className?: string };
  label?: string;
  errorProps?: TextType & { color?: string; className?: string };
  error?: string;
  inputRef?: React.RefObject<RNTextInput>;
}

export const Input: React.ElementType<InputProps> = ({
  outlined = true,
  label = null,
  labelProps = {},
  errorProps = {},
  error = null,
  children,
  className,
  inputRef = null,
  ...props
}: InputProps) => {
  const [hasTouched, setHasTouched] = useState(false);

  return (
    <>
      {label ? (
        <Text
          {...labelProps}
          className={`self-start mb-2 font-medium text-[#333] ${labelProps?.className}`}
        >
          {label}
        </Text>
      ) : null}
      <TextInput
        outlined={outlined}
        onTouchStart={() => setHasTouched(true)}
        className={`${
          error && hasTouched ? "border-red-500" : ""
        } ${className}`}
        value={children}
        ref={inputRef}
        {...props}
      />
      {error && hasTouched ? (
        <Text
          {...errorProps}
          className={`mt-2 text-xs self-start text-red-500 ${errorProps.className}`}
        >
          {error}
        </Text>
      ) : null}
    </>
  );
};
