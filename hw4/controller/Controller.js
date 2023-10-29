import FetchService from "../services/FetchService.js";
import XHRService from "../services/XHRService.js";

class Controller {
	constructor(type, url) {
		this.server = type === 'fetch' ? new FetchService : new XHRService;
		this.url = url;
	}

	get(params) {
		return this.server.get(this.url, params)
	}

	post(params) {
		return this.server.post(this.url, params)
	}

	patch(params) {
		return this.server.patch(this.url, params)
	}

	delete(params) {
		return this.server.delete(this.url, params)
	}
}

export default Controller;