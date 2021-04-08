const express = require("express");
const router = express.Router();
const auth_routes = require("./auth.routes");
const user_routes = require("./user.routes");
const profile_routes = require("./profile.routes");
const module_routes = require("./module.routes");
const template_routes = require("./template.routes");

router.use("/", auth_routes.router_login);
router.use((req, res, next) => {
    if (req.session.user) {
        next();
    } else {
        res.status(401).json({
            message: "Authrization failed! Please login"
        });
    }
});

router.use("/auth", auth_routes.router);
router.use("/user", user_routes);
router.use("/profile", profile_routes);
router.use("/module", module_routes);
router.use("/template", template_routes);

module.exports = router;