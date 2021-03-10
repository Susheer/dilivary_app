const mongoose = require("mongoose");
const schema = require("mongoose").Schema;
const RestorentMoel = new schema({
  id: Number,
  name: String,
  rating: Number,
  categories: [{ type: mongoose.mongo.ObjectId, ref: "Dish" }],
  duration: String,
  location: Object,
  courier: Object,
  menu: Object,
});
module.exports = mongoose.model("Restorent", RestorentMoel);
