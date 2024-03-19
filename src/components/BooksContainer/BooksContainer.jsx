import { Fragment, useState } from "react";
import AddBooksModal from ".././AddBooksModal.jsx";
import BooksAction from "./BooksAction.jsx";
import BooksList from "./BooksList";
import Searchbox from "./Searchbox.jsx";
import SortBooks from "./SortBooks.jsx";

export default function BooksContainer() {

    const defaultBook = {
        "id": crypto.randomUUID(),
        "title": "JavaScript and Jquery",
        "author": "By : Jon Duckett",
        "price": "62",
        "ratings": "4",
        "thumbnail": "https://i.ibb.co/P5gC5T2/book.png",
        "publishedDate": "2024",
        "isFavourite": false
    }

    const [books, setBooks] = useState([defaultBook])

    const [showAddBookModal, setShowAddBookModal] = useState(false)

    const [booksToUpdate, setBooksToUpdate] = useState(null)

    // add book
    function handleAddBook(newBook, isAdd) {
        if (isAdd) {
            setBooks([
                ...books,
                newBook
            ])
        } else {
            setBooks(
                books.map((book) => {
                    if (book.id === newBook.id) {
                        return newBook
                    }
                    return book
                })
            )
        }

        setShowAddBookModal(false)
    }

    // edit book
    function handleEditBook(book) {
        setBooksToUpdate(book)
        setShowAddBookModal(true)
    }

    // cancel
    function handleCancelBooksModal() {
        setShowAddBookModal(false)
    }

    // delete a book
    function handleDeleteBook(bookId) {
        const confirmed = window.confirm("Are You Sure You Want To Delete The Book ?")

        if (confirmed) {
            const filtered = books.filter(book => book.id !== bookId)
            setBooks(filtered)
        }
    }

    // delete all books
    function handleDeleteAllBooks() {
        const confirmed = window.confirm("Are You Sure You Want To Delete All Books ?")

        if (confirmed) {
            books.length = 0
        }

        setBooks([
            ...books
        ])
    }

    // search book by title
    function handleSearchBook(searchBook) {
        if (searchBook.trim() === "") {
            setBooks(books)
        } else {
            const search = books.filter(book => book.title.toLowerCase().includes(searchBook.toLowerCase()))
            setBooks(search)
        }
    }

    // favourite book
    function handleFavourite(bookId) {
        const index = books.findIndex(book => book.id === bookId)
        const newBook = [...books]
        newBook[index].isFavourite = !newBook[index].isFavourite
        setBooks(newBook)
    }

    // sort by published date
    function handleSortByPublishedDate(sort) {

        if (sort === "name_asc") {
            const newBooks = [...books]
            const sortedBooks = newBooks.sort((a, b) => a.title.localeCompare(b.title))
            setBooks(sortedBooks)
        } else if (sort === "name_desc") {
            const newBooks = [...books]
            const sortedBooks = newBooks.sort((a, b) => b.title.localeCompare(a.title))
            setBooks(sortedBooks)
        } else if (sort === "year_asc") {
            const newBooks = [...books]
            const sortedBooks = newBooks.sort((a, b) => new Date(a.publishedDate) - new Date(b.publishedDate))
            setBooks(sortedBooks)
        } else if (sort === "year_desc") {
            const newBooks = [...books]
            const sortedBooks = newBooks.sort((a, b) => new Date(b.publishedDate) - new Date(a.publishedDate))
            setBooks(sortedBooks)
        }

    }


    return (
        <Fragment>
            <header className="mb-8 lg:mb-10 mx-auto max-w-7xl">

                <div
                    className="mx-auto flex items-end justify-between max-md:max-w-[95%] max-md:flex-col max-md:items-start max-md:space-y-4"
                >
                    {/* info , title , search  */}
                    <div>
                        <h6 className="mb-2 text-base lg:text-xl">Trending on 2021</h6>
                        <h2
                            className="mb-6 font-['Playfair_Display'] text-3xl font-bold lg:text-4xl"
                        >
                            Trending Books of the Year
                        </h2>
                        {/* Search Box  */}
                        <Searchbox onSearchBook={handleSearchBook} />
                    </div>
                    {/* sort - filter */}
                    <SortBooks onSortBooks={handleSortByPublishedDate} />

                </div>

                {/* add,delete all */}
                <BooksAction
                    onDeleteAllBooks={handleDeleteAllBooks}
                    onAddBook={() => setShowAddBookModal(true)} />

            </header>

            {showAddBookModal && <AddBooksModal
                booksToUpdate={booksToUpdate}
                onSaveBook={handleAddBook}
                onCancel={handleCancelBooksModal} />}

            <div
                className="container mx-auto grid grid-cols-1 gap-8 max-w-7xl md:grid-cols-2 lg:grid-cols-3"
            >
                {/* books list  */}
                <BooksList
                    onEditBook={handleEditBook}
                    onFavourite={handleFavourite}
                    onDeleteBook={handleDeleteBook}
                    books={books} />
            </div>

        </Fragment>
    )
}