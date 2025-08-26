import User from "../models/User.js";

export const register = async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.json({ message: "User registered" });
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  if (!user) return res.status(401).json({ error: "Invalid credentials" });
  res.json({ message: "Login success", user });
};
