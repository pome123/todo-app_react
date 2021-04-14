import './Button.css';

function Button(props) {
  return (
    <button className={props.class} type="button" onClick={props.click}>{props.button}</button>
  );
}

export default Button;