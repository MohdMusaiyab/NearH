import express from "express";
import { createHospital } from "../controllers/hospitalControllers.js";
const router = express.Router();
// Creating a Hospital Route
router.post("/create-hospital", createHospital);
export default router;