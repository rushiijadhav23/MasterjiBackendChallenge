import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        }
    }, {timestamps: true}
)

export const Category = mongoose.model("Category", categorySchema)
// in db the "Category" gets converted to pural "Categories" so we can write categories here right?
// yes we can but its not a good practice when we want to reference it somewhere it might conflict