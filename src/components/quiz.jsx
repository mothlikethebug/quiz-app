import { useState } from 'react'
import Results from "./results"


function Quiz() {
    const questionBank = [
        {
            question: "What is the capital of France?",
            options: ["Berlin", "London", "Paris", "Rome"],
            answer: "Paris",
        },
        {
            question: "Which language is used for web apps?",
            options: ["PHP", "Python", "Javascript", "All"],
            answer: "All",
        },
        {
            question: "What does JSX stand for?",
            options: [
                "javaScript XML",
                "Java Syntax Extention",
                "just a simple example",
                "none of the above X",
            ],
            answer: "javaScript XML",
        },
    ];

    const initialAnswers = [null, null, null];

    const [userAnswers, setUserAnswers] = useState(initialAnswers);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [isQuizFinished, setIsQuizFinished] = useState(false);

    const selectedAnswer = userAnswers[currentQuestion]; 

    function selectHandler(option) {
        const newUserAnswers = [...userAnswers];
        newUserAnswers[currentQuestion] = option;

        setUserAnswers(newUserAnswers);
    };

    function goNext() {
        if (currentQuestion === questionBank.length - 1) {
            setIsQuizFinished(true)
        } else {
            setCurrentQuestion(currentQuestion + 1);
        }
        
    }

    function goPrev() {
        setCurrentQuestion(currentQuestion - 1);
    }

    if(isQuizFinished === true) {
        return <Results />
    }

    return (
        <div>
            <h2> Question {currentQuestion + 1} </h2>
            <p className="question"> {questionBank[currentQuestion].question} </p>
            {questionBank[currentQuestion].options.map((option) => (
                <button className={"option" + (selectedAnswer === option ?" selected" : "")} onClick={() => selectHandler(option)}>{option}</button>
            ))}

            <div className="nav-buttons">
                <button onClick={goPrev} disabled={currentQuestion === 0}> Previous </button>
                <button onClick={goNext} disabled={!selectedAnswer}>
                    {currentQuestion === questionBank.length - 1 ? "Finish Quiz" : "Next"}
                </button>
            </div>
        </div>
    );
}

export default Quiz