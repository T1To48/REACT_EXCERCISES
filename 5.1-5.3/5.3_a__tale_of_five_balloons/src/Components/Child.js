import Ballon from './Ballon'
const Child = (props) => {
  return (
    <div className="name">
      <h3>{props.name}</h3>
      <Ballon  style={props.style}/>
    </div>
  )
}

export default Child