import React from "react";

function ReviewBlock ({reviewData}) {
    return (
        <>
            <p className="card-text">{reviewData.reviewerName}: {reviewData.comment} Rating: {reviewData.rating} </p>
        </>
    )
}

export default ReviewBlock