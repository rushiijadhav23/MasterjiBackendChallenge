import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
    {
        content: {
            type: String,
            required: true,
        },
        complete: {
            type: Boolean,
            default: false,
        },
        // this created by should have a relation with our user schema
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User" // this we should write compulsory
        },
        // THese are basically many in array so we use []
        subTodos: [
            {
                // this has a reference of subtodo models
                type: mongoose.Schema.Types.ObjectId,
                ref: "SubTodos"
            },
        ], // Array of Sub-Todos
    }, {timestamps: true}
)

export const Todo = mongoose.model("Todo", todoSchema)