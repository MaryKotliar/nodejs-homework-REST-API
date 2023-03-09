const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");
const Joi = require("joi");
const subscriptionVariants = ["starter", "pro", "business"];
const userSchema = new Schema(
  {
    password: {
      type: String,
      required: [true, "Set password for user"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    subscription: {
      type: String,
      enum: subscriptionVariants,
      default: "starter",
    },
    token: String,
    default: "",
  },
  { versionKey: false, timestamps: true }
);
userSchema.post("save", handleMongooseError);
const addSchema = Joi.object({
  password: Joi.string().required(),
  email: Joi.string().required(),
  subscription: Joi.string().valid(...subscriptionVariants),
});
const updateSubscriptionSchema = Joi.object({
  subscription: Joi.string()
    .valid(...subscriptionVariants)
    .required(),
});
const schemas = {
  addSchema,
  updateSubscriptionSchema,
};

const User = model("user", userSchema);
module.exports = {
  User,
  schemas,
};
