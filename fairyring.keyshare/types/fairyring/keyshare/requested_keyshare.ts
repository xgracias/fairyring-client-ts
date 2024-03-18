/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "fairyring.keyshare";

export interface KeyShareRequest {
  identity: string;
  pubkey: string;
  /** Used only when the request is made via IBC */
  ibcInfo:
    | IBCInfo
    | undefined;
  /** Used only when the request is made via IBC */
  counterparty: CounterPartyIBCInfo | undefined;
  aggrKeyshare: string;
  /** This is only used when the request is for private governance */
  proposalId: string;
  /** might be useful to destination chains to sort out the response */
  requestId: string;
  sent: boolean;
}

export interface IBCInfo {
  ClientID: string;
  ConnectionID: string;
  ChannelID: string;
  PortID: string;
}

export interface CounterPartyIBCInfo {
  ClientID: string;
  ConnectionID: string;
  ChannelID: string;
  PortID: string;
}

function createBaseKeyShareRequest(): KeyShareRequest {
  return {
    identity: "",
    pubkey: "",
    ibcInfo: undefined,
    counterparty: undefined,
    aggrKeyshare: "",
    proposalId: "",
    requestId: "",
    sent: false,
  };
}

export const KeyShareRequest = {
  encode(message: KeyShareRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.identity !== "") {
      writer.uint32(10).string(message.identity);
    }
    if (message.pubkey !== "") {
      writer.uint32(18).string(message.pubkey);
    }
    if (message.ibcInfo !== undefined) {
      IBCInfo.encode(message.ibcInfo, writer.uint32(26).fork()).ldelim();
    }
    if (message.counterparty !== undefined) {
      CounterPartyIBCInfo.encode(message.counterparty, writer.uint32(34).fork()).ldelim();
    }
    if (message.aggrKeyshare !== "") {
      writer.uint32(42).string(message.aggrKeyshare);
    }
    if (message.proposalId !== "") {
      writer.uint32(50).string(message.proposalId);
    }
    if (message.requestId !== "") {
      writer.uint32(58).string(message.requestId);
    }
    if (message.sent === true) {
      writer.uint32(64).bool(message.sent);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): KeyShareRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKeyShareRequest();
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
        case 3:
          if (tag !== 26) {
            break;
          }

          message.ibcInfo = IBCInfo.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.counterparty = CounterPartyIBCInfo.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.aggrKeyshare = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.proposalId = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.requestId = reader.string();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.sent = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): KeyShareRequest {
    return {
      identity: isSet(object.identity) ? String(object.identity) : "",
      pubkey: isSet(object.pubkey) ? String(object.pubkey) : "",
      ibcInfo: isSet(object.ibcInfo) ? IBCInfo.fromJSON(object.ibcInfo) : undefined,
      counterparty: isSet(object.counterparty) ? CounterPartyIBCInfo.fromJSON(object.counterparty) : undefined,
      aggrKeyshare: isSet(object.aggrKeyshare) ? String(object.aggrKeyshare) : "",
      proposalId: isSet(object.proposalId) ? String(object.proposalId) : "",
      requestId: isSet(object.requestId) ? String(object.requestId) : "",
      sent: isSet(object.sent) ? Boolean(object.sent) : false,
    };
  },

  toJSON(message: KeyShareRequest): unknown {
    const obj: any = {};
    if (message.identity !== "") {
      obj.identity = message.identity;
    }
    if (message.pubkey !== "") {
      obj.pubkey = message.pubkey;
    }
    if (message.ibcInfo !== undefined) {
      obj.ibcInfo = IBCInfo.toJSON(message.ibcInfo);
    }
    if (message.counterparty !== undefined) {
      obj.counterparty = CounterPartyIBCInfo.toJSON(message.counterparty);
    }
    if (message.aggrKeyshare !== "") {
      obj.aggrKeyshare = message.aggrKeyshare;
    }
    if (message.proposalId !== "") {
      obj.proposalId = message.proposalId;
    }
    if (message.requestId !== "") {
      obj.requestId = message.requestId;
    }
    if (message.sent === true) {
      obj.sent = message.sent;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<KeyShareRequest>, I>>(base?: I): KeyShareRequest {
    return KeyShareRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<KeyShareRequest>, I>>(object: I): KeyShareRequest {
    const message = createBaseKeyShareRequest();
    message.identity = object.identity ?? "";
    message.pubkey = object.pubkey ?? "";
    message.ibcInfo = (object.ibcInfo !== undefined && object.ibcInfo !== null)
      ? IBCInfo.fromPartial(object.ibcInfo)
      : undefined;
    message.counterparty = (object.counterparty !== undefined && object.counterparty !== null)
      ? CounterPartyIBCInfo.fromPartial(object.counterparty)
      : undefined;
    message.aggrKeyshare = object.aggrKeyshare ?? "";
    message.proposalId = object.proposalId ?? "";
    message.requestId = object.requestId ?? "";
    message.sent = object.sent ?? false;
    return message;
  },
};

function createBaseIBCInfo(): IBCInfo {
  return { ClientID: "", ConnectionID: "", ChannelID: "", PortID: "" };
}

export const IBCInfo = {
  encode(message: IBCInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ClientID !== "") {
      writer.uint32(10).string(message.ClientID);
    }
    if (message.ConnectionID !== "") {
      writer.uint32(18).string(message.ConnectionID);
    }
    if (message.ChannelID !== "") {
      writer.uint32(26).string(message.ChannelID);
    }
    if (message.PortID !== "") {
      writer.uint32(34).string(message.PortID);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IBCInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIBCInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.ClientID = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.ConnectionID = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.ChannelID = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.PortID = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): IBCInfo {
    return {
      ClientID: isSet(object.ClientID) ? String(object.ClientID) : "",
      ConnectionID: isSet(object.ConnectionID) ? String(object.ConnectionID) : "",
      ChannelID: isSet(object.ChannelID) ? String(object.ChannelID) : "",
      PortID: isSet(object.PortID) ? String(object.PortID) : "",
    };
  },

  toJSON(message: IBCInfo): unknown {
    const obj: any = {};
    if (message.ClientID !== "") {
      obj.ClientID = message.ClientID;
    }
    if (message.ConnectionID !== "") {
      obj.ConnectionID = message.ConnectionID;
    }
    if (message.ChannelID !== "") {
      obj.ChannelID = message.ChannelID;
    }
    if (message.PortID !== "") {
      obj.PortID = message.PortID;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<IBCInfo>, I>>(base?: I): IBCInfo {
    return IBCInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<IBCInfo>, I>>(object: I): IBCInfo {
    const message = createBaseIBCInfo();
    message.ClientID = object.ClientID ?? "";
    message.ConnectionID = object.ConnectionID ?? "";
    message.ChannelID = object.ChannelID ?? "";
    message.PortID = object.PortID ?? "";
    return message;
  },
};

function createBaseCounterPartyIBCInfo(): CounterPartyIBCInfo {
  return { ClientID: "", ConnectionID: "", ChannelID: "", PortID: "" };
}

export const CounterPartyIBCInfo = {
  encode(message: CounterPartyIBCInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ClientID !== "") {
      writer.uint32(10).string(message.ClientID);
    }
    if (message.ConnectionID !== "") {
      writer.uint32(18).string(message.ConnectionID);
    }
    if (message.ChannelID !== "") {
      writer.uint32(26).string(message.ChannelID);
    }
    if (message.PortID !== "") {
      writer.uint32(34).string(message.PortID);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CounterPartyIBCInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCounterPartyIBCInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.ClientID = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.ConnectionID = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.ChannelID = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.PortID = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CounterPartyIBCInfo {
    return {
      ClientID: isSet(object.ClientID) ? String(object.ClientID) : "",
      ConnectionID: isSet(object.ConnectionID) ? String(object.ConnectionID) : "",
      ChannelID: isSet(object.ChannelID) ? String(object.ChannelID) : "",
      PortID: isSet(object.PortID) ? String(object.PortID) : "",
    };
  },

  toJSON(message: CounterPartyIBCInfo): unknown {
    const obj: any = {};
    if (message.ClientID !== "") {
      obj.ClientID = message.ClientID;
    }
    if (message.ConnectionID !== "") {
      obj.ConnectionID = message.ConnectionID;
    }
    if (message.ChannelID !== "") {
      obj.ChannelID = message.ChannelID;
    }
    if (message.PortID !== "") {
      obj.PortID = message.PortID;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CounterPartyIBCInfo>, I>>(base?: I): CounterPartyIBCInfo {
    return CounterPartyIBCInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CounterPartyIBCInfo>, I>>(object: I): CounterPartyIBCInfo {
    const message = createBaseCounterPartyIBCInfo();
    message.ClientID = object.ClientID ?? "";
    message.ConnectionID = object.ConnectionID ?? "";
    message.ChannelID = object.ChannelID ?? "";
    message.PortID = object.PortID ?? "";
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
