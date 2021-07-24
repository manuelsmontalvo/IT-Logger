const { Router } = require("express");
const controllers = require("../controllers/techs");

const router = Router();

router.get("/techs", controllers.getTechs);
router.get("/techs/:id", controllers.getTech);
router.get("/techs/:id/logs", controllers.getTechLogs);
router.post("/techs", controllers.createTech);
router.put("/techs/:id", controllers.updateTech);
router.delete("/techs/:id", controllers.deleteTech);

module.exports = router;
