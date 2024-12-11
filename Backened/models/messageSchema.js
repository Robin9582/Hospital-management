import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,  // Corrected spelling
        minLength: [3, "First Name Must Contain at least 3 Characters!"]
    },
    lastName:{
        type: String,
        required: true,  // Corrected spelling
        minLength: [3, "Last Name Must Contain at least 3 Characters!"]
    },
    email: {
        type: String,
        required: true,  // Corrected spelling
        validate: [validator.isEmail, "Please Provide A valid Email"]
    },
    phone: {
        type: String,
        required: true,  // Corrected spelling
        minLength: [11, "Phone Number Must Contain Exact 11 Digits!"],
        maxLength: [11, "Phone Number Must Contain Exact 11 Digits!"],
    },
    message: {
        type: String,
        required: true,  // Corrected spelling
        minLength: [10, "Message Must Contain Exact 10 Characters!"],
    },
});

export const Message = mongoose.model("Message", messageSchema);
