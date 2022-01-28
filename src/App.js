import React from 'react'
import Modal from './Modal'
import SetupForm from './SetupForm'
import { useGlobalContext } from './context'
import Loading from './Loading'
function App() {
  const {
    waiting,
    loading,
    questions,
    index,
    correct,
    nextQuestion,
    checkAnswer,
  } = useGlobalContext()
  

    if (loading) {
      return <Loading />
    }

    if (waiting) {
      return <SetupForm />
    }



  const { question, incorrect_answers, correct_answer } = questions[index]
  // const answers = [...in, correct_answer]
  let answers = [...incorrect_answers]
  const Index = Math.floor(Math.random() * 4)
  if (Index === 3) {
    answers.push()
  } else {
    answers.push(answers[Index])
    answers[Index] = correct_answer
  }
  return (
    <main>
      <Modal />
      <section className='quiz'>
        <p className='correct-answers'>
          correct answers : {correct}/{index}
        </p>
        <article className='container'>
          <h2 dangerouslySetInnerHTML={{ __html: question }} />
          <div className='btn-container'>
            {answers.map((answer, index) => {
              return (
             <button
               key={index}
                  className='answer-btn'
                  onClick={() => checkAnswer(correct_answer === answer)}
                  dangerouslySetInnerHTML={{ __html: answer }}
                />
              )
            })}
          </div>
        </article>
        <button className='next-question' onClick={nextQuestion}>
          next question
        </button>
      </section>
    </main>
  )
          
  
          }

export default App
