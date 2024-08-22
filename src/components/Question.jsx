import { useState } from "react";
import { Answers } from "./Answers";
import QuestionTimer from "./QuestionTimer";
import QUESTIONS from '../questions';

export default function Question({activeIndex, onSelectAnswer, onSkipAnswer}){
    const [answer, setAnswer] = useState({
        selectedAnswer: '',
        isCorrect: null,
    });

    function handleSelectAnswer(answer){
        setAnswer({
            selectedAnswer: answer,
            isCorrect: null,
        });

        setTimeout(() => {
            setAnswer({
                selectedAnswer: answer,
                isCorrect: answer === QUESTIONS[activeIndex].answers[0],
            });

            setTimeout(() => {
                onSelectAnswer(answer);
            }, 2000);
        }, 1000);
    }

    let answerState = '';

    if(answer.selectedAnswer){
        answerState = answer.isCorrect ? 'correct' : 'wrong';
    }

    return (
        <div id="question">
            <QuestionTimer timeout={10000} 
                onTimeout={onSkipAnswer} 
            />
            <h2>{QUESTIONS[activeIndex].text}</h2>
            <Answers
                answers={QUESTIONS[activeIndex].answers} 
                selectedAnswer={answer.selectedAnswer} 
                answerState={answerState} 
                onSelect={handleSelectAnswer} 
            />
        </div>
    )
}