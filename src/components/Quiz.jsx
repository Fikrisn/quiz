import { useEffect, useState } from 'react';
import Timer from './Timer';

function Quiz({ questions, onFinish }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleAnswer = (answer) => {
    setAnswers([...answers, answer]);
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      onFinish(answers);
    }
  };

  return (
    <div>
      <Timer />
      <h3>{questions[currentQuestion]?.question}</h3>
      {questions[currentQuestion]?.incorrect_answers.concat(
        questions[currentQuestion]?.correct_answer
      ).map((option, index) => (
        <button key={index} onClick={() => handleAnswer(option)}>
          {option}
        </button>
      ))}
    </div>
  );
}

export default Quiz;