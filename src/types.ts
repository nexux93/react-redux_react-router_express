import type {AnyAction, Dispatch as ReduxDispatch} from "redux";
import {constantsType} from "./constants";
import {ThunkDispatch} from "redux-thunk";

export type Action = {
    type: constantsType;
    color: string;
    id: string;
    timestamp: string;
    title: string;
}

export type dispatchType = ReduxDispatch<Action>;

export type RequestBody = { title?: string, color?: string, rating?: number };

export type method =
    "get"
    | "GET"
    | "delete"
    | "DELETE"
    | "post"
    | "POST"
    | "put"
    | "PUT"
    | undefined;

export type ColorProps = {
    title?: string;
    color?: string;
    rating?: number;

    id?: number;
};

export type StarProps = {
    selected?: boolean;
    onClick: () => void;
};


export type ColorDetail = {
    color: string;
    id: string;
    rating: number;
    timestamp: string;
    title: string;
};

export type ColorListProps = ColorDetail[];
