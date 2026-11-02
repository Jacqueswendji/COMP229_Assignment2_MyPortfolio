
import Qualification from "../models/qualification.model.js";
import mongoose from "mongoose";

const list = async (req, res) => {
  try {
    const qualifications = await Qualification.find();
    return res.status(200).json(qualifications);
  } catch (err) {
    return res.status(500).json({
      error: "Could not retrieve qualifications",
    });
  }
};

const read = async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({
        error: "Invalid qualification ID",
      });
    }

    const qualification = await Qualification.findById(req.params.id);

    if (!qualification) {
      return res.status(404).json({
        error: "Qualification not found",
      });
    }

    return res.status(200).json(qualification);
  } catch (err) {
    return res.status(500).json({
      error: "Could not retrieve qualification",
    });
  }
};

const create = async (req, res) => {
  try {
    const qualification = new Qualification({
      title: req.body.title,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      completion: req.body.completion,
      description: req.body.description,
    });

    await qualification.save();
    return res.status(201).json(qualification);
  } catch (err) {
    return res.status(400).json({
      error: "Could not create qualification",
    });
  }
};

const update = async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({
        error: "Invalid qualification ID",
      });
    }

    const changes = {};
    const allowedFields = [
      "title",
      "firstname",
      "lastname",
      "email",
      "completion",
      "description",
    ];

    for (const field of allowedFields) {
      if (req.body[field] !== undefined) {
        changes[field] = req.body[field];
      }
    }

    const qualification = await Qualification.findByIdAndUpdate(
      req.params.id,
      { $set: changes },
      { new: true, runValidators: true }
    );

    if (!qualification) {
      return res.status(404).json({
        error: "Qualification not found",
      });
    }

    return res.status(200).json(qualification);
  } catch (err) {
    return res.status(400).json({
      error: "Could not update qualification",
    });
  }
};

const remove = async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({
        error: "Invalid qualification ID",
      });
    }

    const qualification = await Qualification.findByIdAndDelete(
      req.params.id
    );

    if (!qualification) {
      return res.status(404).json({
        error: "Qualification not found",
      });
    }

    return res.status(200).json({
      message: "Qualification deleted successfully",
    });
  } catch (err) {
    return res.status(500).json({
      error: "Could not delete qualification",
    });
  }
};

const removeAll = async (req, res) => {
  try {
    const result = await Qualification.deleteMany({});

    return res.status(200).json({
      message: "All qualifications deleted successfully",
      deletedCount: result.deletedCount,
    });
  } catch (err) {
    return res.status(500).json({
      error: "Could not delete qualifications",
    });
  }
};

export default { list, read, create, update, remove, removeAll };
