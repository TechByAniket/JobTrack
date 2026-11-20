import express from "express";
import { createApplication, deleteApplication, getApplications, updateApplication } from "../controllers/applicationController.js";

const router = express.Router();

// 1. Create Application
router.post("/", createApplication);

// 2. Get All Applications
router.get("/", getApplications);

// 3. Update Application
router.put("/:id", updateApplication);

//4. Delete Application
router.delete("/:id", deleteApplication);

export default router;