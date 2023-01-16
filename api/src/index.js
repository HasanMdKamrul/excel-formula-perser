const express = require("express");
const cors = require("cors");
const app = express();
const port = 4000;
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

  const result = data.map((row) =>
    row.map((col) => {
      if (typeof col === "number") {
        return col;
      } else {
        return hyper.HyperFormula.buildFromArray(data, options).getCellValue({
          col: row.indexOf(col),
          row: data.indexOf(row),
          sheet: 0,
        });
      }
    })
  );

  res.send({
    success: true,
    data: result,
  });
});

app.listen(port, () => console.log(`${port} listen`));
