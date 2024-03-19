import { Fragment } from "react";

export default function BooksAction({ onAddBook, onDeleteAllBooks }) {
    return (
        <Fragment>
            <div className="flex justify-end gap-5 my-5" >

                <button
                    onClick={onAddBook}
                    className=" bg-green-800 text-white hover:bg-green-900 px-3 py-1 rounded-md transition-all duration-300" >
                    Add Book
                </button>

                <button
                    onClick={onDeleteAllBooks}
                    className="bg-red-600 text-white hover:bg-red-700 px-3 py-1 rounded-md transition-all duration-300" >
                    Delete All
                </button>

            </div>
        </Fragment>
    )
}