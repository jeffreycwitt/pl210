

export default function Question(props) {
  const indent = props.level * 20
  const listStyle = props.level === 1 ? "disc" : "circle"
  return (
    <div className={"question " + props.type} style={{paddingLeft: indent + "px", listStyle: listStyle + " inside none"}}>
      {/* <span className="question-type">{props.type.split("-").join(" ")}</span> */}
      {props.children}
      <style jsx>{`
        .question{
          display:list-item; 
          padding: 10px;
        }
        .reading-content{
          border-left: 4px solid lightblue;
        }
        .reading-discussion{
          border-left: 4px solid #d93c3f;
        }
      `}</style>
    </div>
  )
}
