import "./Inputs.css";

export type InputTextProps = {
  name: string;
  label: string;
  placeholder: string;
  type: string;
  value?: string;
  onChange?: (val: string) => void;
};

export default function InputText(props: InputTextProps) {
  return (
    <div className="input-wrapper">
      <label className="label">{props.label}</label>
      <input
        id={props.name}
        name={props.name}
        placeholder={props.placeholder}
        type={props.type}
        className="input"
        value={props.value}
        onChange={(e) => props.onChange?.(e.target.value)}
      />
      <span className="input-help-text"></span>
    </div>
  );
}
