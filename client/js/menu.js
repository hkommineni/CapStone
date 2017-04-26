import { Companies } from '../../collections/companies.js';

Template.menu.onCreated(function() {
    Meteor.subscribe('Companies');
});

Template.menu.helpers({
	firstCompanyId: function() {
		return Companies.find({}).fetch()[0]._id;
	}
});

Template.menu.events({
	'click .menu-clickable'(event) {
		FlowRouter.go(event.target.id);
		scroll(0, 0); // Will scroll it to the top of page
	}
});