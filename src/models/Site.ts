import mongoose from 'mongoose';

const SiteSchema = new mongoose.Schema({
	baseUrl: {
		type: String,
	},
	isActive: {
		type: Boolean,
	},
	jobsCount: {
		type: Number,
	},
});

export default mongoose.models.Site || mongoose.model('Site', SiteSchema);
