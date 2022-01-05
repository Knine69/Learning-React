import "./Card.css";
const Card = (props) => {
  const classesApplied = "card " + props.className;
  return <div className={classesApplied}>{props.children}</div>;
};
export default Card;
