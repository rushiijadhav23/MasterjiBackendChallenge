import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema(
    {
        name: {
            type: String, 
            requried: true,
        },
        addressLine1: {
            type: String, 
            requried: true,
        },
        addressLine2: {
            type: String,
        },
        city: {
            type: String, 
            requried: true,
        },
        pincode: {
            type: String, // as many codes are in alphabets 
            requried: true,
        },
        specializedIn: [
            {
                type: String,
            }
        ],
        doctorsWorking: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Doctor",
            },
        ],
    }, {timestamps: true}
)

export const Hospital = mongoose.model("Hospital", hospitalSchema)