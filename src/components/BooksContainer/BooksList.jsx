import { Fragment } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { MdFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import BooksRatings from "./BooksRatings";

export default function BooksList({ books, onDeleteBook, onFavourite }) {


    return (
        <Fragment>

            {books.map((book) => (
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

                        <div className="flex justify-between" >

                            <p className="text-xs lg:text-sm">{book.author}</p>

                            <div>
                                <p className="text-xs lg:text-sm">  <span>Published:</span>  {book.publishedDate}</p>
                            </div>

                        </div>

                        <div className="flex items-center justify-between">
                            <h4 className="text-lg font-bold lg:text-xl">${book.price}</h4>
                            {/* stars  */}
                            <BooksRatings ratings={book.ratings} />
                        </div>
                        {/* edit,delete,favourite */}
                        <div className="flex items-center gap-3 text-xs lg:text-sm">

                            <button
                                className="flex min-w-[100px] items-center justify-center gap-1 rounded-md bg-[#1C4336] py-1.5 text-white transition-all hover:opacity-80 lg:py-1.5"
                            >
                                <AiFillEdit className="text-sm" />

                                Edit
                            </button>

                            <button
                                onClick={() => onDeleteBook(book.id)}
                                className="flex min-w-[100px] items-center justify-center gap-1 rounded-md bg-red-600 hover:bg-red-700 py-1.5 text-white transition-all lg:py-1.5"
                            >
                                <AiFillDelete className="text-sm" />
                                Delete
                            </button>

                            <button
                                onClick={() => onFavourite(book.id)}
                                className="flex min-w-[100px] items-center justify-center gap-1 rounded-md bg-[#1C4336]/[14%] py-1.5 text-[#1C4336] transition-all hover:bg-[#1C4336]/[24%] lg:py-1.5"
                            >
                                {book.isFavourite ? <MdFavorite className="text-lg text-red-500" />
                                    :
                                    <MdFavoriteBorder className="text-lg" />}
                                Favourite
                            </button>

                        </div>
                    </div>
                </div>
            ))}

        </Fragment>
    )
}