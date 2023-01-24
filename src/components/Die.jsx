
export default function Die(props) {
  return(
    <div className={`die {props.clicked ? "clicked" : ""}`}>
      <p className="die--number">{props.num}</p>
    </div>
  )
}