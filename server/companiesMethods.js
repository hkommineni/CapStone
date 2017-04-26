import { Meteor } from 'meteor/meteor';

import { Companies } from '../collections/companies.js';

export function companiesMethods() {
	Meteor.methods({
		'createCompany':function(companyName, shortName) {
			var companyObject = {
				companyName: companyName,
				shortName: shortName
			}
			
			Companies.insert(companyObject);
		},
		'removeCompany':function(companyId) {
			Companies.remove(companyId);
		}, 
		'updateCompany':function(companyId, companyName, shortName) {
			Companies.update({_id: companyId}, {
				$set: {
					companyName: companyName,
					shortName: shortName
				}
			});
		}
	});
}
