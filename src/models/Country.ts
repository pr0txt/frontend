import mongoose from 'mongoose';

const CountrySchema = new mongoose.Schema({
	name: {
		type: String,
	},
	sites: {
		type: Array,
	},
});

export default mongoose.models.Country || mongoose.model('Country', CountrySchema);
