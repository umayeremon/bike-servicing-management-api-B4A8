import { Service } from "../../../../generated/prisma";
import prisma from "../../../shared/prisma";

const recordServiceIntoDb = async (payload: Service) => {
  const result = await prisma.service.create({
    data: payload,
  });
  return result;
};
const getAllServiceRecordFromDb = async () => {
  const result = await prisma.service.findMany();
  return result;
};
const getServiceRecordByIdFromDb = async (id: string) => {
  const result = await prisma.service.findUniqueOrThrow({
    where: {
      serviceId: id,
    },
  });
  return result;
};
const completeServiceIntoDb = async (id: string, completionDate: Date) => {
  await prisma.service.findUniqueOrThrow({
    where: {
      serviceId: id,
    },
  });

  const result = await prisma.service.update({
    where: {
      serviceId: id,
    },
    data: {
      completionDate: completionDate ? new Date(completionDate) : new Date(),
      status: "done",
    },
  });

  return result;
};

export const serviceServices = {
  recordServiceIntoDb,
  getAllServiceRecordFromDb,
  getServiceRecordByIdFromDb,
  completeServiceIntoDb,
};
