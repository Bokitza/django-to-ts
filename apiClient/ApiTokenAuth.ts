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

import { TokenObtainPair } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class ApiTokenAuth<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Takes a set of user credentials and returns an access and refresh JSON web token pair to prove the authentication of those credentials.
   *
   * @tags api-token-auth
   * @name ApiTokenAuthCreate
   * @request POST:/api-token-auth/
   */
  apiTokenAuthCreate = (data: TokenObtainPair, params: RequestParams = {}) =>
    this.request<TokenObtainPair, any>({
      path: `/api-token-auth/`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
