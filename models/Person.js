const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number },
  tel: { type: Number, unique: true },
  photo: { type: String, require: true },
  profession: { type: String, require: true },
  email: { type: String, default: "email@domain.com" },
  favouriteFoods: [
    {
      type: String,
    },
  ],
});
module.exports = mongoose.model("persons", ContactSchema);
