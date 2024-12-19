/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'fairyring.keyshare';

export interface KeyShare {
  validator: string;
  blockHeight: number;
  keyShare: string;
  keyShareIndex: number;
  receivedTimestamp: number;
  receivedBlockHeight: number;
}

function createBaseKeyShare(): KeyShare {
  return {
    validator: '',
    blockHeight: 0,
    keyShare: '',
    keyShareIndex: 0,
    receivedTimestamp: 0,
    receivedBlockHeight: 0,
  };
}

export const KeyShare = {
  encode(message: KeyShare, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validator !== '') {
      writer.uint32(10).string(message.validator);
    }
    if (message.blockHeight !== 0) {
      writer.uint32(16).uint64(message.blockHeight);
    }
    if (message.keyShare !== '') {
      writer.uint32(26).string(message.keyShare);
    }
    if (message.keyShareIndex !== 0) {
      writer.uint32(32).uint64(message.keyShareIndex);
    }
    if (message.receivedTimestamp !== 0) {
      writer.uint32(40).uint64(message.receivedTimestamp);
    }
    if (message.receivedBlockHeight !== 0) {
      writer.uint32(48).uint64(message.receivedBlockHeight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): KeyShare {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKeyShare();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.validator = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.blockHeight = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.keyShare = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.keyShareIndex = longToNumber(reader.uint64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.receivedTimestamp = longToNumber(reader.uint64() as Long);
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.receivedBlockHeight = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): KeyShare {
    return {
      validator: isSet(object.validator) ? String(object.validator) : '',
      blockHeight: isSet(object.blockHeight) ? Number(object.blockHeight) : 0,
      keyShare: isSet(object.keyShare) ? String(object.keyShare) : '',
      keyShareIndex: isSet(object.keyShareIndex) ? Number(object.keyShareIndex) : 0,
      receivedTimestamp: isSet(object.receivedTimestamp) ? Number(object.receivedTimestamp) : 0,
      receivedBlockHeight: isSet(object.receivedBlockHeight) ? Number(object.receivedBlockHeight) : 0,
    };
  },

  toJSON(message: KeyShare): unknown {
    const obj: any = {};
    if (message.validator !== '') {
      obj.validator = message.validator;
    }
    if (message.blockHeight !== 0) {
      obj.blockHeight = Math.round(message.blockHeight);
    }
    if (message.keyShare !== '') {
      obj.keyShare = message.keyShare;
    }
    if (message.keyShareIndex !== 0) {
      obj.keyShareIndex = Math.round(message.keyShareIndex);
    }
    if (message.receivedTimestamp !== 0) {
      obj.receivedTimestamp = Math.round(message.receivedTimestamp);
    }
    if (message.receivedBlockHeight !== 0) {
      obj.receivedBlockHeight = Math.round(message.receivedBlockHeight);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<KeyShare>, I>>(base?: I): KeyShare {
    return KeyShare.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<KeyShare>, I>>(object: I): KeyShare {
    const message = createBaseKeyShare();
    message.validator = object.validator ?? '';
    message.blockHeight = object.blockHeight ?? 0;
    message.keyShare = object.keyShare ?? '';
    message.keyShareIndex = object.keyShareIndex ?? 0;
    message.receivedTimestamp = object.receivedTimestamp ?? 0;
    message.receivedBlockHeight = object.receivedBlockHeight ?? 0;
    return message;
  },
};

declare const self: any | undefined;
declare const window: any | undefined;
declare const global: any | undefined;
const tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== 'undefined') {
    return globalThis;
  }
  if (typeof self !== 'undefined') {
    return self;
  }
  if (typeof window !== 'undefined') {
    return window;
  }
  if (typeof global !== 'undefined') {
    return global;
  }
  throw 'Unable to locate global object';
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T extends ReadonlyArray<infer U>
      ? ReadonlyArray<DeepPartial<U>>
      : T extends {}
        ? { [K in keyof T]?: DeepPartial<T[K]> }
        : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new tsProtoGlobalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER');
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
