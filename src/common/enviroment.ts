export const enviroment = {
  application: {
    name: "HealthCare Test",
    version: "1.0.0",
    enviroment: process.env.NODE_ENV,
  },
  server: {
    port: process.env.SERVER_PORT || 3000,
  },
  database: {
    url: process.env.DB_URL || "sqlite::memory",
  },
};
