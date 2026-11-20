import express from "express";
import { createApplication, getApplications } from "../controllers/applicationController.js";

const router = express.Router();

// 1. Create Application
router.post("/", createApplication);

// 2. Get All Applications
router.get("/", getApplications);


export default router;