export const generateToken = (user, message, statusCode, res) => {
  const token = user.generateJsonWebToken();
  res
    .status(statusCode)
    .cookie("token", token, {
      expires: new Date(
        Date.now() + 86400 * 24 * 60 * 60 * 100
      ),
      httpOnly: true,
    })
    .json({
      success: true,
      message,
      user,
      token,
    });
};

