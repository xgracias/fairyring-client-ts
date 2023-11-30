/* eslint-disable */
import * as _m0 from 'protobufjs/minimal';
import { ConditionalencNonce } from './conditionalenc_nonce';
import { AggregatedConditionalKeyShare } from './aggregated_key_share';
import { EncryptedTxArray } from './encrypted_tx';
import { Params } from './params';
import { ActivePubKey, QueuedPubKey } from './pub_key';

export const protobufPackage = 'fairyring.Conditionalenc';

/** GenesisState defines the Conditionalenc module's genesis state. */
export interface GenesisState {
  params: Params | undefined;
  portId: string;
  encryptedTxArray: EncryptedTxArray[];
  ConditionalencNonceList: ConditionalencNonce[];
  /** this line is used by starport scaffolding # genesis/proto/state */
  AggregatedConditionalKeyShareList: AggregatedConditionalKeyShare[];
  activePubKey: ActivePubKey | undefined;
  queuedPubKey: QueuedPubKey | undefined;
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    portId: '',
    encryptedTxArray: [],
    ConditionalencNonceList: [],
    AggregatedConditionalKeyShareList: [],
    activePubKey: undefined,
    queuedPubKey: undefined,
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.portId !== '') {
      writer.uint32(18).string(message.portId);
    }
    for (const v of message.encryptedTxArray) {
      EncryptedTxArray.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.ConditionalencNonceList) {
      ConditionalencNonce.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.AggregatedConditionalKeyShareList) {
      AggregatedConditionalKeyShare.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.activePubKey !== undefined) {
      ActivePubKey.encode(message.activePubKey, writer.uint32(58).fork()).ldelim();
    }
    if (message.queuedPubKey !== undefined) {
      QueuedPubKey.encode(message.queuedPubKey, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.params = Params.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.portId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.encryptedTxArray.push(EncryptedTxArray.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.ConditionalencNonceList.push(ConditionalencNonce.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.AggregatedConditionalKeyShareList.push(AggregatedConditionalKeyShare.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.activePubKey = ActivePubKey.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
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

  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      portId: isSet(object.portId) ? globalThis.String(object.portId) : '',
      encryptedTxArray: globalThis.Array.isArray(object?.encryptedTxArray)
        ? object.encryptedTxArray.map((e: any) => EncryptedTxArray.fromJSON(e))
        : [],
      ConditionalencNonceList: globalThis.Array.isArray(object?.ConditionalencNonceList)
        ? object.ConditionalencNonceList.map((e: any) => ConditionalencNonce.fromJSON(e))
        : [],
      AggregatedConditionalKeyShareList: globalThis.Array.isArray(object?.AggregatedConditionalKeyShareList)
        ? object.AggregatedConditionalKeyShareList.map((e: any) => AggregatedConditionalKeyShare.fromJSON(e))
        : [],
      activePubKey: isSet(object.activePubKey) ? ActivePubKey.fromJSON(object.activePubKey) : undefined,
      queuedPubKey: isSet(object.queuedPubKey) ? QueuedPubKey.fromJSON(object.queuedPubKey) : undefined,
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.params !== undefined) {
      obj.params = Params.toJSON(message.params);
    }
    if (message.portId !== '') {
      obj.portId = message.portId;
    }
    if (message.encryptedTxArray?.length) {
      obj.encryptedTxArray = message.encryptedTxArray.map((e) => EncryptedTxArray.toJSON(e));
    }
    if (message.ConditionalencNonceList?.length) {
      obj.ConditionalencNonceList = message.ConditionalencNonceList.map((e) => ConditionalencNonce.toJSON(e));
    }
    if (message.AggregatedConditionalKeyShareList?.length) {
      obj.AggregatedConditionalKeyShareList = message.AggregatedConditionalKeyShareList.map((e) =>
        AggregatedConditionalKeyShare.toJSON(e)
      );
    }
    if (message.activePubKey !== undefined) {
      obj.activePubKey = ActivePubKey.toJSON(message.activePubKey);
    }
    if (message.queuedPubKey !== undefined) {
      obj.queuedPubKey = QueuedPubKey.toJSON(message.queuedPubKey);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GenesisState>, I>>(base?: I): GenesisState {
    return GenesisState.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.params =
      object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.portId = object.portId ?? '';
    message.encryptedTxArray = object.encryptedTxArray?.map((e) => EncryptedTxArray.fromPartial(e)) || [];
    message.ConditionalencNonceList =
      object.ConditionalencNonceList?.map((e) => ConditionalencNonce.fromPartial(e)) || [];
    message.AggregatedConditionalKeyShareList =
      object.AggregatedConditionalKeyShareList?.map((e) => AggregatedConditionalKeyShare.fromPartial(e)) || [];
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
