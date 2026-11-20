import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema(
    {
        company: {
            type: String,
            required: true,
            trim: true
        },

        role: {
            type: String,
            required: true,
            trim: true
        },

        location: {
            type: String,
            default: "Not specified"
        },

        jobType: {
            type: String,
            enum: ["Internship", "Full-time", "Part-time", "Contract"],
            default: "Full-time"
        },

        status: {
            type: String,
            enum: ["Applied", "Interview Pipeline", "Offer", "Rejected", "Withdrawn"],
            default: "Applied"
        },

        appliedDate: {
            type: Date,
            default: Date.now
        },

        jobUrl: {
            type: String,
            default: ""
        }
    },
    { timestamps: true }
);

const Application = mongoose.model("Application", applicationSchema);

export default Application;