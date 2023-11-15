const express = require("express");
const cors = require("cors");

const app = express();

//add router
const contactsRouter = require("./app/routes/contact.route");

//add api error
const ApiError = require("./app/api-error");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({message: "Welcome to contact book application."});
});

//use router
app.use("/api/contacts", contactsRouter);

//use api error
app.use("./api/contacts", contactsRouter);

//handle 404 response
//khong co route khop voi yeu cau gui den
//goi next() chuyen sang middleware xu ly loi
app.use((req, res, next) => {
    return next(new ApiError(404, "Resource not found"));
});

//define error-handling middleware last, after other app.use() and routes calls
//sua loi trung gian (middleware xu ly loi tap trung)
//xu ly loi o cac doan code xu ly o cac route (goi next(error))
app.use((error, req, res, next) => {
    return res.status(error.statusCode || 500).json({
        message: error.message || "Internal Server Error",
    });
});

module.exports = app;