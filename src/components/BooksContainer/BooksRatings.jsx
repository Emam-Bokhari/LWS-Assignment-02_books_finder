import { Fragment } from "react";
import starIcon from "../../assets/star.svg";

export default function BooksRatings({ ratings }) {

    const convert = Number(ratings)

    const stars = new Array(convert).fill(starIcon)

    return (
        <Fragment>
            <div className="flex items-center space-x-1">
                {stars.map((star, index) => (
                    <img key={index} src={star} />
                ))}
                <span className="text-xs lg:text-sm">({ratings} Star)</span>
            </div>
        </Fragment>
    )
}