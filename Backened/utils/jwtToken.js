export const generateToken = (user, message, statusCode, res) => {
  const token = user.generateJsonWebToken();

  const cookieName = user.role === "Admin" ? "adminToken" : "patientToken";

  let cookieExpireMilliseconds;
  try {
    // Safely parse COOKIE_EXPIRE environment variable
    cookieExpireMilliseconds = Number(process.env.COOKIE_EXPIRE) * 24 * 60 * 60 * 1000;
    if (isNaN(cookieExpireMilliseconds)) {
      throw new Error("Invalid COOKIE_EXPIRE value. Must be a number.");
    }
  } catch (error) {
    console.error("Error parsing COOKIE_EXPIRE:", error.message);
    cookieExpireMilliseconds = 24 * 60 * 60 * 1000; // Default to 1 day if error occurs
  }

  res
    .status(statusCode)
    .cookie(cookieName, token, {
      expires: new Date(Date.now() + cookieExpireMilliseconds),
      httpOnly: true,
    })
    .json({
      success: true,
      message,
      user,
      token,
    });
};
// export const generateToken = (user, message, statusCode, res) => {
//   const token = user.generateJsonWebToken();
//   const cookieName = user.role === "Admin" ? "adminToken": "patientToken";
//   res
//   .status(statusCode)
//   .cookie(cookieName, token, {
//   expires: new Date(
//   Date.now() + process.env.COOKIE_EXPIRE 24 60 60 1000
//   ),
//   })
//   .json({kl,;m n
//   success: true,
//   message,
//   user,
//   token,
//   });
//   };