
const Important = (props) => {
   const classes=`btn ${props.className}`;
  return (
    <button className={classes}>{props.negation} Important</button>
  )
}

export default Important