import { Router } from "express";
import { serviceControllers } from "./service.controller";

const router = Router();

router.post("/", serviceControllers.recordServiceIntoDb);
router.get("/", serviceControllers.getAllServiceRecordFromDb);
router.get("/:id", serviceControllers.getServiceRecordByIdFromDb);
router.put("/:id/complete", serviceControllers.completeServiceIntoDb);

export const serviceRoutes = router;
