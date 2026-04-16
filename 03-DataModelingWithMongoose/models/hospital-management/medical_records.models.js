import mongoose from "mongoose";

const medicalRecordSchema = new mongoose.Schema(
    {
        patientName: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Patient",
        },
        doctorsConsulted: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Doctor",
            },
        ],
        symptoms: {
            type: String,
            required: true,
        },
        diagnosis: {
            type: String,
            required: true,
        },

    }, {timestamps: true}
)

export const MedicalRecord = mongoose.model("MedicalRecord", medicalRecordSchema)