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
const app = require("./app");
const mongoose = require("mongoose");

const { DB_URI } = process.env;
console.log(DB_URI);

mongoose.set("strictQuery", true);

async function connectToDatabase() {
  try {
    await mongoose.connect(DB_URI);
    console.log("Connected to MongoDB!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
}

connectToDatabase();
