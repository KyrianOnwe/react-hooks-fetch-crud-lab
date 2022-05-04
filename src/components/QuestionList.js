import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList(props) {
  // console.log(props)
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{/* display QuestionItem components here after fetching */<QuestionItem id={props.id} prompt={props.prompt} answers={props.answers} correctIndex={props.index} handleDeleteQ={props.handleDeleteQuestion} handleUp={props.handleUp} />}</ul>
    </section>
  );
}

export default QuestionList;
