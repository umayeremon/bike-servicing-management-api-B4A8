import status from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { customerServices } from "./customer.service";

const createCustomerIntoDb = catchAsync(async (req, res) => {
  const result = await customerServices.createCustomerIntoDb(req.body);
  sendResponse(res, {
    statusCode: status.CREATED,
    success: true,
    message: "Customer created successfully",
    data: result,
  });
});
const getAllCustomerFromDb = catchAsync(async (req, res) => {
  const result = await customerServices.getAllCustomerFromDb();
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Customers fetched successfully",
    data: result,
  });
});
const getCustomerByIdFromDb = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await customerServices.getCustomerByIdFromDb(id);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Customer fetched successfully",
    data: result,
  });
});
const updateCustomerIntoDb = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await customerServices.updateCustomerIntoDb(id, req.body);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Customer updated successfully",
    data: result,
  });
});
const deleteCustomerFromDb = catchAsync(async (req, res) => {
  const { id } = req.params;

  await customerServices.deleteCustomerFromDb(id);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Customer deleted successfully",
    data: null,
  });
});

export const customerControllers = {
  createCustomerIntoDb,
  getAllCustomerFromDb,
  getCustomerByIdFromDb,
  updateCustomerIntoDb,
  deleteCustomerFromDb,
};
