const { model } = require("mongoose");

const {HoldingSchema} = require('./schemas/HoldingsSchema');

const HoldingModel = new model("holding", HoldingSchema);

model.exports = {HoldingModel};