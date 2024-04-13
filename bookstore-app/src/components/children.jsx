const ChildBooks = () => {
    const books = [
        {"title": "Charlotte's Web", "author": "E.B. White", "price": 5.00},
        {"title": "The Gruffalo", "author": "Julia Donaldson", "price": 6.00},
        {"title": "Where the Wild Things Are", "author": "Maurice Sendak", "price": 8.00}
      ];

    return (
        <>
        <h2>Children:</h2>
        {books.forEach(book => {
            console.log(`${book.title}, ${book.author}, ${book.price}`)
        })};
        </>
    )
}