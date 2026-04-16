import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        // we can write in this way but there is one more way to write it
        // username: String,
        // email: String, 
        // isActive: Boolean

        username: {
            type: String,
            required: true, 
            unique: true, 
            lowercase: true,
        },
        email: {
            type: String, 
            required: true,
            unique: true,
            lowercase: true,
        },
        password: {
            type: String,
            // pass a custom message with array
            required: [true, "password is requried"]
        }
    }, {timestamps: true}
)

export const User = mongoose.model("User", userSchema) 
// line 3 also has a schema why can we export that? bcoz this is mongoose here schema is exported in different way

// This "User" a name of the schema when stored in mongodb gets to lowercase and in pural form, its a mongodb thing which is done