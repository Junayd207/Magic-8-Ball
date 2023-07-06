import React, {useState} from "react"
import './App.css';

function App() {
    const [inputText, setInputText] = useState("")
    const [question, setQuestion] = useState("")
    const [answer, setAnswer] = useState("")

    const possibleAnswers = [
        'It is certain',
        'It is decidedly so',
        'Without a doubt', 
        'Yes, definitely',
        'You may rely on it',
        'As I see it, yes',
        'Outlook good',
        'Yes',
        'Signs point to yes',
        'Reply hazy try again',
        'Ask again later',
        'Better not tell you now',
        'Cannot predict now',
        'Concentrate and ask again',
        'Don\'t count on it', 
        'My reply is no',
        'My sources say no',
        'Most likely',
        'Outlook not so good',
        'Very doubtful'
    ]

    return (
        <div className="hero-container">
            <input 
                className="input" 
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                maxlength="100"
            />
            <button className="button"
                onClick={() => {setQuestion(inputText); setInputText(""); inputText.length > 0 ? setAnswer(possibleAnswers[Math.floor(Math.random() * possibleAnswers.length)]) : setAnswer("")}}
            >Submit</button>
            {question.length > 0 && <h1 className="question-text">{question}?</h1>}
            <div className="ball-container">
                <div className="ball-black">
                    <div className="ball-white">
                        {answer.length > 0 ? <h3 className="answer-text">{answer}</h3> : <h1>8</h1>}
                    </div>
                </div>
                <div className="ball-shadow"></div>
            </div>
        </div>
    )
}

export default App;
