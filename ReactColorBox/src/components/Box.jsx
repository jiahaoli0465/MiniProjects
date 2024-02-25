import React from 'react'




const Box = ({id, backgroundColor, width, height, removeBox}) => {
  return (
    <div>
        <div style={{backgroundColor: backgroundColor, width: `${width}px`, height: `${height}px`}}></div>
        <button onClick={() => removeBox(id)}>X</button>
    </div>
  )
}

export default Box