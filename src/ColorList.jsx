import React from "react";
import Color from "./Color";
import {rateColor, removeColor} from "./actions";
import {connect} from "react-redux";


const mapStateToProps = (state) => ({
    colors: state
});



const mapDispatchToProps = (dispatch) => ({
    onRate: (id, rating) => dispatch(rateColor(id, rating)),
    onRemove: (id) => dispatch(removeColor(id))
});

const ColorList = (props) => {
    return (
        <div className="row">
            {!props.colors || props.colors.length === 0 ? <p>Нет доступных цветов</p>
                : props.colors.map((color, index) =>
                    <Color key={color.id + index}
                           {...color}
                           onRate={(rating) => props.onRate(color.id, rating)}
                           onRemove={() => props.onRemove(color.id)}
                    />
                )
            }
        </div>
    );

};

export default connect(mapStateToProps, mapDispatchToProps)(ColorList);