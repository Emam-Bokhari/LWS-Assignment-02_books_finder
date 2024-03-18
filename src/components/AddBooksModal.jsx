import { Fragment } from "react";

export default function AddBooksModal() {
    return (
        <Fragment>

            <div className="bg-black w-full h-full backdrop-blur-md bg-opacity-50 z-50 fixed inset-0" ></div>

            <form
                className="mx-auto my-10 w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#eae6d7] p-9 max-md:px-4 lg:my-20 lg:p-11 z-50 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
                <h2
                    className="mb-9 text-center text-2xl font-bold text-black lg:mb-11 lg:text-[28px]"
                >
                    Add New Books
                </h2>

                <div className="space-y-9 text-black lg:space-y-10">
                    <div
                        className="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20"
                    >
                        {/* title  */}
                        <div className="space-y-2 lg:space-y-3">
                            <label htmlFor="title">Title</label>
                            <input
                                className="block w-full rounded-md bg-[#F5F5F5] px-3 py-2.5"
                                type="text"
                                name="title"
                                required
                            />
                        </div>
                        {/* writer  */}
                        <div className="space-y-2 lg:space-y-3">
                            <label htmlFor="author">Author</label>
                            <input
                                className="block w-full rounded-md bg-[#F5F5F5] px-3 py-2.5"
                                type="text"
                                name="author"
                                required
                            />
                        </div>
                    </div>

                    <div
                        className="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20"
                    >
                        {/* ratings  */}
                        <div className="space-y-2 lg:space-y-3">
                            <label htmlFor="ratings">Ratings</label>
                            <input
                                className="block w-full rounded-md bg-[#F5F5F5] px-3 py-2.5"
                                type="number"
                                name="ratings"
                                required
                            />
                        </div>
                        {/* price  */}
                        <div className="space-y-2 lg:space-y-3">
                            <label htmlFor="price">Price</label>
                            <input
                                className="block w-full rounded-md bg-[#F5F5F5] px-3 py-2.5"
                                type="number"
                                name="price"
                                id="price"
                                required
                            />
                        </div>
                    </div>

                    {/* thumbnails */}
                    <div className="space-y-2 lg:space-y-3">
                        <label htmlFor="thumbnails">Thumbnails</label>
                        <input
                            className="block w-full rounded-md bg-[#F5F5F5] px-3 py-2.5"
                            type="text"
                            name="thumbnails"
                            required
                        />
                    </div>
                </div>
                {/* inputs ends  */}
                <div className="mt-16 flex justify-center gap-20 lg:mt-20">

                    <button
                        type="submit"
                        className="rounded bg-red-600 hover:bg-red-700 px-4 py-2 text-white transition-all hover:opacity-80"
                    >
                        Cancel
                    </button>

                    <button
                        type="submit"
                        className="rounded bg-green-600 hover:bg-green-700 px-4 py-2 text-white transition-all hover:opacity-80"
                    >
                        Create
                    </button>

                </div>

            </form>

        </Fragment>
    )
}