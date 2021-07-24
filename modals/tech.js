const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Tech = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    logs: [{ type: Schema.Types.ObjectId, ref: "logs" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("techs", Tech);