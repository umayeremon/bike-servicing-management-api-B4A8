import { Router } from "express";
import { customerControllers } from "./customer.controller";

const router = Router();

router.post("/", customerControllers.createCustomerIntoDb);
router.get("/", customerControllers.getAllCustomerFromDb);
router.get("/:id", customerControllers.getCustomerByIdFromDb);
router.put("/:id", customerControllers.updateCustomerIntoDb);
router.delete("/:id", customerControllers.deleteCustomerFromDb);

export const customerRoutes = router;
