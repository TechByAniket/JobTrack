import Application from "../models/Application.js";
// ==============================
// Create Application
// ==============================
export const createApplication = async (req, res) => {
    try {
        // Application.create(req.body) takes the JSON data sent in the request, creates a MongoDB document using the Mongoose model, and saves it to the database
        const application = await Application.create(req.body);
        res.status(201).json({
            message: "Application created successfully",
            application
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to create application",
            error: error.message
        });
    }
};

//===========================
// Get All Applications
// ==========================
export const getApplications = async (req, res) =>{
    try {
        const application = await Application.find().sort({createdAt: -1});
        res.status(200).json(application);

    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch appliations",
            error: error.message
        });
    }
};

// ==========================
// Edit Application
// ==========================

export const updateApplication = async (req, res) => {

    try {
        console.log("Updating application in MongoDB...");

        const application = await Application.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!application) {
            return res.status(404).json({
                message: "Application not found"
            });
        }

        return res.status(200).json({
            message: "Application updated successfully",
            application
        });

    } catch (error) {
        console.error("Update Error:", error);

        return res.status(500).json({
            message: "Failed to update application",
            error: error.message
        });
    }
};


// ============================
// Delete Application by ID
// ============================
export const deleteApplication = async (req, res) => {
    try {
        const application = await Application.findByIdAndDelete(req.params.id);

        if (!application) {
            return res.status(404).json({
                message: "Application not found"
            });
        }

        res.status(200).json({
            message: "Application deleted successfully"
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to delete application",
            error: error.message
        });
    }
};