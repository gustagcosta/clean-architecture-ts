export interface HTTPRequest<Params, Headers, Body, Query> {
  params?: Params;
  headers?: Headers;
  body?: Body;
  query?: Query;
}
