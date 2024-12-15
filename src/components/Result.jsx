function Result({ answers, questions }) {
    const correctAnswers = answers.filter(
      (ans, index) => ans === questions[index]?.correct_answer
    );
  
    return (
      <div>
        <h2>Hasil Quiz</h2>
        <p>Benar: {correctAnswers.length}</p>
        <p>Salah: {answers.length - correctAnswers.length}</p>
      </div>
    );
  }
  
export default Result;