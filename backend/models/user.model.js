import mongoose from 'mongoose'

const { Schema } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        trim: true,
        unique: true,
        match: [/^[A-Za-z0-9._]+$/, "Username must not contain spaces"]
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        match: [
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            "Please enter a valid email address"
        ]
    },
    password: {
        type: String,
        minLength: [8, "Password must be atleast 8 characters long"],
        required: true
    },
    isEmailVerified: {
        type: Boolean,
        default: false,
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    },
})

export const User = mongoose.model("user", userSchema);