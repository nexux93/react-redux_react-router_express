import React, {FC} from "react";
import {Link, useParams} from "react-router-dom";
import {Button} from "react-bootstrap";
import {getColorById} from "./actions";
import {connect} from "react-redux";
import {ColorListProps, dispatchType} from "./types";

interface DetailProps {
    colors: ColorListProps;
    dispatch: dispatchType;
}

const mapStateToProps = (state: ColorListProps) => {
    return {
        colors: state
    };
};

const ColorDetail: FC<DetailProps> = (colors) => {

    let {id} = useParams();
    if (!colors.colors || !colors.colors.length) return (
        <div>
            <div className="row">
                <div className="col">Нет доступных цветов</div>
            </div>
            <div className="row">
                <div className="col">
                    <Link to="/">
                        <Button variant="outline-dark">fall back</Button>
                    </Link>
                </div>
            </div>
        </div>);

    const findColor = getColorById(id, colors.colors);

    if (!findColor) return (<div>
        <div className="row">
            <div className="col">Нет совпадений по цветам</div>
        </div>
        <div className="row">
            <div className="col">
                <Link to="/">
                    <Button variant="outline-dark">fall back</Button>
                </Link>
            </div>
        </div>
    </div>);

    return (
        <div>
            <div className="row">
                <div className="col" style={{
                    backgroundColor: findColor.color,
                    height: 500,
                    width: 1000
                }}>
                </div>
            </div>
            <div className="row">
                <div className="col d-flex justify-content-end">
                    <h2 className="ml-5 mr-5">{findColor.title}</h2>
                    <h2>{findColor.color}</h2>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Link to="/">
                        <Button variant="outline-dark">fall back</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default connect(mapStateToProps)(ColorDetail);