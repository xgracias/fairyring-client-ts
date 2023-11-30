/* eslint-disable */
import * as _m0 from 'protobufjs/minimal';
import Long = require('long');

export const protobufPackage = 'fairyring.Conditionalenc';

export interface AggregatedConditionalKeyShare {
  condition: number;
  data: string;
  creator: string;
}

function createBaseAggregatedConditionalKeyShare(): AggregatedConditionalKeyShare {
  return { condition: 0, data: '', creator: '' };
}

export const AggregatedConditionalKeyShare = {
  encode(
    message: AggregatedConditionalKeyShare,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.condition !== 0) {
      writer.uint32(8).uint64(message.condition);
    }
    if (message.data !== '') {
      writer.uint32(18).string(message.data);
    }
    if (message.creator !== '') {
      writer.uint32(26).string(message.creator);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AggregatedConditionalKeyShare {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAggregatedConditionalKeyShare();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.condition = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.data = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.creator = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AggregatedConditionalKeyShare {
    return {
      condition: isSet(object.condition)
        ? globalThis.Number(object.condition)
        : 0,
      data: isSet(object.data) ? globalThis.String(object.data) : '',
      creator: isSet(object.creator) ? globalThis.String(object.creator) : '',
    };
  },

  toJSON(message: AggregatedConditionalKeyShare): unknown {
    const obj: any = {};
    if (message.condition !== 0) {
      obj.condition = Math.round(message.condition);
    }
    if (message.data !== '') {
      obj.data = message.data;
    }
    if (message.creator !== '') {
      obj.creator = message.creator;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AggregatedConditionalKeyShare>, I>>(
    base?: I
  ): AggregatedConditionalKeyShare {
    return AggregatedConditionalKeyShare.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AggregatedConditionalKeyShare>, I>>(
    object: I
  ): AggregatedConditionalKeyShare {
    const message = createBaseAggregatedConditionalKeyShare();
    message.condition = object.condition ?? 0;
    message.data = object.data ?? '';
    message.creator = object.creator ?? '';
    return message;
  },
};

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

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
