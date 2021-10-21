import type { ChangeEvent, FocusEvent } from "react";
export interface IInput {
  name: string;
  type?: string;
  id?: string;
  placeholder: string;
  value?: string;
  onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
  onChange?: (value: ChangeEvent<HTMLInputElement>) => void;
  labelForInput?: string;
}