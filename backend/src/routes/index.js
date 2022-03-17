const { Router } = require("express");
const router = Router();

const { getResults } = require("../controllers/index");
const { getStart } = require("../controllers/index");

router.get("/", getStart);
router.get("/api/search", getResults);

module.exports = router;
