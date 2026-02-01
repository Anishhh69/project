import User from "../models/User.js";

const register = async (req, res) => {
  const { name, email, password, isAdmin } = req.body; //structure ho jasma chai req.body vanne object bata name,email,password ra iaAdmin nikaleko ho
  const user = await User.findOne({ email }); //unique hunxa email so finOne
  if (user) return res.status(400).send({ error: "User already registered!" });
//user already registered xaina vane 
  const registeredUser = await User.create({ name, email, password, isAdmin });
  res.status(201).send({ message: "User created!", user: registeredUser });
};
const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(404).send({ error: "User not found!" });
   const isMatch = await user.comparePassword(password);
  if (!isMatch) return res.status(400).send({ error: "Incorrect password!" });
  generateToken(user._id, res);
  res.send({
    message: "User logged in!",
    user: {
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
  });
};

export {register,login};