import React, {FC} from "react";
import Color from "./Color";
import { ColorDetail, ColorListProps} from "./types"
import {rateColor, removeColor} from "./actions";
import {connect} from "react-redux";

interface ColorListDispatch {
    onRate: (id: string, rating: number) => void;
    onRemove: (id: string) => void;
}

const mapStateToProps = (state: ColorListProps) => ({
    colors: state
});

interface ColorListPropsComponent {
    colors: ColorListProps;
    onRate: (id: string, rating: number) => void;
    onRemove: (id: string) => void;
}

const mapDispatchToProps = (dispatch: any): ColorListDispatch => ({
    onRate: (id: string, rating: number) => dispatch(rateColor(id, rating)),
    onRemove: (id: string) => dispatch(removeColor(id))
});

const ColorList: FC<ColorListPropsComponent> = (props) => {
    return (
        <div className="row">
            {!props.colors || props.colors.length === 0 ? <p>Нет доступных цветов</p>
                : props.colors.map((color: ColorDetail, index: number) =>
                    <Color key={color.id + index}
                           {...color}
                           onRate={(rating: number) => props.onRate(color.id, rating)}
                           onRemove={() => props.onRemove(color.id)}
                    />
                )
            }
        </div>
    );

};

export default connect(mapStateToProps, mapDispatchToProps)(ColorList);