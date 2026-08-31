import {useState, useEffect} from "react"

export default function Slides(props) {
  const [slideNumber, setSlideNumber] = useState(0)
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowDown') {
        setSlideNumber((prevSlideNumber) => 
          Math.min(prevSlideNumber + 1, props.children.length - 1)
        );
      } else if (event.key === 'ArrowUp') {
        setSlideNumber((prevSlideNumber) => 
          Math.max(prevSlideNumber - 1, 0)
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [props.children.length]);

  return (
    <div className="slides">
      {props.children[slideNumber]}
      {/* <style jsx>{`
        .slide { width: 80%; height: 98vh; align-items: center; justify-content: center; font-size: 1.75em; border-bottom: .5px dotted black; padding: 0 10% }
      `}</style> */}
    </div>
  )
}