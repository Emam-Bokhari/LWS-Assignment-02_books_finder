import { Fragment } from "react";
import BooksList from "./BooksList";

export default function BooksGrid() {
    return (
        <Fragment>

            <div
                className="container mx-auto grid grid-cols-1 gap-8 max-w-7xl md:grid-cols-2 lg:grid-cols-3"
            >
                {/* books list  */}
                <BooksList />
            </div>
        </Fragment>
    )
}