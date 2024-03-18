import { Fragment } from "react";
import { AiFillDelete } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import { MdFavoriteBorder } from "react-icons/md";

export default function BookActions() {
    return (
        <Fragment>

            <div className="flex items-center gap-3 text-xs lg:text-sm">

                <button
                    className="flex min-w-[100px] items-center justify-center gap-1 rounded-md bg-[#1C4336] py-1.5 text-white transition-all hover:opacity-80 lg:py-1.5"
                >
                    <AiFillEdit className="text-sm" />

                    Edit
                </button>

                <button
                    className="flex min-w-[100px] items-center justify-center gap-1 rounded-md bg-red-600 hover:bg-red-700 py-1.5 text-white transition-all lg:py-1.5"
                >
                    <AiFillDelete className="text-sm" />

                    Delete
                </button>

                <button
                    className="flex min-w-[100px] items-center justify-center gap-1 rounded-md bg-[#1C4336]/[14%] py-1.5 text-[#1C4336] transition-all hover:bg-[#1C4336]/[24%] lg:py-1.5"
                >
                    <MdFavoriteBorder className="text-lg" />
                    Favourite
                </button>

            </div>

        </Fragment>
    )
}