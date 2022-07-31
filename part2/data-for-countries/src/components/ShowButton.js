import React from "react";

const ShowButton = ({onClick, text}) => {
  return <button onClick={onClick}> {text}</button>
}

export default ShowButton;