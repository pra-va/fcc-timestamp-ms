const express = require("express");
const router = express.Router();

router
    .get("/:date", (req, res) => {
        console.log(req.params.date)
        const date = new Date(Date.parse(req.params.date));
        res.json({
            unix: date.getTime(),
            utc: date.toUTCString()
        });
    });

module.exports = router;