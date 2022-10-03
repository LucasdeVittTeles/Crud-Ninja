import './button.css';

const Button = (type) => {
  return (
    <button {...type} className="button">
      Salvar
    </button>
  );
};

export default Button;
