var mongoose = require("mongoose");
var AutoIncrement = require("mongoose-sequence")(mongoose);

const Schema = mongoose.Schema;

const PollSchema = new Schema({
  voter_name: String,
  estimation: Number,
});
PollSchema.plugin(AutoIncrement, { inc_field: "count", start_seq: 1 });

const Poll = mongoose.model("Polls", PollSchema);

module.exports = Poll;
