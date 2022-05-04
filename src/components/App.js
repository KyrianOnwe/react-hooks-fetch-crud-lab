import React, { useState, useEffect } from "react";
// import { useEffect } from "react/cjs/react.production.min";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");

  const [questions, setQuestions] = useState([])


 

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((r) => r.json())
      .then((data) => setQuestions(data))
    }, [])

    // console.log(questions)

  function handleSetQuestions(data){
    setQuestions([...questions, data])
  }
  
  function handleDelete(id){
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      } ,
    })
      .then((resp) => resp.json())
      .then((data) => setQuestions(questions.filter((q) => q.id !== id )))
  }

  function handleUpdate(id){
    // fetch(`http://localhost:4000/questions/${id}`, {
    //   method: "PATCH",
    //   headers: {
    //     "Content-Type": "application/json",
    //   } ,
    // })
      // .then((resp) => resp.json())
      // .then((data) => setQuestions(questions.find((q) => q.id)))

  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm handleSetQuestions={handleSetQuestions} /> : questions.map((q) => <QuestionList id={q.id} prompt={q.prompt} answers={q.answers} index={q.correctIndex} key={q.id} handleDeleteQuestion={handleDelete} handleUp={handleUpdate} />)}
    </main>
  );
}

export default App;
