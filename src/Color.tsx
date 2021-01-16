import React, {FC} from "react";
import StarRating from "./StarRating";
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import {ColorDetail} from "./types";

interface ColorPropsComponent extends ColorDetail {
    onRate: (id?: any, rating?:any ) => void;
    onRemove: () => void;
}

const Color: FC<ColorPropsComponent> = (props) => {
    const {title, color, rating, onRate, onRemove, id} = props;
    return (
        <div className="col-3 mr-3 mb-3 pb-3">
            <Link to={`/${id}`}>
                <h2>{title}</h2>
                <div className="colorBack" style={{backgroundColor: color}}/>
            </Link>
            <div>
                <StarRating starsSelected={rating} onRate={onRate}/>
            </div>
            <Button variant="danger" onClick={() => onRemove()}>Delete</Button>
        </div>

    );
};

export default Color;