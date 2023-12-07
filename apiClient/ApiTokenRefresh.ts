/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import { TokenRefresh } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class ApiTokenRefresh<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Takes a refresh type JSON web token and returns an access type JSON web token if the refresh token is valid.
   *
   * @tags api-token-refresh
   * @name ApiTokenRefreshCreate
   * @request POST:/api-token-refresh/
   */
  apiTokenRefreshCreate = (data: TokenRefresh, params: RequestParams = {}) =>
    this.request<TokenRefresh, any>({
      path: `/api-token-refresh/`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
