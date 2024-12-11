// import { Message } from "../models/messageSchema.js";
// import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
// import ErrorHandler from "../middlewares/error.js";

// export const sendMessage = catchAsyncErrors(async (req, res, next) => {
//     try {
//         // Destructure and validate required fields from req.body
//         const { firstName, lastName, email, phone, message } = req.body;

//         // Check if all fields are provided
//         if (!firstName || !lastName || !email || !phone || !message) {
//             return next(new ErrorHandler("Please fill full form!", 400));

//         }

//         // Create and save a new Message instance
//         const newMessage = new Message({ firstName, lastName, email, phone, message });
//         await newMessage.save();

//         // Respond with success
//         res.status(201).json({
//             success: true,
//             message: "Message sent successfully!",
//             data: newMessage,
//         });
//     } catch (error) {
//         // console.error("Error:", error);
//         res.status(500).json({ success: false, error: error.message });
//     }
// });










import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/error.js";
import { Message } from "../models/messageSchema.js";

export const sendMessage = catchAsyncErrors(async (req, res, next) => {
  const { firstName, lastName, email, phone, message } = req.body;
  if (!firstName || !lastName || !email || !phone || !message) {
    return next(new ErrorHandler("Please Fill Full Form!", 400));
  }
  await Message.create({ firstName, lastName, email, phone, message });
  res.status(200).json({
    success: true,
    message: "Message Sent!",
  });
});

export const getAllMessages = catchAsyncErrors(async (req, res, next) => {
  const messages = await Message.find();
  res.status(200).json({
    success: true,
    messages,
  });
});