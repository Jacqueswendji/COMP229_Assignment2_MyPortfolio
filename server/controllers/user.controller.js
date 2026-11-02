import User from "../models/user.model.js";
import extend from "lodash/extend.js";
import errorHandler from "./error.controller.js";

// Create a new user
const create = async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();
    return res.status(200).json({
      message: "Successfully signed up!",
    });
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

// Get all users
const list = async (req, res) => {
  try {
    const users = await User.find().select(
      "name email updated created"
    );
    return res.json(users);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

// Find a user by ID
const userByID = async (req, res, next, id) => {
  try {
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({
        error: "User not found",
      });
    }

    req.profile = user;
    next();
  } catch (err) {
    return res.status(400).json({
      error: "Could not retrieve user",
    });
  }
};

// Get one user
const read = (req, res) => {
  const user = req.profile.toObject();
  delete user.hashed_password;
  delete user.salt;

  return res.json(user);
};

// Update a user
const update = async (req, res) => {
  try {
    let user = req.profile;

    // Prevent direct modification of authentication internals
    const { _id, hashed_password, salt, ...updates } = req.body;
    user = extend(user, updates);
    user.updated = Date.now();

    await user.save();

    const result = user.toObject();
    delete result.hashed_password;
    delete result.salt;

    return res.json(result);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

// Delete one user
const remove = async (req, res) => {
  try {
    const user = req.profile;
    const result = user.toObject();

    await user.deleteOne();

    delete result.hashed_password;
    delete result.salt;

    return res.json(result);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

// Delete all users
// This controller must only be exposed through an
// appropriately protected route.
const removeAll = async (req, res) => {
  try {
    const result = await User.deleteMany({});

    return res.status(200).json({
      message: "All users deleted successfully",
      deletedCount: result.deletedCount,
    });
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

export default {
  create,
  list,
  userByID,
  read,
  update,
  remove,
  removeAll,
};
