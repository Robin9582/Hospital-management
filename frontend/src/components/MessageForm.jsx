import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const MessageForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleMessage = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:2500/api/v1/message/send",
        { firstName, lastName, email, phone, message },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      toast.success(response.data.message || "Message sent successfully!");
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch (error) {
      if (error.response) {
        // Server responded with an error
        toast.error(error.response.data.message || "Server error occurred.");
      } else if (error.request) {
        // No response received from the server
        toast.error("No response from server. Please check your connection.");
      } else {
        // Something else went wrong
        toast.error("An unexpected error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="container form-component message-form">
      <h2>Send Us A Message</h2>
      <form onSubmit={handleMessage}>
        <div>
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="number"
            placeholder="Mobile Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <textarea
          rows={7}
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <div style={{ justifyContent: "center", alignItems: "center" }}>
          <button type="submit">Send</button>
        </div>
      </form>
      <img src="/Vector.png" alt="vector" />
    </div>
  );
};

export default MessageForm;
