import mongoose from "mongoose";

const medicalRecordSchema = mongoose.Schema({}, { timestamps: true })

export const MedicalRecord = mongoose.Model("MedicalRecord", medicalRecordSchema);
