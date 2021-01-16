import React, {FC, FormEvent, ReactElement} from "react";
import {Form, FormLabel, FormControl, Button} from "react-bootstrap";
import {addColor} from "./actions";
import {connect} from "react-redux";
import {Action} from "./types";
import {Dispatch} from "redux";


interface AddColorProps {
    addColor: (title: string, value: string) => void;
}

const mapDispatchToProps = (dispatch: Dispatch<AddColorProps>): AddColorProps => {
    console.log("mapDispatchToProps dispatch", dispatch);
    console.log("mapDispatchToProps dispatch", typeof dispatch);
    return {
        addColor: (title: string, value: string) => dispatch(addColor(title, value))
    }

};

const AddColorForm: FC<AddColorProps> = (props) => {
    let _title: HTMLInputElement, _color: HTMLInputElement;

    const submit = (e: FormEvent) => {
        e.preventDefault();
        props.addColor(_title.value, _color.value);
        _title.value = "";
        _color.value = "#000000";
        _title.focus();
    };
    return (
        <div className="row w-75">
            <div className="col-8">
                <Form onSubmit={submit} className="d-flex justify-content-between">
                    <FormLabel className="mr-4">Какойто некст</FormLabel>
                    <FormControl type="text"
                                 className="mr-2"
                                 ref={(input: HTMLInputElement) => _title = input}
                                 placeholder="color title"
                                 required/>
                    <FormControl type="color"
                                 className="mr-4"
                                 ref={(input: HTMLInputElement) => _color = input}
                                 required/>
                    <Button variant="primary" type='submit'>+</Button>
                </Form>
            </div>
        </div>
    );

};

export default connect(null, mapDispatchToProps)(AddColorForm);