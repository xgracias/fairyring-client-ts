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

export interface Any {
  "@type"?: string;
}

export interface Status {
  /** @format int32 */
  code?: number;
  message?: string;
  details?: { "@type"?: string }[];
}

export interface PageRequest {
  /** @format byte */
  key?: string;

  /** @format uint64 */
  offset?: string;

  /** @format uint64 */
  limit?: string;
  count_total?: boolean;
  reverse?: boolean;
}

export interface PageResponse {
  /** @format byte */
  next_key?: string;

  /** @format uint64 */
  total?: string;
}

export interface Params {
  /** @format int64 */
  signed_blocks_window?: string;

  /** @format byte */
  min_signed_per_window?: string;
  downtime_jail_duration?: string;

  /** @format byte */
  slash_fraction_double_sign?: string;

  /** @format byte */
  slash_fraction_downtime?: string;
}

export interface QueryParamsResponse {
  params?: {
    signed_blocks_window?: string;
    min_signed_per_window?: string;
    downtime_jail_duration?: string;
    slash_fraction_double_sign?: string;
    slash_fraction_downtime?: string;
  };
}

export interface QuerySigningInfoResponse {
  val_signing_info?: {
    address?: string;
    start_height?: string;
    index_offset?: string;
    jailed_until?: string;
    tombstoned?: boolean;
    missed_blocks_counter?: string;
  };
}

export interface QuerySigningInfosResponse {
  info?: {
    address?: string;
    start_height?: string;
    index_offset?: string;
    jailed_until?: string;
    tombstoned?: boolean;
    missed_blocks_counter?: string;
  }[];
  pagination?: { next_key?: string; total?: string };
}

export interface ValidatorSigningInfo {
  address?: string;

  /** @format int64 */
  start_height?: string;

  /** @format int64 */
  index_offset?: string;

  /** @format date-time */
  jailed_until?: string;
  tombstoned?: boolean;

  /** @format int64 */
  missed_blocks_counter?: string;
}

export type MsgUnjailResponse = object;

export type MsgUpdateParamsResponse = object;

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, ResponseType } from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "" });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  private mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.instance.defaults.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  private createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      formData.append(
        key,
        property instanceof Blob
          ? property
          : typeof property === "object" && property !== null
          ? JSON.stringify(property)
          : `${property}`,
      );
      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = (format && this.format) || void 0;

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      requestParams.headers.common = { Accept: "*/*" };
      requestParams.headers.post = {};
      requestParams.headers.put = {};

      body = this.createFormData(body as Record<string, unknown>);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
        ...(requestParams.headers || {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title HTTP API Console cosmos.slashing.v1beta1
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Query
   * @name QueryParams
   * @request GET:/cosmos/slashing/v1beta1/params
   */
  queryParams = (params: RequestParams = {}) =>
    this.request<
      {
        params?: {
          signed_blocks_window?: string;
          min_signed_per_window?: string;
          downtime_jail_duration?: string;
          slash_fraction_double_sign?: string;
          slash_fraction_downtime?: string;
        };
      },
      { code?: number; message?: string; details?: { "@type"?: string }[] }
    >({
      path: `/cosmos/slashing/v1beta1/params`,
      method: "GET",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QuerySigningInfos
   * @request GET:/cosmos/slashing/v1beta1/signing_infos
   */
  querySigningInfos = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      {
        info?: {
          address?: string;
          start_height?: string;
          index_offset?: string;
          jailed_until?: string;
          tombstoned?: boolean;
          missed_blocks_counter?: string;
        }[];
        pagination?: { next_key?: string; total?: string };
      },
      { code?: number; message?: string; details?: { "@type"?: string }[] }
    >({
      path: `/cosmos/slashing/v1beta1/signing_infos`,
      method: "GET",
      query: query,
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QuerySigningInfo
   * @request GET:/cosmos/slashing/v1beta1/signing_infos/{cons_address}
   */
  querySigningInfo = (consAddress: string, params: RequestParams = {}) =>
    this.request<
      {
        val_signing_info?: {
          address?: string;
          start_height?: string;
          index_offset?: string;
          jailed_until?: string;
          tombstoned?: boolean;
          missed_blocks_counter?: string;
        };
      },
      { code?: number; message?: string; details?: { "@type"?: string }[] }
    >({
      path: `/cosmos/slashing/v1beta1/signing_infos/${consAddress}`,
      method: "GET",
      ...params,
    });
}
