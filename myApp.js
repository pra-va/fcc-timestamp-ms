const express = require("express");
const router = express.Router();

router
    .get("/", (req, res) => {
        const date = new Date();
        res.json({
            unix: date.getTime(),
            utc: date.toUTCString()
        });
    })
    .get("/:date", (req, res) => {
        const dateParam = req.params.date;
        const timestampRegex = /^\d{13}$/;

        if (isNaN(Date.parse(dateParam)) === false) {
            const date = new Date(Date.parse(req.params.date));
            res.json({
                unix: date.getTime(),
                utc: date.toUTCString()
            });
        } else if (dateParam.match(timestampRegex)) {
            const date = new Date(Number(dateParam));
            res.json({
                unix: Number(dateParam),
                utc: date.toUTCString()
            });
        } else {
            res.json({
                error: "Invalid Date"
            })
        }
    });

module.exports = router;