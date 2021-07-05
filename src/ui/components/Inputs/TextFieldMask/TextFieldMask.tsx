import React from "react";
import InputMask from "react-input-mask";
import TextField from "ui/components/Inputs/TextField/TextField";
import { OutlinedTextFieldProps } from "@material-ui/core";
/*
 *   Exportei o componente OutlinedTextFieldProps do material para poder extender
 *   na interface da máscara para poder usar classes padrões do material
 */

export interface TextFieldMaskProps extends OutlinedTextFieldProps {
  mask: string;
}

const TextFieldMask: React.FC<TextFieldMaskProps> = ({
  mask,
  value,
  onChange,
  ...props
}) => {
  return (
    <InputMask mask={mask} value={value} onChange={onChange}>
      {() => {
        return <TextField {...props} />;
      }}
    </InputMask>
  );
};

export default TextFieldMask;
