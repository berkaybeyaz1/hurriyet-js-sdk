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

function getArticles({ articleId, filter, select, top }) {
	let parameters = [];
	( filter ) ? parameters.push({filter}):null;
	( select ) ? parameters.push({select}):null;
	( top ) ? parameters.push({top}):null;
	if (articleId) {
		sendRequest({ 
			endpoint: 'articles/' + articleId,
			parameters: parameters
		}).then(() => {console.log('siyu')});
	}else{
		sendRequest({ 
			endpoint: 'articles',
			parameters: parameters
		}).then(() => {console.log('siyu')});
	}
}

getArticles();
