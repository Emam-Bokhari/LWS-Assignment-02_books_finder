import { Fragment } from "react";
import book from "../../assets/book.png";
import BookActions from "./BookActions";
import BooksRatings from "./BooksRatings";

export default function BooksGrid() {
    return (
        <Fragment>
            
            <div
                className="container mx-auto grid grid-cols-1 gap-8 max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            >
                {/* Book Item  */}
                <div className="space-y-3">
                    {/* thumbnail  */}
                    <div
                        className="flex items-center justify-center rounded-md border border-[#324251]/30 bg-white p-4"
                    >
                        <img className="max-w-[144px]" src={book} alt="book name" />
                    </div>
                    {/* info  */}
                    <div className="space-y-3">
                        <h4 className="text-lg font-bold lg:text-xl">JavaScript and Jquery</h4>
                        <p className="text-xs lg:text-sm">By : <span>Jon Duckett</span></p>
                        <div className="flex items-center justify-between">
                            <h4 className="text-lg font-bold lg:text-xl">$62</h4>
                            {/* stars  */}
                            <BooksRatings />
                        </div>
                        {/* add to cart,favourite */}
                        <BookActions />
                    </div>
                </div>
                <div className="space-y-3">
                    {/* thumbnail  */}
                    <div
                        className="flex items-center justify-center rounded-md border border-[#324251]/30 bg-white p-4"
                    >
                        <img className="max-w-[144px]" src={book} alt="book name" />
                    </div>
                    {/* info  */}
                    <div className="space-y-3">
                        <h4 className="text-lg font-bold lg:text-xl">JavaScript and Jquery</h4>
                        <p className="text-xs lg:text-sm">By : <span>Jon Duckett</span></p>
                        <div className="flex items-center justify-between">
                            <h4 className="text-lg font-bold lg:text-xl">$62</h4>
                            {/* stars  */}
                            <BooksRatings />
                        </div>
                        {/* add to cart,favourite */}
                        <BookActions />
                    </div>
                </div>
                <div className="space-y-3">
                    {/* thumbnail  */}
                    <div
                        className="flex items-center justify-center rounded-md border border-[#324251]/30 bg-white p-4"
                    >
                        <img className="max-w-[144px]" src={book} alt="book name" />
                    </div>
                    {/* info  */}
                    <div className="space-y-3">
                        <h4 className="text-lg font-bold lg:text-xl">JavaScript and Jquery</h4>
                        <p className="text-xs lg:text-sm">By : <span>Jon Duckett</span></p>
                        <div className="flex items-center justify-between">
                            <h4 className="text-lg font-bold lg:text-xl">$62</h4>
                            {/* stars  */}
                            <BooksRatings />
                        </div>
                        {/* add to cart,favourite */}
                        <BookActions />
                    </div>
                </div>
                <div className="space-y-3">
                    {/* thumbnail  */}
                    <div
                        className="flex items-center justify-center rounded-md border border-[#324251]/30 bg-white p-4"
                    >
                        <img className="max-w-[144px]" src={book} alt="book name" />
                    </div>
                    {/* info  */}
                    <div className="space-y-3">
                        <h4 className="text-lg font-bold lg:text-xl">JavaScript and Jquery</h4>
                        <p className="text-xs lg:text-sm">By : <span>Jon Duckett</span></p>
                        <div className="flex items-center justify-between">
                            <h4 className="text-lg font-bold lg:text-xl">$62</h4>
                            {/* stars  */}
                            <BooksRatings />
                        </div>
                        {/* add to cart,favourite */}
                        <BookActions />
                    </div>
                </div>
                <div className="space-y-3">
                    {/* thumbnail  */}
                    <div
                        className="flex items-center justify-center rounded-md border border-[#324251]/30 bg-white p-4"
                    >
                        <img className="max-w-[144px]" src={book} alt="book name" />
                    </div>
                    {/* info  */}
                    <div className="space-y-3">
                        <h4 className="text-lg font-bold lg:text-xl">JavaScript and Jquery</h4>
                        <p className="text-xs lg:text-sm">By : <span>Jon Duckett</span></p>
                        <div className="flex items-center justify-between">
                            <h4 className="text-lg font-bold lg:text-xl">$62</h4>
                            {/* stars  */}
                            <BooksRatings />
                        </div>
                        {/* add to cart,favourite */}
                        <BookActions />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}