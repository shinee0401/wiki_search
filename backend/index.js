const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const db = require("./models");
db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

app.get('/', (req, res) => {
  res.send('Hello from the updated backend!');
});

require("./routes/histories.routes.js")(app);

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`);
});
