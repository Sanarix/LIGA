import FetchService from '../services/FetchService.js';
class Controller {
    constructor(url) {
        this.url = url;
        this.server = new FetchService();
        this.url = url;
    }
    get(params) {
        return this.server.get(this.url, params);
    }
    post(params) {
        return this.server.post(this.url, params);
    }
    patch(params) {
        return this.server.patch(this.url, params);
    }
    delete(params) {
        return this.server.delete(this.url, params);
    }
}
export default Controller;
//# sourceMappingURL=Controller.js.map