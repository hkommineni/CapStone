var main = 'main';

FlowRouter.route('/:companyId', {
	name: 'home',
	action: function() {
		BlazeLayout.render(main, {content: 'corporateAccount'});
	}
});

FlowRouter.route('/:companyId/livestream/:id', {
	name: 'livestream',
	action: function() {
		BlazeLayout.render(main, {content: 'livestream'});
	}
});

FlowRouter.route('/', {
	name: 'hub',
	action: function() {
		BlazeLayout.render(main, {content: 'hub'});
	}
});
