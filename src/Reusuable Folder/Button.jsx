import React from 'react'

function Button(props) {
    const btnStyle={
        className:props.className,
        label:props.label,
    }
  return (
    <div>
        <button className={`${props.className}`} style={btnStyle} onClick={props.onClick}>{props.label}</button>
    </div>
  )
}

export default Button