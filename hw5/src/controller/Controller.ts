import FetchService from '../services/FetchService.js';
import TParams from '../types/Params';
import IFetch from '../interfaces/IFetch';

class Controller {
  private server: IFetch;
  constructor(private url: string) {
    this.server = new FetchService();
    this.url = url;
  }

  get(params?: TParams): void {
    return this.server.get(this.url, params as TParams);
  }

  post(params: TParams): void {
    return this.server.post(this.url, params);
  }

  patch(params: TParams): void {
    return this.server.patch(this.url, params);
  }

  delete(params: TParams): void {
    return this.server.delete(this.url, params);
  }
}

export default Controller;
