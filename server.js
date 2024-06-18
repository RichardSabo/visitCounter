const {readFileSync, writeFileSync} = require("fs");

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  const counter = readFileSync("./count.txt", "utf8");
  console.log("Counter:", counter);
  const newCounter = parseInt(counter) + 1;
  writeFileSync("./count.txt", newCounter.toString());

  res.send(`
        <!DOCTYPE html>
        <html>
            <head>
                <title>Counter</title>
            </head>
            <body>
                <h1>Counter: ${newCounter}</h1>
            </body>
        </html>
    `);
});

app.listen(3000, () => console.log("Server is running on port 3000"));
