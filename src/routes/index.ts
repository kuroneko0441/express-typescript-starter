import * as express from "express";
import {join} from "path";

const indexRouter = express.Router();

// 이렇게 /index 경로를 정의하고 *를 정의하면
// /index 경로일때, 나머지일때 모두 정상작동

indexRouter.get("/index", (req, res) => {
    return res
        .send("index");
});

indexRouter.get("*", (req, res) => {
    return res
        .sendFile(join(__dirname, "../app/index.html"));
});

export {indexRouter};
