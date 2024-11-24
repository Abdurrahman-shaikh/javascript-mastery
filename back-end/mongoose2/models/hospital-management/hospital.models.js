import mongoose from "mongoose";

const hospitalSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  addressLine1: {
    type: String,
    required: true
  },
  addressLine2: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  pincode: {
    type: String,
    requred: true
  },
  specialisedIn: [
    {
      type: String
    }
  ]

}, { timestamps: true })

export const Hospital = mongoose.Model("Hospital", hospitalSchema);