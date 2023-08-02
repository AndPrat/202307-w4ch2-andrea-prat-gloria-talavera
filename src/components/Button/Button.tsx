interface Button {
  text: string;
  actionOnClick: () => void;
}

const Button = ({ text, actionOnClick }: Button): React.ReactElement => {
  return (
    <button className="button" onClick={actionOnClick}>
      {text}
    </button>
  );
};

export default Button;
