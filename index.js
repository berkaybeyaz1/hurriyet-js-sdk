let fetch = require('node-fetch');

// TODO: DEBUG ENV CONTROL
const API_LOCATION = 'https://api.hurriyet.com.tr/v1';
let headers = { 
	'Content-Types': 'application/json',
	'apikey': null,
};

class HurriyetAPIWrapper {
	constructor({ token, }) {
		if (token) {
			headers.apikey = token;
		} else {
			console.log('You must supply a API key.');
			header.apikey = '';
		}
	}

	sendRequest({ endpoint, parameters }) {
		return new Promise((resolve,reject) => {
			const endPoint = API_LOCATION + '/'+endpoint+'/'+ this.getQueryString(parameters)
			fetch(endPoint, {
				method: 'GET',
				headers,
			}).then((response) => {
				return response.json();
			}).then((responseJson) => {
				console.log(responseJson);
				resolve(responseJson);
				return;
			})
		})
	}

	getQueryString(parameters){
		if(!parameters || parameters.constructor !== Array){
			console.log('Parameters should be array.');
			return '';
		}
		let queryString = ''
		for(var i = 0 ; i < parameters.length ; i++){
			if(i === 0)
				queryString += '';
			else
				queryString += '&';
			const objectKey = Object.keys(parameters[i]);
			queryString += parameters[i][objectKey];
		}

		return queryString;
	}

	getArticles(args = {}) {
		let {
			articleId,
			filter,
			select,
			top,
		} = args;

		let parameters = [];

		if (filter) {
			parameters.push({ filter });
		}

		if (articleId) {
			if (select) {
				parameters.push({ select });
			}

			if (top) {
				parameters.push({ top });
			}

			this.sendRequest({ 
				endpoint: 'articles/' + articleId,
				parameters: parameters
			});
		} else {
			this.sendRequest({ 
				endpoint: 'articles',
				parameters: parameters
			});
		}
	}

	getPaths(args = {}) {
		let {
			pathId,
			filter,
			select,
			top,
		} = args;

		let parameters = [];

		if (filter) {
			parameters.push({ filter });
		}

		if (pathId) {
			if (select) {
				parameters.push({ select });
			}

			if (top) {
				parameters.push({ top });
			}

			this.sendRequest({ 
				endpoint: 'paths/' + pathId,
				parameters: parameters
			});
		} else {
			this.sendRequest({ 
				endpoint: 'paths',
				parameters: parameters
			});
		}
	}

	getColumns(args = {}) {
		let {
			columnId,
			filter,
			select,
			top,
		} = args;

		let parameters = [];

		if (filter) {
			parameters.push({ filter });
		}

		if (columnId) {
			if (select) {
				parameters.push({ select });
			}

			if (top) {
				parameters.push({ top });
			}

			this.sendRequest({ 
				endpoint: 'columns/' + columnId,
				parameters: parameters
			});
		} else {
			this.sendRequest({ 
				endpoint: 'columns',
				parameters: parameters
			});
		}
	}

	getDates(args = {}) {
		let {
		} = args;

		let parameters = [];

		this.sendRequest({ 
			endpoint: 'date',
			parameters: parameters
		});
	}

	getNewsPhotoGalleries(args = {}) {
		let {
			galleryId,
			filter,
			select,
			top,
		} = args;

		let parameters = [];

		if (filter) {
			parameters.push({ filter });
		}

		if (galleryId) {
			if (select) {
				parameters.push({ select });
			}

			if (top) {
				parameters.push({ top });
			}

			this.sendRequest({ 
				endpoint: 'newsphotogalleries/' + galleryId,
				parameters: parameters
			});
		} else {
			this.sendRequest({ 
				endpoint: 'newsphotogalleries',
				parameters: parameters
			});
		}
	}

	getPages(args = {}) {
		let {
			pageId,
			filter,
			select,
			top,
		} = args;

		let parameters = [];

		if (filter) {
			parameters.push({ filter });
		}

		if (pageId) {
			if (select) {
				parameters.push({ select });
			}

			if (top) {
				parameters.push({ top });
			}

			this.sendRequest({ 
				endpoint: 'pages/' + pageId,
				parameters: parameters
			});
		} else {
			this.sendRequest({ 
				endpoint: 'pages',
				parameters: parameters
			});
		}
	}

	getWriters(args = {}) {
		let {
			writerId,
			filter,
			select,
			top,
		} = args;

		let parameters = [];

		if (filter) {
			parameters.push({ filter });
		}

		if (writerId) {
			if (select) {
				parameters.push({ select });
			}

			if (top) {
				parameters.push({ top });
			}

			this.sendRequest({ 
				endpoint: 'writers/' + writerId,
				parameters: parameters
			});
		} else {
			this.sendRequest({ 
				endpoint: 'writers',
				parameters: parameters
			});
		}
	}

	search(args = {}) {
		let {
			skip,
			top,
			sort,
			keyword,
		} = args;

		let parameters = [];

		if (keyword) {
			if (skip) {
				parameters.push({ skip });
			}

			if (top) {
				parameters.push({ top });
			}

			if (sort) {
				parameters.push({ sort });
			}

			this.sendRequest({ 
				endpoint: 'search/' + keyword,
				parameters: parameters
			});
		} else {
			console.log('You have to support a keyword to this API call.');
		}
	}
}

module.exports = HurriyetAPIWrapper;