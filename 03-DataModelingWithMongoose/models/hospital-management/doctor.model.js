import mongoose from "mongoose";

const hoursInHospitalSchema = new mongoose.Schema(
    {
        hours: {
            type: Number,
            required: true,
        },
        hospitalName: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Hospital"
        },
    },
)

const doctorSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        salary: {
            type: String,
            required: true,
        },
        qualification: {
            type: String,
            required: true,
        },
        experienceInYears: {
            type: Number,
            default: 0,
        },
        //As a doctor works in multiple hospitals, hence array of hospitals
        worksInHospitals: [hoursInHospitalSchema],
    }, {timestamps: true}
)

export const Doctor = mongoose.model("Doctor", doctorSchema)

// multiple hospitals so array
// worksInHospitals: [
//     {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "Hospital"
//     },
// ],
// but if i want hrs working in each hospital then we need to define another schema