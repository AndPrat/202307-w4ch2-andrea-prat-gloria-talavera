import "./Button.css";

interface Button {
  text: string;
  actionOnClick: () => void;
}

const Button = ({ text, actionOnClick }: Button): React.ReactElement => {
  return (
    <button
      className="button button--increment button--decrement"
      onClick={actionOnClick}
    >
      {text}
    </button>
  );
};

export default Button;
