import React, {FC} from "react";
import {StarProps} from "./types";

const Star:FC<StarProps> = (props) => {
    const {selected = false, onClick} = props;
    return (
        <div className={selected ? "star selected" : "star"} onClick={onClick}>
        </div>
    );
};

export default Star;