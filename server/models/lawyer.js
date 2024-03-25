const mongoose = require("mongoose");

const lawyerSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },

    experience: {
      type: String,
      required: true,
    },
    experienceYear: {
      type: String,
      required: true,
    },
    cnicNo: {
      type: String,
      required: true,
    },
    qualifications: {
      type: String,
      required: true,
    },
    areaofExpertise: {
      type: String,
      required: true,
    },
    skypeId :{
      type : String
    },
    imaga1 :{
      type :String
    },
    imaga2 :{
      type :String
    },
    imaga3 :{
      type :String
    },
    imaga4 :{
      type :String
    },
    visitHistory: [{ timestamp: { type: Number } }],
  },
  { timestamps: true }
);

const lawyer = mongoose.model("lawyer", lawyerSchema);

module.exports = lawyer;
