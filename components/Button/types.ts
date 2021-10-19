type ButtonType = "button" | "submit";
export interface IButton {
  onClick: () => void | Promise<void> | Promise<boolean> ;
  bgColor?: string;
  type?: ButtonType;
  color?: string;
}