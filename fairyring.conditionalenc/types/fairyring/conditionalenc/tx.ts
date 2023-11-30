/* eslint-disable */
import * as _m0 from 'protobufjs/minimal';
import Long = require('long');

export const protobufPackage = 'fairyring.Conditionalenc';

export interface MsgSubmitEncryptedTx {
  creator: string;
  data: string;
  condition: number;
}

export interface MsgSubmitEncryptedTxResponse {}

/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateAggregatedConditionalKeyShare {
  creator: string;
  condition: number;
  data: string;
}

export interface MsgCreateAggregatedConditionalKeyShareResponse {}

function createBaseMsgSubmitEncryptedTx(): MsgSubmitEncryptedTx {
  return { creator: '', data: '', condition: 0 };
}

export const MsgSubmitEncryptedTx = {
  encode(message: MsgSubmitEncryptedTx, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator);
    }
    if (message.data !== '') {
      writer.uint32(18).string(message.data);
    }
    if (message.condition !== 0) {
      writer.uint32(24).uint64(message.condition);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitEncryptedTx {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitEncryptedTx();
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

          message.data = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
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

  fromJSON(object: any): MsgSubmitEncryptedTx {
    return {
      creator: isSet(object.creator) ? globalThis.String(object.creator) : '',
      data: isSet(object.data) ? globalThis.String(object.data) : '',
      condition: isSet(object.condition) ? globalThis.Number(object.condition) : 0,
    };
  },

  toJSON(message: MsgSubmitEncryptedTx): unknown {
    const obj: any = {};
    if (message.creator !== '') {
      obj.creator = message.creator;
    }
    if (message.data !== '') {
      obj.data = message.data;
    }
    if (message.condition !== 0) {
      obj.condition = Math.round(message.condition);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgSubmitEncryptedTx>, I>>(base?: I): MsgSubmitEncryptedTx {
    return MsgSubmitEncryptedTx.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgSubmitEncryptedTx>, I>>(object: I): MsgSubmitEncryptedTx {
    const message = createBaseMsgSubmitEncryptedTx();
    message.creator = object.creator ?? '';
    message.data = object.data ?? '';
    message.condition = object.condition ?? 0;
    return message;
  },
};

function createBaseMsgSubmitEncryptedTxResponse(): MsgSubmitEncryptedTxResponse {
  return {};
}

export const MsgSubmitEncryptedTxResponse = {
  encode(_: MsgSubmitEncryptedTxResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitEncryptedTxResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitEncryptedTxResponse();
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

  fromJSON(_: any): MsgSubmitEncryptedTxResponse {
    return {};
  },

  toJSON(_: MsgSubmitEncryptedTxResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgSubmitEncryptedTxResponse>, I>>(base?: I): MsgSubmitEncryptedTxResponse {
    return MsgSubmitEncryptedTxResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgSubmitEncryptedTxResponse>, I>>(_: I): MsgSubmitEncryptedTxResponse {
    const message = createBaseMsgSubmitEncryptedTxResponse();
    return message;
  },
};

function createBaseMsgCreateAggregatedConditionalKeyShare(): MsgCreateAggregatedConditionalKeyShare {
  return { creator: '', condition: 0, data: '' };
}

export const MsgCreateAggregatedConditionalKeyShare = {
  encode(message: MsgCreateAggregatedConditionalKeyShare, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator);
    }
    if (message.condition !== 0) {
      writer.uint32(16).uint64(message.condition);
    }
    if (message.data !== '') {
      writer.uint32(26).string(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateAggregatedConditionalKeyShare {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateAggregatedConditionalKeyShare();
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
          if (tag !== 16) {
            break;
          }

          message.condition = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.data = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCreateAggregatedConditionalKeyShare {
    return {
      creator: isSet(object.creator) ? globalThis.String(object.creator) : '',
      condition: isSet(object.condition) ? globalThis.Number(object.condition) : 0,
      data: isSet(object.data) ? globalThis.String(object.data) : '',
    };
  },

  toJSON(message: MsgCreateAggregatedConditionalKeyShare): unknown {
    const obj: any = {};
    if (message.creator !== '') {
      obj.creator = message.creator;
    }
    if (message.condition !== 0) {
      obj.condition = Math.round(message.condition);
    }
    if (message.data !== '') {
      obj.data = message.data;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCreateAggregatedConditionalKeyShare>, I>>(
    base?: I
  ): MsgCreateAggregatedConditionalKeyShare {
    return MsgCreateAggregatedConditionalKeyShare.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateAggregatedConditionalKeyShare>, I>>(
    object: I
  ): MsgCreateAggregatedConditionalKeyShare {
    const message = createBaseMsgCreateAggregatedConditionalKeyShare();
    message.creator = object.creator ?? '';
    message.condition = object.condition ?? 0;
    message.data = object.data ?? '';
    return message;
  },
};

function createBaseMsgCreateAggregatedConditionalKeyShareResponse(): MsgCreateAggregatedConditionalKeyShareResponse {
  return {};
}

export const MsgCreateAggregatedConditionalKeyShareResponse = {
  encode(_: MsgCreateAggregatedConditionalKeyShareResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateAggregatedConditionalKeyShareResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateAggregatedConditionalKeyShareResponse();
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

  fromJSON(_: any): MsgCreateAggregatedConditionalKeyShareResponse {
    return {};
  },

  toJSON(_: MsgCreateAggregatedConditionalKeyShareResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCreateAggregatedConditionalKeyShareResponse>, I>>(
    base?: I
  ): MsgCreateAggregatedConditionalKeyShareResponse {
    return MsgCreateAggregatedConditionalKeyShareResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateAggregatedConditionalKeyShareResponse>, I>>(
    _: I
  ): MsgCreateAggregatedConditionalKeyShareResponse {
    const message = createBaseMsgCreateAggregatedConditionalKeyShareResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  SubmitEncryptedTx(request: MsgSubmitEncryptedTx): Promise<MsgSubmitEncryptedTxResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  CreateAggregatedConditionalKeyShare(
    request: MsgCreateAggregatedConditionalKeyShare
  ): Promise<MsgCreateAggregatedConditionalKeyShareResponse>;
}

export const MsgServiceName = 'fairyring.Conditionalenc.Msg';
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || MsgServiceName;
    this.rpc = rpc;
    this.SubmitEncryptedTx = this.SubmitEncryptedTx.bind(this);
    this.CreateAggregatedConditionalKeyShare = this.CreateAggregatedConditionalKeyShare.bind(this);
  }
  SubmitEncryptedTx(request: MsgSubmitEncryptedTx): Promise<MsgSubmitEncryptedTxResponse> {
    const data = MsgSubmitEncryptedTx.encode(request).finish();
    const promise = this.rpc.request(this.service, 'SubmitEncryptedTx', data);
    return promise.then((data) => MsgSubmitEncryptedTxResponse.decode(_m0.Reader.create(data)));
  }

  CreateAggregatedConditionalKeyShare(
    request: MsgCreateAggregatedConditionalKeyShare
  ): Promise<MsgCreateAggregatedConditionalKeyShareResponse> {
    const data = MsgCreateAggregatedConditionalKeyShare.encode(request).finish();
    const promise = this.rpc.request(this.service, 'CreateAggregatedConditionalKeyShare', data);
    return promise.then((data) => MsgCreateAggregatedConditionalKeyShareResponse.decode(_m0.Reader.create(data)));
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
