import thunk from "redux-thunk";
import {colors} from "./redusers";
//import {stateData} from "./initState.js";
import {createStore, applyMiddleware} from "redux";


const clientLogger = store => next => action => {
    let result;
    result = next(action);
    return result;
};

const serverLogger = store => next => action => {
    console.log("\n dispatch server action\n");
    console.log(action);
    console.log("\n");
    return next(action);
};

const middleware = server => [
    (server) ? serverLogger : clientLogger,
    thunk
];

const storeFactory = (server = false, initData) => {
    return applyMiddleware(...middleware(server))(createStore)(
        colors,
        initData
    );
};
export default storeFactory;
