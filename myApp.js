var express = require("express");
var router = express.Router();

console.log("hello world");

// app.use(express.urlencoded({extended: false}));
// app.use(express.json());
// app.use((req, res, next) => {
//     console.log(`${req.method} ${req.path} ${req.params} ${req.ip}`);
//     next();
// });

router
    .get("/:date", (req, res) => {
        const dateArr = req.params.date.split("-");
        const date = new Date(dateArr[0], dateArr[1], dateArr[2]);
        res.json({
            unix: date.getTime(),
            utc: date.toUTCString()
        });
    });

module.exports = router;