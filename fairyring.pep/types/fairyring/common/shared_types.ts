/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "fairyring.common";

/** RequestAggrKeyshare defines a struct for the data payload */
export interface RequestAggrKeyshare {
  creator: string;
  proposalId?: string | undefined;
  requestId?: string | undefined;
}

export interface RequestAggrKeyshareResponse {
  identity: string;
  pubkey: string;
}

/** GetAggrKeyshare defines a struct for the data payload */
export interface GetAggrKeyshare {
  proposalId?: string | undefined;
  requestId?: string | undefined;
  identity: string;
}

export interface GetAggrKeyshareResponse {
}

export interface ActivePublicKey {
  publicKey: string;
  creator: string;
  expiry: number;
}

export interface QueuedPublicKey {
  publicKey: string;
  creator: string;
  expiry: number;
}

function createBaseRequestAggrKeyshare(): RequestAggrKeyshare {
  return { creator: "", proposalId: undefined, requestId: undefined };
}

export const RequestAggrKeyshare = {
  encode(message: RequestAggrKeyshare, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.proposalId !== undefined) {
      writer.uint32(18).string(message.proposalId);
    }
    if (message.requestId !== undefined) {
      writer.uint32(26).string(message.requestId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestAggrKeyshare {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestAggrKeyshare();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.proposalId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.requestId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RequestAggrKeyshare {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      proposalId: isSet(object.proposalId) ? String(object.proposalId) : undefined,
      requestId: isSet(object.requestId) ? String(object.requestId) : undefined,
    };
  },

  toJSON(message: RequestAggrKeyshare): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.proposalId !== undefined) {
      obj.proposalId = message.proposalId;
    }
    if (message.requestId !== undefined) {
      obj.requestId = message.requestId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RequestAggrKeyshare>, I>>(base?: I): RequestAggrKeyshare {
    return RequestAggrKeyshare.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RequestAggrKeyshare>, I>>(object: I): RequestAggrKeyshare {
    const message = createBaseRequestAggrKeyshare();
    message.creator = object.creator ?? "";
    message.proposalId = object.proposalId ?? undefined;
    message.requestId = object.requestId ?? undefined;
    return message;
  },
};

function createBaseRequestAggrKeyshareResponse(): RequestAggrKeyshareResponse {
  return { identity: "", pubkey: "" };
}

export const RequestAggrKeyshareResponse = {
  encode(message: RequestAggrKeyshareResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.identity !== "") {
      writer.uint32(10).string(message.identity);
    }
    if (message.pubkey !== "") {
      writer.uint32(18).string(message.pubkey);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestAggrKeyshareResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestAggrKeyshareResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.identity = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pubkey = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RequestAggrKeyshareResponse {
    return {
      identity: isSet(object.identity) ? String(object.identity) : "",
      pubkey: isSet(object.pubkey) ? String(object.pubkey) : "",
    };
  },

  toJSON(message: RequestAggrKeyshareResponse): unknown {
    const obj: any = {};
    if (message.identity !== "") {
      obj.identity = message.identity;
    }
    if (message.pubkey !== "") {
      obj.pubkey = message.pubkey;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RequestAggrKeyshareResponse>, I>>(base?: I): RequestAggrKeyshareResponse {
    return RequestAggrKeyshareResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RequestAggrKeyshareResponse>, I>>(object: I): RequestAggrKeyshareResponse {
    const message = createBaseRequestAggrKeyshareResponse();
    message.identity = object.identity ?? "";
    message.pubkey = object.pubkey ?? "";
    return message;
  },
};

function createBaseGetAggrKeyshare(): GetAggrKeyshare {
  return { proposalId: undefined, requestId: undefined, identity: "" };
}

export const GetAggrKeyshare = {
  encode(message: GetAggrKeyshare, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.proposalId !== undefined) {
      writer.uint32(10).string(message.proposalId);
    }
    if (message.requestId !== undefined) {
      writer.uint32(18).string(message.requestId);
    }
    if (message.identity !== "") {
      writer.uint32(26).string(message.identity);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetAggrKeyshare {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAggrKeyshare();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.proposalId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.requestId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.identity = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetAggrKeyshare {
    return {
      proposalId: isSet(object.proposalId) ? String(object.proposalId) : undefined,
      requestId: isSet(object.requestId) ? String(object.requestId) : undefined,
      identity: isSet(object.identity) ? String(object.identity) : "",
    };
  },

  toJSON(message: GetAggrKeyshare): unknown {
    const obj: any = {};
    if (message.proposalId !== undefined) {
      obj.proposalId = message.proposalId;
    }
    if (message.requestId !== undefined) {
      obj.requestId = message.requestId;
    }
    if (message.identity !== "") {
      obj.identity = message.identity;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetAggrKeyshare>, I>>(base?: I): GetAggrKeyshare {
    return GetAggrKeyshare.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetAggrKeyshare>, I>>(object: I): GetAggrKeyshare {
    const message = createBaseGetAggrKeyshare();
    message.proposalId = object.proposalId ?? undefined;
    message.requestId = object.requestId ?? undefined;
    message.identity = object.identity ?? "";
    return message;
  },
};

function createBaseGetAggrKeyshareResponse(): GetAggrKeyshareResponse {
  return {};
}

export const GetAggrKeyshareResponse = {
  encode(_: GetAggrKeyshareResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetAggrKeyshareResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAggrKeyshareResponse();
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

  fromJSON(_: any): GetAggrKeyshareResponse {
    return {};
  },

  toJSON(_: GetAggrKeyshareResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<GetAggrKeyshareResponse>, I>>(base?: I): GetAggrKeyshareResponse {
    return GetAggrKeyshareResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetAggrKeyshareResponse>, I>>(_: I): GetAggrKeyshareResponse {
    const message = createBaseGetAggrKeyshareResponse();
    return message;
  },
};

function createBaseActivePublicKey(): ActivePublicKey {
  return { publicKey: "", creator: "", expiry: 0 };
}

export const ActivePublicKey = {
  encode(message: ActivePublicKey, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.publicKey !== "") {
      writer.uint32(10).string(message.publicKey);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    if (message.expiry !== 0) {
      writer.uint32(24).uint64(message.expiry);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ActivePublicKey {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActivePublicKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.publicKey = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.expiry = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ActivePublicKey {
    return {
      publicKey: isSet(object.publicKey) ? String(object.publicKey) : "",
      creator: isSet(object.creator) ? String(object.creator) : "",
      expiry: isSet(object.expiry) ? Number(object.expiry) : 0,
    };
  },

  toJSON(message: ActivePublicKey): unknown {
    const obj: any = {};
    if (message.publicKey !== "") {
      obj.publicKey = message.publicKey;
    }
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.expiry !== 0) {
      obj.expiry = Math.round(message.expiry);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ActivePublicKey>, I>>(base?: I): ActivePublicKey {
    return ActivePublicKey.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ActivePublicKey>, I>>(object: I): ActivePublicKey {
    const message = createBaseActivePublicKey();
    message.publicKey = object.publicKey ?? "";
    message.creator = object.creator ?? "";
    message.expiry = object.expiry ?? 0;
    return message;
  },
};

function createBaseQueuedPublicKey(): QueuedPublicKey {
  return { publicKey: "", creator: "", expiry: 0 };
}

export const QueuedPublicKey = {
  encode(message: QueuedPublicKey, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.publicKey !== "") {
      writer.uint32(10).string(message.publicKey);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    if (message.expiry !== 0) {
      writer.uint32(24).uint64(message.expiry);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueuedPublicKey {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueuedPublicKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.publicKey = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.expiry = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueuedPublicKey {
    return {
      publicKey: isSet(object.publicKey) ? String(object.publicKey) : "",
      creator: isSet(object.creator) ? String(object.creator) : "",
      expiry: isSet(object.expiry) ? Number(object.expiry) : 0,
    };
  },

  toJSON(message: QueuedPublicKey): unknown {
    const obj: any = {};
    if (message.publicKey !== "") {
      obj.publicKey = message.publicKey;
    }
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.expiry !== 0) {
      obj.expiry = Math.round(message.expiry);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueuedPublicKey>, I>>(base?: I): QueuedPublicKey {
    return QueuedPublicKey.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueuedPublicKey>, I>>(object: I): QueuedPublicKey {
    const message = createBaseQueuedPublicKey();
    message.publicKey = object.publicKey ?? "";
    message.creator = object.creator ?? "";
    message.expiry = object.expiry ?? 0;
    return message;
  },
};

declare const self: any | undefined;
declare const window: any | undefined;
declare const global: any | undefined;
const tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new tsProtoGlobalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
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
