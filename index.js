const express = require("express");
const cors = require("cors");
const app = express();
const port = 15000;
const hyper = require("hyperformula");

app.use(cors());
app.use(express.json());

const options = {
  licenseKey: "gpl-v3",
};

const data = [
  [1, 2, 3, 4, 5],
  [1, 10, 3, 4, "=SUM(A1:E1)"],
  [1, 2, "=B2*1.3", 4, 5],
];

const hyperInstance = hyper.HyperFormula.buildFromArray(data, options);

const resArr = [];

for (let index = 0; index < data.length; index++) {
  const row = data[index];

  for (let index = 0; index < row.length; index++) {
    const col = row[index];
    if (typeof col !== "number") {
      //   console.log("row", data.indexOf(row));
      //   console.log(row.indexOf(col));
      let mySum = hyperInstance.getCellValue({
        col: row.indexOf(col),
        row: data.indexOf(row),
        sheet: 0,
      });
      resArr.push(mySum);
      //   console.log("sum", mySum);
    }
  }
}

console.log(...resArr);

app.get("/", (req, res) => {
  res.json("hello");
});

app.listen(port, () => console.log(`${port} listen`));
