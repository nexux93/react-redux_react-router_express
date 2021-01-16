import C from "../constants.ts"
import {color} from "../redusers";
import deepFreeze from "deep-freeze";

describe("color Reduser", ()=> {
    test("ADD_COLOR success", ()=> {
        const state = {},
            action = {
            type: C.ADD_COLOR,
                id: 0,
                title: "test",
                color: "#fff102",
            },
            results = color(state, action);
        deepFreeze(state);
        deepFreeze(action);
        expect(results).toEqual({
                id: 0,
            title: "test",
            color: "#fff102",
            rating: 0
            })

    });
    test("RATE_COLOR success", ()=> {
        const state = {
                id: 0,
                title: "test",
                color: "#fff102",
                rating: 0
            },
            action = {
            type: C.RATE_COLOR,
                id: 0,
                rating: 3
            };
        deepFreeze(state);
        deepFreeze(action);
        expect(color(state, action)).toEqual({
            id: 0,
            title: "test",
            color:  "#fff102",
            rating: 3
        })
    });
});