import app from "./App.js";
import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const port = process.env.PORT || 2501; // Default to 3000 if PORT is not found

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
