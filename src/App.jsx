import {useEffect, useState} from 'react';
import Login from './components/Login';
import Quiz from './components/Quiz';
import Result from './components/Result';
import { fetchQuestions } from './api';


function App() {
  const [user, setUser] = useState(localStorage.getItem('username'));
  const [questions, setQuestions] = useState([]);
  const [quizFinished, setQuizFinished] = useState(false);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    if (user) {
      fetchQuestions().then((data) => setQuestions(data));
    }
  }, [user]);

  // Fungsi Logout
  const handleLogout = () => {
    localStorage.removeItem('username');
    setUser(null);
    setQuestions([]);
    setQuizFinished(false);
    setAnswers([]);
  };

  return (
    <div>
      {!user && <Login onLogin={setUser} />}
      {user && !quizFinished && (
        <>
          <button onClick={handleLogout} style={{ marginBottom: '10px' }}>
            Logout
          </button>
          <Quiz questions={questions} onFinish={(userAnswers) => {
            setAnswers(userAnswers);
            setQuizFinished(true);
          }} />
        </>
      )}
      {quizFinished && (
        <>
          <Result answers={answers} questions={questions} />
          <button onClick={handleLogout}>Logout</button>
        </>
      )}
    </div>
  );
}

export default App;
