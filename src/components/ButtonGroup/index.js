import React from "react";

import "./styles.css"

import dislike from "../../assets/images/n-curti.png"
import like from "../../assets/images/curti.png"

function ButtonGroup() {
  return (
    <div className="button-group">
      <button className="like-dislike">
        <img src={dislike} alt="dislike"/>
      </button>
      <button className="jump">
        <p>PULAR</p>
      </button>
      <button className="like-dislike">
        <img src={like} alt="dislike"/>
      </button>
    </div>
  )
}

export default ButtonGroup;