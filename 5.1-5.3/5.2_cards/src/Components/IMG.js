import React from 'react'

const IMG = (props) => {
  return (
    <>   
       <img className={props.className} src={props.picLink} alt={props.alternative}/>
    </>
  )
}

export default IMG