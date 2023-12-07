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

import {
  Organization,
  PaginatedOrganizationList,
  PaginatedPostsList,
  PaginatedProjectList,
  Post,
  Project,
} from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Api<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description An endpoints for retrieving an organization
   *
   * @tags api
   * @name ApiOrganizationsList
   * @request GET:/api/organizations/
   * @secure
   */
  apiOrganizationsList = (
    query?: {
      /** A page number within the paginated result set. */
      page?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<PaginatedOrganizationList, any>({
      path: `/api/organizations/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description An endpoints for retrieving an organization
   *
   * @tags api
   * @name ApiOrganizationsRetrieve
   * @request GET:/api/organizations/{id}/
   * @secure
   */
  apiOrganizationsRetrieve = (id: number, params: RequestParams = {}) =>
    this.request<Organization, any>({
      path: `/api/organizations/${id}/`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description An endpoint to fetch posts
   *
   * @tags api
   * @name ApiPostsList
   * @request GET:/api/posts/
   * @secure
   */
  apiPostsList = (
    query?: {
      /** A page number within the paginated result set. */
      page?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<PaginatedPostsList, any>({
      path: `/api/posts/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description An endpoint to fetch posts
   *
   * @tags api
   * @name ApiPostsRetrieve
   * @request GET:/api/posts/{id}/
   * @secure
   */
  apiPostsRetrieve = (id: number, params: RequestParams = {}) =>
    this.request<Post, any>({
      path: `/api/posts/${id}/`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description An endpoint for retrieving the projects.
   *
   * @tags api
   * @name ApiProjectsList
   * @request GET:/api/projects/
   * @secure
   */
  apiProjectsList = (
    query?: {
      /** A page number within the paginated result set. */
      page?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<PaginatedProjectList, any>({
      path: `/api/projects/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description An endpoint for retrieving the projects.
   *
   * @tags api
   * @name ApiProjectsRetrieve
   * @request GET:/api/projects/{id}/
   * @secure
   */
  apiProjectsRetrieve = (id: number, params: RequestParams = {}) =>
    this.request<Project, any>({
      path: `/api/projects/${id}/`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description OpenApi3 schema for this API. Format can be selected via content negotiation. - YAML: application/vnd.oai.openapi - JSON: application/vnd.oai.openapi+json
   *
   * @tags api
   * @name ApiSchemaRetrieve
   * @request GET:/api/schema/
   * @secure
   */
  apiSchemaRetrieve = (
    query?: {
      format?: "json" | "yaml";
      lang?:
        | "af"
        | "ar"
        | "ar-dz"
        | "ast"
        | "az"
        | "be"
        | "bg"
        | "bn"
        | "br"
        | "bs"
        | "ca"
        | "ckb"
        | "cs"
        | "cy"
        | "da"
        | "de"
        | "dsb"
        | "el"
        | "en"
        | "en-au"
        | "en-gb"
        | "eo"
        | "es"
        | "es-ar"
        | "es-co"
        | "es-mx"
        | "es-ni"
        | "es-ve"
        | "et"
        | "eu"
        | "fa"
        | "fi"
        | "fr"
        | "fy"
        | "ga"
        | "gd"
        | "gl"
        | "he"
        | "hi"
        | "hr"
        | "hsb"
        | "hu"
        | "hy"
        | "ia"
        | "id"
        | "ig"
        | "io"
        | "is"
        | "it"
        | "ja"
        | "ka"
        | "kab"
        | "kk"
        | "km"
        | "kn"
        | "ko"
        | "ky"
        | "lb"
        | "lt"
        | "lv"
        | "mk"
        | "ml"
        | "mn"
        | "mr"
        | "ms"
        | "my"
        | "nb"
        | "ne"
        | "nl"
        | "nn"
        | "os"
        | "pa"
        | "pl"
        | "pt"
        | "pt-br"
        | "ro"
        | "ru"
        | "sk"
        | "sl"
        | "sq"
        | "sr"
        | "sr-latn"
        | "sv"
        | "sw"
        | "ta"
        | "te"
        | "tg"
        | "th"
        | "tk"
        | "tr"
        | "tt"
        | "udm"
        | "uk"
        | "ur"
        | "uz"
        | "vi"
        | "zh-hans"
        | "zh-hant";
    },
    params: RequestParams = {},
  ) =>
    this.request<Record<string, any>, any>({
      path: `/api/schema/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
}
