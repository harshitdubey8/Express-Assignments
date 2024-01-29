//Import  Mongoose Module
var mongoose = require("mongoose");

// Connect to Mongodb  database(testDb is database name)
mongoose.connect("mongodb://127.0.0.1:27017/mphasis235");

// Create  schema
var Schema = mongoose.Schema;

// Schema properties should be match mongodb collection properites
var userDataModelSchema = new Schema(
  {
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
  },
  { versionKey: false }
);
// Create Model Object
// "users"   --- collection name in mongodb
var userModel = mongoose.model("users", userDataModelSchema);

// Exporting userModel
module.exports = userModel;
