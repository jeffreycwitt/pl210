import {useState} from 'react'

export default function HiddenBlock(props) {
  const [showAnswer, setShowAnswer] = useState(props.visibleState || false )
  const starterText = props.starterText || "__________________"
  return (
    <>
      <p className="answer-toggle" onClick={() => {setShowAnswer(!showAnswer)}}>{showAnswer ? <span style={{"borderLeft": "1px solid red", "paddingLeft": "5px"}}>{props.text}</span> : starterText}</p>
      
      <style jsx>{`
        
        .answer{
          padding: 10px; 
          background-color: #e6ffe6;
          // font-size: 16px;
        }
        .answer p{
          margin-bottom: 0px;
          
        }
        .answer-toggle{
          // font-size: 12px;
          cursor: pointer;
          margin: 0;
          padding: 30px 0;
          
        }
        .answer-toggle:hover{
          text-decoration: underline;
        }

      `}</style>
    </>
  )
}
