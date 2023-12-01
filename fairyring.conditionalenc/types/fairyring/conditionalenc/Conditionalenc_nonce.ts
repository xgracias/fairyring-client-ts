/* eslint-disable */
import * as _m0 from 'protobufjs/minimal';
import Long from 'long';

export const protobufPackage = 'fairyring.Conditionalenc';

export interface ConditionalencNonce {
  address: string;
  nonce: number;
}

function createBaseConditionalencNonce(): ConditionalencNonce {
  return { address: '', nonce: 0 };
}

export const ConditionalencNonce = {
  encode(message: ConditionalencNonce, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== '') {
      writer.uint32(10).string(message.address);
    }
    if (message.nonce !== 0) {
      writer.uint32(16).uint64(message.nonce);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConditionalencNonce {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConditionalencNonce();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.nonce = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConditionalencNonce {
    return {
      address: isSet(object.address) ? globalThis.String(object.address) : '',
      nonce: isSet(object.nonce) ? globalThis.Number(object.nonce) : 0,
    };
  },

  toJSON(message: ConditionalencNonce): unknown {
    const obj: any = {};
    if (message.address !== '') {
      obj.address = message.address;
    }
    if (message.nonce !== 0) {
      obj.nonce = Math.round(message.nonce);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ConditionalencNonce>, I>>(base?: I): ConditionalencNonce {
    return ConditionalencNonce.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ConditionalencNonce>, I>>(object: I): ConditionalencNonce {
    const message = createBaseConditionalencNonce();
    message.address = object.address ?? '';
    message.nonce = object.nonce ?? 0;
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
