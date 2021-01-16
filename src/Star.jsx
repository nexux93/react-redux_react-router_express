import React, {FC} from "react";

const Star = (props) => {
    const {selected = false, onClick} = props;
    return (
        <div className={selected ? "star selected" : "star"} onClick={onClick}>
        </div>
    );
};

export default Star;