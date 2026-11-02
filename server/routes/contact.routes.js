
import express from "express";
import contactCtrl from "../controllers/contact.controller.js";
import authCtrl from "../controllers/auth.controller.js";

const router = express.Router();

router
  .route("/api/contacts")
  .get(contactCtrl.list)
  .post(authCtrl.requireSignin, contactCtrl.create)
  .delete(authCtrl.requireSignin, contactCtrl.removeAll);

router
  .route("/api/contacts/:id")
  .get(contactCtrl.read)
  .put(authCtrl.requireSignin, contactCtrl.update)
  .delete(authCtrl.requireSignin, contactCtrl.remove);

export default router;
