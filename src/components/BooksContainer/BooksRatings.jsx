import { Fragment } from "react";
import star from "../../assets/star.svg";

export default function BooksRatings() {
    return (
        <Fragment>
            <div className="flex items-center space-x-1">
                <img src={star} />
                <img src={star} />
                <img src={star} />
                <img src={star} />
                <span className="text-xs lg:text-sm">(4 Star)</span>
            </div>
        </Fragment>
    )
}