import './Button.css';

function Button(props) {
  return (
    <button className="button" type="button">{props.button}</button>
  );
}

export default Button;