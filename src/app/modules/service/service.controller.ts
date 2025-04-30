import status from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { serviceServices } from "./service.service";

const recordServiceIntoDb = catchAsync(async (req, res) => {
  const result = await serviceServices.recordServiceIntoDb(req.body);
  sendResponse(res, {
    statusCode: status.CREATED,
    success: true,
    message: "Service record created successfully",
    data: result,
  });
});
const getAllServiceRecordFromDb = catchAsync(async (req, res) => {
  const result = await serviceServices.getAllServiceRecordFromDb();
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Service records fetched successfully",
    data: result,
  });
});
const getServiceRecordByIdFromDb = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await serviceServices.getServiceRecordByIdFromDb(id);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Service record fetched successfully",
    data: result,
  });
});
const completeServiceIntoDb = catchAsync(async (req, res) => {
  const { id } = req.params;
  const { completionDate } = req.body;
  const result = await serviceServices.completeServiceIntoDb(
    id,
    completionDate
  );
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Service marked as completed",
    data: result,
  });
});

export const serviceControllers = {
  recordServiceIntoDb,
  getAllServiceRecordFromDb,
  getServiceRecordByIdFromDb,
  completeServiceIntoDb,
};
