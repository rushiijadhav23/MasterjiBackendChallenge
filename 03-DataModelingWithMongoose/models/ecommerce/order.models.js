import mongoose, { mongo } from "mongoose";

// this schema can be written in other file also but since this is used by order only so we wrote here
const orderItemSchema = new mongoose.Schema(
    {
        // pura product store krne ki jarurat nai hai we will just reference the id
        // mongodb generates a unique id bu default which is (_id)
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
        },
        quantity: {
            type: Number,
            required: true,
        },
    },
)

const orderSchema = new mongoose.Schema(
    {
        orderPrice: {
            type: Number,
            required: true,
        },
        customer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        // one order can have multiple orderitems
        // we need to define the orderitem schema
        orderItems: {
            // this is an array where multiple products can be ordered
            type: [orderItemSchema],
        },
        address: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            enum: ["PENDING", "CANCELLED", "DELIVERED"],
            default: "PENDING",
        },
    }, {timestamps: true}
)

export const Order = mongoose.model("Order", orderSchema)