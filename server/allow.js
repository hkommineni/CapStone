import { Meteor } from 'meteor/meteor';

import { Agents } from '../collections/agents.js';
import { Videos } from '../collections/videos.js';
import { Companies } from '../collections/companies.js';

export function allowAll() {
	Agents.allow({
		'insert': function(agentId, doc) {
			return true;
		},
		'update': function(agentId, doc) {
			return true;
		},
		'remove': function(agentId, doc) {
			return true;
		}
	});
	
	Videos.allow({
		'insert': function(videoId, doc) {
			return true;
		},
		'update': function(videoId, doc) {
			return true;
		},
		'remove': function(videoId, doc) {
			return true;
		}
	});
	
	Companies.allow({
		'insert': function(companyId, doc) {
			return true;
		},
		'update': function(companyId, doc) {
			return true;
		},
		'remove': function(companyId, doc) {
			return true;
		}
	});
}