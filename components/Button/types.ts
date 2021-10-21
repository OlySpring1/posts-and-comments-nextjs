type ButtonType = "button" | "submit";
export interface IButton {
  onClick?: () => void | Promise<void> | Promise<boolean> ;
  fluid?: boolean;
  asWrapper?: boolean;
  minWidth?: string;
  bgColor?: string;
  borderColor?: string;
  hoverColor?: string;
  type?: ButtonType;
  color?: string;
  padding?: string;
}