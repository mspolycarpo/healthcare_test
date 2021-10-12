import { expect, test } from "@jest/globals";
import "jest";
import { loremIpsum } from "lorem-ipsum";
import * as request from "supertest";
import { randomDate } from "../../src/common/misc";
import { app } from "../../src/server/server";
const basePath = "/import";

const mockData = () => {
  return {
    name: loremIpsum(),
    address: loremIpsum(),
    birthDate: randomDate(new Date(2012, 0, 1), new Date(2021, 1, 1)),
    doctorName: loremIpsum(),
    appointmentDate: randomDate(new Date(2021, 1, 2), new Date()),
  };
};

test("Import - happy ending", async () => {
  const res = await request(app).post(`${basePath}/fromCSV`).send([mockData()]);
  expect(res.status).toBe(201);
});

test("Import - fail due to validation error", async () => {
  const mock = mockData();
  delete mock.name;
  const res = await request(app).post(`${basePath}/fromCSV`).send([mock]);
  expect(res.status).toBe(400);
});
