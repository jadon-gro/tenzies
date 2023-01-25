
export default function Die(props) {
  return(
    <div className={`die ${props.clicked ? "clicked" : ""}`} onClick={props.handleClick}>
      <p className="die--number">{props.num}</p>
    </div>
  )
}