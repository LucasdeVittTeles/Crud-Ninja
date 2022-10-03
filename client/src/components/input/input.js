import './input.css';

const Input = (type, placeholder) => {
  return <input className="input" {...type} {...placeholder} />;
};

export default Input;
