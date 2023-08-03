const express = require("express");
const { newUser, loginUser, profile } = require("../controllers/userController");
const router = express.Router();

router.post("/api/auth/register", newUser);

router.post("/api/auth/login", loginUser);

router.get("/api/profile", profile);

module.exports = router;