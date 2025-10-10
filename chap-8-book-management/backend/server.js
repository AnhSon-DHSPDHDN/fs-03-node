import app from "./src/app.js";
import "dotenv/config";
import { sequelize } from "./src/config/dbConnection.js";

const PORT = process.env.PORT;

app.listen(PORT, async () => {
  console.log(`App running at: http://localhost:${PORT}`);

  try {
    await sequelize.authenticate();
    console.log("Connect database successfully!");
  } catch (error) {
    console.log("Connect database failed!", error);
  }
});
