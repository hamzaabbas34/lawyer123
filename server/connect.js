const mongoose = require("mongoose");

// Enable strict mode for queries
mongoose.set("strictQuery", true);
async function connectToMongoDB(url) {
  return mongoose.connect(url);
}

// Export the connectToMongoDB function
module.exports = {
  connectToMongoDB,
};
