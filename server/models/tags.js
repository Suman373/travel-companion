const {Schema,model} = require("mongoose");

const tagSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  place: {
    type: String,
    required: true,
    min: 2,
    max: 50
  },
  desc: {
    type: String,
    required: true,
    min: 5
  },
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 5
  },
  coordinates: {
    long: {
      type: Number,
      required: true
    },
    lati: {
      type: Number,
      required: true
    }
  }
}, {timestamps: true});

module.exports = model("Tag", tagSchema);
