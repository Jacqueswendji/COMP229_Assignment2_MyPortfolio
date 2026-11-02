
import Project from "../models/project.model.js";
import mongoose from "mongoose";

const list = async (req, res) => {
  try {
    const projects = await Project.find();
    return res.status(200).json(projects);
  } catch (err) {
    return res.status(500).json({
      error: "Could not retrieve projects",
    });
  }
};

const read = async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({ error: "Invalid project ID" });
    }

    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({ error: "Project not found" });
    }

    return res.status(200).json(project);
  } catch (err) {
    return res.status(500).json({
      error: "Could not retrieve project",
    });
  }
};

const create = async (req, res) => {
  try {
    const project = new Project({
      title: req.body.title,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      completion: req.body.completion,
      description: req.body.description,
    });

    await project.save();
    return res.status(201).json(project);
  } catch (err) {
    return res.status(400).json({
      error: "Could not create project",
    });
  }
};

const update = async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({ error: "Invalid project ID" });
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

    const project = await Project.findByIdAndUpdate(
      req.params.id,
      { $set: changes },
      { new: true, runValidators: true }
    );

    if (!project) {
      return res.status(404).json({ error: "Project not found" });
    }

    return res.status(200).json(project);
  } catch (err) {
    return res.status(400).json({
      error: "Could not update project",
    });
  }
};

const remove = async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({ error: "Invalid project ID" });
    }

    const project = await Project.findByIdAndDelete(req.params.id);

    if (!project) {
      return res.status(404).json({ error: "Project not found" });
    }

    return res.status(200).json({
      message: "Project deleted successfully",
    });
  } catch (err) {
    return res.status(500).json({
      error: "Could not delete project",
    });
  }
};

const removeAll = async (req, res) => {
  try {
    const result = await Project.deleteMany({});

    return res.status(200).json({
      message: "All projects deleted successfully",
      deletedCount: result.deletedCount,
    });
  } catch (err) {
    return res.status(500).json({
      error: "Could not delete projects",
    });
  }
};

export default { list, read, create, update, remove, removeAll };
