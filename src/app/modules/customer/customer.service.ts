import { Customer } from "../../../../generated/prisma";
import prisma from "../../../shared/prisma";

const createCustomerIntoDb = async (payload: Customer) => {
  const result = await prisma.customer.create({
    data: payload,
  });
  return result;
};
const getAllCustomerFromDb = async () => {
  const result = await prisma.customer.findMany();
  return result;
};
const getCustomerByIdFromDb = async (id: string) => {
  const result = await prisma.customer.findUniqueOrThrow({
    where: {
      customerId: id,
    },
  });
  return result;
};
const updateCustomerIntoDb = async (id: string, payload: Partial<Customer>) => {
  const result = await prisma.customer.update({
    where: {
      customerId: id,
    },
    data: payload,
  });
  return result;
};
const deleteCustomerFromDb = async (id: string) => {
  const result = await prisma.customer.delete({
    where: {
      customerId: id,
    },
  });
  return result;
};

export const customerServices = {
  createCustomerIntoDb,
  getAllCustomerFromDb,
  getCustomerByIdFromDb,
  updateCustomerIntoDb,
  deleteCustomerFromDb,
};
