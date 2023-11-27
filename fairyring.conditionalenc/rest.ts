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

export interface ConditionalencActivePubKey {
  publicKey?: string;
  creator?: string;

  /** @format uint64 */
  expiry?: string;
}

export interface ConditionalencAggregatedConditionalKeyShare {
  condition?: string;
  data?: string;
}

export interface ConditionalencAggregatedKeyShare {
  /** @format uint64 */
  height?: string;
  data?: string;
}

export interface ConditionalencAuthorizedAddress {
  target?: string;
  isAuthorized?: boolean;
  authorizedBy?: string;
}

export interface ConditionalencConditionalKeyShare {
  validator?: string;
  condition?: string;
  keyShare?: string;

  /** @format uint64 */
  keyShareIndex?: string;

  /** @format uint64 */
  receivedTimestamp?: string;

  /** @format uint64 */
  receivedBlockHeight?: string;
}

export interface ConditionalencKeyShare {
  validator?: string;

  /** @format uint64 */
  blockHeight?: string;
  keyShare?: string;

  /** @format uint64 */
  keyShareIndex?: string;

  /** @format uint64 */
  receivedTimestamp?: string;

  /** @format uint64 */
  receivedBlockHeight?: string;
}

export type ConditionalencMsgCreateAuthorizedAddressResponse = object;

export type ConditionalencMsgCreateLatestPubKeyResponse = object;

export type ConditionalencMsgDeleteAuthorizedAddressResponse = object;

export interface ConditionalencMsgRegisterValidatorResponse {
  creator?: string;
}

export interface ConditionalencMsgSendConditionalencResponse {
  creator?: string;
  conditionalenc?: string;

  /** @format uint64 */
  conditionalencIndex?: string;

  /** @format uint64 */
  blockHeight?: string;

  /** @format uint64 */
  receivedBlockHeight?: string;
  success?: boolean;
  errorMessage?: string;
}

export type ConditionalencMsgUpdateAuthorizedAddressResponse = object;

/**
 * Params defines the parameters for the module.
 */
export interface ConditionalencParams {
  /** @format uint64 */
  key_expiry?: string;
  trusted_addresses?: string[];

  /** @format byte */
  slash_fraction_no_conditionalenc?: string;

  /** @format byte */
  slash_fraction_wrong_conditionalenc?: string;

  /** @format uint64 */
  minimum_bonded?: string;

  /** @format uint64 */
  max_idled_block?: string;
}

export interface ConditionalencQueryAllAggregatedConditionalKeyShareResponse {
  aggregatedKeyShare?: ConditionalencAggregatedConditionalKeyShare[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface ConditionalencQueryAllAggregatedKeyShareResponse {
  aggregatedKeyShare?: ConditionalencAggregatedKeyShare[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface ConditionalencQueryAllAuthorizedAddressResponse {
  authorizedAddress?: ConditionalencAuthorizedAddress[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface ConditionalencQueryAllConditionalKeyShareResponse {
  keyShare?: ConditionalencConditionalKeyShare[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface ConditionalencQueryAllKeyShareResponse {
  keyShare?: ConditionalencKeyShare[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface ConditionalencQueryAllValidatorSetResponse {
  validatorSet?: ConditionalencValidatorSet[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface ConditionalencQueryGetAggregatedConditionalKeyShareResponse {
  aggregatedKeyShare?: ConditionalencAggregatedConditionalKeyShare;
}

export interface ConditionalencQueryGetAggregatedKeyShareResponse {
  aggregatedKeyShare?: ConditionalencAggregatedKeyShare;
}

export interface ConditionalencQueryGetAuthorizedAddressResponse {
  authorizedAddress?: ConditionalencAuthorizedAddress;
}

export interface ConditionalencQueryGetConditionalKeyShareResponse {
  keyShare?: ConditionalencConditionalKeyShare;
}

export interface ConditionalencQueryGetKeyShareResponse {
  keyShare?: ConditionalencKeyShare;
}

export interface ConditionalencQueryGetValidatorSetResponse {
  validatorSet?: ConditionalencValidatorSet;
}

/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 */
export interface ConditionalencQueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: ConditionalencParams;
}

export interface ConditionalencQueryPubKeyResponse {
  activePubKey?: ConditionalencActivePubKey;
  queuedPubKey?: ConditionalencQueuedPubKey;
}

export interface ConditionalencQueuedPubKey {
  publicKey?: string;
  creator?: string;

  /** @format uint64 */
  expiry?: string;
}

export interface ConditionalencValidatorSet {
  index?: string;
  validator?: string;
  consAddr?: string;
  isActive?: boolean;
}

export interface ProtobufAny {
  "@type"?: string;
}

export interface RpcStatus {
  /** @format int32 */
  code?: number;
  message?: string;
  details?: ProtobufAny[];
}

/**
* message SomeRequest {
         Foo some_parameter = 1;
         PageRequest pagination = 2;
 }
*/
export interface V1Beta1PageRequest {
  /**
   * key is a value returned in PageResponse.next_key to begin
   * querying the next page most efficiently. Only one of offset or key
   * should be set.
   * @format byte
   */
  key?: string;

  /**
   * offset is a numeric offset that can be used when key is unavailable.
   * It is less efficient than using key. Only one of offset or key should
   * be set.
   * @format uint64
   */
  offset?: string;

  /**
   * limit is the total number of results to be returned in the result page.
   * If left empty it will default to a value to be set by each app.
   * @format uint64
   */
  limit?: string;

  /**
   * count_total is set to true  to indicate that the result set should include
   * a count of the total number of items available for pagination in UIs.
   * count_total is only respected when offset is used. It is ignored when key
   * is set.
   */
  count_total?: boolean;

  /**
   * reverse is set to true if results are to be returned in the descending order.
   *
   * Since: cosmos-sdk 0.43
   */
  reverse?: boolean;
}

/**
* PageResponse is to be embedded in gRPC response messages where the
corresponding request message has used PageRequest.

 message SomeResponse {
         repeated Bar results = 1;
         PageResponse page = 2;
 }
*/
export interface V1Beta1PageResponse {
  /**
   * next_key is the key to be passed to PageRequest.key to
   * query the next page most efficiently. It will be empty if
   * there are no more results.
   * @format byte
   */
  next_key?: string;

  /**
   * total is total number of results available if PageRequest.count_total
   * was set, its value is undefined otherwise
   * @format uint64
   */
  total?: string;
}

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
 * @title fairyring/conditionalenc/aggregated_key_share.proto
 * @version version not set
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Query
   * @name QueryAggregatedConditionalKeyShareAll
   * @request GET:/fairyring/conditionalenc/aggregated_conditional_key_share
   */
  queryAggregatedConditionalKeyShareAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<ConditionalencQueryAllAggregatedConditionalKeyShareResponse, RpcStatus>({
      path: `/fairyring/conditionalenc/aggregated_conditional_key_share`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryAggregatedConditionalKeyShare
   * @summary Queries a list of AggregatedKeyShare items.
   * @request GET:/fairyring/conditionalenc/aggregated_conditional_key_share/{condition}
   */
  queryAggregatedConditionalKeyShare = (condition: string, params: RequestParams = {}) =>
    this.request<ConditionalencQueryGetAggregatedConditionalKeyShareResponse, RpcStatus>({
      path: `/fairyring/conditionalenc/aggregated_conditional_key_share/${condition}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryAggregatedKeyShareAll
   * @request GET:/fairyring/conditionalenc/aggregated_key_share
   */
  queryAggregatedKeyShareAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<ConditionalencQueryAllAggregatedKeyShareResponse, RpcStatus>({
      path: `/fairyring/conditionalenc/aggregated_key_share`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryAggregatedKeyShare
   * @summary Queries a list of AggregatedKeyShare items.
   * @request GET:/fairyring/conditionalenc/aggregated_key_share/{height}
   */
  queryAggregatedKeyShare = (height: string, params: RequestParams = {}) =>
    this.request<ConditionalencQueryGetAggregatedKeyShareResponse, RpcStatus>({
      path: `/fairyring/conditionalenc/aggregated_key_share/${height}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryAuthorizedAddressAll
   * @request GET:/fairyring/conditionalenc/authorized_address
   */
  queryAuthorizedAddressAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<ConditionalencQueryAllAuthorizedAddressResponse, RpcStatus>({
      path: `/fairyring/conditionalenc/authorized_address`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryAuthorizedAddress
   * @summary Queries a list of AuthorizedAddress items.
   * @request GET:/fairyring/conditionalenc/authorized_address/{target}
   */
  queryAuthorizedAddress = (target: string, params: RequestParams = {}) =>
    this.request<ConditionalencQueryGetAuthorizedAddressResponse, RpcStatus>({
      path: `/fairyring/conditionalenc/authorized_address/${target}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryConditionalKeyShareAll
   * @summary Queries a list of KeyShare items.
   * @request GET:/fairyring/conditionalenc/conditional_key_share
   */
  queryConditionalKeyShareAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<ConditionalencQueryAllConditionalKeyShareResponse, RpcStatus>({
      path: `/fairyring/conditionalenc/conditional_key_share`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryConditionalKeyShare
   * @summary Queries a KeyShare by index.
   * @request GET:/fairyring/conditionalenc/conditional_key_share/{validator}/{condition}
   */
  queryConditionalKeyShare = (validator: string, condition: string, params: RequestParams = {}) =>
    this.request<ConditionalencQueryGetConditionalKeyShareResponse, RpcStatus>({
      path: `/fairyring/conditionalenc/conditional_key_share/${validator}/${condition}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryKeyShareAll
   * @summary Queries a list of KeyShare items.
   * @request GET:/fairyring/conditionalenc/key_share
   */
  queryKeyShareAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<ConditionalencQueryAllKeyShareResponse, RpcStatus>({
      path: `/fairyring/conditionalenc/key_share`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryKeyShare
   * @summary Queries a KeyShare by index.
   * @request GET:/fairyring/conditionalenc/key_share/{validator}/{blockHeight}
   */
  queryKeyShare = (validator: string, blockHeight: string, params: RequestParams = {}) =>
    this.request<ConditionalencQueryGetKeyShareResponse, RpcStatus>({
      path: `/fairyring/conditionalenc/key_share/${validator}/${blockHeight}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryParams
   * @summary Parameters queries the parameters of the module.
   * @request GET:/fairyring/conditionalenc/params
   */
  queryParams = (params: RequestParams = {}) =>
    this.request<ConditionalencQueryParamsResponse, RpcStatus>({
      path: `/fairyring/conditionalenc/params`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryPubKey
   * @summary Queries the public keys
   * @request GET:/fairyring/conditionalenc/pub_key
   */
  queryPubKey = (params: RequestParams = {}) =>
    this.request<ConditionalencQueryPubKeyResponse, RpcStatus>({
      path: `/fairyring/conditionalenc/pub_key`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryValidatorSetAll
   * @summary Queries a list of ValidatorSet items.
   * @request GET:/fairyring/conditionalenc/validator_set
   */
  queryValidatorSetAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<ConditionalencQueryAllValidatorSetResponse, RpcStatus>({
      path: `/fairyring/conditionalenc/validator_set`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryValidatorSet
   * @summary Queries a ValidatorSet by index.
   * @request GET:/fairyring/conditionalenc/validator_set/{index}
   */
  queryValidatorSet = (index: string, params: RequestParams = {}) =>
    this.request<ConditionalencQueryGetValidatorSetResponse, RpcStatus>({
      path: `/fairyring/conditionalenc/validator_set/${index}`,
      method: "GET",
      format: "json",
      ...params,
    });
}
