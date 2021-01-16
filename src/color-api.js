import {Router} from "express";
import C from "./constants.ts";
import {v4} from "uuid";

const dispatchAndRespond = (req, res, action) => {
    req.store.dispatch(action);
    res.status(200).json(action);
};
const router = Router();

router.get("/colors", (req, res) => {
    res.set("Access-Control-Allow-Origin",  "*");
    res.set("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.status(200).json(req.store.getState());
});

router.post("/colors", (req, res) => {
    console.log("post");
    dispatchAndRespond(req, res, {
        type: C.ADD_COLOR,
        id: v4(),
        title: req.body.title,
        color: req.body.color,
        timestamp: new Date().toString()
    });
});

router.put("/color/:id", (req, res) => {
    console.log("put");
    dispatchAndRespond(req, res, {
        type: C.RATE_COLOR,
        id: req.params.id,
        rating: parseInt(req.body.rating)
    });
});

router.delete("/color/:id", (req, res) => {
    console.log("delete");
    dispatchAndRespond(req, res, {
        type: C.REMOVE_COLOR,
        id: req.params.id
    });
});

export default router;