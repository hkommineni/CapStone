import { Agents } from '../../collections/agents.js';
import { Videos } from '../../collections/videos.js';
import { Companies } from '../../collections/companies.js';

Template.livestream.onCreated(function() {
    Meteor.subscribe('Agents');
	Meteor.subscribe('Videos');
	Meteor.subscribe('Companies');
});

Template.livestream.helpers({
	videoName: function() {
		var video = Videos.findOne({_id: FlowRouter.getParam('id')});

		if(video != undefined) {
			return video.videoName;
		}
	},
	videoUrl: function() {
		var video = Videos.findOne({_id: FlowRouter.getParam('id')});

		if(video != undefined) {
			return video.videoUrl;
		}
	},
	live: function() {
		var video = Videos.findOne({_id: FlowRouter.getParam('id')});

		if(video != undefined) {
			return video.live;
		}
	},
	agentLivestream: function() {
		var video = Videos.findOne({_id: FlowRouter.getParam('id')});

		if(video == undefined) {
			var agent = Agents.findOne({_id: FlowRouter.getParam('id')});

			if(agent != undefined) {
				return true;
			}
		}

		return false;
	},

	agentId: function() {
		var video = Videos.findOne({_id: FlowRouter.getParam('id')});

		if(video == undefined) {
			var agent = Agents.findOne({_id: FlowRouter.getParam('id')});
			return agent._id;
		}

		return video.agent._id;
	},
	companyName: function() {
		var company = Companies.findOne({_id: FlowRouter.getParam('companyId')});

		if(company != undefined) {
			return company.companyName;
		}
	}
});

Template.livestream.events({
	'change .uploadInput'(event) {
		event.target.value = '';
	}
});
