import React,{useState} from "react";
import Question from "../Quiz/Question.jsx";
import quizData from "../../StaticData/StaticData.jsx";

function Home() {
  const [questions, setQuestions] = useState(quizData);

  return (
    <main>
      <div className="container">
        <h3>
          Techflix AI <br />
          Quiz App
        </h3>
        <section>
          {questions.map((question) => {
            return( <Question key={question.id} {...question} />)
          })}
        </section>
      </div>
    </main>
  );
}

export default Home;
