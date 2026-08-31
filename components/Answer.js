import {useState} from 'react'

export default function Answer(props) {
  const [showAnswer, setShowAnswer] = useState(false)
  const currentDate = new Date();
  let released = true 
  if (props.releaseDate){
    released = props.releaseDate > currentDate ? false : true
  }
  const newReleaseDate = props.releaseDate && new Date(props.releaseDate)
  let releaseDateReadable;

  if (typeof newReleaseDate === 'object' && newReleaseDate !== null && 'toLocaleDateString' in newReleaseDate) {
    console.log("The data type is", typeof newReleaseDate)
    // Print the locale representation of Date string
    console.log(newReleaseDate.toLocaleDateString('en-US'))
    console.log(newReleaseDate.toLocaleTimeString('en-US'))
    releaseDateReadable = newReleaseDate.toLocaleDateString('en-US') + " at "  + newReleaseDate.toLocaleTimeString('en-US')
}
  return (
    <>
      <span className="answer-toggle" onClick={() => {setShowAnswer(!showAnswer)}}>{showAnswer ? "hide suggestion" : "show suggestion" + (props.releaseDate ? " (TR)" : "")}</span>
      {showAnswer && <div className={"answer"}>
        <>
        {released ? props.children : <p>This is a time released suggestion and will be available after {releaseDateReadable}</p>}
        </>
      </div>
      }
      <style jsx>{`
        
        .answer{
          padding: 10px; 
          background-color: #e6ffe6;
          font-size: 16px;
        }
        .answer p{
          margin-bottom: 0px;
        }
        .answer-toggle{
          font-size: 12px;
          cursor: pointer;
          margin: 0;
          padding: 0;
          padding-left: 10px;
        }
        .answer-toggle:hover{
          text-decoration: underline;
        }

      `}</style>
    </>
  )
}
