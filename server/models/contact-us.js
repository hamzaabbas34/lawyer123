const mongoose = require("mongoose");

const ContactUsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },

  },
  { timestamps: true }
);

const contactUs = mongoose.model("contact-us", ContactUsSchema);

module.exports = contactUs;
