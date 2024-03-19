import { Fragment, useState } from "react";

export default function SortBooks({ onSortBooks }) {

    const [sort, setSort] = useState("")

    function handleSort() {
        onSortBooks(sort)
    }

    return (
        <Fragment>
            <div className="flex items-stretch space-x-3">
                {/* Sort  */}
                <select
                    onChange={(event) => setSort(event.target.value)}
                    value={sort}
                    onClick={handleSort}
                    className="cursor-pointer rounded-md border px-4 py-2 text-center text-gray-600"
                    name="sortBy"
                    id="sortBy"
                >
                    <option value="">Sort</option>
                    <option value="name_asc">Name (A-Z)</option>
                    <option value="name_desc">Name (Z-A)</option>
                    <option value="year_asc">Publication Year (Oldest)</option>
                    <option value="year_desc">Publication Year (Newest)</option>
                </select>

            </div>
        </Fragment>
    )
}