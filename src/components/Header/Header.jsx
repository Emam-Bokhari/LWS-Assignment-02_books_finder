import { Fragment } from "react";
import Searchbox from "./Searchbox";
import SortBooks from "./SortBooks";

export default function Header() {
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
                        <Searchbox />
                    </div>
                    {/* sort - filter */}
                    <SortBooks />

                </div>

                <div className="flex justify-end gap-5 my-5" >
                    <button className=" bg-green-800 text-white hover:bg-green-900 px-3 py-1 rounded-sm transition-all duration-300" >
                        Add Book
                    </button>

                    <button className="bg-red-600 text-white hover:bg-red-700 px-3 py-1 rounded-sm transition-all duration-300" >
                        Delete All
                    </button>
                </div>

            </header>
        </Fragment>
    )
}