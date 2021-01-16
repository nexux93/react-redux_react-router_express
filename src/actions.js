import axios from "axios";


const urlServer= "http://localhost:3003",
    headers = {Accept: 'application/json', 'Content-Type': 'application/json'};

const parseResponse = (response) => {
        return response.data;
    },
    logError = (error) => console.error("Ошибка при отправке action", error),
    fetchThenDispatch = (dispatch, url, method, body) => {
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


export const removeColor = (id) => (dispatch) =>
    fetchThenDispatch(
        dispatch,
        `/api/color/${id}`,
        "DELETE"
    );


export const rateColor = (id, rating) => (dispatch) =>
    fetchThenDispatch(
        dispatch,
        `/api/color/${id}`,
        "PUT",
        {rating}
    );

export const addColor = (title, color) => (dispatch) =>
    fetchThenDispatch(
        dispatch,
        "/api/colors",
        "POST",
        {title, color}
    );

export const getColorById = (id, colors) => {
    return colors.find(color => color.id === id);
};