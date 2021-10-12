const csv = require("csv-parser");
const fs = require("fs");
const axios = require("axios");

const dataToAPI = [];

fs.createReadStream("./data/PatientSOS.csv").pipe(
  csv({ separator: ";" })
    .on("data", (row) => {
      const prepareData = {};
      prepareData.name = row.nome;
      prepareData.address = row.endereco;
      prepareData.birthDate = row.datanascimento;
      prepareData.doctorName = row.doutor;
      prepareData.appointmentDate = row.data_consulta;
      dataToAPI.push(prepareData);
    })
    .on("end", () => {
      axios.default
        .post("http://localhost:3000/import/fromCSV", dataToAPI)
        .then((res) => {
          console.log(res);
        })
        .catch((e) => {
          console.error(e);
        });
    })
);
