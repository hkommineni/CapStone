import { Meteor } from 'meteor/meteor';

import { Videos } from '../collections/videos.js';

export function videosMethods() {
	Meteor.methods({
		'createVideo':function(videoName, companyId, live, datePublished, imageUrl, agent) {
			var videoObject = {
				companyId: companyId,
				videoName: videoName,
				live: live,
				datePublished: datePublished,
				imageUrl: imageUrl,
				agent: agent
			}
			
			Videos.insert(videoObject);
		},
		'removeVideo':function(videoId) {
			Videos.remove(videoId);
		}, 
		'updateVideo':function(videoId, companyId, videoName, live, datePublished, imageUrl, agent) {
			Videos.update({_id: videoId}, {
				$set: {
					companyId: companyId,
					videoName: videoName,
					live: live,
					datePublished: datePublished,
					imageUrl: imageUrl,
					agent: agent
				}
			});
		}
	});
}