import Button from "./core/Button";
import InputSelect from "./core/InputSelect";
import InputText from "./core/InputText";

export default function App() {
  return (
    <div className="flex gap-2 p-2 flex-col items-stretch">
      <Button variant="primary" text="Primary" />
      <Button variant="secondary" text="Secondary" />
      <Button variant="danger" text="Danger" />
      <Button text="Default" />
      <Button size="small" text="Small" />

      <InputText name="email" type="text" label="Email" placeholder="Enter email..." />

      <InputSelect name="thing" label="Thing" />
    </div>
  );
}
