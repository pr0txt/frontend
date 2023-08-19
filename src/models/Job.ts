import mongoose from 'mongoose';

const JobSchema = new mongoose.Schema({
	name: {
		type: String,
	},
	date: {
		type: Date,
	},
	count: {
		type: Number,
	},
});

export default mongoose.models.Job || mongoose.model('Job', JobSchema);
