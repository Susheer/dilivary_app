const mongoose = require("mongoose");
const schema = require("mongoose").Schema;
const DishMoel = new schema({
  name: String,
  icon: String,
});
module.exports = mongoose.model("Dish", DishMoel);
