import React, { FC } from "react";
import { nanoid } from "nanoid";
import { InputStyle, Label } from "./styled";
import { IInput } from "./types";

const Input: FC<IInput> = ({ labelForInput, name, value, placeholder, onFocus, onChange }) => {
  // const id = nanoid();
  return (
    <>
      {/* {labelForInput && <Label htmlFor={id}> {labelForInput} </Label>} */}
      <InputStyle
        name={name}
        type="text"
        // id={id}
        onFocus={onFocus}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </>
  );
};
export default Input;
