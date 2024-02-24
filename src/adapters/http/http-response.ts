type HTTPHeaders = {
  [key: string]: string;
};

export default interface HTTPResponse {
  statusCode: number;
  body?: object;
  headers?: HTTPHeaders;
}
