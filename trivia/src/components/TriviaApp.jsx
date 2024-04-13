import React, { useEffect } from 'react'

const TriviaApp = () => {
    const [question, setQuestions] = useState(null);

    useEffect(() => {
        //fetch trivia data
        const fetchData = async () => {
            const result = await fetch('');
            const resultJson = await result.json()
            setQuestions(resultJson.results)
        }
        fetchData();
    }, [])

    return (
        <>
        <h1>Trivia App</h1>
        {setQuestions.mapp((question, index) => [
            <p>{question.question}</p>
        ])}
        </>
    )
}