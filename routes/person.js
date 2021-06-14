const express = require("express");
const router = express.Router();
const Person = require("../models/Person");

// path : http://localhost:5000/api/persons/addPerson
// add new person
// public
router.post("/addPerson", async (req, res) => {
  const { name, age, email, tel, favouriteFoods, photo, profession } = req.body;
  try {
    const newPerson = new Person({
      name,
      age,
      email,
      tel,
      favouriteFoods,
      photo,
      profession,
    });
    await newPerson.save();
    console.log(newPerson);
    res.json({ msg: `Person added`, newPerson });
  } catch (error) {
    console.log(error);
  }
});

// path : http://localhost:5000/api/persons/addMany
// add many person
// public

router.post("/createmany", async (req, res) => {
  try {
    let Arr = [...req.body];
    const user = await Person.create(Arr, (err, data) => {
      res.json({ msg: "user created", Arr });
      console.log(Arr);
    });
  } catch (err) {
    console.log(err);
  }
});
// path : http://localhost:5000/api/persons/
// get all person
// public

router.get("/", async (req, res) => {
  try {
    const users = await Person.find();
    res.json({ msg: "data fetched", users });
  } catch (error) {
    console.log(error);
  }
});
//http://localhost:5000/api/persons/findByName
// find person by name
//Public

router.get("/findByName", async (req, res) => {
  try {
    const users = await Person.find({
      name: req.body.name,
    });
    res.json({ msg: "data fetched", users });
  } catch (error) {
    console.log(error);
  }
});
//http://localhost:5000/api/persons/findOne
// Use model.findOne() to Return a Single Matching Document from Your Database
//Public

router.get("/findOne", async (req, res) => {
  try {
    const users = await Person.findOne({
      favouriteFoods: req.body.favouriteFoods,
    });
    res.json({ msg: "data fetched", users });
  } catch (error) {
    console.log(error);
  }
});

// path : http://localhost:5000/api/persons/
// get person by id
// accés public/ private

router.get("/:id", async (req, res) => {
  try {
    const users = await Person.findById(req.params.id);
    res.json({ msg: "data fetched", users });
  } catch (error) {
    console.log(error);
  }
});
//http://localhost:5000/api/persons/updatePerson
// simple update
//Public
router.put("/updatePerson/:id", async (req, res) => {
  try {
    const user = await Person.findOneAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res.json({ msg: "user edited", user });
  } catch (err) {
    console.log(err);
  }
});

//http://localhost:5000/api/persons/classicUpdate
//Updates by Running Find, Edit, then Save
// public
router.put("/classicUpdate/:id", (req, res) => {
  Person.findById(req.params.id, (err, data) => {
    if (err) {
      console.log(err);
    }
    const hum = data.favouriteFoods.push("humburger");
    res.json({ hum });
    data.save((err, data) => {
      if (err) {
        console.log(err);
      }

      console.log(data);
    });
  });
});

//http://localhost:5000/api/persons/findOneUpdate
//  Updates on a Document Using model.findOneAndUpdate()
// public
router.put("/findOneUpdate", async (req, res) => {
  try {
    const age = await Person.findOneAndUpdate(
      { name: req.body.name },
      { $set: { age: 20 } }
    );
    res.json({ msg: "age Edited", age });
  } catch (err) {
    console.log(err);
  }
});

//http://localhost:5000/api/persons/deletePerson
// Delete person
// public
router.delete("/deletePerson/:id", async (req, res) => {
  try {
    const user = await Person.findOneAndDelete({ _id: req.params.id });
    console.log(user);
    res.json({ msg: "user deleted", user });
  } catch (err) {
    console.log(err);
  }
});
//http://localhost:5000/api/persons/deletemany
//  Delete many person
// public

router.delete("/deletemany", async (req, res) => {
  try {
    const user = await Person.remove({ name: req.body.name });
    console.log(user);
    res.json({ msg: "users deleted", user });
  } catch (err) {
    console.log(err);
  }
});

//http://localhost:5000/api/persons/find/findchain
// Chain Search
// public
router.get("/find/findchain", (req, res) => {
  Person.find({ favouriteFoods: { $all: ["loubya"] } })
    .sort({ age: "asc" })
    .limit(4)
    .select({ name: true })
    .exec((err, data) => {
      if (err) {
        console.log(err);
      }

      console.log(data);
      res.json({ msg: "action done", data });
    });
});
module.exports = router;
