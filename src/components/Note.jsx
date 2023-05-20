import React from "react";

function Note(props) {
  return (
    <div className="note">
      <h1>
        {" "}
        {props.number}: {props.title}
      </h1>
      <p>{props.content}</p>
    </div>
  );
}

export default Note;
