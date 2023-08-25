const { Router } = require("express");
const router = Router();

const userRouter = require("./userRouter");
const blogRouter = require("./blogRouter");
const adminRouter = require("./adminRouter");
const organizationRouter = require("./organizationRouter");
const profileRoutes = require("./profileRoutes");

router.use("/user", userRouter);
router.use("/blog", blogRouter);
router.use("/user", profileRoutes);
router.use("/", organizationRouter);
router.use("/admin", adminRouter);

module.exports = router;
