const NonFicBooks = () => {
    const books = [
        {"title": "Sapiens: A Brief History of Humankind", "author": "Yuval Noah Harari", "price": 15.00},
        {"title": "In Cold Blood", "author": "Truman Capote", "price": 12.00},
        {"title": "The Diary of a Young Girl", "author": "Anne Frank", "price": 7.00}
      ];

    return (
        <>
        <h2>Non-Fiction:</h2>
        {books.forEach(book => {
            console.log(`${book.title}, ${book.author}, ${book.price}`)
        })};
        </>
    )
}

export default Non-Fiction;