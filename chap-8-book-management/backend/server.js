import app from "./src/app.js";
import "dotenv/config";

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`App running at: http://localhost:${PORT}`);
});
