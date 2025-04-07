const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["employee", "client"], required: true }, 
  
  profilePicture: { type: String, default: "" },

  dob: { type: Date },
  address: { type: String },
  joiningDate: { type: Date },
  position: { type: String },
  monthlySalary: { type: Number },
  pension: { type: Number },
  taxDeductions: { type: Number },

  servicesUsed: [{ type: String }],
  productsUsed: [{ type: String }],
  billingHistory: [
    {
      amount: Number,
      status: { type: String, enum: ["pending", "paid"] },
      date: Date,
    },
  ],
});

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

const UserModel = mongoose.model("User", UserSchema);
module.exports = UserModel;
