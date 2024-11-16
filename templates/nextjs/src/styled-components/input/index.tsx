import { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from "react";
import { Textsm } from "../typography";
import { InputBox, InputItem, InputWrap } from "./styles.s";
import { AlertCircle } from "@/assets/icons";
import translation, { TranslationKeys } from "@/helpers/translation";

interface Props
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: TranslationKeys | string;
  errorText?: TranslationKeys | string;
  isError?: boolean;
  helperText?: TranslationKeys | string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

const Input = ({
  label,
  errorText,
  isError,
  helperText,
  leftIcon,
  rightIcon,
  ...props
}: Props) => {
  return (
    <InputWrap>
      {label && (
        <Textsm weight={500} color="gray_700">
          {translation(label as TranslationKeys)}
        </Textsm>
      )}
      <InputBox error={isError}>
        {leftIcon}
        <InputItem {...props} />
        {isError ? <AlertCircle color="error_500" /> : rightIcon}
      </InputBox>
      {errorText && isError && (
        <Textsm color="error_500" align="left">
          {translation(errorText as TranslationKeys)}
        </Textsm>
      )}
      {helperText && !isError && (
        <Textsm color="gray_500" align="left">
          {translation(helperText as TranslationKeys)}
        </Textsm>
      )}
    </InputWrap>
  );
};

export default Input;
