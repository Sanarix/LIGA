import TParams from '../types/Params';

interface IFetch {
  get: (url: string, params: TParams) => void;
  post: (url: string, params: TParams) => void;
  patch: (url: string, params: TParams) => void;
  delete: (url: string, params: TParams) => void;
}

export default IFetch;
