import React from 'react'

const Text = (props) => {
  return (
    <div className={props.className}>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <a href={props.href1}>{props.linkContent1}</a> 
      <a href={props.href2}>{props.linkContent2}</a> 
      <a href={props.href3}>{props.linkContent3}</a>
    </div>
  )
}

export default Text