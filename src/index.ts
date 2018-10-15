import * as express from "express";
import {join} from "path";
import {indexRouter} from "./routes";

if (process.env.PORT === undefined) {
    console.error("PORT is not defined.");
    process.exit();
}

const port = parseInt(process.env.PORT, 10);

const app = express();

app.use("/static", express.static(join(__dirname, "../app/static")));
app.use("/", indexRouter);

app.listen(port, () => {
    console.log("server is listening on port " + port);
});
