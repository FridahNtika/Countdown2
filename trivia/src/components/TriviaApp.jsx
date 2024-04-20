import React, { useEffect } from "react";
import { useState } from "react";
import Questions from "./Questions";
import Button from '@mui/material/Button';

const TriviaApp = () => {
    {/*holds the questions when they are fetchModule, questions is the variable useState, what do you want to initialize it to*/}
    const [questions, setQuestions] = useState([]);

    const fetchQuestions = async () => {
        const response = await fetch("https://the-trivia-api.com/v2/questions");
        const data = await response.json();
        setQuestions(data);
    };
    
    {/*has empty dependency array*/}
    useEffect(() => {
        fetchQuestions();
    }, []);

    {/*Component to create new questions when the button is clicked*/}
    const handleClick = () => {
        fetchQuestions();
    }

    return (
        <>
            <h1>Trivia Game</h1>
            {/*Button to generate a new set of questions*/}
            <Button variant = "contained" onClick={handleClick}>Generate New Questions</Button>
            <div>
                {
                    questions.map((question, index) => (
                        <Questions key={index} data = {question} />
                    ))
                }
            </div>
        </>
    );
};

export default TriviaApp;