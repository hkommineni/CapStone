import { Agents } from '../../collections/agents.js';
import { Videos } from '../../collections/videos.js';
import { Companies } from '../../collections/companies.js';

Template.corporateAccount.onCreated(function() {
    Meteor.subscribe('Agents');
	Meteor.subscribe('Videos');
	Meteor.subscribe('Companies');
});

Template.corporateAccount.helpers({
	agents: function() {
		var companyId = FlowRouter.getParam('companyId');

		var allAgents = Agents.find({}).fetch();
		
		var agents = [];
		for(var i = 0; i < allAgents.length; i++) {
			var agent = allAgents[i];
			if(agent.companyId == companyId) {
				agents.push(agent)
			}
		}
		
		agents.sort(function(a, b) {
			return a.waitTime - b.waitTime;
		});
		
		return agents;
	},
	liveVideos: function() {
		var companyId = FlowRouter.getParam('companyId');

		var liveVideosData = [];
		
		var allVideos = Videos.find({}).fetch();		
		for(var i = 0; i < allVideos.length; i++) {
			var video = allVideos[i];
									
			if(video.live && video.companyId == companyId) {
				liveVideosData.push(video);
			}
		}
		
		return liveVideosData;
	},
	nonLiveVideos: function() {
		var companyId = FlowRouter.getParam('companyId');
				
		var nonLiveVideosData = [];
		
		var allVideos = Videos.find({}).fetch();
		for(var i = 0; i < allVideos.length; i++) {
			var video = allVideos[i];
			
			if(!video.live && video.companyId == companyId) {
				nonLiveVideosData.push(video);
			}
		}
		
		return nonLiveVideosData;
	},
	companyName: function() {
		var companyId = FlowRouter.getParam('companyId');
		
		return Companies.findOne({_id: companyId}).companyName;
	},
	companyShortName: function() {
		var companyId = FlowRouter.getParam('companyId');
		
		return Companies.findOne({_id: companyId}).shortName;
	}
});

Template.corporateAccount.events({
	'click .clickable-video'(event) {
		event.preventDefault();
		
		var companyId = FlowRouter.getParam('companyId');
		FlowRouter.go("/" + companyId + "/livestream/" + event.target.id);
		scroll(0, 0); // Will scroll it to the top of page
	}
});