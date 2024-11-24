import mongoose from "mongoose";

const docterSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  salery: {
    type: String,
    required: true
  },
  qualification: {
    type: String,
    required: true
  },
  experienceInYears: {
    type: Number,
    default: 0
  },
  worksInHospitals: [{
    type: mongoose.Schema.Types.ObjectId;
    ref: "Hospital"
  }]
}, { timestamps: true })

export const Doctor = mongoose.Model("Doctor", docterSchema);
