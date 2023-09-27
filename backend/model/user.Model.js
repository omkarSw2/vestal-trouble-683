const mongoose = require("mongoose");
const allowedGenders = ["Male", "Female", "Other"];
const allowedStatuses = ["Active", "Suspended", "Deactivated"];
const allowedRoles = ["Admin", "User"];

const userSchema = mongoose.Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    pass: { type: String, required: true },
    phone: { type: String, required: true },
    date_of_birth: { type: Date, required: true },
    token: {
      type: String,
      default: "",
    },
    profile_Picture: {
      type: String,
      default: null,
    },
    gender: {
      type: String,
      enum: allowedGenders,
      required: true,
    },
    account_Status: {
      type: String,
      enum: allowedStatuses,
      required: true,
    },
    last_Login: {
      type: Date,
    },
    role: {
      type: String,
      enum: allowedRoles,
      default: "User",
    },
  },
  { versionKey: false, timestamps: true }
);

const UserModel = mongoose.model("user", userSchema);

module.exports = {
  UserModel,
};
