import { InputHTMLAttributes } from "react";
import "./Inputs.css";

export type InputTextProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export default function InputText(props: InputTextProps) {
  return (
    <div className="input-wrapper">
      <label className="label">{props.label}</label>
      <input id={props.name} className="input" {...props} />
      <span className="input-help-text"></span>
    </div>
  );
}
