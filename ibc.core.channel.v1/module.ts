import { SigningStargateClient, DeliverTxResponse, StdFee } from '@cosmjs/stargate';
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from '@cosmjs/proto-signing';
import { msgTypes } from './registry';
import { IgniteClient } from '../client';
import { MissingWalletError } from '../helpers';
import { Api } from './rest';
import { QueryPacketReceiptRequest } from './types/ibc/core/channel/v1/query';
import { QueryNextSequenceSendResponse } from './types/ibc/core/channel/v1/query';
import { MsgChannelOpenConfirmResponse } from './types/ibc/core/channel/v1/tx';
import { MsgChannelCloseConfirm } from './types/ibc/core/channel/v1/tx';
import { MsgTimeout } from './types/ibc/core/channel/v1/tx';
import { MsgChannelUpgradeTimeoutResponse } from './types/ibc/core/channel/v1/tx';
import { QueryChannelRequest } from './types/ibc/core/channel/v1/query';
import { QueryPacketCommitmentResponse } from './types/ibc/core/channel/v1/query';
import { Upgrade } from './types/ibc/core/channel/v1/upgrade';
import { MsgChannelUpgradeCancelResponse } from './types/ibc/core/channel/v1/tx';
import { MsgPruneAcknowledgements } from './types/ibc/core/channel/v1/tx';
import { Acknowledgement } from './types/ibc/core/channel/v1/channel';
import { QueryChannelsRequest } from './types/ibc/core/channel/v1/query';
import { QueryChannelsResponse } from './types/ibc/core/channel/v1/query';
import { MsgChannelOpenTry } from './types/ibc/core/channel/v1/tx';
import { MsgChannelUpgradeInit } from './types/ibc/core/channel/v1/tx';
import { MsgChannelUpgradeTryResponse } from './types/ibc/core/channel/v1/tx';
import { QueryChannelConsensusStateRequest } from './types/ibc/core/channel/v1/query';
import { QueryNextSequenceSendRequest } from './types/ibc/core/channel/v1/query';
import { QueryUnreceivedAcksRequest } from './types/ibc/core/channel/v1/query';
import { QueryNextSequenceReceiveRequest } from './types/ibc/core/channel/v1/query';
import { QueryUpgradeRequest } from './types/ibc/core/channel/v1/query';
import { MsgChannelCloseInitResponse } from './types/ibc/core/channel/v1/tx';
import { MsgTimeoutResponse } from './types/ibc/core/channel/v1/tx';
import { Params } from './types/ibc/core/channel/v1/channel';
import { QueryChannelResponse } from './types/ibc/core/channel/v1/query';
import { UpgradeFields } from './types/ibc/core/channel/v1/upgrade';
import { MsgChannelCloseInit } from './types/ibc/core/channel/v1/tx';
import { QueryPacketCommitmentsResponse } from './types/ibc/core/channel/v1/query';
import { QueryPacketAcknowledgementRequest } from './types/ibc/core/channel/v1/query';
import { MsgRecvPacket } from './types/ibc/core/channel/v1/tx';
import { MsgTimeoutOnClose } from './types/ibc/core/channel/v1/tx';
import { MsgChannelUpgradeOpenResponse } from './types/ibc/core/channel/v1/tx';
import { IdentifiedChannel } from './types/ibc/core/channel/v1/channel';
import { MsgChannelOpenTryResponse } from './types/ibc/core/channel/v1/tx';
import { MsgChannelOpenAck } from './types/ibc/core/channel/v1/tx';
import { QueryUpgradeResponse } from './types/ibc/core/channel/v1/query';
import { QueryChannelParamsRequest } from './types/ibc/core/channel/v1/query';
import { PacketId } from './types/ibc/core/channel/v1/channel';
import { MsgChannelOpenConfirm } from './types/ibc/core/channel/v1/tx';
import { MsgChannelUpgradeConfirm } from './types/ibc/core/channel/v1/tx';
import { QueryPacketCommitmentRequest } from './types/ibc/core/channel/v1/query';
import { QueryUpgradeErrorRequest } from './types/ibc/core/channel/v1/query';
import { PacketSequence } from './types/ibc/core/channel/v1/genesis';
import { Timeout } from './types/ibc/core/channel/v1/channel';
import { MsgChannelUpgradeInitResponse } from './types/ibc/core/channel/v1/tx';
import { MsgChannelUpgradeAckResponse } from './types/ibc/core/channel/v1/tx';
import { QueryChannelClientStateResponse } from './types/ibc/core/channel/v1/query';
import { MsgChannelOpenAckResponse } from './types/ibc/core/channel/v1/tx';
import { MsgRecvPacketResponse } from './types/ibc/core/channel/v1/tx';
import { MsgAcknowledgementResponse } from './types/ibc/core/channel/v1/tx';
import { MsgChannelUpgradeTimeout } from './types/ibc/core/channel/v1/tx';
import { MsgUpdateParams } from './types/ibc/core/channel/v1/tx';
import { ErrorReceipt } from './types/ibc/core/channel/v1/upgrade';
import { QueryChannelParamsResponse } from './types/ibc/core/channel/v1/query';
import { MsgChannelCloseConfirmResponse } from './types/ibc/core/channel/v1/tx';
import { Channel } from './types/ibc/core/channel/v1/channel';
import { PacketState } from './types/ibc/core/channel/v1/channel';
import { QueryPacketAcknowledgementsRequest } from './types/ibc/core/channel/v1/query';
import { QueryNextSequenceReceiveResponse } from './types/ibc/core/channel/v1/query';
import { Counterparty } from './types/ibc/core/channel/v1/channel';
import { QueryUnreceivedPacketsResponse } from './types/ibc/core/channel/v1/query';
import { MsgUpdateParamsResponse } from './types/ibc/core/channel/v1/tx';
import { MsgChannelUpgradeAck } from './types/ibc/core/channel/v1/tx';
import { QueryUpgradeErrorResponse } from './types/ibc/core/channel/v1/query';
import { QueryChannelConsensusStateResponse } from './types/ibc/core/channel/v1/query';
import { QueryUnreceivedPacketsRequest } from './types/ibc/core/channel/v1/query';
import { QueryUnreceivedAcksResponse } from './types/ibc/core/channel/v1/query';
import { MsgTimeoutOnCloseResponse } from './types/ibc/core/channel/v1/tx';
import { QueryConnectionChannelsRequest } from './types/ibc/core/channel/v1/query';
import { QueryConnectionChannelsResponse } from './types/ibc/core/channel/v1/query';
import { QueryPacketAcknowledgementResponse } from './types/ibc/core/channel/v1/query';
import { Packet } from './types/ibc/core/channel/v1/channel';
import { MsgChannelOpenInitResponse } from './types/ibc/core/channel/v1/tx';
import { MsgChannelUpgradeOpen } from './types/ibc/core/channel/v1/tx';
import { MsgChannelUpgradeCancel } from './types/ibc/core/channel/v1/tx';
import { QueryPacketCommitmentsRequest } from './types/ibc/core/channel/v1/query';
import { QueryPacketReceiptResponse } from './types/ibc/core/channel/v1/query';
import { MsgChannelUpgradeConfirmResponse } from './types/ibc/core/channel/v1/tx';
import { MsgPruneAcknowledgementsResponse } from './types/ibc/core/channel/v1/tx';
import { MsgChannelOpenInit } from './types/ibc/core/channel/v1/tx';
import { MsgAcknowledgement } from './types/ibc/core/channel/v1/tx';
import { MsgChannelUpgradeTry } from './types/ibc/core/channel/v1/tx';
import { GenesisState } from './types/ibc/core/channel/v1/genesis';
import { QueryChannelClientStateRequest } from './types/ibc/core/channel/v1/query';
import { QueryPacketAcknowledgementsResponse } from './types/ibc/core/channel/v1/query';

export {
  QueryPacketReceiptRequest,
  QueryNextSequenceSendResponse,
  MsgChannelOpenConfirmResponse,
  MsgChannelCloseConfirm,
  MsgTimeout,
  MsgChannelUpgradeTimeoutResponse,
  QueryChannelRequest,
  QueryPacketCommitmentResponse,
  Upgrade,
  MsgChannelUpgradeCancelResponse,
  MsgPruneAcknowledgements,
  Acknowledgement,
  QueryChannelsRequest,
  QueryChannelsResponse,
  MsgChannelOpenTry,
  MsgChannelUpgradeInit,
  MsgChannelUpgradeTryResponse,
  QueryChannelConsensusStateRequest,
  QueryNextSequenceSendRequest,
  QueryUnreceivedAcksRequest,
  QueryNextSequenceReceiveRequest,
  QueryUpgradeRequest,
  MsgChannelCloseInitResponse,
  MsgTimeoutResponse,
  Params,
  QueryChannelResponse,
  UpgradeFields,
  MsgChannelCloseInit,
  QueryPacketCommitmentsResponse,
  QueryPacketAcknowledgementRequest,
  MsgRecvPacket,
  MsgTimeoutOnClose,
  MsgChannelUpgradeOpenResponse,
  IdentifiedChannel,
  MsgChannelOpenTryResponse,
  MsgChannelOpenAck,
  QueryUpgradeResponse,
  QueryChannelParamsRequest,
  PacketId,
  MsgChannelOpenConfirm,
  MsgChannelUpgradeConfirm,
  QueryPacketCommitmentRequest,
  QueryUpgradeErrorRequest,
  PacketSequence,
  Timeout,
  MsgChannelUpgradeInitResponse,
  MsgChannelUpgradeAckResponse,
  QueryChannelClientStateResponse,
  MsgChannelOpenAckResponse,
  MsgRecvPacketResponse,
  MsgAcknowledgementResponse,
  MsgChannelUpgradeTimeout,
  MsgUpdateParams,
  ErrorReceipt,
  QueryChannelParamsResponse,
  MsgChannelCloseConfirmResponse,
  Channel,
  PacketState,
  QueryPacketAcknowledgementsRequest,
  QueryNextSequenceReceiveResponse,
  Counterparty,
  QueryUnreceivedPacketsResponse,
  MsgUpdateParamsResponse,
  MsgChannelUpgradeAck,
  QueryUpgradeErrorResponse,
  QueryChannelConsensusStateResponse,
  QueryUnreceivedPacketsRequest,
  QueryUnreceivedAcksResponse,
  MsgTimeoutOnCloseResponse,
  QueryConnectionChannelsRequest,
  QueryConnectionChannelsResponse,
  QueryPacketAcknowledgementResponse,
  Packet,
  MsgChannelOpenInitResponse,
  MsgChannelUpgradeOpen,
  MsgChannelUpgradeCancel,
  QueryPacketCommitmentsRequest,
  QueryPacketReceiptResponse,
  MsgChannelUpgradeConfirmResponse,
  MsgPruneAcknowledgementsResponse,
  MsgChannelOpenInit,
  MsgAcknowledgement,
  MsgChannelUpgradeTry,
  GenesisState,
  QueryChannelClientStateRequest,
  QueryPacketAcknowledgementsResponse,
};

type sendQueryPacketReceiptRequestParams = {
  value: QueryPacketReceiptRequest;
  fee?: StdFee;
  memo?: string;
};

type sendQueryNextSequenceSendResponseParams = {
  value: QueryNextSequenceSendResponse;
  fee?: StdFee;
  memo?: string;
};

type sendMsgChannelOpenConfirmResponseParams = {
  value: MsgChannelOpenConfirmResponse;
  fee?: StdFee;
  memo?: string;
};

type sendMsgChannelCloseConfirmParams = {
  value: MsgChannelCloseConfirm;
  fee?: StdFee;
  memo?: string;
};

type sendMsgTimeoutParams = {
  value: MsgTimeout;
  fee?: StdFee;
  memo?: string;
};

type sendMsgChannelUpgradeTimeoutResponseParams = {
  value: MsgChannelUpgradeTimeoutResponse;
  fee?: StdFee;
  memo?: string;
};

type sendQueryChannelRequestParams = {
  value: QueryChannelRequest;
  fee?: StdFee;
  memo?: string;
};

type sendQueryPacketCommitmentResponseParams = {
  value: QueryPacketCommitmentResponse;
  fee?: StdFee;
  memo?: string;
};

type sendUpgradeParams = {
  value: Upgrade;
  fee?: StdFee;
  memo?: string;
};

type sendMsgChannelUpgradeCancelResponseParams = {
  value: MsgChannelUpgradeCancelResponse;
  fee?: StdFee;
  memo?: string;
};

type sendMsgPruneAcknowledgementsParams = {
  value: MsgPruneAcknowledgements;
  fee?: StdFee;
  memo?: string;
};

type sendAcknowledgementParams = {
  value: Acknowledgement;
  fee?: StdFee;
  memo?: string;
};

type sendQueryChannelsRequestParams = {
  value: QueryChannelsRequest;
  fee?: StdFee;
  memo?: string;
};

type sendQueryChannelsResponseParams = {
  value: QueryChannelsResponse;
  fee?: StdFee;
  memo?: string;
};

type sendMsgChannelOpenTryParams = {
  value: MsgChannelOpenTry;
  fee?: StdFee;
  memo?: string;
};

type sendMsgChannelUpgradeInitParams = {
  value: MsgChannelUpgradeInit;
  fee?: StdFee;
  memo?: string;
};

type sendMsgChannelUpgradeTryResponseParams = {
  value: MsgChannelUpgradeTryResponse;
  fee?: StdFee;
  memo?: string;
};

type sendQueryChannelConsensusStateRequestParams = {
  value: QueryChannelConsensusStateRequest;
  fee?: StdFee;
  memo?: string;
};

type sendQueryNextSequenceSendRequestParams = {
  value: QueryNextSequenceSendRequest;
  fee?: StdFee;
  memo?: string;
};

type sendQueryUnreceivedAcksRequestParams = {
  value: QueryUnreceivedAcksRequest;
  fee?: StdFee;
  memo?: string;
};

type sendQueryNextSequenceReceiveRequestParams = {
  value: QueryNextSequenceReceiveRequest;
  fee?: StdFee;
  memo?: string;
};

type sendQueryUpgradeRequestParams = {
  value: QueryUpgradeRequest;
  fee?: StdFee;
  memo?: string;
};

type sendMsgChannelCloseInitResponseParams = {
  value: MsgChannelCloseInitResponse;
  fee?: StdFee;
  memo?: string;
};

type sendMsgTimeoutResponseParams = {
  value: MsgTimeoutResponse;
  fee?: StdFee;
  memo?: string;
};

type sendParamsParams = {
  value: Params;
  fee?: StdFee;
  memo?: string;
};

type sendQueryChannelResponseParams = {
  value: QueryChannelResponse;
  fee?: StdFee;
  memo?: string;
};

type sendUpgradeFieldsParams = {
  value: UpgradeFields;
  fee?: StdFee;
  memo?: string;
};

type sendMsgChannelCloseInitParams = {
  value: MsgChannelCloseInit;
  fee?: StdFee;
  memo?: string;
};

type sendQueryPacketCommitmentsResponseParams = {
  value: QueryPacketCommitmentsResponse;
  fee?: StdFee;
  memo?: string;
};

type sendQueryPacketAcknowledgementRequestParams = {
  value: QueryPacketAcknowledgementRequest;
  fee?: StdFee;
  memo?: string;
};

type sendMsgRecvPacketParams = {
  value: MsgRecvPacket;
  fee?: StdFee;
  memo?: string;
};

type sendMsgTimeoutOnCloseParams = {
  value: MsgTimeoutOnClose;
  fee?: StdFee;
  memo?: string;
};

type sendMsgChannelUpgradeOpenResponseParams = {
  value: MsgChannelUpgradeOpenResponse;
  fee?: StdFee;
  memo?: string;
};

type sendIdentifiedChannelParams = {
  value: IdentifiedChannel;
  fee?: StdFee;
  memo?: string;
};

type sendMsgChannelOpenTryResponseParams = {
  value: MsgChannelOpenTryResponse;
  fee?: StdFee;
  memo?: string;
};

type sendMsgChannelOpenAckParams = {
  value: MsgChannelOpenAck;
  fee?: StdFee;
  memo?: string;
};

type sendQueryUpgradeResponseParams = {
  value: QueryUpgradeResponse;
  fee?: StdFee;
  memo?: string;
};

type sendQueryChannelParamsRequestParams = {
  value: QueryChannelParamsRequest;
  fee?: StdFee;
  memo?: string;
};

type sendPacketIdParams = {
  value: PacketId;
  fee?: StdFee;
  memo?: string;
};

type sendMsgChannelOpenConfirmParams = {
  value: MsgChannelOpenConfirm;
  fee?: StdFee;
  memo?: string;
};

type sendMsgChannelUpgradeConfirmParams = {
  value: MsgChannelUpgradeConfirm;
  fee?: StdFee;
  memo?: string;
};

type sendQueryPacketCommitmentRequestParams = {
  value: QueryPacketCommitmentRequest;
  fee?: StdFee;
  memo?: string;
};

type sendQueryUpgradeErrorRequestParams = {
  value: QueryUpgradeErrorRequest;
  fee?: StdFee;
  memo?: string;
};

type sendPacketSequenceParams = {
  value: PacketSequence;
  fee?: StdFee;
  memo?: string;
};

type sendTimeoutParams = {
  value: Timeout;
  fee?: StdFee;
  memo?: string;
};

type sendMsgChannelUpgradeInitResponseParams = {
  value: MsgChannelUpgradeInitResponse;
  fee?: StdFee;
  memo?: string;
};

type sendMsgChannelUpgradeAckResponseParams = {
  value: MsgChannelUpgradeAckResponse;
  fee?: StdFee;
  memo?: string;
};

type sendQueryChannelClientStateResponseParams = {
  value: QueryChannelClientStateResponse;
  fee?: StdFee;
  memo?: string;
};

type sendMsgChannelOpenAckResponseParams = {
  value: MsgChannelOpenAckResponse;
  fee?: StdFee;
  memo?: string;
};

type sendMsgRecvPacketResponseParams = {
  value: MsgRecvPacketResponse;
  fee?: StdFee;
  memo?: string;
};

type sendMsgAcknowledgementResponseParams = {
  value: MsgAcknowledgementResponse;
  fee?: StdFee;
  memo?: string;
};

type sendMsgChannelUpgradeTimeoutParams = {
  value: MsgChannelUpgradeTimeout;
  fee?: StdFee;
  memo?: string;
};

type sendMsgUpdateParamsParams = {
  value: MsgUpdateParams;
  fee?: StdFee;
  memo?: string;
};

type sendErrorReceiptParams = {
  value: ErrorReceipt;
  fee?: StdFee;
  memo?: string;
};

type sendQueryChannelParamsResponseParams = {
  value: QueryChannelParamsResponse;
  fee?: StdFee;
  memo?: string;
};

type sendMsgChannelCloseConfirmResponseParams = {
  value: MsgChannelCloseConfirmResponse;
  fee?: StdFee;
  memo?: string;
};

type sendChannelParams = {
  value: Channel;
  fee?: StdFee;
  memo?: string;
};

type sendPacketStateParams = {
  value: PacketState;
  fee?: StdFee;
  memo?: string;
};

type sendQueryPacketAcknowledgementsRequestParams = {
  value: QueryPacketAcknowledgementsRequest;
  fee?: StdFee;
  memo?: string;
};

type sendQueryNextSequenceReceiveResponseParams = {
  value: QueryNextSequenceReceiveResponse;
  fee?: StdFee;
  memo?: string;
};

type sendCounterpartyParams = {
  value: Counterparty;
  fee?: StdFee;
  memo?: string;
};

type sendQueryUnreceivedPacketsResponseParams = {
  value: QueryUnreceivedPacketsResponse;
  fee?: StdFee;
  memo?: string;
};

type sendMsgUpdateParamsResponseParams = {
  value: MsgUpdateParamsResponse;
  fee?: StdFee;
  memo?: string;
};

type sendMsgChannelUpgradeAckParams = {
  value: MsgChannelUpgradeAck;
  fee?: StdFee;
  memo?: string;
};

type sendQueryUpgradeErrorResponseParams = {
  value: QueryUpgradeErrorResponse;
  fee?: StdFee;
  memo?: string;
};

type sendQueryChannelConsensusStateResponseParams = {
  value: QueryChannelConsensusStateResponse;
  fee?: StdFee;
  memo?: string;
};

type sendQueryUnreceivedPacketsRequestParams = {
  value: QueryUnreceivedPacketsRequest;
  fee?: StdFee;
  memo?: string;
};

type sendQueryUnreceivedAcksResponseParams = {
  value: QueryUnreceivedAcksResponse;
  fee?: StdFee;
  memo?: string;
};

type sendMsgTimeoutOnCloseResponseParams = {
  value: MsgTimeoutOnCloseResponse;
  fee?: StdFee;
  memo?: string;
};

type sendQueryConnectionChannelsRequestParams = {
  value: QueryConnectionChannelsRequest;
  fee?: StdFee;
  memo?: string;
};

type sendQueryConnectionChannelsResponseParams = {
  value: QueryConnectionChannelsResponse;
  fee?: StdFee;
  memo?: string;
};

type sendQueryPacketAcknowledgementResponseParams = {
  value: QueryPacketAcknowledgementResponse;
  fee?: StdFee;
  memo?: string;
};

type sendPacketParams = {
  value: Packet;
  fee?: StdFee;
  memo?: string;
};

type sendMsgChannelOpenInitResponseParams = {
  value: MsgChannelOpenInitResponse;
  fee?: StdFee;
  memo?: string;
};

type sendMsgChannelUpgradeOpenParams = {
  value: MsgChannelUpgradeOpen;
  fee?: StdFee;
  memo?: string;
};

type sendMsgChannelUpgradeCancelParams = {
  value: MsgChannelUpgradeCancel;
  fee?: StdFee;
  memo?: string;
};

type sendQueryPacketCommitmentsRequestParams = {
  value: QueryPacketCommitmentsRequest;
  fee?: StdFee;
  memo?: string;
};

type sendQueryPacketReceiptResponseParams = {
  value: QueryPacketReceiptResponse;
  fee?: StdFee;
  memo?: string;
};

type sendMsgChannelUpgradeConfirmResponseParams = {
  value: MsgChannelUpgradeConfirmResponse;
  fee?: StdFee;
  memo?: string;
};

type sendMsgPruneAcknowledgementsResponseParams = {
  value: MsgPruneAcknowledgementsResponse;
  fee?: StdFee;
  memo?: string;
};

type sendMsgChannelOpenInitParams = {
  value: MsgChannelOpenInit;
  fee?: StdFee;
  memo?: string;
};

type sendMsgAcknowledgementParams = {
  value: MsgAcknowledgement;
  fee?: StdFee;
  memo?: string;
};

type sendMsgChannelUpgradeTryParams = {
  value: MsgChannelUpgradeTry;
  fee?: StdFee;
  memo?: string;
};

type sendGenesisStateParams = {
  value: GenesisState;
  fee?: StdFee;
  memo?: string;
};

type sendQueryChannelClientStateRequestParams = {
  value: QueryChannelClientStateRequest;
  fee?: StdFee;
  memo?: string;
};

type sendQueryPacketAcknowledgementsResponseParams = {
  value: QueryPacketAcknowledgementsResponse;
  fee?: StdFee;
  memo?: string;
};

type queryPacketReceiptRequestParams = {
  value: QueryPacketReceiptRequest;
};

type queryNextSequenceSendResponseParams = {
  value: QueryNextSequenceSendResponse;
};

type msgChannelOpenConfirmResponseParams = {
  value: MsgChannelOpenConfirmResponse;
};

type msgChannelCloseConfirmParams = {
  value: MsgChannelCloseConfirm;
};

type msgTimeoutParams = {
  value: MsgTimeout;
};

type msgChannelUpgradeTimeoutResponseParams = {
  value: MsgChannelUpgradeTimeoutResponse;
};

type queryChannelRequestParams = {
  value: QueryChannelRequest;
};

type queryPacketCommitmentResponseParams = {
  value: QueryPacketCommitmentResponse;
};

type upgradeParams = {
  value: Upgrade;
};

type msgChannelUpgradeCancelResponseParams = {
  value: MsgChannelUpgradeCancelResponse;
};

type msgPruneAcknowledgementsParams = {
  value: MsgPruneAcknowledgements;
};

type acknowledgementParams = {
  value: Acknowledgement;
};

type queryChannelsRequestParams = {
  value: QueryChannelsRequest;
};

type queryChannelsResponseParams = {
  value: QueryChannelsResponse;
};

type msgChannelOpenTryParams = {
  value: MsgChannelOpenTry;
};

type msgChannelUpgradeInitParams = {
  value: MsgChannelUpgradeInit;
};

type msgChannelUpgradeTryResponseParams = {
  value: MsgChannelUpgradeTryResponse;
};

type queryChannelConsensusStateRequestParams = {
  value: QueryChannelConsensusStateRequest;
};

type queryNextSequenceSendRequestParams = {
  value: QueryNextSequenceSendRequest;
};

type queryUnreceivedAcksRequestParams = {
  value: QueryUnreceivedAcksRequest;
};

type queryNextSequenceReceiveRequestParams = {
  value: QueryNextSequenceReceiveRequest;
};

type queryUpgradeRequestParams = {
  value: QueryUpgradeRequest;
};

type msgChannelCloseInitResponseParams = {
  value: MsgChannelCloseInitResponse;
};

type msgTimeoutResponseParams = {
  value: MsgTimeoutResponse;
};

type paramsParams = {
  value: Params;
};

type queryChannelResponseParams = {
  value: QueryChannelResponse;
};

type upgradeFieldsParams = {
  value: UpgradeFields;
};

type msgChannelCloseInitParams = {
  value: MsgChannelCloseInit;
};

type queryPacketCommitmentsResponseParams = {
  value: QueryPacketCommitmentsResponse;
};

type queryPacketAcknowledgementRequestParams = {
  value: QueryPacketAcknowledgementRequest;
};

type msgRecvPacketParams = {
  value: MsgRecvPacket;
};

type msgTimeoutOnCloseParams = {
  value: MsgTimeoutOnClose;
};

type msgChannelUpgradeOpenResponseParams = {
  value: MsgChannelUpgradeOpenResponse;
};

type identifiedChannelParams = {
  value: IdentifiedChannel;
};

type msgChannelOpenTryResponseParams = {
  value: MsgChannelOpenTryResponse;
};

type msgChannelOpenAckParams = {
  value: MsgChannelOpenAck;
};

type queryUpgradeResponseParams = {
  value: QueryUpgradeResponse;
};

type queryChannelParamsRequestParams = {
  value: QueryChannelParamsRequest;
};

type packetIdParams = {
  value: PacketId;
};

type msgChannelOpenConfirmParams = {
  value: MsgChannelOpenConfirm;
};

type msgChannelUpgradeConfirmParams = {
  value: MsgChannelUpgradeConfirm;
};

type queryPacketCommitmentRequestParams = {
  value: QueryPacketCommitmentRequest;
};

type queryUpgradeErrorRequestParams = {
  value: QueryUpgradeErrorRequest;
};

type packetSequenceParams = {
  value: PacketSequence;
};

type timeoutParams = {
  value: Timeout;
};

type msgChannelUpgradeInitResponseParams = {
  value: MsgChannelUpgradeInitResponse;
};

type msgChannelUpgradeAckResponseParams = {
  value: MsgChannelUpgradeAckResponse;
};

type queryChannelClientStateResponseParams = {
  value: QueryChannelClientStateResponse;
};

type msgChannelOpenAckResponseParams = {
  value: MsgChannelOpenAckResponse;
};

type msgRecvPacketResponseParams = {
  value: MsgRecvPacketResponse;
};

type msgAcknowledgementResponseParams = {
  value: MsgAcknowledgementResponse;
};

type msgChannelUpgradeTimeoutParams = {
  value: MsgChannelUpgradeTimeout;
};

type msgUpdateParamsParams = {
  value: MsgUpdateParams;
};

type errorReceiptParams = {
  value: ErrorReceipt;
};

type queryChannelParamsResponseParams = {
  value: QueryChannelParamsResponse;
};

type msgChannelCloseConfirmResponseParams = {
  value: MsgChannelCloseConfirmResponse;
};

type channelParams = {
  value: Channel;
};

type packetStateParams = {
  value: PacketState;
};

type queryPacketAcknowledgementsRequestParams = {
  value: QueryPacketAcknowledgementsRequest;
};

type queryNextSequenceReceiveResponseParams = {
  value: QueryNextSequenceReceiveResponse;
};

type counterpartyParams = {
  value: Counterparty;
};

type queryUnreceivedPacketsResponseParams = {
  value: QueryUnreceivedPacketsResponse;
};

type msgUpdateParamsResponseParams = {
  value: MsgUpdateParamsResponse;
};

type msgChannelUpgradeAckParams = {
  value: MsgChannelUpgradeAck;
};

type queryUpgradeErrorResponseParams = {
  value: QueryUpgradeErrorResponse;
};

type queryChannelConsensusStateResponseParams = {
  value: QueryChannelConsensusStateResponse;
};

type queryUnreceivedPacketsRequestParams = {
  value: QueryUnreceivedPacketsRequest;
};

type queryUnreceivedAcksResponseParams = {
  value: QueryUnreceivedAcksResponse;
};

type msgTimeoutOnCloseResponseParams = {
  value: MsgTimeoutOnCloseResponse;
};

type queryConnectionChannelsRequestParams = {
  value: QueryConnectionChannelsRequest;
};

type queryConnectionChannelsResponseParams = {
  value: QueryConnectionChannelsResponse;
};

type queryPacketAcknowledgementResponseParams = {
  value: QueryPacketAcknowledgementResponse;
};

type packetParams = {
  value: Packet;
};

type msgChannelOpenInitResponseParams = {
  value: MsgChannelOpenInitResponse;
};

type msgChannelUpgradeOpenParams = {
  value: MsgChannelUpgradeOpen;
};

type msgChannelUpgradeCancelParams = {
  value: MsgChannelUpgradeCancel;
};

type queryPacketCommitmentsRequestParams = {
  value: QueryPacketCommitmentsRequest;
};

type queryPacketReceiptResponseParams = {
  value: QueryPacketReceiptResponse;
};

type msgChannelUpgradeConfirmResponseParams = {
  value: MsgChannelUpgradeConfirmResponse;
};

type msgPruneAcknowledgementsResponseParams = {
  value: MsgPruneAcknowledgementsResponse;
};

type msgChannelOpenInitParams = {
  value: MsgChannelOpenInit;
};

type msgAcknowledgementParams = {
  value: MsgAcknowledgement;
};

type msgChannelUpgradeTryParams = {
  value: MsgChannelUpgradeTry;
};

type genesisStateParams = {
  value: GenesisState;
};

type queryChannelClientStateRequestParams = {
  value: QueryChannelClientStateRequest;
};

type queryPacketAcknowledgementsResponseParams = {
  value: QueryPacketAcknowledgementsResponse;
};

export const registry = new Registry(msgTypes);

type Field = {
  name: string;
  type: unknown;
};
function getStructure(template) {
  const structure: { fields: Field[] } = { fields: [] };
  for (let [key, value] of Object.entries(template)) {
    let field = { name: key, type: typeof value };
    structure.fields.push(field);
  }
  return structure;
}
const defaultFee = {
  amount: [],
  gas: '200000',
};

interface TxClientOptions {
  addr: string;
  prefix: string;
  signer?: OfflineSigner;
}

export const txClient = (
  { signer, prefix, addr }: TxClientOptions = { addr: 'http://localhost:26657', prefix: 'cosmos' }
) => {
  return {
    async sendQueryPacketReceiptRequest({
      value,
      fee,
      memo,
    }: sendQueryPacketReceiptRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryPacketReceiptRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryPacketReceiptRequest({ value: QueryPacketReceiptRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryPacketReceiptRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryNextSequenceSendResponse({
      value,
      fee,
      memo,
    }: sendQueryNextSequenceSendResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryNextSequenceSendResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryNextSequenceSendResponse({ value: QueryNextSequenceSendResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryNextSequenceSendResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgChannelOpenConfirmResponse({
      value,
      fee,
      memo,
    }: sendMsgChannelOpenConfirmResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgChannelOpenConfirmResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgChannelOpenConfirmResponse({ value: MsgChannelOpenConfirmResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgChannelOpenConfirmResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgChannelCloseConfirm({
      value,
      fee,
      memo,
    }: sendMsgChannelCloseConfirmParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgChannelCloseConfirm: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgChannelCloseConfirm({ value: MsgChannelCloseConfirm.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgChannelCloseConfirm: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgTimeout({ value, fee, memo }: sendMsgTimeoutParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgTimeout: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgTimeout({ value: MsgTimeout.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgTimeout: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgChannelUpgradeTimeoutResponse({
      value,
      fee,
      memo,
    }: sendMsgChannelUpgradeTimeoutResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgChannelUpgradeTimeoutResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgChannelUpgradeTimeoutResponse({ value: MsgChannelUpgradeTimeoutResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgChannelUpgradeTimeoutResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryChannelRequest({ value, fee, memo }: sendQueryChannelRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryChannelRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryChannelRequest({ value: QueryChannelRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryChannelRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryPacketCommitmentResponse({
      value,
      fee,
      memo,
    }: sendQueryPacketCommitmentResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryPacketCommitmentResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryPacketCommitmentResponse({ value: QueryPacketCommitmentResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryPacketCommitmentResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendUpgrade({ value, fee, memo }: sendUpgradeParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendUpgrade: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.upgrade({ value: Upgrade.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendUpgrade: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgChannelUpgradeCancelResponse({
      value,
      fee,
      memo,
    }: sendMsgChannelUpgradeCancelResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgChannelUpgradeCancelResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgChannelUpgradeCancelResponse({ value: MsgChannelUpgradeCancelResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgChannelUpgradeCancelResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgPruneAcknowledgements({
      value,
      fee,
      memo,
    }: sendMsgPruneAcknowledgementsParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgPruneAcknowledgements: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgPruneAcknowledgements({ value: MsgPruneAcknowledgements.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgPruneAcknowledgements: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendAcknowledgement({ value, fee, memo }: sendAcknowledgementParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendAcknowledgement: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.acknowledgement({ value: Acknowledgement.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendAcknowledgement: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryChannelsRequest({ value, fee, memo }: sendQueryChannelsRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryChannelsRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryChannelsRequest({ value: QueryChannelsRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryChannelsRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryChannelsResponse({ value, fee, memo }: sendQueryChannelsResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryChannelsResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryChannelsResponse({ value: QueryChannelsResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryChannelsResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgChannelOpenTry({ value, fee, memo }: sendMsgChannelOpenTryParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgChannelOpenTry: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgChannelOpenTry({ value: MsgChannelOpenTry.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgChannelOpenTry: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgChannelUpgradeInit({ value, fee, memo }: sendMsgChannelUpgradeInitParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgChannelUpgradeInit: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgChannelUpgradeInit({ value: MsgChannelUpgradeInit.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgChannelUpgradeInit: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgChannelUpgradeTryResponse({
      value,
      fee,
      memo,
    }: sendMsgChannelUpgradeTryResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgChannelUpgradeTryResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgChannelUpgradeTryResponse({ value: MsgChannelUpgradeTryResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgChannelUpgradeTryResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryChannelConsensusStateRequest({
      value,
      fee,
      memo,
    }: sendQueryChannelConsensusStateRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryChannelConsensusStateRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryChannelConsensusStateRequest({
          value: QueryChannelConsensusStateRequest.fromPartial(value),
        });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryChannelConsensusStateRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryNextSequenceSendRequest({
      value,
      fee,
      memo,
    }: sendQueryNextSequenceSendRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryNextSequenceSendRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryNextSequenceSendRequest({ value: QueryNextSequenceSendRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryNextSequenceSendRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryUnreceivedAcksRequest({
      value,
      fee,
      memo,
    }: sendQueryUnreceivedAcksRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryUnreceivedAcksRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryUnreceivedAcksRequest({ value: QueryUnreceivedAcksRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryUnreceivedAcksRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryNextSequenceReceiveRequest({
      value,
      fee,
      memo,
    }: sendQueryNextSequenceReceiveRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryNextSequenceReceiveRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryNextSequenceReceiveRequest({ value: QueryNextSequenceReceiveRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryNextSequenceReceiveRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryUpgradeRequest({ value, fee, memo }: sendQueryUpgradeRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryUpgradeRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryUpgradeRequest({ value: QueryUpgradeRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryUpgradeRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgChannelCloseInitResponse({
      value,
      fee,
      memo,
    }: sendMsgChannelCloseInitResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgChannelCloseInitResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgChannelCloseInitResponse({ value: MsgChannelCloseInitResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgChannelCloseInitResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgTimeoutResponse({ value, fee, memo }: sendMsgTimeoutResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgTimeoutResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgTimeoutResponse({ value: MsgTimeoutResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgTimeoutResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendParams({ value, fee, memo }: sendParamsParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendParams: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.params({ value: Params.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendParams: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryChannelResponse({ value, fee, memo }: sendQueryChannelResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryChannelResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryChannelResponse({ value: QueryChannelResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryChannelResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendUpgradeFields({ value, fee, memo }: sendUpgradeFieldsParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendUpgradeFields: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.upgradeFields({ value: UpgradeFields.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendUpgradeFields: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgChannelCloseInit({ value, fee, memo }: sendMsgChannelCloseInitParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgChannelCloseInit: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgChannelCloseInit({ value: MsgChannelCloseInit.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgChannelCloseInit: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryPacketCommitmentsResponse({
      value,
      fee,
      memo,
    }: sendQueryPacketCommitmentsResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryPacketCommitmentsResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryPacketCommitmentsResponse({ value: QueryPacketCommitmentsResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryPacketCommitmentsResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryPacketAcknowledgementRequest({
      value,
      fee,
      memo,
    }: sendQueryPacketAcknowledgementRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryPacketAcknowledgementRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryPacketAcknowledgementRequest({
          value: QueryPacketAcknowledgementRequest.fromPartial(value),
        });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryPacketAcknowledgementRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgRecvPacket({ value, fee, memo }: sendMsgRecvPacketParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgRecvPacket: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgRecvPacket({ value: MsgRecvPacket.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgRecvPacket: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgTimeoutOnClose({ value, fee, memo }: sendMsgTimeoutOnCloseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgTimeoutOnClose: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgTimeoutOnClose({ value: MsgTimeoutOnClose.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgTimeoutOnClose: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgChannelUpgradeOpenResponse({
      value,
      fee,
      memo,
    }: sendMsgChannelUpgradeOpenResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgChannelUpgradeOpenResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgChannelUpgradeOpenResponse({ value: MsgChannelUpgradeOpenResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgChannelUpgradeOpenResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendIdentifiedChannel({ value, fee, memo }: sendIdentifiedChannelParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendIdentifiedChannel: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.identifiedChannel({ value: IdentifiedChannel.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendIdentifiedChannel: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgChannelOpenTryResponse({
      value,
      fee,
      memo,
    }: sendMsgChannelOpenTryResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgChannelOpenTryResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgChannelOpenTryResponse({ value: MsgChannelOpenTryResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgChannelOpenTryResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgChannelOpenAck({ value, fee, memo }: sendMsgChannelOpenAckParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgChannelOpenAck: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgChannelOpenAck({ value: MsgChannelOpenAck.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgChannelOpenAck: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryUpgradeResponse({ value, fee, memo }: sendQueryUpgradeResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryUpgradeResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryUpgradeResponse({ value: QueryUpgradeResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryUpgradeResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryChannelParamsRequest({
      value,
      fee,
      memo,
    }: sendQueryChannelParamsRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryChannelParamsRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryChannelParamsRequest({ value: QueryChannelParamsRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryChannelParamsRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendPacketId({ value, fee, memo }: sendPacketIdParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendPacketId: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.packetId({ value: PacketId.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendPacketId: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgChannelOpenConfirm({ value, fee, memo }: sendMsgChannelOpenConfirmParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgChannelOpenConfirm: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgChannelOpenConfirm({ value: MsgChannelOpenConfirm.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgChannelOpenConfirm: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgChannelUpgradeConfirm({
      value,
      fee,
      memo,
    }: sendMsgChannelUpgradeConfirmParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgChannelUpgradeConfirm: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgChannelUpgradeConfirm({ value: MsgChannelUpgradeConfirm.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgChannelUpgradeConfirm: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryPacketCommitmentRequest({
      value,
      fee,
      memo,
    }: sendQueryPacketCommitmentRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryPacketCommitmentRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryPacketCommitmentRequest({ value: QueryPacketCommitmentRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryPacketCommitmentRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryUpgradeErrorRequest({
      value,
      fee,
      memo,
    }: sendQueryUpgradeErrorRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryUpgradeErrorRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryUpgradeErrorRequest({ value: QueryUpgradeErrorRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryUpgradeErrorRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendPacketSequence({ value, fee, memo }: sendPacketSequenceParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendPacketSequence: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.packetSequence({ value: PacketSequence.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendPacketSequence: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendTimeout({ value, fee, memo }: sendTimeoutParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendTimeout: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.timeout({ value: Timeout.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendTimeout: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgChannelUpgradeInitResponse({
      value,
      fee,
      memo,
    }: sendMsgChannelUpgradeInitResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgChannelUpgradeInitResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgChannelUpgradeInitResponse({ value: MsgChannelUpgradeInitResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgChannelUpgradeInitResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgChannelUpgradeAckResponse({
      value,
      fee,
      memo,
    }: sendMsgChannelUpgradeAckResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgChannelUpgradeAckResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgChannelUpgradeAckResponse({ value: MsgChannelUpgradeAckResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgChannelUpgradeAckResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryChannelClientStateResponse({
      value,
      fee,
      memo,
    }: sendQueryChannelClientStateResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryChannelClientStateResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryChannelClientStateResponse({ value: QueryChannelClientStateResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryChannelClientStateResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgChannelOpenAckResponse({
      value,
      fee,
      memo,
    }: sendMsgChannelOpenAckResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgChannelOpenAckResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgChannelOpenAckResponse({ value: MsgChannelOpenAckResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgChannelOpenAckResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgRecvPacketResponse({ value, fee, memo }: sendMsgRecvPacketResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgRecvPacketResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgRecvPacketResponse({ value: MsgRecvPacketResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgRecvPacketResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgAcknowledgementResponse({
      value,
      fee,
      memo,
    }: sendMsgAcknowledgementResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgAcknowledgementResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgAcknowledgementResponse({ value: MsgAcknowledgementResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgAcknowledgementResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgChannelUpgradeTimeout({
      value,
      fee,
      memo,
    }: sendMsgChannelUpgradeTimeoutParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgChannelUpgradeTimeout: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgChannelUpgradeTimeout({ value: MsgChannelUpgradeTimeout.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgChannelUpgradeTimeout: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgUpdateParams({ value, fee, memo }: sendMsgUpdateParamsParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgUpdateParams: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgUpdateParams({ value: MsgUpdateParams.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgUpdateParams: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendErrorReceipt({ value, fee, memo }: sendErrorReceiptParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendErrorReceipt: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.errorReceipt({ value: ErrorReceipt.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendErrorReceipt: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryChannelParamsResponse({
      value,
      fee,
      memo,
    }: sendQueryChannelParamsResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryChannelParamsResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryChannelParamsResponse({ value: QueryChannelParamsResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryChannelParamsResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgChannelCloseConfirmResponse({
      value,
      fee,
      memo,
    }: sendMsgChannelCloseConfirmResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgChannelCloseConfirmResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgChannelCloseConfirmResponse({ value: MsgChannelCloseConfirmResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgChannelCloseConfirmResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendChannel({ value, fee, memo }: sendChannelParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendChannel: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.channel({ value: Channel.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendChannel: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendPacketState({ value, fee, memo }: sendPacketStateParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendPacketState: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.packetState({ value: PacketState.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendPacketState: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryPacketAcknowledgementsRequest({
      value,
      fee,
      memo,
    }: sendQueryPacketAcknowledgementsRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryPacketAcknowledgementsRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryPacketAcknowledgementsRequest({
          value: QueryPacketAcknowledgementsRequest.fromPartial(value),
        });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryPacketAcknowledgementsRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryNextSequenceReceiveResponse({
      value,
      fee,
      memo,
    }: sendQueryNextSequenceReceiveResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryNextSequenceReceiveResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryNextSequenceReceiveResponse({ value: QueryNextSequenceReceiveResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryNextSequenceReceiveResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendCounterparty({ value, fee, memo }: sendCounterpartyParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendCounterparty: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.counterparty({ value: Counterparty.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendCounterparty: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryUnreceivedPacketsResponse({
      value,
      fee,
      memo,
    }: sendQueryUnreceivedPacketsResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryUnreceivedPacketsResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryUnreceivedPacketsResponse({ value: QueryUnreceivedPacketsResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryUnreceivedPacketsResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgUpdateParamsResponse({
      value,
      fee,
      memo,
    }: sendMsgUpdateParamsResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgUpdateParamsResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgUpdateParamsResponse({ value: MsgUpdateParamsResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgUpdateParamsResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgChannelUpgradeAck({ value, fee, memo }: sendMsgChannelUpgradeAckParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgChannelUpgradeAck: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgChannelUpgradeAck({ value: MsgChannelUpgradeAck.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgChannelUpgradeAck: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryUpgradeErrorResponse({
      value,
      fee,
      memo,
    }: sendQueryUpgradeErrorResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryUpgradeErrorResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryUpgradeErrorResponse({ value: QueryUpgradeErrorResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryUpgradeErrorResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryChannelConsensusStateResponse({
      value,
      fee,
      memo,
    }: sendQueryChannelConsensusStateResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryChannelConsensusStateResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryChannelConsensusStateResponse({
          value: QueryChannelConsensusStateResponse.fromPartial(value),
        });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryChannelConsensusStateResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryUnreceivedPacketsRequest({
      value,
      fee,
      memo,
    }: sendQueryUnreceivedPacketsRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryUnreceivedPacketsRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryUnreceivedPacketsRequest({ value: QueryUnreceivedPacketsRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryUnreceivedPacketsRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryUnreceivedAcksResponse({
      value,
      fee,
      memo,
    }: sendQueryUnreceivedAcksResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryUnreceivedAcksResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryUnreceivedAcksResponse({ value: QueryUnreceivedAcksResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryUnreceivedAcksResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgTimeoutOnCloseResponse({
      value,
      fee,
      memo,
    }: sendMsgTimeoutOnCloseResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgTimeoutOnCloseResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgTimeoutOnCloseResponse({ value: MsgTimeoutOnCloseResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgTimeoutOnCloseResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryConnectionChannelsRequest({
      value,
      fee,
      memo,
    }: sendQueryConnectionChannelsRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryConnectionChannelsRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryConnectionChannelsRequest({ value: QueryConnectionChannelsRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryConnectionChannelsRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryConnectionChannelsResponse({
      value,
      fee,
      memo,
    }: sendQueryConnectionChannelsResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryConnectionChannelsResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryConnectionChannelsResponse({ value: QueryConnectionChannelsResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryConnectionChannelsResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryPacketAcknowledgementResponse({
      value,
      fee,
      memo,
    }: sendQueryPacketAcknowledgementResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryPacketAcknowledgementResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryPacketAcknowledgementResponse({
          value: QueryPacketAcknowledgementResponse.fromPartial(value),
        });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryPacketAcknowledgementResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendPacket({ value, fee, memo }: sendPacketParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendPacket: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.packet({ value: Packet.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendPacket: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgChannelOpenInitResponse({
      value,
      fee,
      memo,
    }: sendMsgChannelOpenInitResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgChannelOpenInitResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgChannelOpenInitResponse({ value: MsgChannelOpenInitResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgChannelOpenInitResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgChannelUpgradeOpen({ value, fee, memo }: sendMsgChannelUpgradeOpenParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgChannelUpgradeOpen: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgChannelUpgradeOpen({ value: MsgChannelUpgradeOpen.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgChannelUpgradeOpen: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgChannelUpgradeCancel({
      value,
      fee,
      memo,
    }: sendMsgChannelUpgradeCancelParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgChannelUpgradeCancel: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgChannelUpgradeCancel({ value: MsgChannelUpgradeCancel.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgChannelUpgradeCancel: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryPacketCommitmentsRequest({
      value,
      fee,
      memo,
    }: sendQueryPacketCommitmentsRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryPacketCommitmentsRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryPacketCommitmentsRequest({ value: QueryPacketCommitmentsRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryPacketCommitmentsRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryPacketReceiptResponse({
      value,
      fee,
      memo,
    }: sendQueryPacketReceiptResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryPacketReceiptResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryPacketReceiptResponse({ value: QueryPacketReceiptResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryPacketReceiptResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgChannelUpgradeConfirmResponse({
      value,
      fee,
      memo,
    }: sendMsgChannelUpgradeConfirmResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgChannelUpgradeConfirmResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgChannelUpgradeConfirmResponse({ value: MsgChannelUpgradeConfirmResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgChannelUpgradeConfirmResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgPruneAcknowledgementsResponse({
      value,
      fee,
      memo,
    }: sendMsgPruneAcknowledgementsResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgPruneAcknowledgementsResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgPruneAcknowledgementsResponse({ value: MsgPruneAcknowledgementsResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgPruneAcknowledgementsResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgChannelOpenInit({ value, fee, memo }: sendMsgChannelOpenInitParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgChannelOpenInit: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgChannelOpenInit({ value: MsgChannelOpenInit.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgChannelOpenInit: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgAcknowledgement({ value, fee, memo }: sendMsgAcknowledgementParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgAcknowledgement: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgAcknowledgement({ value: MsgAcknowledgement.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgAcknowledgement: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgChannelUpgradeTry({ value, fee, memo }: sendMsgChannelUpgradeTryParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgChannelUpgradeTry: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgChannelUpgradeTry({ value: MsgChannelUpgradeTry.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgChannelUpgradeTry: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendGenesisState: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.genesisState({ value: GenesisState.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendGenesisState: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryChannelClientStateRequest({
      value,
      fee,
      memo,
    }: sendQueryChannelClientStateRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryChannelClientStateRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryChannelClientStateRequest({ value: QueryChannelClientStateRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryChannelClientStateRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryPacketAcknowledgementsResponse({
      value,
      fee,
      memo,
    }: sendQueryPacketAcknowledgementsResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryPacketAcknowledgementsResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryPacketAcknowledgementsResponse({
          value: QueryPacketAcknowledgementsResponse.fromPartial(value),
        });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryPacketAcknowledgementsResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    queryPacketReceiptRequest({ value }: queryPacketReceiptRequestParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.channel.v1.QueryPacketReceiptRequest',
          value: QueryPacketReceiptRequest.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryPacketReceiptRequest: Could not create message: ' + e.message);
      }
    },

    queryNextSequenceSendResponse({ value }: queryNextSequenceSendResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.channel.v1.QueryNextSequenceSendResponse',
          value: QueryNextSequenceSendResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryNextSequenceSendResponse: Could not create message: ' + e.message);
      }
    },

    msgChannelOpenConfirmResponse({ value }: msgChannelOpenConfirmResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.channel.v1.MsgChannelOpenConfirmResponse',
          value: MsgChannelOpenConfirmResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgChannelOpenConfirmResponse: Could not create message: ' + e.message);
      }
    },

    msgChannelCloseConfirm({ value }: msgChannelCloseConfirmParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.channel.v1.MsgChannelCloseConfirm',
          value: MsgChannelCloseConfirm.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgChannelCloseConfirm: Could not create message: ' + e.message);
      }
    },

    msgTimeout({ value }: msgTimeoutParams): EncodeObject {
      try {
        return { typeUrl: '/ibc.core.channel.v1.MsgTimeout', value: MsgTimeout.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:MsgTimeout: Could not create message: ' + e.message);
      }
    },

    msgChannelUpgradeTimeoutResponse({ value }: msgChannelUpgradeTimeoutResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.channel.v1.MsgChannelUpgradeTimeoutResponse',
          value: MsgChannelUpgradeTimeoutResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgChannelUpgradeTimeoutResponse: Could not create message: ' + e.message);
      }
    },

    queryChannelRequest({ value }: queryChannelRequestParams): EncodeObject {
      try {
        return { typeUrl: '/ibc.core.channel.v1.QueryChannelRequest', value: QueryChannelRequest.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:QueryChannelRequest: Could not create message: ' + e.message);
      }
    },

    queryPacketCommitmentResponse({ value }: queryPacketCommitmentResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.channel.v1.QueryPacketCommitmentResponse',
          value: QueryPacketCommitmentResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryPacketCommitmentResponse: Could not create message: ' + e.message);
      }
    },

    upgrade({ value }: upgradeParams): EncodeObject {
      try {
        return { typeUrl: '/ibc.core.channel.v1.Upgrade', value: Upgrade.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:Upgrade: Could not create message: ' + e.message);
      }
    },

    msgChannelUpgradeCancelResponse({ value }: msgChannelUpgradeCancelResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.channel.v1.MsgChannelUpgradeCancelResponse',
          value: MsgChannelUpgradeCancelResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgChannelUpgradeCancelResponse: Could not create message: ' + e.message);
      }
    },

    msgPruneAcknowledgements({ value }: msgPruneAcknowledgementsParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.channel.v1.MsgPruneAcknowledgements',
          value: MsgPruneAcknowledgements.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgPruneAcknowledgements: Could not create message: ' + e.message);
      }
    },

    acknowledgement({ value }: acknowledgementParams): EncodeObject {
      try {
        return { typeUrl: '/ibc.core.channel.v1.Acknowledgement', value: Acknowledgement.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:Acknowledgement: Could not create message: ' + e.message);
      }
    },

    queryChannelsRequest({ value }: queryChannelsRequestParams): EncodeObject {
      try {
        return { typeUrl: '/ibc.core.channel.v1.QueryChannelsRequest', value: QueryChannelsRequest.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:QueryChannelsRequest: Could not create message: ' + e.message);
      }
    },

    queryChannelsResponse({ value }: queryChannelsResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.channel.v1.QueryChannelsResponse',
          value: QueryChannelsResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryChannelsResponse: Could not create message: ' + e.message);
      }
    },

    msgChannelOpenTry({ value }: msgChannelOpenTryParams): EncodeObject {
      try {
        return { typeUrl: '/ibc.core.channel.v1.MsgChannelOpenTry', value: MsgChannelOpenTry.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:MsgChannelOpenTry: Could not create message: ' + e.message);
      }
    },

    msgChannelUpgradeInit({ value }: msgChannelUpgradeInitParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.channel.v1.MsgChannelUpgradeInit',
          value: MsgChannelUpgradeInit.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgChannelUpgradeInit: Could not create message: ' + e.message);
      }
    },

    msgChannelUpgradeTryResponse({ value }: msgChannelUpgradeTryResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.channel.v1.MsgChannelUpgradeTryResponse',
          value: MsgChannelUpgradeTryResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgChannelUpgradeTryResponse: Could not create message: ' + e.message);
      }
    },

    queryChannelConsensusStateRequest({ value }: queryChannelConsensusStateRequestParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.channel.v1.QueryChannelConsensusStateRequest',
          value: QueryChannelConsensusStateRequest.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryChannelConsensusStateRequest: Could not create message: ' + e.message);
      }
    },

    queryNextSequenceSendRequest({ value }: queryNextSequenceSendRequestParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.channel.v1.QueryNextSequenceSendRequest',
          value: QueryNextSequenceSendRequest.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryNextSequenceSendRequest: Could not create message: ' + e.message);
      }
    },

    queryUnreceivedAcksRequest({ value }: queryUnreceivedAcksRequestParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.channel.v1.QueryUnreceivedAcksRequest',
          value: QueryUnreceivedAcksRequest.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryUnreceivedAcksRequest: Could not create message: ' + e.message);
      }
    },

    queryNextSequenceReceiveRequest({ value }: queryNextSequenceReceiveRequestParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.channel.v1.QueryNextSequenceReceiveRequest',
          value: QueryNextSequenceReceiveRequest.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryNextSequenceReceiveRequest: Could not create message: ' + e.message);
      }
    },

    queryUpgradeRequest({ value }: queryUpgradeRequestParams): EncodeObject {
      try {
        return { typeUrl: '/ibc.core.channel.v1.QueryUpgradeRequest', value: QueryUpgradeRequest.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:QueryUpgradeRequest: Could not create message: ' + e.message);
      }
    },

    msgChannelCloseInitResponse({ value }: msgChannelCloseInitResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.channel.v1.MsgChannelCloseInitResponse',
          value: MsgChannelCloseInitResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgChannelCloseInitResponse: Could not create message: ' + e.message);
      }
    },

    msgTimeoutResponse({ value }: msgTimeoutResponseParams): EncodeObject {
      try {
        return { typeUrl: '/ibc.core.channel.v1.MsgTimeoutResponse', value: MsgTimeoutResponse.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:MsgTimeoutResponse: Could not create message: ' + e.message);
      }
    },

    params({ value }: paramsParams): EncodeObject {
      try {
        return { typeUrl: '/ibc.core.channel.v1.Params', value: Params.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:Params: Could not create message: ' + e.message);
      }
    },

    queryChannelResponse({ value }: queryChannelResponseParams): EncodeObject {
      try {
        return { typeUrl: '/ibc.core.channel.v1.QueryChannelResponse', value: QueryChannelResponse.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:QueryChannelResponse: Could not create message: ' + e.message);
      }
    },

    upgradeFields({ value }: upgradeFieldsParams): EncodeObject {
      try {
        return { typeUrl: '/ibc.core.channel.v1.UpgradeFields', value: UpgradeFields.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:UpgradeFields: Could not create message: ' + e.message);
      }
    },

    msgChannelCloseInit({ value }: msgChannelCloseInitParams): EncodeObject {
      try {
        return { typeUrl: '/ibc.core.channel.v1.MsgChannelCloseInit', value: MsgChannelCloseInit.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:MsgChannelCloseInit: Could not create message: ' + e.message);
      }
    },

    queryPacketCommitmentsResponse({ value }: queryPacketCommitmentsResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.channel.v1.QueryPacketCommitmentsResponse',
          value: QueryPacketCommitmentsResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryPacketCommitmentsResponse: Could not create message: ' + e.message);
      }
    },

    queryPacketAcknowledgementRequest({ value }: queryPacketAcknowledgementRequestParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.channel.v1.QueryPacketAcknowledgementRequest',
          value: QueryPacketAcknowledgementRequest.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryPacketAcknowledgementRequest: Could not create message: ' + e.message);
      }
    },

    msgRecvPacket({ value }: msgRecvPacketParams): EncodeObject {
      try {
        return { typeUrl: '/ibc.core.channel.v1.MsgRecvPacket', value: MsgRecvPacket.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:MsgRecvPacket: Could not create message: ' + e.message);
      }
    },

    msgTimeoutOnClose({ value }: msgTimeoutOnCloseParams): EncodeObject {
      try {
        return { typeUrl: '/ibc.core.channel.v1.MsgTimeoutOnClose', value: MsgTimeoutOnClose.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:MsgTimeoutOnClose: Could not create message: ' + e.message);
      }
    },

    msgChannelUpgradeOpenResponse({ value }: msgChannelUpgradeOpenResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.channel.v1.MsgChannelUpgradeOpenResponse',
          value: MsgChannelUpgradeOpenResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgChannelUpgradeOpenResponse: Could not create message: ' + e.message);
      }
    },

    identifiedChannel({ value }: identifiedChannelParams): EncodeObject {
      try {
        return { typeUrl: '/ibc.core.channel.v1.IdentifiedChannel', value: IdentifiedChannel.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:IdentifiedChannel: Could not create message: ' + e.message);
      }
    },

    msgChannelOpenTryResponse({ value }: msgChannelOpenTryResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.channel.v1.MsgChannelOpenTryResponse',
          value: MsgChannelOpenTryResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgChannelOpenTryResponse: Could not create message: ' + e.message);
      }
    },

    msgChannelOpenAck({ value }: msgChannelOpenAckParams): EncodeObject {
      try {
        return { typeUrl: '/ibc.core.channel.v1.MsgChannelOpenAck', value: MsgChannelOpenAck.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:MsgChannelOpenAck: Could not create message: ' + e.message);
      }
    },

    queryUpgradeResponse({ value }: queryUpgradeResponseParams): EncodeObject {
      try {
        return { typeUrl: '/ibc.core.channel.v1.QueryUpgradeResponse', value: QueryUpgradeResponse.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:QueryUpgradeResponse: Could not create message: ' + e.message);
      }
    },

    queryChannelParamsRequest({ value }: queryChannelParamsRequestParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.channel.v1.QueryChannelParamsRequest',
          value: QueryChannelParamsRequest.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryChannelParamsRequest: Could not create message: ' + e.message);
      }
    },

    packetId({ value }: packetIdParams): EncodeObject {
      try {
        return { typeUrl: '/ibc.core.channel.v1.PacketId', value: PacketId.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:PacketId: Could not create message: ' + e.message);
      }
    },

    msgChannelOpenConfirm({ value }: msgChannelOpenConfirmParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.channel.v1.MsgChannelOpenConfirm',
          value: MsgChannelOpenConfirm.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgChannelOpenConfirm: Could not create message: ' + e.message);
      }
    },

    msgChannelUpgradeConfirm({ value }: msgChannelUpgradeConfirmParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.channel.v1.MsgChannelUpgradeConfirm',
          value: MsgChannelUpgradeConfirm.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgChannelUpgradeConfirm: Could not create message: ' + e.message);
      }
    },

    queryPacketCommitmentRequest({ value }: queryPacketCommitmentRequestParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.channel.v1.QueryPacketCommitmentRequest',
          value: QueryPacketCommitmentRequest.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryPacketCommitmentRequest: Could not create message: ' + e.message);
      }
    },

    queryUpgradeErrorRequest({ value }: queryUpgradeErrorRequestParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.channel.v1.QueryUpgradeErrorRequest',
          value: QueryUpgradeErrorRequest.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryUpgradeErrorRequest: Could not create message: ' + e.message);
      }
    },

    packetSequence({ value }: packetSequenceParams): EncodeObject {
      try {
        return { typeUrl: '/ibc.core.channel.v1.PacketSequence', value: PacketSequence.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:PacketSequence: Could not create message: ' + e.message);
      }
    },

    timeout({ value }: timeoutParams): EncodeObject {
      try {
        return { typeUrl: '/ibc.core.channel.v1.Timeout', value: Timeout.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:Timeout: Could not create message: ' + e.message);
      }
    },

    msgChannelUpgradeInitResponse({ value }: msgChannelUpgradeInitResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.channel.v1.MsgChannelUpgradeInitResponse',
          value: MsgChannelUpgradeInitResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgChannelUpgradeInitResponse: Could not create message: ' + e.message);
      }
    },

    msgChannelUpgradeAckResponse({ value }: msgChannelUpgradeAckResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.channel.v1.MsgChannelUpgradeAckResponse',
          value: MsgChannelUpgradeAckResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgChannelUpgradeAckResponse: Could not create message: ' + e.message);
      }
    },

    queryChannelClientStateResponse({ value }: queryChannelClientStateResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.channel.v1.QueryChannelClientStateResponse',
          value: QueryChannelClientStateResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryChannelClientStateResponse: Could not create message: ' + e.message);
      }
    },

    msgChannelOpenAckResponse({ value }: msgChannelOpenAckResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.channel.v1.MsgChannelOpenAckResponse',
          value: MsgChannelOpenAckResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgChannelOpenAckResponse: Could not create message: ' + e.message);
      }
    },

    msgRecvPacketResponse({ value }: msgRecvPacketResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.channel.v1.MsgRecvPacketResponse',
          value: MsgRecvPacketResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgRecvPacketResponse: Could not create message: ' + e.message);
      }
    },

    msgAcknowledgementResponse({ value }: msgAcknowledgementResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.channel.v1.MsgAcknowledgementResponse',
          value: MsgAcknowledgementResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgAcknowledgementResponse: Could not create message: ' + e.message);
      }
    },

    msgChannelUpgradeTimeout({ value }: msgChannelUpgradeTimeoutParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.channel.v1.MsgChannelUpgradeTimeout',
          value: MsgChannelUpgradeTimeout.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgChannelUpgradeTimeout: Could not create message: ' + e.message);
      }
    },

    msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject {
      try {
        return { typeUrl: '/ibc.core.channel.v1.MsgUpdateParams', value: MsgUpdateParams.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:MsgUpdateParams: Could not create message: ' + e.message);
      }
    },

    errorReceipt({ value }: errorReceiptParams): EncodeObject {
      try {
        return { typeUrl: '/ibc.core.channel.v1.ErrorReceipt', value: ErrorReceipt.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:ErrorReceipt: Could not create message: ' + e.message);
      }
    },

    queryChannelParamsResponse({ value }: queryChannelParamsResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.channel.v1.QueryChannelParamsResponse',
          value: QueryChannelParamsResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryChannelParamsResponse: Could not create message: ' + e.message);
      }
    },

    msgChannelCloseConfirmResponse({ value }: msgChannelCloseConfirmResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.channel.v1.MsgChannelCloseConfirmResponse',
          value: MsgChannelCloseConfirmResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgChannelCloseConfirmResponse: Could not create message: ' + e.message);
      }
    },

    channel({ value }: channelParams): EncodeObject {
      try {
        return { typeUrl: '/ibc.core.channel.v1.Channel', value: Channel.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:Channel: Could not create message: ' + e.message);
      }
    },

    packetState({ value }: packetStateParams): EncodeObject {
      try {
        return { typeUrl: '/ibc.core.channel.v1.PacketState', value: PacketState.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:PacketState: Could not create message: ' + e.message);
      }
    },

    queryPacketAcknowledgementsRequest({ value }: queryPacketAcknowledgementsRequestParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.channel.v1.QueryPacketAcknowledgementsRequest',
          value: QueryPacketAcknowledgementsRequest.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryPacketAcknowledgementsRequest: Could not create message: ' + e.message);
      }
    },

    queryNextSequenceReceiveResponse({ value }: queryNextSequenceReceiveResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.channel.v1.QueryNextSequenceReceiveResponse',
          value: QueryNextSequenceReceiveResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryNextSequenceReceiveResponse: Could not create message: ' + e.message);
      }
    },

    counterparty({ value }: counterpartyParams): EncodeObject {
      try {
        return { typeUrl: '/ibc.core.channel.v1.Counterparty', value: Counterparty.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:Counterparty: Could not create message: ' + e.message);
      }
    },

    queryUnreceivedPacketsResponse({ value }: queryUnreceivedPacketsResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.channel.v1.QueryUnreceivedPacketsResponse',
          value: QueryUnreceivedPacketsResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryUnreceivedPacketsResponse: Could not create message: ' + e.message);
      }
    },

    msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.channel.v1.MsgUpdateParamsResponse',
          value: MsgUpdateParamsResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgUpdateParamsResponse: Could not create message: ' + e.message);
      }
    },

    msgChannelUpgradeAck({ value }: msgChannelUpgradeAckParams): EncodeObject {
      try {
        return { typeUrl: '/ibc.core.channel.v1.MsgChannelUpgradeAck', value: MsgChannelUpgradeAck.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:MsgChannelUpgradeAck: Could not create message: ' + e.message);
      }
    },

    queryUpgradeErrorResponse({ value }: queryUpgradeErrorResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.channel.v1.QueryUpgradeErrorResponse',
          value: QueryUpgradeErrorResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryUpgradeErrorResponse: Could not create message: ' + e.message);
      }
    },

    queryChannelConsensusStateResponse({ value }: queryChannelConsensusStateResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.channel.v1.QueryChannelConsensusStateResponse',
          value: QueryChannelConsensusStateResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryChannelConsensusStateResponse: Could not create message: ' + e.message);
      }
    },

    queryUnreceivedPacketsRequest({ value }: queryUnreceivedPacketsRequestParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.channel.v1.QueryUnreceivedPacketsRequest',
          value: QueryUnreceivedPacketsRequest.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryUnreceivedPacketsRequest: Could not create message: ' + e.message);
      }
    },

    queryUnreceivedAcksResponse({ value }: queryUnreceivedAcksResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.channel.v1.QueryUnreceivedAcksResponse',
          value: QueryUnreceivedAcksResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryUnreceivedAcksResponse: Could not create message: ' + e.message);
      }
    },

    msgTimeoutOnCloseResponse({ value }: msgTimeoutOnCloseResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.channel.v1.MsgTimeoutOnCloseResponse',
          value: MsgTimeoutOnCloseResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgTimeoutOnCloseResponse: Could not create message: ' + e.message);
      }
    },

    queryConnectionChannelsRequest({ value }: queryConnectionChannelsRequestParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.channel.v1.QueryConnectionChannelsRequest',
          value: QueryConnectionChannelsRequest.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryConnectionChannelsRequest: Could not create message: ' + e.message);
      }
    },

    queryConnectionChannelsResponse({ value }: queryConnectionChannelsResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.channel.v1.QueryConnectionChannelsResponse',
          value: QueryConnectionChannelsResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryConnectionChannelsResponse: Could not create message: ' + e.message);
      }
    },

    queryPacketAcknowledgementResponse({ value }: queryPacketAcknowledgementResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.channel.v1.QueryPacketAcknowledgementResponse',
          value: QueryPacketAcknowledgementResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryPacketAcknowledgementResponse: Could not create message: ' + e.message);
      }
    },

    packet({ value }: packetParams): EncodeObject {
      try {
        return { typeUrl: '/ibc.core.channel.v1.Packet', value: Packet.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:Packet: Could not create message: ' + e.message);
      }
    },

    msgChannelOpenInitResponse({ value }: msgChannelOpenInitResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.channel.v1.MsgChannelOpenInitResponse',
          value: MsgChannelOpenInitResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgChannelOpenInitResponse: Could not create message: ' + e.message);
      }
    },

    msgChannelUpgradeOpen({ value }: msgChannelUpgradeOpenParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.channel.v1.MsgChannelUpgradeOpen',
          value: MsgChannelUpgradeOpen.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgChannelUpgradeOpen: Could not create message: ' + e.message);
      }
    },

    msgChannelUpgradeCancel({ value }: msgChannelUpgradeCancelParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.channel.v1.MsgChannelUpgradeCancel',
          value: MsgChannelUpgradeCancel.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgChannelUpgradeCancel: Could not create message: ' + e.message);
      }
    },

    queryPacketCommitmentsRequest({ value }: queryPacketCommitmentsRequestParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.channel.v1.QueryPacketCommitmentsRequest',
          value: QueryPacketCommitmentsRequest.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryPacketCommitmentsRequest: Could not create message: ' + e.message);
      }
    },

    queryPacketReceiptResponse({ value }: queryPacketReceiptResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.channel.v1.QueryPacketReceiptResponse',
          value: QueryPacketReceiptResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryPacketReceiptResponse: Could not create message: ' + e.message);
      }
    },

    msgChannelUpgradeConfirmResponse({ value }: msgChannelUpgradeConfirmResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.channel.v1.MsgChannelUpgradeConfirmResponse',
          value: MsgChannelUpgradeConfirmResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgChannelUpgradeConfirmResponse: Could not create message: ' + e.message);
      }
    },

    msgPruneAcknowledgementsResponse({ value }: msgPruneAcknowledgementsResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.channel.v1.MsgPruneAcknowledgementsResponse',
          value: MsgPruneAcknowledgementsResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgPruneAcknowledgementsResponse: Could not create message: ' + e.message);
      }
    },

    msgChannelOpenInit({ value }: msgChannelOpenInitParams): EncodeObject {
      try {
        return { typeUrl: '/ibc.core.channel.v1.MsgChannelOpenInit', value: MsgChannelOpenInit.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:MsgChannelOpenInit: Could not create message: ' + e.message);
      }
    },

    msgAcknowledgement({ value }: msgAcknowledgementParams): EncodeObject {
      try {
        return { typeUrl: '/ibc.core.channel.v1.MsgAcknowledgement', value: MsgAcknowledgement.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:MsgAcknowledgement: Could not create message: ' + e.message);
      }
    },

    msgChannelUpgradeTry({ value }: msgChannelUpgradeTryParams): EncodeObject {
      try {
        return { typeUrl: '/ibc.core.channel.v1.MsgChannelUpgradeTry', value: MsgChannelUpgradeTry.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:MsgChannelUpgradeTry: Could not create message: ' + e.message);
      }
    },

    genesisState({ value }: genesisStateParams): EncodeObject {
      try {
        return { typeUrl: '/ibc.core.channel.v1.GenesisState', value: GenesisState.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:GenesisState: Could not create message: ' + e.message);
      }
    },

    queryChannelClientStateRequest({ value }: queryChannelClientStateRequestParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.channel.v1.QueryChannelClientStateRequest',
          value: QueryChannelClientStateRequest.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryChannelClientStateRequest: Could not create message: ' + e.message);
      }
    },

    queryPacketAcknowledgementsResponse({ value }: queryPacketAcknowledgementsResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.channel.v1.QueryPacketAcknowledgementsResponse',
          value: QueryPacketAcknowledgementsResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryPacketAcknowledgementsResponse: Could not create message: ' + e.message);
      }
    },
  };
};

interface QueryClientOptions {
  addr: string;
}

export const queryClient = ({ addr: addr }: QueryClientOptions = { addr: 'http://localhost:1317' }) => {
  return new Api({ baseURL: addr });
};

class SDKModule {
  public query: ReturnType<typeof queryClient>;
  public tx: ReturnType<typeof txClient>;
  public structure: Record<string, unknown>;
  public registry: Array<[string, GeneratedType]> = [];

  constructor(client: IgniteClient) {
    this.query = queryClient({ addr: client.env.apiURL });
    this.updateTX(client);
    this.structure = {};
    client.on('signer-changed', (signer) => {
      this.updateTX(client);
    });
  }
  updateTX(client: IgniteClient) {
    const methods = txClient({
      signer: client.signer,
      addr: client.env.rpcURL,
      prefix: client.env.prefix ?? 'cosmos',
    });

    this.tx = methods;
    for (let m in methods) {
      this.tx[m] = methods[m].bind(this.tx);
    }
  }
}

const IgntModule = (test: IgniteClient) => {
  return {
    module: {
      IbcCoreChannelV1: new SDKModule(test),
    },
    registry: msgTypes,
  };
};
export default IgntModule;
