import { Bike } from "../../../../generated/prisma";
import prisma from "../../../shared/prisma";

const addBikeIntoDb = async (payload: Bike) => {
  const result = await prisma.bike.create({
    data: payload,
  });
  return result;
};
const getAllBikeFromDb = async () => {
  const result = await prisma.bike.findMany();
  return result;
};
const getBikeByIdFromDb = async (id: string) => {
  const result = await prisma.bike.findUniqueOrThrow({
    where: {
      bikeId: id,
    },
  });
  return result;
};

export const bikeServices = {
  addBikeIntoDb,
  getAllBikeFromDb,
  getBikeByIdFromDb,
};
