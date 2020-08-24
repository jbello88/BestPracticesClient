
const repo = require('../db/repository')
const auth = require("../middleware/auth");

const validateUser = require('../validators/userValidator');
const express = require("express");
const router = express.Router();

router.get("/current", auth, async (req, res) => {
  const user = await repo.getUserById(req.user._id);
  res.send(user);
});

router.post("/", async (req, res) => {
  // validate the request body first
  console.log(req.body);
  const { error } = validateUser(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //find an existing user
  const userAlreadyExists = await repo.userWithThisEmailExists(req.body.email);
  if (userAlreadyExists) return res.status(400).send("User already registered.");

  user = await repo.createNewUser(req.body.name, req.body.email, req.body.password);

  const token = user.generateAuthToken();
  res.header("x-auth-token", token).send({
    _id: user._id,
    name: user.name,
    email: user.email
  });
});

module.exports = router;
