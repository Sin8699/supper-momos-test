import { ReactNode } from "react";

interface InputViewProps {
  onlyView: boolean | ((v: any) => ReactNode);
  value: any;
}

export function InputView({ onlyView, value }: InputViewProps) {
  if (typeof onlyView === "boolean") return value;

  return onlyView(value);
}
