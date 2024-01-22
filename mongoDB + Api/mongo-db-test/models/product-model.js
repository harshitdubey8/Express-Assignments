//Import  Mongoose Module
var mongoose = require("mongoose");

// Connect to Mongodb  database(testDb is database name)
mongoose.connect("mongodb://127.0.0.1:27017/mphasis235");

// Create  schema
var Schema = mongoose.Schema;

// Schema properties should be match mongodb collection properites
var ProductModelSchema = new Schema(
  {
    name: Schema.Types.String,
    price: Schema.Types.String,
    quantity: Schema.Types.String,
  },
  { versionKey: false }
);

// Create Model Object
// "student"   --- collection name in mongodb
var ProductModel = mongoose.model("product", ProductModelSchema);

// Exporting ProductModel
module.exports = ProductModel;
