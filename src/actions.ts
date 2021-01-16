import axios, {AxiosResponse} from "axios";
import {dispatchType, RequestBody,  method,  ColorDetail, ColorListProps} from "./types";


const urlServer: string = "http://localhost:3003",
    headers = {Accept: 'application/json', 'Content-Type': 'application/json'};

const parseResponse = (response: AxiosResponse) => {
        return response.data;
    },
    logError = (error: string) => console.error("Ошибка при отправке action", error),
    fetchThenDispatch = (dispatch: dispatchType, url: string, method: method, body?: RequestBody) => {
        url = urlServer + url;
        axios({
            method,
            url,
            headers,
            data: body
        }).then(parseResponse)
            .then(dispatch)
            .catch(logError);

    };


export const removeColor = (id: string) => (dispatch: dispatchType) =>
    fetchThenDispatch(
        dispatch,
        `/api/color/${id}`,
        "DELETE"
    );


export const rateColor = (id: string, rating: number) => (dispatch: dispatchType) =>
    fetchThenDispatch(
        dispatch,
        `/api/color/${id}`,
        "PUT",
        {rating}
    );

export const addColor = (title: string, color: string) => (dispatch: dispatchType) =>
    fetchThenDispatch(
        dispatch,
        "/api/colors",
        "POST",
        {title, color}
    );

export const getColorById = (id: string, colors: ColorListProps): (ColorDetail | undefined) => {
    return colors.find(color => color.id === id);
};