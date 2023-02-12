import "./Buttons.css";

export type ButtonVariant = "primary" | "secondary" | "danger" | "default";
export type ButtonSize = "small" | "default";

export type ButtonProps = {
  text: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  onClick?: () => void;
};

export default function Button(props: ButtonProps) {
  return (
    <button
      className={`btn ${getButtonVariant(props.variant)} ${getButtonSize(props.size)}`}
      onClick={() => props.onClick?.()}
    >
      {props.text}
    </button>
  );
}

function getButtonVariant(variant?: ButtonVariant): string {
  switch (variant) {
    case "primary":
      return "btn-primary";

    case "secondary":
      return "btn-secondary";

    case "danger":
      return "btn-danger";

    default:
      return "";
  }
}

function getButtonSize(size?: ButtonSize): string {
  switch (size) {
    case "small":
      return "btn-small";

    default:
      return "";
  }
}
