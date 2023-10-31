type TParams = {
  id?: number;
  body?: {
    name: string;
    info: string;
    isImportant: boolean;
    isCompleted?: boolean;
  };
};

export default TParams;
