/* eslint-disable */
import * as _m0 from 'protobufjs/minimal';
import { Coin } from '../../cosmos/base/v1beta1/coin';
import Long from 'long';

export const protobufPackage = 'fairyring.Conditionalenc';

export interface EncryptedTx {
  targetCondition: string;
  index: number;
  data: string;
  creator: string;
  chargedGas: Coin | undefined;
}

export interface EncryptedTxArray {
  encryptedTx: EncryptedTx[];
}

function createBaseEncryptedTx(): EncryptedTx {
  return {
    targetCondition: '',
    index: 0,
    data: '',
    creator: '',
    chargedGas: undefined,
  };
}

export const EncryptedTx = {
  encode(message: EncryptedTx, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.targetCondition !== '') {
      writer.uint32(10).string(message.targetCondition);
    }
    if (message.index !== 0) {
      writer.uint32(16).uint64(message.index);
    }
    if (message.data !== '') {
      writer.uint32(26).string(message.data);
    }
    if (message.creator !== '') {
      writer.uint32(34).string(message.creator);
    }
    if (message.chargedGas !== undefined) {
      Coin.encode(message.chargedGas, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EncryptedTx {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEncryptedTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.targetCondition = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.index = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.data = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.chargedGas = Coin.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EncryptedTx {
    return {
      targetCondition: isSet(object.targetCondition) ? globalThis.String(object.targetCondition) : '',
      index: isSet(object.index) ? globalThis.Number(object.index) : 0,
      data: isSet(object.data) ? globalThis.String(object.data) : '',
      creator: isSet(object.creator) ? globalThis.String(object.creator) : '',
      chargedGas: isSet(object.chargedGas) ? Coin.fromJSON(object.chargedGas) : undefined,
    };
  },

  toJSON(message: EncryptedTx): unknown {
    const obj: any = {};
    if (message.targetCondition !== '') {
      obj.targetCondition = message.targetCondition;
    }
    if (message.index !== 0) {
      obj.index = Math.round(message.index);
    }
    if (message.data !== '') {
      obj.data = message.data;
    }
    if (message.creator !== '') {
      obj.creator = message.creator;
    }
    if (message.chargedGas !== undefined) {
      obj.chargedGas = Coin.toJSON(message.chargedGas);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EncryptedTx>, I>>(base?: I): EncryptedTx {
    return EncryptedTx.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EncryptedTx>, I>>(object: I): EncryptedTx {
    const message = createBaseEncryptedTx();
    message.targetCondition = object.targetCondition ?? '';
    message.index = object.index ?? 0;
    message.data = object.data ?? '';
    message.creator = object.creator ?? '';
    message.chargedGas =
      object.chargedGas !== undefined && object.chargedGas !== null ? Coin.fromPartial(object.chargedGas) : undefined;
    return message;
  },
};

function createBaseEncryptedTxArray(): EncryptedTxArray {
  return { encryptedTx: [] };
}

export const EncryptedTxArray = {
  encode(message: EncryptedTxArray, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.encryptedTx) {
      EncryptedTx.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EncryptedTxArray {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEncryptedTxArray();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.encryptedTx.push(EncryptedTx.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EncryptedTxArray {
    return {
      encryptedTx: globalThis.Array.isArray(object?.encryptedTx)
        ? object.encryptedTx.map((e: any) => EncryptedTx.fromJSON(e))
        : [],
    };
  },

  toJSON(message: EncryptedTxArray): unknown {
    const obj: any = {};
    if (message.encryptedTx?.length) {
      obj.encryptedTx = message.encryptedTx.map((e) => EncryptedTx.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EncryptedTxArray>, I>>(base?: I): EncryptedTxArray {
    return EncryptedTxArray.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EncryptedTxArray>, I>>(object: I): EncryptedTxArray {
    const message = createBaseEncryptedTxArray();
    message.encryptedTx = object.encryptedTx?.map((e) => EncryptedTx.fromPartial(e)) || [];
    return message;
  },
};

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
