let fetch = require('node-fetch');

// TODO: DEBUG ENV CONTROL
const API_LOCATION = 'https://api.hurriyet.com.tr/v1';
const TOKEN = '';
const headers = { 
	'Content-Types': 'application/json',
	'apikey': TOKEN,
};

function sendRequest({ endpoint, parameters }) {
	return new Promise((resolve,reject) => {
		const endPoint = API_LOCATION + '/'+endpoint+'/'+getQueryString(parameters)
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

function getQueryString(parameters){
	if(!parameters || parameters.constructor !== Array){
		console.log('Parameters should be array')
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

function getArticles(args = {}) {
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

		sendRequest({ 
			endpoint: 'articles/' + articleId,
			parameters: parameters
		});
	} else {
		sendRequest({ 
			endpoint: 'articles',
			parameters: parameters
		});
	}
}

function getPaths(args = {}) {
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

		sendRequest({ 
			endpoint: 'paths/' + pathId,
			parameters: parameters
		});
	} else {
		sendRequest({ 
			endpoint: 'paths',
			parameters: parameters
		});
	}
}

function getColumns(args = {}) {
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

		sendRequest({ 
			endpoint: 'columns/' + columnId,
			parameters: parameters
		});
	} else {
		sendRequest({ 
			endpoint: 'columns',
			parameters: parameters
		});
	}
}

function getDates(args = {}) {
	let {
	} = args;

	let parameters = [];

	sendRequest({ 
		endpoint: 'date',
		parameters: parameters
	});
}

function getNewsPhotoGalleries(args = {}) {
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

		sendRequest({ 
			endpoint: 'newsphotogalleries/' + galleryId,
			parameters: parameters
		});
	} else {
		sendRequest({ 
			endpoint: 'newsphotogalleries',
			parameters: parameters
		});
	}
}