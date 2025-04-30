import { Router } from "express";
import { bikeControllers } from "./bike.controller";

const router = Router();

router.post("/", bikeControllers.addBikeIntoDb);
router.get("/", bikeControllers.getAllBikeFromDb);
router.get("/:id", bikeControllers.getBikeByIdFromDb);

export const bikeRoutes = router;
