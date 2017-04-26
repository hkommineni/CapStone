import { Mongo } from 'meteor/mongo';

export const Agents = new Mongo.Collection('Agents');

export const AgentSchema = new SimpleSchema({
	companyId: {
		type: String,
		label: 'Company ID',
		optional: false
	},
	firstName: {
		type: String,
		label: 'First Name',
		optional: false
	},
	lastName: {
		type: String,
		label: 'Last Name',
		optional: false
	},
	email: {
		type: String,
		label: 'Email',
		optional: false
	},
	phoneNumber: {
		type: String,
		label: 'Phone Number',
		optional: false
	},
	videoLink: {
		type: String,
		label: 'Video Link',
		optional: false
	},
	imageUrl: {
		type: String,
		label: 'Image URL',
		optional: false
	},
	available: {
		type: Boolean,
		label: 'Available',
		optional: false
	},
	waitTime: {
		type: Number,
		label: 'Wait Time',
		optional: false,
		decimal: false
	}
});

Agents.attachSchema(AgentSchema);