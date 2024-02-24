import express from "express";
import { signInController ,signUpController} from "../controllers/authController.js";
const router = express.Router();
// Creating a Hospital Route
router.post("/sign-in", signInController);
router.post("/sign-up", signUpController);
export default router;