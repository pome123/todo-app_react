import './Button.css';

function Button(props) {
  return (
    <button className={props.class} type="button" onClick={props.click} data-id={props.dataId}>{props.button}</button>
  );
}

export default Button;