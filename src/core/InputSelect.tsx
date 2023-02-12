import "./Inputs.css";

export type InputSelectProps = {
  name: string;
  label: string;
  value?: string;
  onChange?: (val: string) => void;
};

export default function InputSelect(props: InputSelectProps) {
  return (
    <div className="input-wrapper">
      <label className="label">label</label>
      <select className="input">
        <option>One</option>
        <option>Two</option>
        <option>Three</option>
      </select>
      <span className="input-help-text"></span>
    </div>
  );
}
