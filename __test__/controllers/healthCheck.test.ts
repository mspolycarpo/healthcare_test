import { expect, test } from "@jest/globals";
import "jest";
import * as request from "supertest";
import { app } from "../../src/server/server";
const basePath = "/healthCheck";

test("Health Check", async () => {
  const res = await request(app).get(basePath);
  expect(res.status).toBe(200);
});
