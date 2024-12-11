import mongoose from "mongoose";

export const dbConnection = () => {
  const uri = process.env.MONGO_URI;  // Make sure this is loading correctly
  if (!uri) {
    console.log("Mongo URI is not defined. Please check your .env file.");
    return;
  }

  mongoose
    .connect(uri, { dbName: "Hospital_Management" })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log(`Some error occurred while connecting to the database: ${err}`);
    });
};
