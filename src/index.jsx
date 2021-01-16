import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from './App';
import storeFactory from "./storage";
import {Provider} from "react-redux";

const store = storeFactory();

const render = () =>
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
        </React.StrictMode>,

        document.getElementById("root")
    );

store.subscribe(render);
render();

