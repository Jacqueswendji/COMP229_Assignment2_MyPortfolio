
import Contact from "../models/contact.model.js";
import mongoose from "mongoose";

const list = async (req, res) => {
  try {
    const contacts = await Contact.find();
    return res.status(200).json(contacts);
  } catch (err) {
    return res.status(500).json({
      error: "Could not retrieve contacts",
    });
  }
};

const read = async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({ error: "Invalid contact ID" });
    }

    const contact = await Contact.findById(req.params.id);

    if (!contact) {
      return res.status(404).json({ error: "Contact not found" });
    }

    return res.status(200).json(contact);
  } catch (err) {
    return res.status(500).json({
      error: "Could not retrieve contact",
    });
  }
};

const create = async (req, res) => {
  try {
    const contact = new Contact({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
    });

    await contact.save();
    return res.status(201).json(contact);
  } catch (err) {
    return res.status(400).json({
      error: "Could not create contact",
    });
  }
};

const update = async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({ error: "Invalid contact ID" });
    }

    const changes = {};
    for (const field of ["firstname", "lastname", "email"]) {
      if (req.body[field] !== undefined) {
        changes[field] = req.body[field];
      }
    }

    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { $set: changes },
      { new: true, runValidators: true }
    );

    if (!contact) {
      return res.status(404).json({ error: "Contact not found" });
    }

    return res.status(200).json(contact);
  } catch (err) {
    return res.status(400).json({
      error: "Could not update contact",
    });
  }
};

const remove = async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({ error: "Invalid contact ID" });
    }

    const contact = await Contact.findByIdAndDelete(req.params.id);

    if (!contact) {
      return res.status(404).json({ error: "Contact not found" });
    }

    return res.status(200).json({
      message: "Contact deleted successfully",
    });
  } catch (err) {
    return res.status(500).json({
      error: "Could not delete contact",
    });
  }
};

const removeAll = async (req, res) => {
  try {
    const result = await Contact.deleteMany({});

    return res.status(200).json({
      message: "All contacts deleted successfully",
      deletedCount: result.deletedCount,
    });
  } catch (err) {
    return res.status(500).json({
      error: "Could not delete contacts",
    });
  }
};

export default { list, read, create, update, remove, removeAll };
