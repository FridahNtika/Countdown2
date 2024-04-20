import React, { useEffect, useState } from "react";
    
export default function Questions ({data, index}) {
    const [answers, setAnswers] = useState([]);
    const [selected, setSelected] = useState(false);

    {/*Get the answer choices from the data,
    Shuffle the order of the answers so that correct answer won't always be in the same position*/}
    useEffect(() => {
        const generateChoices = () => {
            let choices = [];
            choices.push({text: data.correctAnswer, isCorrect: true});
            data.incorrectAnswers.forEach((ans) => {
                choices.push({text: ans, isCorrect: false});
            })

            {/*Generates a random value between 0 and 1*/}
            {/*If after subtraction the result is:
                negative, sorts in ascending order
                positve, sorts in descending order
                0, order remains same*/}
            choices.sort(() => Math.random() - 0.5);
            setAnswers(choices)
        }
        generateChoices();
    }, [data]);

    return (
        <>
        {/*Display the question*/}
        <p>{index} {data.question.text}</p>
        {/*Iterate through the answers, setting each as a button*/}
        <ul>
        {answers.map((answer, index) => (
                <li><button key = {index} onClick = {() => setSelected(answer)}>{answer.text}</button></li>
        ))}
        </ul>
        {/*Keeping track of the selected answer and notifying them if it's right or wrong*/}
        {selected && <p>{selected.isCorrect ? "Correct!" : "Try again"}</p>}
        </>
    )
}