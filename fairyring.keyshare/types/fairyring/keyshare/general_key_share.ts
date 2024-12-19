/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'fairyring.keyshare';

export interface GeneralKeyShare {
  validator: string;
  idType: string;
  idValue: string;
  keyShare: string;
  keyShareIndex: number;
  receivedTimestamp: number;
  receivedBlockHeight: number;
}

function createBaseGeneralKeyShare(): GeneralKeyShare {
  return {
    validator: '',
    idType: '',
    idValue: '',
    keyShare: '',
    keyShareIndex: 0,
    receivedTimestamp: 0,
    receivedBlockHeight: 0,
  };
}

export const GeneralKeyShare = {
  encode(message: GeneralKeyShare, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validator !== '') {
      writer.uint32(10).string(message.validator);
    }
    if (message.idType !== '') {
      writer.uint32(18).string(message.idType);
    }
    if (message.idValue !== '') {
      writer.uint32(26).string(message.idValue);
    }
    if (message.keyShare !== '') {
      writer.uint32(34).string(message.keyShare);
    }
    if (message.keyShareIndex !== 0) {
      writer.uint32(40).uint64(message.keyShareIndex);
    }
    if (message.receivedTimestamp !== 0) {
      writer.uint32(48).uint64(message.receivedTimestamp);
    }
    if (message.receivedBlockHeight !== 0) {
      writer.uint32(56).uint64(message.receivedBlockHeight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GeneralKeyShare {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGeneralKeyShare();
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
          if (tag !== 18) {
            break;
          }

          message.idType = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.idValue = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.keyShare = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.keyShareIndex = longToNumber(reader.uint64() as Long);
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.receivedTimestamp = longToNumber(reader.uint64() as Long);
          continue;
        case 7:
          if (tag !== 56) {
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

  fromJSON(object: any): GeneralKeyShare {
    return {
      validator: isSet(object.validator) ? String(object.validator) : '',
      idType: isSet(object.idType) ? String(object.idType) : '',
      idValue: isSet(object.idValue) ? String(object.idValue) : '',
      keyShare: isSet(object.keyShare) ? String(object.keyShare) : '',
      keyShareIndex: isSet(object.keyShareIndex) ? Number(object.keyShareIndex) : 0,
      receivedTimestamp: isSet(object.receivedTimestamp) ? Number(object.receivedTimestamp) : 0,
      receivedBlockHeight: isSet(object.receivedBlockHeight) ? Number(object.receivedBlockHeight) : 0,
    };
  },

  toJSON(message: GeneralKeyShare): unknown {
    const obj: any = {};
    if (message.validator !== '') {
      obj.validator = message.validator;
    }
    if (message.idType !== '') {
      obj.idType = message.idType;
    }
    if (message.idValue !== '') {
      obj.idValue = message.idValue;
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

  create<I extends Exact<DeepPartial<GeneralKeyShare>, I>>(base?: I): GeneralKeyShare {
    return GeneralKeyShare.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GeneralKeyShare>, I>>(object: I): GeneralKeyShare {
    const message = createBaseGeneralKeyShare();
    message.validator = object.validator ?? '';
    message.idType = object.idType ?? '';
    message.idValue = object.idValue ?? '';
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
