import { Fragment, useState } from "react";
import BooksRatings from "./BooksRatings";
import BookActions from "./BookActions";

export default function BooksList() {

    const defaultBook={
        "id":crypto.randomUUID,
        "thumbnail":"https://i.ibb.co/P5gC5T2/book.png",
        "title":"JavaScript and Jquery",
        "writer":"By : Jon Duckett",
        "price":62,
        "ratings":4,
        "isFavourite":false
    }

    const [books,setBooks]=useState([defaultBook])
    console.log(books)

    return (
        <Fragment>
            {books.map((book)=>(
                <div key={book.id} className="space-y-3">
                {/* thumbnail  */}
                <div
                    className="flex items-center justify-center rounded-md border border-[#324251]/30 bg-white p-4"
                >
                    <img className="max-w-[144px]" src={book.thumbnail} alt="book name" />
                </div>
                {/* info  */}
                <div className="space-y-3">
                    <h4 className="text-lg font-bold lg:text-xl">{book.title}</h4>
                    <p className="text-xs lg:text-sm">{book.writer}</p>
                    <div className="flex items-center justify-between">
                        <h4 className="text-lg font-bold lg:text-xl">${book.price}</h4>
                        {/* stars  */}
                        <BooksRatings ratings={book.ratings} />
                    </div>
                    {/* add to cart,favourite */}
                    <BookActions />
                </div>
            </div>
            ))}
            
        </Fragment>
    )
}