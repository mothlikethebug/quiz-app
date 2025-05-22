
function Results({ questionBank, userAnswers, restart }) {
    function getScore() {
        const finalScore = 0

        userAnswers.forEach((answer, index) => {
            if (answer === questionBank[index].answer) {
                finalScore++;
            }
        });
        return finalScore
    }
    const score = getScore()
    return (
        <div>
            <h2>QUIZ COMPLETED!</h2>
            <p>your score: {score}/{questionBank.length}</p>
            <button className="restart-button" onClick={restart}> Restart Quiz </button>
        </div>
    )
}

export default Results