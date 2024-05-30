import React from 'react'

export default function Card(props) {
    // console.log(props.title);
    const {title,des}=props;
  return (
    <div style={{backgroundColor:"yellow",width:"27%",padding:"20px",display:"inline-block",margin:"20px"}}>
    <h1>{title}</h1>
    <p>{des}</p>
    </div>
  )
}
