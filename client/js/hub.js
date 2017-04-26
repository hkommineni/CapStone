import { Companies } from '../../collections/companies.js';

Template.hub.onCreated(function() {
    Meteor.subscribe('Companies');
});

Template.hub.helpers({
	firstFourCompanies: function() {
		var allCompanies = Companies.find({}).fetch();		
		
		var companies = [];
		for(var i = 0; i < 4; i++) {
			companies.push(allCompanies[i]);
		}
		
		return companies;
	},
	secondFourCompanies: function() {
		var allCompanies = Companies.find({}).fetch();
		
		var companies = [];
		for(var i = 4; i < 8; i++) {
			companies.push(allCompanies[i]);
		}
		
		return companies;
	}
});

Template.hub.events({
	'click .card'(event) {
		event.preventDefault();
		FlowRouter.go("/" + event.target.id);
		scroll(0, 0); // Will scroll it to the top of page
	}
});