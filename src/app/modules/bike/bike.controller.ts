import status from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { bikeServices } from "./bike.service";

const addBikeIntoDb = catchAsync(async (req, res) => {
  const result = await bikeServices.addBikeIntoDb(req.body);
  sendResponse(res, {
    statusCode: status.CREATED,
    success: true,
    message: "Bike added successfully",
    data: result,
  });
});
const getAllBikeFromDb = catchAsync(async (req, res) => {
  const result = await bikeServices.getAllBikeFromDb();
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Bikes fetched successfully",
    data: result,
  });
});
const getBikeByIdFromDb = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await bikeServices.getBikeByIdFromDb(id);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Bike fetched successfully",
    data: result,
  });
});

export const bikeControllers = {
  addBikeIntoDb,
  getAllBikeFromDb,
  getBikeByIdFromDb,
};
