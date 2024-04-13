const FicBooks = () => {
    const books = [{"title": "The Great Gatsby", "author": "F. Scott Fitzgerald", "price": 10.00},
    {"title": "1984", "author": "George Orwell", "price": 8.50},
    {"title": "The Catcher in the Rye", "author": "J.D. Salinger", "price": 9.80}];

    return (
        <>
        <h2>Fiction:</h2>
        {books.forEach(book => {
            console.log(`${book.title}, ${book.author}, ${book.price}`)
        })};
        </>
    )
}

export default Fiction;