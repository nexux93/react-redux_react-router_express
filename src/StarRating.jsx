import React from "react";
import Star from "./Star";



const StarRating = (props) => {
    const totalStars = 5;
    let {starsSelected = 0, onRate } = props;
    return (
        <div className="star-rating">
            {
                [...Array(totalStars)].map((item, index) =>
                    <Star key={index}
                        selected={index < starsSelected}
                        onClick={() => onRate(Number(index + 1))}/>
                )
            }
            <p >{starsSelected} из {totalStars}</p>
        </div>
    );
};


export default StarRating;