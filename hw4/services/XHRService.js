class XHRService {
	get(url, params) {
		const getResponse = () => new Promise((res, rej) => {
			const xhr = new XMLHttpRequest();
			xhr.open('GET', `${url}/${params?.id || ''}`);
			xhr.responseType='json';
			xhr.onload = () => {
				if(xhr.statusText === 'OK') {
					return res(xhr.response)
				}
				rej(xhr.statusText);
			}
			xhr.send();
		})

		getResponse(url)
		.then(data => {
			console.log('XHRService GET');
			console.log(data)
		})
		.catch(error => console.log(error))
		.finally(() => {
			console.log('-------------------------------');
		})
	}

	post(url, params) {
		const postResponse = () => new Promise((res, rej) => {
			const xhr = new XMLHttpRequest();
			xhr.open('POST', url);
			xhr.setRequestHeader('Content-Type', 'application/json');
			xhr.responseType='json';
			xhr.onload = () => {
				if(xhr.statusText === 'OK') {
					return res(xhr.response)
				}
				rej(xhr.statusText);
			}
			xhr.send(JSON.stringify(params.body));
		})

		postResponse(url)
		.then(data => {
			console.log('XHRService POST');
			console.log(data)
		})
		.catch(error => console.log(error))
		.finally(() => {
			console.log('-------------------------------');
		})
	}

	patch(url, params) {
		const patchResponse = () => new Promise((res, rej) => {
			const xhr = new XMLHttpRequest();
			xhr.open('PATCH', `${url}/${params.id}`);
			xhr.setRequestHeader('Content-Type', 'application/json');
			xhr.responseType='json';
			xhr.onload = () => {
				if(xhr.statusText === 'OK') {
					return res(xhr.response)
				}
				rej(xhr.statusText);
			}
			xhr.send(JSON.stringify(params.body));
		})

		patchResponse(url)
		.then(data => {
			console.log('XHRService PATCH');
			console.log(data)
		})
		.catch(error => console.log(error))
		.finally(() => {
			console.log('-------------------------------');
		})
	}

	delete(url, params) {
		const deleteResponse = () => new Promise((res, rej) => {
			const xhr = new XMLHttpRequest();
			xhr.open('DELETE', `${url}/${params.id}`);
			xhr.responseType='json';
			xhr.onload = () => {
				if(xhr.statusText === 'OK') {
					return res(xhr.response)
				}
				rej(xhr.statusText);
			}
			xhr.send();
		})

		deleteResponse(url)
		.then(data => {
			console.log('XHRService DELETE');
			console.log(data)
		})
		.catch(error => {
			console.log(error)
		})
		.finally(() => {
			console.log('-------------------------------');
		})
	}
}

export default XHRService;