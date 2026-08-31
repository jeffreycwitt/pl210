

export default function QuestionBlock(props) {
  return (
    <div className={"main " + props.type}>
      {props.children}
      <style jsx>{`
        .main{
          //border-bottom: 2px dotted gray;
          
          padding: 10px 10px;
          margin: 30px 0;
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