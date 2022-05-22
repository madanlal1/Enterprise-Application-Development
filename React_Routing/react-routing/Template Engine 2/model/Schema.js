const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DataSchema = new Schema({fullname: String, password: String});
const Accounts = mongoose.model("Accounts", DataSchema);
module.exports = Accounts;