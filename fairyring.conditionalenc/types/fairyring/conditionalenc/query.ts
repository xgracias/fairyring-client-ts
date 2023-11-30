/* eslint-disable */
import * as _m0 from 'protobufjs/minimal';
import { PageRequest, PageResponse } from '../../cosmos/base/query/v1beta1/pagination';
import { ConditionalencNonce } from './conditionalenc_nonce';
import { EncryptedTx, EncryptedTxArray } from './encrypted_tx';
import { Params } from './params';
import { ActivePubKey, QueuedPubKey } from './pub_key';
import Long = require('long');

export const protobufPackage = 'fairyring.Conditionalenc';

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetEncryptedTxRequest {
  targetcondition: number;
  index: number;
}

export interface QueryGetEncryptedTxResponse {
  encryptedTx: EncryptedTx | undefined;
}

export interface QueryAllEncryptedTxRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllEncryptedTxResponse {
  encryptedTxArray: EncryptedTxArray[];
  pagination: PageResponse | undefined;
}

export interface QueryAllEncryptedTxFromconditionRequest {
  targetcondition: number;
}

export interface QueryAllEncryptedTxFromconditionResponse {
  encryptedTxArray: EncryptedTxArray | undefined;
}

export interface QueryLatestconditionRequest {}

export interface QueryLatestconditionResponse {
  condition: number;
}

export interface QueryGetConditionalencNonceRequest {
  address: string;
}

export interface QueryGetConditionalencNonceResponse {
  ConditionalencNonce: ConditionalencNonce | undefined;
}

export interface QueryAllConditionalencNonceRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllConditionalencNonceResponse {
  ConditionalencNonce: ConditionalencNonce[];
  pagination: PageResponse | undefined;
}

export interface QueryPubKeyRequest {}

export interface QueryPubKeyResponse {
  activePubKey: ActivePubKey | undefined;
  queuedPubKey: QueuedPubKey | undefined;
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(base?: I): QueryParamsRequest {
    return QueryParamsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { params: undefined };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.params = Params.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
    };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    if (message.params !== undefined) {
      obj.params = Params.toJSON(message.params);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(base?: I): QueryParamsResponse {
    return QueryParamsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params =
      object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
};

function createBaseQueryGetEncryptedTxRequest(): QueryGetEncryptedTxRequest {
  return { targetcondition: 0, index: 0 };
}

export const QueryGetEncryptedTxRequest = {
  encode(message: QueryGetEncryptedTxRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.targetcondition !== 0) {
      writer.uint32(8).uint64(message.targetcondition);
    }
    if (message.index !== 0) {
      writer.uint32(16).uint64(message.index);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetEncryptedTxRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetEncryptedTxRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.targetcondition = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.index = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetEncryptedTxRequest {
    return {
      targetcondition: isSet(object.targetcondition) ? globalThis.Number(object.targetcondition) : 0,
      index: isSet(object.index) ? globalThis.Number(object.index) : 0,
    };
  },

  toJSON(message: QueryGetEncryptedTxRequest): unknown {
    const obj: any = {};
    if (message.targetcondition !== 0) {
      obj.targetcondition = Math.round(message.targetcondition);
    }
    if (message.index !== 0) {
      obj.index = Math.round(message.index);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetEncryptedTxRequest>, I>>(base?: I): QueryGetEncryptedTxRequest {
    return QueryGetEncryptedTxRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetEncryptedTxRequest>, I>>(object: I): QueryGetEncryptedTxRequest {
    const message = createBaseQueryGetEncryptedTxRequest();
    message.targetcondition = object.targetcondition ?? 0;
    message.index = object.index ?? 0;
    return message;
  },
};

function createBaseQueryGetEncryptedTxResponse(): QueryGetEncryptedTxResponse {
  return { encryptedTx: undefined };
}

export const QueryGetEncryptedTxResponse = {
  encode(message: QueryGetEncryptedTxResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.encryptedTx !== undefined) {
      EncryptedTx.encode(message.encryptedTx, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetEncryptedTxResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetEncryptedTxResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.encryptedTx = EncryptedTx.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetEncryptedTxResponse {
    return {
      encryptedTx: isSet(object.encryptedTx) ? EncryptedTx.fromJSON(object.encryptedTx) : undefined,
    };
  },

  toJSON(message: QueryGetEncryptedTxResponse): unknown {
    const obj: any = {};
    if (message.encryptedTx !== undefined) {
      obj.encryptedTx = EncryptedTx.toJSON(message.encryptedTx);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetEncryptedTxResponse>, I>>(base?: I): QueryGetEncryptedTxResponse {
    return QueryGetEncryptedTxResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetEncryptedTxResponse>, I>>(object: I): QueryGetEncryptedTxResponse {
    const message = createBaseQueryGetEncryptedTxResponse();
    message.encryptedTx =
      object.encryptedTx !== undefined && object.encryptedTx !== null
        ? EncryptedTx.fromPartial(object.encryptedTx)
        : undefined;
    return message;
  },
};

function createBaseQueryAllEncryptedTxRequest(): QueryAllEncryptedTxRequest {
  return { pagination: undefined };
}

export const QueryAllEncryptedTxRequest = {
  encode(message: QueryAllEncryptedTxRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllEncryptedTxRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllEncryptedTxRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllEncryptedTxRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllEncryptedTxRequest): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllEncryptedTxRequest>, I>>(base?: I): QueryAllEncryptedTxRequest {
    return QueryAllEncryptedTxRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllEncryptedTxRequest>, I>>(object: I): QueryAllEncryptedTxRequest {
    const message = createBaseQueryAllEncryptedTxRequest();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryAllEncryptedTxResponse(): QueryAllEncryptedTxResponse {
  return { encryptedTxArray: [], pagination: undefined };
}

export const QueryAllEncryptedTxResponse = {
  encode(message: QueryAllEncryptedTxResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.encryptedTxArray) {
      EncryptedTxArray.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllEncryptedTxResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllEncryptedTxResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.encryptedTxArray.push(EncryptedTxArray.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pagination = PageResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllEncryptedTxResponse {
    return {
      encryptedTxArray: globalThis.Array.isArray(object?.encryptedTxArray)
        ? object.encryptedTxArray.map((e: any) => EncryptedTxArray.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllEncryptedTxResponse): unknown {
    const obj: any = {};
    if (message.encryptedTxArray?.length) {
      obj.encryptedTxArray = message.encryptedTxArray.map((e) => EncryptedTxArray.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllEncryptedTxResponse>, I>>(base?: I): QueryAllEncryptedTxResponse {
    return QueryAllEncryptedTxResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllEncryptedTxResponse>, I>>(object: I): QueryAllEncryptedTxResponse {
    const message = createBaseQueryAllEncryptedTxResponse();
    message.encryptedTxArray = object.encryptedTxArray?.map((e) => EncryptedTxArray.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryAllEncryptedTxFromconditionRequest(): QueryAllEncryptedTxFromconditionRequest {
  return { targetcondition: 0 };
}

export const QueryAllEncryptedTxFromconditionRequest = {
  encode(message: QueryAllEncryptedTxFromconditionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.targetcondition !== 0) {
      writer.uint32(8).uint64(message.targetcondition);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllEncryptedTxFromconditionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllEncryptedTxFromconditionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.targetcondition = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllEncryptedTxFromconditionRequest {
    return {
      targetcondition: isSet(object.targetcondition) ? globalThis.Number(object.targetcondition) : 0,
    };
  },

  toJSON(message: QueryAllEncryptedTxFromconditionRequest): unknown {
    const obj: any = {};
    if (message.targetcondition !== 0) {
      obj.targetcondition = Math.round(message.targetcondition);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllEncryptedTxFromconditionRequest>, I>>(
    base?: I
  ): QueryAllEncryptedTxFromconditionRequest {
    return QueryAllEncryptedTxFromconditionRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllEncryptedTxFromconditionRequest>, I>>(
    object: I
  ): QueryAllEncryptedTxFromconditionRequest {
    const message = createBaseQueryAllEncryptedTxFromconditionRequest();
    message.targetcondition = object.targetcondition ?? 0;
    return message;
  },
};

function createBaseQueryAllEncryptedTxFromconditionResponse(): QueryAllEncryptedTxFromconditionResponse {
  return { encryptedTxArray: undefined };
}

export const QueryAllEncryptedTxFromconditionResponse = {
  encode(message: QueryAllEncryptedTxFromconditionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.encryptedTxArray !== undefined) {
      EncryptedTxArray.encode(message.encryptedTxArray, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllEncryptedTxFromconditionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllEncryptedTxFromconditionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.encryptedTxArray = EncryptedTxArray.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllEncryptedTxFromconditionResponse {
    return {
      encryptedTxArray: isSet(object.encryptedTxArray) ? EncryptedTxArray.fromJSON(object.encryptedTxArray) : undefined,
    };
  },

  toJSON(message: QueryAllEncryptedTxFromconditionResponse): unknown {
    const obj: any = {};
    if (message.encryptedTxArray !== undefined) {
      obj.encryptedTxArray = EncryptedTxArray.toJSON(message.encryptedTxArray);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllEncryptedTxFromconditionResponse>, I>>(
    base?: I
  ): QueryAllEncryptedTxFromconditionResponse {
    return QueryAllEncryptedTxFromconditionResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllEncryptedTxFromconditionResponse>, I>>(
    object: I
  ): QueryAllEncryptedTxFromconditionResponse {
    const message = createBaseQueryAllEncryptedTxFromconditionResponse();
    message.encryptedTxArray =
      object.encryptedTxArray !== undefined && object.encryptedTxArray !== null
        ? EncryptedTxArray.fromPartial(object.encryptedTxArray)
        : undefined;
    return message;
  },
};

function createBaseQueryLatestconditionRequest(): QueryLatestconditionRequest {
  return {};
}

export const QueryLatestconditionRequest = {
  encode(_: QueryLatestconditionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLatestconditionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLatestconditionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): QueryLatestconditionRequest {
    return {};
  },

  toJSON(_: QueryLatestconditionRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryLatestconditionRequest>, I>>(base?: I): QueryLatestconditionRequest {
    return QueryLatestconditionRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryLatestconditionRequest>, I>>(_: I): QueryLatestconditionRequest {
    const message = createBaseQueryLatestconditionRequest();
    return message;
  },
};

function createBaseQueryLatestconditionResponse(): QueryLatestconditionResponse {
  return { condition: 0 };
}

export const QueryLatestconditionResponse = {
  encode(message: QueryLatestconditionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.condition !== 0) {
      writer.uint32(8).uint64(message.condition);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLatestconditionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLatestconditionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.condition = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryLatestconditionResponse {
    return {
      condition: isSet(object.condition) ? globalThis.Number(object.condition) : 0,
    };
  },

  toJSON(message: QueryLatestconditionResponse): unknown {
    const obj: any = {};
    if (message.condition !== 0) {
      obj.condition = Math.round(message.condition);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryLatestconditionResponse>, I>>(base?: I): QueryLatestconditionResponse {
    return QueryLatestconditionResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryLatestconditionResponse>, I>>(object: I): QueryLatestconditionResponse {
    const message = createBaseQueryLatestconditionResponse();
    message.condition = object.condition ?? 0;
    return message;
  },
};

function createBaseQueryGetConditionalencNonceRequest(): QueryGetConditionalencNonceRequest {
  return { address: '' };
}

export const QueryGetConditionalencNonceRequest = {
  encode(message: QueryGetConditionalencNonceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== '') {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetConditionalencNonceRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetConditionalencNonceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetConditionalencNonceRequest {
    return {
      address: isSet(object.address) ? globalThis.String(object.address) : '',
    };
  },

  toJSON(message: QueryGetConditionalencNonceRequest): unknown {
    const obj: any = {};
    if (message.address !== '') {
      obj.address = message.address;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetConditionalencNonceRequest>, I>>(
    base?: I
  ): QueryGetConditionalencNonceRequest {
    return QueryGetConditionalencNonceRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetConditionalencNonceRequest>, I>>(
    object: I
  ): QueryGetConditionalencNonceRequest {
    const message = createBaseQueryGetConditionalencNonceRequest();
    message.address = object.address ?? '';
    return message;
  },
};

function createBaseQueryGetConditionalencNonceResponse(): QueryGetConditionalencNonceResponse {
  return { ConditionalencNonce: undefined };
}

export const QueryGetConditionalencNonceResponse = {
  encode(message: QueryGetConditionalencNonceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ConditionalencNonce !== undefined) {
      ConditionalencNonce.encode(message.ConditionalencNonce, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetConditionalencNonceResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetConditionalencNonceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.ConditionalencNonce = ConditionalencNonce.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetConditionalencNonceResponse {
    return {
      ConditionalencNonce: isSet(object.ConditionalencNonce)
        ? ConditionalencNonce.fromJSON(object.ConditionalencNonce)
        : undefined,
    };
  },

  toJSON(message: QueryGetConditionalencNonceResponse): unknown {
    const obj: any = {};
    if (message.ConditionalencNonce !== undefined) {
      obj.ConditionalencNonce = ConditionalencNonce.toJSON(message.ConditionalencNonce);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetConditionalencNonceResponse>, I>>(
    base?: I
  ): QueryGetConditionalencNonceResponse {
    return QueryGetConditionalencNonceResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetConditionalencNonceResponse>, I>>(
    object: I
  ): QueryGetConditionalencNonceResponse {
    const message = createBaseQueryGetConditionalencNonceResponse();
    message.ConditionalencNonce =
      object.ConditionalencNonce !== undefined && object.ConditionalencNonce !== null
        ? ConditionalencNonce.fromPartial(object.ConditionalencNonce)
        : undefined;
    return message;
  },
};

function createBaseQueryAllConditionalencNonceRequest(): QueryAllConditionalencNonceRequest {
  return { pagination: undefined };
}

export const QueryAllConditionalencNonceRequest = {
  encode(message: QueryAllConditionalencNonceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllConditionalencNonceRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllConditionalencNonceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllConditionalencNonceRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllConditionalencNonceRequest): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllConditionalencNonceRequest>, I>>(
    base?: I
  ): QueryAllConditionalencNonceRequest {
    return QueryAllConditionalencNonceRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllConditionalencNonceRequest>, I>>(
    object: I
  ): QueryAllConditionalencNonceRequest {
    const message = createBaseQueryAllConditionalencNonceRequest();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryAllConditionalencNonceResponse(): QueryAllConditionalencNonceResponse {
  return { ConditionalencNonce: [], pagination: undefined };
}

export const QueryAllConditionalencNonceResponse = {
  encode(message: QueryAllConditionalencNonceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.ConditionalencNonce) {
      ConditionalencNonce.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllConditionalencNonceResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllConditionalencNonceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.ConditionalencNonce.push(ConditionalencNonce.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pagination = PageResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllConditionalencNonceResponse {
    return {
      ConditionalencNonce: globalThis.Array.isArray(object?.ConditionalencNonce)
        ? object.ConditionalencNonce.map((e: any) => ConditionalencNonce.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllConditionalencNonceResponse): unknown {
    const obj: any = {};
    if (message.ConditionalencNonce?.length) {
      obj.ConditionalencNonce = message.ConditionalencNonce.map((e) => ConditionalencNonce.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllConditionalencNonceResponse>, I>>(
    base?: I
  ): QueryAllConditionalencNonceResponse {
    return QueryAllConditionalencNonceResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllConditionalencNonceResponse>, I>>(
    object: I
  ): QueryAllConditionalencNonceResponse {
    const message = createBaseQueryAllConditionalencNonceResponse();
    message.ConditionalencNonce = object.ConditionalencNonce?.map((e) => ConditionalencNonce.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryPubKeyRequest(): QueryPubKeyRequest {
  return {};
}

export const QueryPubKeyRequest = {
  encode(_: QueryPubKeyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPubKeyRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPubKeyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): QueryPubKeyRequest {
    return {};
  },

  toJSON(_: QueryPubKeyRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryPubKeyRequest>, I>>(base?: I): QueryPubKeyRequest {
    return QueryPubKeyRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryPubKeyRequest>, I>>(_: I): QueryPubKeyRequest {
    const message = createBaseQueryPubKeyRequest();
    return message;
  },
};

function createBaseQueryPubKeyResponse(): QueryPubKeyResponse {
  return { activePubKey: undefined, queuedPubKey: undefined };
}

export const QueryPubKeyResponse = {
  encode(message: QueryPubKeyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.activePubKey !== undefined) {
      ActivePubKey.encode(message.activePubKey, writer.uint32(10).fork()).ldelim();
    }
    if (message.queuedPubKey !== undefined) {
      QueuedPubKey.encode(message.queuedPubKey, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPubKeyResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPubKeyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.activePubKey = ActivePubKey.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.queuedPubKey = QueuedPubKey.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryPubKeyResponse {
    return {
      activePubKey: isSet(object.activePubKey) ? ActivePubKey.fromJSON(object.activePubKey) : undefined,
      queuedPubKey: isSet(object.queuedPubKey) ? QueuedPubKey.fromJSON(object.queuedPubKey) : undefined,
    };
  },

  toJSON(message: QueryPubKeyResponse): unknown {
    const obj: any = {};
    if (message.activePubKey !== undefined) {
      obj.activePubKey = ActivePubKey.toJSON(message.activePubKey);
    }
    if (message.queuedPubKey !== undefined) {
      obj.queuedPubKey = QueuedPubKey.toJSON(message.queuedPubKey);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryPubKeyResponse>, I>>(base?: I): QueryPubKeyResponse {
    return QueryPubKeyResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryPubKeyResponse>, I>>(object: I): QueryPubKeyResponse {
    const message = createBaseQueryPubKeyResponse();
    message.activePubKey =
      object.activePubKey !== undefined && object.activePubKey !== null
        ? ActivePubKey.fromPartial(object.activePubKey)
        : undefined;
    message.queuedPubKey =
      object.queuedPubKey !== undefined && object.queuedPubKey !== null
        ? QueuedPubKey.fromPartial(object.queuedPubKey)
        : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a EncryptedTx by index. */
  EncryptedTx(request: QueryGetEncryptedTxRequest): Promise<QueryGetEncryptedTxResponse>;
  /** Queries a list of EncryptedTx items. */
  EncryptedTxAll(request: QueryAllEncryptedTxRequest): Promise<QueryAllEncryptedTxResponse>;
  /** Queries a list of EncryptedTx items. */
  EncryptedTxAllFromCondition(
    request: QueryAllEncryptedTxFromconditionRequest
  ): Promise<QueryAllEncryptedTxFromconditionResponse>;
  /** Queries a list of Latestcondition items. */
  LatestCondition(request: QueryLatestconditionRequest): Promise<QueryLatestconditionResponse>;
  /** Queries a ConditionalencNonce by index. */
  ConditionalencNonce(request: QueryGetConditionalencNonceRequest): Promise<QueryGetConditionalencNonceResponse>;
  /** Queries a list of ConditionalencNonce items. */
  ConditionalencNonceAll(request: QueryAllConditionalencNonceRequest): Promise<QueryAllConditionalencNonceResponse>;
  /** Queries the public keys */
  PubKey(request: QueryPubKeyRequest): Promise<QueryPubKeyResponse>;
}

export const QueryServiceName = 'fairyring.Conditionalenc.Query';
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || QueryServiceName;
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.EncryptedTx = this.EncryptedTx.bind(this);
    this.EncryptedTxAll = this.EncryptedTxAll.bind(this);
    this.EncryptedTxAllFromCondition = this.EncryptedTxAllFromCondition.bind(this);
    this.LatestCondition = this.LatestCondition.bind(this);
    this.ConditionalencNonce = this.ConditionalencNonce.bind(this);
    this.ConditionalencNonceAll = this.ConditionalencNonceAll.bind(this);
    this.PubKey = this.PubKey.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, 'Params', data);
    return promise.then((data) => QueryParamsResponse.decode(_m0.Reader.create(data)));
  }

  EncryptedTx(request: QueryGetEncryptedTxRequest): Promise<QueryGetEncryptedTxResponse> {
    const data = QueryGetEncryptedTxRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, 'EncryptedTx', data);
    return promise.then((data) => QueryGetEncryptedTxResponse.decode(_m0.Reader.create(data)));
  }

  EncryptedTxAll(request: QueryAllEncryptedTxRequest): Promise<QueryAllEncryptedTxResponse> {
    const data = QueryAllEncryptedTxRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, 'EncryptedTxAll', data);
    return promise.then((data) => QueryAllEncryptedTxResponse.decode(_m0.Reader.create(data)));
  }

  EncryptedTxAllFromCondition(
    request: QueryAllEncryptedTxFromconditionRequest
  ): Promise<QueryAllEncryptedTxFromconditionResponse> {
    const data = QueryAllEncryptedTxFromconditionRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, 'EncryptedTxAllFromCondition', data);
    return promise.then((data) => QueryAllEncryptedTxFromconditionResponse.decode(_m0.Reader.create(data)));
  }

  LatestCondition(request: QueryLatestconditionRequest): Promise<QueryLatestconditionResponse> {
    const data = QueryLatestconditionRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, 'LatestCondition', data);
    return promise.then((data) => QueryLatestconditionResponse.decode(_m0.Reader.create(data)));
  }

  ConditionalencNonce(request: QueryGetConditionalencNonceRequest): Promise<QueryGetConditionalencNonceResponse> {
    const data = QueryGetConditionalencNonceRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, 'ConditionalencNonce', data);
    return promise.then((data) => QueryGetConditionalencNonceResponse.decode(_m0.Reader.create(data)));
  }

  ConditionalencNonceAll(request: QueryAllConditionalencNonceRequest): Promise<QueryAllConditionalencNonceResponse> {
    const data = QueryAllConditionalencNonceRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, 'ConditionalencNonceAll', data);
    return promise.then((data) => QueryAllConditionalencNonceResponse.decode(_m0.Reader.create(data)));
  }

  PubKey(request: QueryPubKeyRequest): Promise<QueryPubKeyResponse> {
    const data = QueryPubKeyRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, 'PubKey', data);
    return promise.then((data) => QueryPubKeyResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends globalThis.Array<infer U>
    ? globalThis.Array<DeepPartial<U>>
    : T extends ReadonlyArray<infer U>
      ? ReadonlyArray<DeepPartial<U>>
      : T extends {}
        ? { [K in keyof T]?: DeepPartial<T[K]> }
        : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & {
      [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
    };

function longToNumber(long: Long): number {
  if (long.gt(globalThis.Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER');
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
