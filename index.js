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

app.post("/", (req, res) => {
  const payload = req.body;

  const { formula } = payload;

  const data = JSON.parse(formula);
  const hyperInstance = hyper.HyperFormula.buildFromArray(data, options);

  console.log(data);
  const resArr = [];

  for (let index = 0; index < data.length; index++) {
    const row = data[index];

    for (let index = 0; index < row.length; index++) {
      const col = row[index];
      if (typeof col !== "number") {
        let mySum = hyperInstance.getCellValue({
          col: row.indexOf(col),
          row: data.indexOf(row),
          sheet: 0,
        });

        resArr.push(mySum);
      } else {
        resArr.push(col);
      }
    }
  }

  res.send({
    success: true,
    data: resArr,
  });

  //   res.json(JSON.stringify(resArr));
});

app.listen(port, () => console.log(`${port} listen`));
