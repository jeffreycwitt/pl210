

export default function Slide(props) {
  const indent = props.level * 20
  const listStyle = props.level === 1 ? "disc" : "circle"
  return (
    <div className={"slide " + props.number}>
      {props.children}
      <style jsx>{`
        .slide { width: 80%; height: 90vh; align-items: center; justify-content: center; font-size: 1.75em; padding: 20px 10%; overflow: scroll }
      `}</style>
    </div>
  )
}
