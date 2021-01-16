import React, {FC} from "react";
import Star from "./Star";

type StarRatingProps = {
    starsSelected?: number;
    onRate: (index: number) => void;
};

const StarRating: FC<StarRatingProps> = (props) => {
    const totalStars: number = 5;
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