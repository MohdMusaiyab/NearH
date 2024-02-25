import express from "express";
import { createHospital ,updateHospital} from "../controllers/hospitalControllers.js";
const router = express.Router();
// Creating a Hospital Route
router.post("/create-hospital", createHospital);
router.put("/update/:id", updateHospital);
export default router;