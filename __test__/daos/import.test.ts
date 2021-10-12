import "jest";
import { connection } from "../../src/database/config";
import { loremIpsum } from "lorem-ipsum";
import * as dao from "../../src/daos/importDao";
import Import from "../../src/models/importModel";
import { randomDate } from "../../src/common/misc";
const moment = require("moment");

const mockData = () => {
  return {
    name: loremIpsum(),
    address: loremIpsum(),
    birthDate: randomDate(new Date(2012, 0, 1), new Date(2021, 1, 1)),
    doctorName: loremIpsum(),
    appointmentDate: randomDate(new Date(2021, 1, 2), new Date()),
  };
};

test("Bulk Create - happy ending", async () => {
  const arr = [];

  for (let index = 0; index < 100; index++) {
    arr.push(mockData());
  }

  const patients = await dao.bulkCreate(arr);

  expect(patients.length).toBe(100);
});

test("Bulk Create - birthDate always be ISO ", async () => {
  let mock = mockData();
  mock.birthDate = "10.01.2010";
  const patient = await dao.bulkCreate([mock]);
  expect(patient[0].birthDate).toBe(
    new Date(mock.birthDate).toISOString().split("T")[0]
  );
});

test("Bulk Create - appointmentDate any date format accepect ", async () => {
  let mock = mockData();
  mock.appointmentDate = "10.01.2010";
  const patient = await dao.bulkCreate([mock]);
  expect(patient[0].appointmentDate).toBe(
    new Date(mock.appointmentDate).toISOString().split("T")[0]
  );
});

test("Bulk Create - Error on missing field ", async () => {
  let mock = mockData();
  delete mock.appointmentDate;
  try {
    await dao.bulkCreate([mock]);
  } catch (e) {
    expect(e.name).toBe("SequelizeUniqueConstraintError");
  }
});

beforeAll(async () => {
  await connection.drop();

  Import.sync();
});

afterAll(async () => {});
