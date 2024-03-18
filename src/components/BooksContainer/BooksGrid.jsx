import { Fragment, useState } from "react";
import BooksList from "./BooksList";
import AddBooksModal from "../AddBooksModal.jsx"

export default function BooksGrid() {

    const [showAddBookModal, setShowAddBookModal] = useState(true)

    return (
        <Fragment>
            {showAddBookModal && <AddBooksModal />}
            <div
                className="container mx-auto grid grid-cols-1 gap-8 max-w-7xl md:grid-cols-2 lg:grid-cols-3"
            >
                {/* books list  */}
                <BooksList />
            </div>
        </Fragment>
    )
}