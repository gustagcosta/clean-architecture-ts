type HTTPHeaders = {
  [key: string]: string;
};

export interface HTTPResponse {
  statusCode: number;
  body?: object;
  headers?: HTTPHeaders;
}
