import { useState } from 'react';
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
    <div style={styles.container}>
      <div style={styles.quizBox}>
        <Timer style={styles.timer} />
        <h3 style={styles.question}>{questions[currentQuestion]?.question}</h3>
        <div style={styles.optionsContainer}>
          {questions[currentQuestion]?.incorrect_answers
            .concat(questions[currentQuestion]?.correct_answer)
            .sort(() => Math.random() - 0.5) // Shuffle options
            .map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                style={styles.optionButton}
              >
                {option}
              </button>
            ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: 'linear-gradient(135deg, #ff9a9e, #fad0c4)',
    fontFamily: 'Comic Sans MS, Arial, sans-serif',
    color: '#333',
  },
  quizBox: {
    backgroundColor: '#fffaf0',
    borderRadius: '12px',
    padding: '20px',
    boxShadow: '0 8px 15px rgba(0,0,0,0.2)',
    textAlign: 'center',
    width: '90%',
    maxWidth: '500px',
  },
  timer: {
    fontSize: '20px',
    marginBottom: '10px',
    color: '#f77f00',
  },
  question: {
    fontSize: '22px',
    marginBottom: '20px',
    color: '#333',
  },
  optionsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  optionButton: {
    padding: '12px',
    fontSize: '18px',
    borderRadius: '8px',
    border: '2px solid #f4a261',
    backgroundColor: '#ffecd2',
    cursor: 'pointer',
    transition: 'background-color 0.3s, transform 0.2s',
    color: '#333',
  },
  optionButtonHover: {
    backgroundColor: '#f4a261',
    color: 'white',
    transform: 'scale(1.05)',
  },
};

export default Quiz;
