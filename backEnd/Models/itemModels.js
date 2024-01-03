const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const items = new Schema({
  url: {
    type: [String],
    required: true,
  },
  nameItem: {
    type: String,
    required: true,
  },
  desc:{
    type: String,
    require: true,
  },
  found:{
    type: String,
    require: true,
  },
  submitter:{
    type: String,
    require: true,
  },
  timestamp: {
    type: String,
    default: Date.now,
  },
});

const itemModelo = mongoose.model("items", items);

module.exports = itemModelo;