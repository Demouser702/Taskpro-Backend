// const app = require("./app");
// const mongoose = require("mongoose");

// const { DB_URI } = process.env;
// console.log(DB_URI);

// mongoose
//   .connect(DB_URI)
//   .then(() => {
//     app.listen(3000, () => {
//       console.log("Connected to MongoDB");
//     });
//   })
//   .catch((error) => {
//     console.log(error.message);
//     process.exit(1);
//   });
// require("dotenv").config(); // Load environment variables from .env file

// const app = require("./app");
// const mongoose = require("mongoose");

// const { DB_URI } = process.env;
// console.log(DB_URI);
// if (!DB_URI) {
//   console.error("Error: DB_URI is not defined in the environment variables");
//   process.exit(1);
// }

// console.log("DB_URI:", DB_URI);

// mongoose.set("strictQuery", true);

// async function connectToDatabase() {
//   try {
//     await mongoose.connect(DB_URI);
//     console.log("Connected to MongoDB!");
//     app.listen(3000, () => {
//       console.log("Server is running on port 3000");
//     });
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error);
//     process.exit(1);
//   }
// }

// connectToDatabase();

const { default: mongoose } = require("mongoose");
const app = require("./app");
require("dotenv").config();
const connectToDb = async () => {
  try {
    console.log(
      "Attempting to connect to MongoDB with URI:",
      process.env.DB_URI
    );
    await mongoose.connect(process.env.DB_URI);
    console.log("Connected to MongoDB");

    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};
connectToDb();
