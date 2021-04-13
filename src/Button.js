import './Button.css';

function Button(props) {
  return (
    <button className="button" type="button" onClick={props.click}>{props.button}</button>
  );
}

export default Button;