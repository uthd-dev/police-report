import mongoose, { Schema } from 'mongoose';

const Report = new Schema({
    location: Object,
    createdOn: String,
});

export default mongoose.models.Report || mongoose.model("Report", Report, "reports");
