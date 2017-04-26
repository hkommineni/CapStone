import { Mongo } from 'meteor/mongo';
import { AgentSchema } from './agents.js';

export const Videos = new Mongo.Collection('Videos');

VideoSchema = new SimpleSchema({
	companyId: {
		type: String,
		label: 'Company ID',
		optional: false
	},
	videoName: {
		type: String,
		label: 'Video Name',
		optional: false
	},
	live: {
		type: Boolean,
		label: 'Live',
		optional: false
	},
	datePublished: {
		type: Date,
		label: 'Date Published',
		optional: false
	},
	imageUrl: {
		type: String,
		label: 'Image URL',
		optional: false
	},
	videoUrl: {
		type: String,
		label: 'Video URL',
		optional: false
	},
	agent: {
		type: AgentSchema,
		label: 'Agent',
		optional: false
	}
});

Videos.attachSchema(VideoSchema);