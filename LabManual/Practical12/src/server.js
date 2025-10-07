const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static(__dirname));

// API endpoint
app.post("/calculate", (req, res) => {
  let { num1, num2, operation } = req.body;
  let result, error = null;

  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  if (isNaN(num1) || isNaN(num2)) {
    return res.json({ error: "❌ Please enter valid numbers!" });
  }

  switch (operation) {
    case "add": result = num1 + num2; break;
    case "subtract": result = num1 - num2; break;
    case "multiply": result = num1 * num2; break;
    case "divide":
      if (num2 === 0) {
        error = "⚠️ Cannot divide by zero!";
      } else {
        result = num1 / num2;
      }
      break;
    default: error = "❌ Invalid operation!";
  }

  res.json({ result, error });
});

app.listen(PORT, () => {
  console.log(`✅ Calculator running at http://localhost:${PORT}`);
});
