// Load environment variables
import * as dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;
const ONE_MINUTE_IN_MILLISECONDS = 60000;

export const signToken = (user) => {
  const payload = {
    // TODO: add sub, name, and exp claims
    sub: user.id,
    name: user.name,
    exp: Date.now() + ONE_MINUTE_IN_MILLISECONDS,
  };
  return jwt.sign(payload, JWT_SECRET);
};

export const verifyToken = (token) => {
  return null;
};

export const validateExpiration = (payload) => {
  if (Date.now() > payload.exp) {
    throw new Error("Token expired");
  }
};
