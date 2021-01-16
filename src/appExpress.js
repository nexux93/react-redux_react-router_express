import express from "express";
import path from "path";
import fs from "fs";
import storeFactory from "./storage.js";
// import {stateData} from "./initState.js";
import bodyParser from "body-parser";
import api from "./color-api.js";
import cors from "cors";

const serverStore = storeFactory(true);

serverStore.subscribe(() => {
    fs.writeFile(
        path.join(__dirname, "../initState.js"),
        JSON.stringify(serverStore.getState()),
        err => err ? console.log("error save store", err) : null
    );
});

const logger = (req, res, next) => {
    if (!(req.url === "/json" || req.url === "/json/version")) console.log(`${req.method} request for ${req.url}`);
    next();
};

const addStoreToRequestPipeline = (req, res, next) => {
    req.store = serverStore;
    next();
};

const respond = (req, res) => {
    res.set("Access-Control-Allow-Origin", "*");
    res.status(200).send("ok");

};

export default express()
    .use(cors())
    .use(logger)
    .use(bodyParser.json())
    .use(addStoreToRequestPipeline)
    .use("/api", api)
    .use(respond);
