import { capitalizeFirstLetter } from "../common/misc";
import Import from "../models/importModel";
const moment = require("moment");
export const bulkCreate = async (
  data: Array<{
    name: string;
    address: string;
    birthDate: string;
    doctorName: string;
    appointmentDate: string;
  }>
) => {
  const preparedData = [];
  data.forEach((d) => {
    d.name = d.name ? capitalizeFirstLetter(d.name) : null;
    d.doctorName = d.doctorName ? capitalizeFirstLetter(d.doctorName) : null;
    d.address = d.address ? capitalizeFirstLetter(d.address) : null;
    d.birthDate = d.birthDate
      ? new Date(d.birthDate).toISOString().split("T")[0]
      : null;
    d.appointmentDate = d.appointmentDate
      ? new Date(d.appointmentDate).toISOString().split("T")[0]
      : null;
    preparedData.push(d);
  });
  const newPatients = await Import.bulkCreate(preparedData);
  return newPatients;
};

export const listAll = async () => {
  return await Import.findAll();
};
