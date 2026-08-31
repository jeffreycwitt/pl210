import {useState} from 'react'
export const DiscussionInstructions = () => {
  const [visible, setVisible] = useState(false)
  return (
<>
    {
    !visible ? 
    <p className="toggle-instructions" onClick={() => setVisible(!visible)}>show participation instructions</p> 
    :
  <div>
  <p className="toggle-instructions" onClick={() => setVisible(!visible)}>hide participation instructions</p> 
  <h3>Participation Instructions for Guided Reading Question Discussions</h3>

  <p>
      For almost every class, there will be a set of guided reading questions. 
      These should be read before you begin your reading.
      Then after your reading, using the class annotation tool 
      you are invited to respond to the questions 
      and to the responses of your peers.
      </p>
      <p>
      As the goal of this assignment is to help you digest and actively respond to our readings, 
      you are encouraged to participate in the class discussion prior to each reading. 
      But again I know you have busy days and busy weeks, 
      so I'll be looking to see that you participated 
      in at least 15 discussions throughout the semester. 
      Again you are encouraged to participate in all discussions to help process the reading.
      And if you participate in more than 15, your top 15 marks will constitute your grade
    </p>
    <p>
      What does a full credit in the Guided Reading Questions Discussion look like?
      </p>
      <p>
      First of all, you should feel free to make as many posts you want of any size. 
      The class annotation tools excels at allowing this kind of interactivity. 
      So you are encouraged to add a link, give a +1 to another post, drop in a meme, 
      or mark something as confusing and in need of more class discussion. 
      Generally active participation will reflect positively on your overall participation grade.
      </p>
      <p>
      But to get full credit you need to participate at least two times in any given discussion. 
      </p>
      <p>
      You should provide a response to one of the "reading reflection" questions (red questions) 
      and you should reply to one of the responses by one of your peers.
      (You are also highly encouraged to share answers 
      and dialogue in any form with your peers 
      about the reading content questions (blue questions)).
      </p>
      <p>
      A general guideline for a good post is that 
      it should be "substantive" "interesting" and "relevant".
      </p>
      <p>
      Make sure to clearly explain the substance of the issue ("substantive"). 
      As rule of thumb it should be somewhere between 150 and 200 words.
      </p>
      <p>
      Show us its significance ("interesting"). (That is, add something to discussion. 
      Just responding to a peer by saying "I agree" or parroting what they've already said 
      does not add "significance".
      </p>
      <p>
      Finally, it should be on topic ("relevant"),
      and it should show evidence of having read the text and the post of your peer.
      </p>
      <p>
      Weak participation (e.g. only 1 post, or posts lacking in "substance, interest, and relevance") will 
      receive a "check minus" or an "8", strong participation will receive a "check" or a "10". 
    </p>
    <h3>A Note on Question Types:</h3>
    
    
    <p style={{padding: "10px", fontSize: "16px", borderLeft: "4px solid lightblue"}}>Blue indicates a "reading content question". For these kinds of questions, aim to read the text carefully and accurately identify the claim the author is making</p>
    <p style={{padding: "10px", fontSize: "16px", borderLeft: "4px solid #d93c3f"}}>Red indicates a more open ended "reading reflection question". For these questions, first work to understand accurately what the author is claiming, then step back to think about this claim fits or does fit with your own opinions, beliefs, and experiences. Does it challenge those beliefs? If so, why? Does it confirm or add support to those beliefs? If so how?</p>
    
    <p className="toggle-instructions" onClick={() => setVisible(!visible)}>hide participation instructions</p> 
    </div>
    }
    <style jsx>{`
        .toggle-instructions{
          font-size: 14px;
          cursor: pointer;
          margin: 0;
          padding: 5px 0px;
          
        }
        .toggle-instructions:hover{
          text-decoration: underline;
        }
        h3{
          padding-bottom: 10px;
        }

      `}</style>
    </>
    )
}