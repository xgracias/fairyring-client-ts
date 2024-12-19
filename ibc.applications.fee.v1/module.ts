import { SigningStargateClient, DeliverTxResponse, StdFee } from '@cosmjs/stargate';
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from '@cosmjs/proto-signing';
import { msgTypes } from './registry';
import { IgniteClient } from '../client';
import { MissingWalletError } from '../helpers';
import { Api } from './rest';
import { QueryTotalAckFeesRequest } from './types/ibc/applications/fee/v1/query';
import { QueryCounterpartyPayeeResponse } from './types/ibc/applications/fee/v1/query';
import { QueryFeeEnabledChannelsRequest } from './types/ibc/applications/fee/v1/query';
import { QueryFeeEnabledChannelRequest } from './types/ibc/applications/fee/v1/query';
import { MsgRegisterPayee } from './types/ibc/applications/fee/v1/tx';
import { RegisteredCounterpartyPayee } from './types/ibc/applications/fee/v1/genesis';
import { Fee } from './types/ibc/applications/fee/v1/fee';
import { QueryIncentivizedPacketsResponse } from './types/ibc/applications/fee/v1/query';
import { QueryPayeeRequest } from './types/ibc/applications/fee/v1/query';
import { MsgPayPacketFee } from './types/ibc/applications/fee/v1/tx';
import { FeeEnabledChannel } from './types/ibc/applications/fee/v1/genesis';
import { QueryIncentivizedPacketResponse } from './types/ibc/applications/fee/v1/query';
import { QueryIncentivizedPacketsForChannelResponse } from './types/ibc/applications/fee/v1/query';
import { GenesisState } from './types/ibc/applications/fee/v1/genesis';
import { MsgPayPacketFeeAsyncResponse } from './types/ibc/applications/fee/v1/tx';
import { QueryTotalTimeoutFeesRequest } from './types/ibc/applications/fee/v1/query';
import { MsgRegisterCounterpartyPayee } from './types/ibc/applications/fee/v1/tx';
import { QueryIncentivizedPacketsForChannelRequest } from './types/ibc/applications/fee/v1/query';
import { QueryFeeEnabledChannelResponse } from './types/ibc/applications/fee/v1/query';
import { MsgRegisterCounterpartyPayeeResponse } from './types/ibc/applications/fee/v1/tx';
import { PacketFee } from './types/ibc/applications/fee/v1/fee';
import { IdentifiedPacketFees } from './types/ibc/applications/fee/v1/fee';
import { MsgRegisterPayeeResponse } from './types/ibc/applications/fee/v1/tx';
import { QueryTotalAckFeesResponse } from './types/ibc/applications/fee/v1/query';
import { QueryPayeeResponse } from './types/ibc/applications/fee/v1/query';
import { QueryCounterpartyPayeeRequest } from './types/ibc/applications/fee/v1/query';
import { MsgPayPacketFeeAsync } from './types/ibc/applications/fee/v1/tx';
import { RegisteredPayee } from './types/ibc/applications/fee/v1/genesis';
import { Metadata } from './types/ibc/applications/fee/v1/metadata';
import { PacketFees } from './types/ibc/applications/fee/v1/fee';
import { QueryIncentivizedPacketsRequest } from './types/ibc/applications/fee/v1/query';
import { QueryFeeEnabledChannelsResponse } from './types/ibc/applications/fee/v1/query';
import { ForwardRelayerAddress } from './types/ibc/applications/fee/v1/genesis';
import { QueryTotalRecvFeesRequest } from './types/ibc/applications/fee/v1/query';
import { QueryTotalRecvFeesResponse } from './types/ibc/applications/fee/v1/query';
import { MsgPayPacketFeeResponse } from './types/ibc/applications/fee/v1/tx';
import { IncentivizedAcknowledgement } from './types/ibc/applications/fee/v1/ack';
import { QueryIncentivizedPacketRequest } from './types/ibc/applications/fee/v1/query';
import { QueryTotalTimeoutFeesResponse } from './types/ibc/applications/fee/v1/query';

export {
  QueryTotalAckFeesRequest,
  QueryCounterpartyPayeeResponse,
  QueryFeeEnabledChannelsRequest,
  QueryFeeEnabledChannelRequest,
  MsgRegisterPayee,
  RegisteredCounterpartyPayee,
  Fee,
  QueryIncentivizedPacketsResponse,
  QueryPayeeRequest,
  MsgPayPacketFee,
  FeeEnabledChannel,
  QueryIncentivizedPacketResponse,
  QueryIncentivizedPacketsForChannelResponse,
  GenesisState,
  MsgPayPacketFeeAsyncResponse,
  QueryTotalTimeoutFeesRequest,
  MsgRegisterCounterpartyPayee,
  QueryIncentivizedPacketsForChannelRequest,
  QueryFeeEnabledChannelResponse,
  MsgRegisterCounterpartyPayeeResponse,
  PacketFee,
  IdentifiedPacketFees,
  MsgRegisterPayeeResponse,
  QueryTotalAckFeesResponse,
  QueryPayeeResponse,
  QueryCounterpartyPayeeRequest,
  MsgPayPacketFeeAsync,
  RegisteredPayee,
  Metadata,
  PacketFees,
  QueryIncentivizedPacketsRequest,
  QueryFeeEnabledChannelsResponse,
  ForwardRelayerAddress,
  QueryTotalRecvFeesRequest,
  QueryTotalRecvFeesResponse,
  MsgPayPacketFeeResponse,
  IncentivizedAcknowledgement,
  QueryIncentivizedPacketRequest,
  QueryTotalTimeoutFeesResponse,
};

type sendQueryTotalAckFeesRequestParams = {
  value: QueryTotalAckFeesRequest;
  fee?: StdFee;
  memo?: string;
};

type sendQueryCounterpartyPayeeResponseParams = {
  value: QueryCounterpartyPayeeResponse;
  fee?: StdFee;
  memo?: string;
};

type sendQueryFeeEnabledChannelsRequestParams = {
  value: QueryFeeEnabledChannelsRequest;
  fee?: StdFee;
  memo?: string;
};

type sendQueryFeeEnabledChannelRequestParams = {
  value: QueryFeeEnabledChannelRequest;
  fee?: StdFee;
  memo?: string;
};

type sendMsgRegisterPayeeParams = {
  value: MsgRegisterPayee;
  fee?: StdFee;
  memo?: string;
};

type sendRegisteredCounterpartyPayeeParams = {
  value: RegisteredCounterpartyPayee;
  fee?: StdFee;
  memo?: string;
};

type sendFeeParams = {
  value: Fee;
  fee?: StdFee;
  memo?: string;
};

type sendQueryIncentivizedPacketsResponseParams = {
  value: QueryIncentivizedPacketsResponse;
  fee?: StdFee;
  memo?: string;
};

type sendQueryPayeeRequestParams = {
  value: QueryPayeeRequest;
  fee?: StdFee;
  memo?: string;
};

type sendMsgPayPacketFeeParams = {
  value: MsgPayPacketFee;
  fee?: StdFee;
  memo?: string;
};

type sendFeeEnabledChannelParams = {
  value: FeeEnabledChannel;
  fee?: StdFee;
  memo?: string;
};

type sendQueryIncentivizedPacketResponseParams = {
  value: QueryIncentivizedPacketResponse;
  fee?: StdFee;
  memo?: string;
};

type sendQueryIncentivizedPacketsForChannelResponseParams = {
  value: QueryIncentivizedPacketsForChannelResponse;
  fee?: StdFee;
  memo?: string;
};

type sendGenesisStateParams = {
  value: GenesisState;
  fee?: StdFee;
  memo?: string;
};

type sendMsgPayPacketFeeAsyncResponseParams = {
  value: MsgPayPacketFeeAsyncResponse;
  fee?: StdFee;
  memo?: string;
};

type sendQueryTotalTimeoutFeesRequestParams = {
  value: QueryTotalTimeoutFeesRequest;
  fee?: StdFee;
  memo?: string;
};

type sendMsgRegisterCounterpartyPayeeParams = {
  value: MsgRegisterCounterpartyPayee;
  fee?: StdFee;
  memo?: string;
};

type sendQueryIncentivizedPacketsForChannelRequestParams = {
  value: QueryIncentivizedPacketsForChannelRequest;
  fee?: StdFee;
  memo?: string;
};

type sendQueryFeeEnabledChannelResponseParams = {
  value: QueryFeeEnabledChannelResponse;
  fee?: StdFee;
  memo?: string;
};

type sendMsgRegisterCounterpartyPayeeResponseParams = {
  value: MsgRegisterCounterpartyPayeeResponse;
  fee?: StdFee;
  memo?: string;
};

type sendPacketFeeParams = {
  value: PacketFee;
  fee?: StdFee;
  memo?: string;
};

type sendIdentifiedPacketFeesParams = {
  value: IdentifiedPacketFees;
  fee?: StdFee;
  memo?: string;
};

type sendMsgRegisterPayeeResponseParams = {
  value: MsgRegisterPayeeResponse;
  fee?: StdFee;
  memo?: string;
};

type sendQueryTotalAckFeesResponseParams = {
  value: QueryTotalAckFeesResponse;
  fee?: StdFee;
  memo?: string;
};

type sendQueryPayeeResponseParams = {
  value: QueryPayeeResponse;
  fee?: StdFee;
  memo?: string;
};

type sendQueryCounterpartyPayeeRequestParams = {
  value: QueryCounterpartyPayeeRequest;
  fee?: StdFee;
  memo?: string;
};

type sendMsgPayPacketFeeAsyncParams = {
  value: MsgPayPacketFeeAsync;
  fee?: StdFee;
  memo?: string;
};

type sendRegisteredPayeeParams = {
  value: RegisteredPayee;
  fee?: StdFee;
  memo?: string;
};

type sendMetadataParams = {
  value: Metadata;
  fee?: StdFee;
  memo?: string;
};

type sendPacketFeesParams = {
  value: PacketFees;
  fee?: StdFee;
  memo?: string;
};

type sendQueryIncentivizedPacketsRequestParams = {
  value: QueryIncentivizedPacketsRequest;
  fee?: StdFee;
  memo?: string;
};

type sendQueryFeeEnabledChannelsResponseParams = {
  value: QueryFeeEnabledChannelsResponse;
  fee?: StdFee;
  memo?: string;
};

type sendForwardRelayerAddressParams = {
  value: ForwardRelayerAddress;
  fee?: StdFee;
  memo?: string;
};

type sendQueryTotalRecvFeesRequestParams = {
  value: QueryTotalRecvFeesRequest;
  fee?: StdFee;
  memo?: string;
};

type sendQueryTotalRecvFeesResponseParams = {
  value: QueryTotalRecvFeesResponse;
  fee?: StdFee;
  memo?: string;
};

type sendMsgPayPacketFeeResponseParams = {
  value: MsgPayPacketFeeResponse;
  fee?: StdFee;
  memo?: string;
};

type sendIncentivizedAcknowledgementParams = {
  value: IncentivizedAcknowledgement;
  fee?: StdFee;
  memo?: string;
};

type sendQueryIncentivizedPacketRequestParams = {
  value: QueryIncentivizedPacketRequest;
  fee?: StdFee;
  memo?: string;
};

type sendQueryTotalTimeoutFeesResponseParams = {
  value: QueryTotalTimeoutFeesResponse;
  fee?: StdFee;
  memo?: string;
};

type queryTotalAckFeesRequestParams = {
  value: QueryTotalAckFeesRequest;
};

type queryCounterpartyPayeeResponseParams = {
  value: QueryCounterpartyPayeeResponse;
};

type queryFeeEnabledChannelsRequestParams = {
  value: QueryFeeEnabledChannelsRequest;
};

type queryFeeEnabledChannelRequestParams = {
  value: QueryFeeEnabledChannelRequest;
};

type msgRegisterPayeeParams = {
  value: MsgRegisterPayee;
};

type registeredCounterpartyPayeeParams = {
  value: RegisteredCounterpartyPayee;
};

type feeParams = {
  value: Fee;
};

type queryIncentivizedPacketsResponseParams = {
  value: QueryIncentivizedPacketsResponse;
};

type queryPayeeRequestParams = {
  value: QueryPayeeRequest;
};

type msgPayPacketFeeParams = {
  value: MsgPayPacketFee;
};

type feeEnabledChannelParams = {
  value: FeeEnabledChannel;
};

type queryIncentivizedPacketResponseParams = {
  value: QueryIncentivizedPacketResponse;
};

type queryIncentivizedPacketsForChannelResponseParams = {
  value: QueryIncentivizedPacketsForChannelResponse;
};

type genesisStateParams = {
  value: GenesisState;
};

type msgPayPacketFeeAsyncResponseParams = {
  value: MsgPayPacketFeeAsyncResponse;
};

type queryTotalTimeoutFeesRequestParams = {
  value: QueryTotalTimeoutFeesRequest;
};

type msgRegisterCounterpartyPayeeParams = {
  value: MsgRegisterCounterpartyPayee;
};

type queryIncentivizedPacketsForChannelRequestParams = {
  value: QueryIncentivizedPacketsForChannelRequest;
};

type queryFeeEnabledChannelResponseParams = {
  value: QueryFeeEnabledChannelResponse;
};

type msgRegisterCounterpartyPayeeResponseParams = {
  value: MsgRegisterCounterpartyPayeeResponse;
};

type packetFeeParams = {
  value: PacketFee;
};

type identifiedPacketFeesParams = {
  value: IdentifiedPacketFees;
};

type msgRegisterPayeeResponseParams = {
  value: MsgRegisterPayeeResponse;
};

type queryTotalAckFeesResponseParams = {
  value: QueryTotalAckFeesResponse;
};

type queryPayeeResponseParams = {
  value: QueryPayeeResponse;
};

type queryCounterpartyPayeeRequestParams = {
  value: QueryCounterpartyPayeeRequest;
};

type msgPayPacketFeeAsyncParams = {
  value: MsgPayPacketFeeAsync;
};

type registeredPayeeParams = {
  value: RegisteredPayee;
};

type metadataParams = {
  value: Metadata;
};

type packetFeesParams = {
  value: PacketFees;
};

type queryIncentivizedPacketsRequestParams = {
  value: QueryIncentivizedPacketsRequest;
};

type queryFeeEnabledChannelsResponseParams = {
  value: QueryFeeEnabledChannelsResponse;
};

type forwardRelayerAddressParams = {
  value: ForwardRelayerAddress;
};

type queryTotalRecvFeesRequestParams = {
  value: QueryTotalRecvFeesRequest;
};

type queryTotalRecvFeesResponseParams = {
  value: QueryTotalRecvFeesResponse;
};

type msgPayPacketFeeResponseParams = {
  value: MsgPayPacketFeeResponse;
};

type incentivizedAcknowledgementParams = {
  value: IncentivizedAcknowledgement;
};

type queryIncentivizedPacketRequestParams = {
  value: QueryIncentivizedPacketRequest;
};

type queryTotalTimeoutFeesResponseParams = {
  value: QueryTotalTimeoutFeesResponse;
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
    async sendQueryTotalAckFeesRequest({
      value,
      fee,
      memo,
    }: sendQueryTotalAckFeesRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryTotalAckFeesRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryTotalAckFeesRequest({ value: QueryTotalAckFeesRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryTotalAckFeesRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryCounterpartyPayeeResponse({
      value,
      fee,
      memo,
    }: sendQueryCounterpartyPayeeResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryCounterpartyPayeeResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryCounterpartyPayeeResponse({ value: QueryCounterpartyPayeeResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryCounterpartyPayeeResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryFeeEnabledChannelsRequest({
      value,
      fee,
      memo,
    }: sendQueryFeeEnabledChannelsRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryFeeEnabledChannelsRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryFeeEnabledChannelsRequest({ value: QueryFeeEnabledChannelsRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryFeeEnabledChannelsRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryFeeEnabledChannelRequest({
      value,
      fee,
      memo,
    }: sendQueryFeeEnabledChannelRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryFeeEnabledChannelRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryFeeEnabledChannelRequest({ value: QueryFeeEnabledChannelRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryFeeEnabledChannelRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgRegisterPayee({ value, fee, memo }: sendMsgRegisterPayeeParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgRegisterPayee: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgRegisterPayee({ value: MsgRegisterPayee.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgRegisterPayee: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendRegisteredCounterpartyPayee({
      value,
      fee,
      memo,
    }: sendRegisteredCounterpartyPayeeParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendRegisteredCounterpartyPayee: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.registeredCounterpartyPayee({ value: RegisteredCounterpartyPayee.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendRegisteredCounterpartyPayee: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendFee({ value, fee, memo }: sendFeeParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendFee: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.fee({ value: Fee.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendFee: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryIncentivizedPacketsResponse({
      value,
      fee,
      memo,
    }: sendQueryIncentivizedPacketsResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryIncentivizedPacketsResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryIncentivizedPacketsResponse({ value: QueryIncentivizedPacketsResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryIncentivizedPacketsResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryPayeeRequest({ value, fee, memo }: sendQueryPayeeRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryPayeeRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryPayeeRequest({ value: QueryPayeeRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryPayeeRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgPayPacketFee({ value, fee, memo }: sendMsgPayPacketFeeParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgPayPacketFee: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgPayPacketFee({ value: MsgPayPacketFee.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgPayPacketFee: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendFeeEnabledChannel({ value, fee, memo }: sendFeeEnabledChannelParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendFeeEnabledChannel: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.feeEnabledChannel({ value: FeeEnabledChannel.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendFeeEnabledChannel: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryIncentivizedPacketResponse({
      value,
      fee,
      memo,
    }: sendQueryIncentivizedPacketResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryIncentivizedPacketResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryIncentivizedPacketResponse({ value: QueryIncentivizedPacketResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryIncentivizedPacketResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryIncentivizedPacketsForChannelResponse({
      value,
      fee,
      memo,
    }: sendQueryIncentivizedPacketsForChannelResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error(
          'TxClient:sendQueryIncentivizedPacketsForChannelResponse: Unable to sign Tx. Signer is not present.'
        );
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryIncentivizedPacketsForChannelResponse({
          value: QueryIncentivizedPacketsForChannelResponse.fromPartial(value),
        });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error(
          'TxClient:sendQueryIncentivizedPacketsForChannelResponse: Could not broadcast Tx: ' + e.message
        );
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

    async sendMsgPayPacketFeeAsyncResponse({
      value,
      fee,
      memo,
    }: sendMsgPayPacketFeeAsyncResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgPayPacketFeeAsyncResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgPayPacketFeeAsyncResponse({ value: MsgPayPacketFeeAsyncResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgPayPacketFeeAsyncResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryTotalTimeoutFeesRequest({
      value,
      fee,
      memo,
    }: sendQueryTotalTimeoutFeesRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryTotalTimeoutFeesRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryTotalTimeoutFeesRequest({ value: QueryTotalTimeoutFeesRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryTotalTimeoutFeesRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgRegisterCounterpartyPayee({
      value,
      fee,
      memo,
    }: sendMsgRegisterCounterpartyPayeeParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgRegisterCounterpartyPayee: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgRegisterCounterpartyPayee({ value: MsgRegisterCounterpartyPayee.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgRegisterCounterpartyPayee: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryIncentivizedPacketsForChannelRequest({
      value,
      fee,
      memo,
    }: sendQueryIncentivizedPacketsForChannelRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error(
          'TxClient:sendQueryIncentivizedPacketsForChannelRequest: Unable to sign Tx. Signer is not present.'
        );
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryIncentivizedPacketsForChannelRequest({
          value: QueryIncentivizedPacketsForChannelRequest.fromPartial(value),
        });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryIncentivizedPacketsForChannelRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryFeeEnabledChannelResponse({
      value,
      fee,
      memo,
    }: sendQueryFeeEnabledChannelResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryFeeEnabledChannelResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryFeeEnabledChannelResponse({ value: QueryFeeEnabledChannelResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryFeeEnabledChannelResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgRegisterCounterpartyPayeeResponse({
      value,
      fee,
      memo,
    }: sendMsgRegisterCounterpartyPayeeResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgRegisterCounterpartyPayeeResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgRegisterCounterpartyPayeeResponse({
          value: MsgRegisterCounterpartyPayeeResponse.fromPartial(value),
        });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgRegisterCounterpartyPayeeResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendPacketFee({ value, fee, memo }: sendPacketFeeParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendPacketFee: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.packetFee({ value: PacketFee.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendPacketFee: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendIdentifiedPacketFees({ value, fee, memo }: sendIdentifiedPacketFeesParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendIdentifiedPacketFees: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.identifiedPacketFees({ value: IdentifiedPacketFees.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendIdentifiedPacketFees: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgRegisterPayeeResponse({
      value,
      fee,
      memo,
    }: sendMsgRegisterPayeeResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgRegisterPayeeResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgRegisterPayeeResponse({ value: MsgRegisterPayeeResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgRegisterPayeeResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryTotalAckFeesResponse({
      value,
      fee,
      memo,
    }: sendQueryTotalAckFeesResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryTotalAckFeesResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryTotalAckFeesResponse({ value: QueryTotalAckFeesResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryTotalAckFeesResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryPayeeResponse({ value, fee, memo }: sendQueryPayeeResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryPayeeResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryPayeeResponse({ value: QueryPayeeResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryPayeeResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryCounterpartyPayeeRequest({
      value,
      fee,
      memo,
    }: sendQueryCounterpartyPayeeRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryCounterpartyPayeeRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryCounterpartyPayeeRequest({ value: QueryCounterpartyPayeeRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryCounterpartyPayeeRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgPayPacketFeeAsync({ value, fee, memo }: sendMsgPayPacketFeeAsyncParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgPayPacketFeeAsync: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgPayPacketFeeAsync({ value: MsgPayPacketFeeAsync.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgPayPacketFeeAsync: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendRegisteredPayee({ value, fee, memo }: sendRegisteredPayeeParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendRegisteredPayee: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.registeredPayee({ value: RegisteredPayee.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendRegisteredPayee: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMetadata({ value, fee, memo }: sendMetadataParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMetadata: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.metadata({ value: Metadata.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMetadata: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendPacketFees({ value, fee, memo }: sendPacketFeesParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendPacketFees: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.packetFees({ value: PacketFees.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendPacketFees: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryIncentivizedPacketsRequest({
      value,
      fee,
      memo,
    }: sendQueryIncentivizedPacketsRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryIncentivizedPacketsRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryIncentivizedPacketsRequest({ value: QueryIncentivizedPacketsRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryIncentivizedPacketsRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryFeeEnabledChannelsResponse({
      value,
      fee,
      memo,
    }: sendQueryFeeEnabledChannelsResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryFeeEnabledChannelsResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryFeeEnabledChannelsResponse({ value: QueryFeeEnabledChannelsResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryFeeEnabledChannelsResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendForwardRelayerAddress({ value, fee, memo }: sendForwardRelayerAddressParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendForwardRelayerAddress: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.forwardRelayerAddress({ value: ForwardRelayerAddress.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendForwardRelayerAddress: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryTotalRecvFeesRequest({
      value,
      fee,
      memo,
    }: sendQueryTotalRecvFeesRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryTotalRecvFeesRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryTotalRecvFeesRequest({ value: QueryTotalRecvFeesRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryTotalRecvFeesRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryTotalRecvFeesResponse({
      value,
      fee,
      memo,
    }: sendQueryTotalRecvFeesResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryTotalRecvFeesResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryTotalRecvFeesResponse({ value: QueryTotalRecvFeesResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryTotalRecvFeesResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgPayPacketFeeResponse({
      value,
      fee,
      memo,
    }: sendMsgPayPacketFeeResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgPayPacketFeeResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgPayPacketFeeResponse({ value: MsgPayPacketFeeResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgPayPacketFeeResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendIncentivizedAcknowledgement({
      value,
      fee,
      memo,
    }: sendIncentivizedAcknowledgementParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendIncentivizedAcknowledgement: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.incentivizedAcknowledgement({ value: IncentivizedAcknowledgement.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendIncentivizedAcknowledgement: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryIncentivizedPacketRequest({
      value,
      fee,
      memo,
    }: sendQueryIncentivizedPacketRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryIncentivizedPacketRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryIncentivizedPacketRequest({ value: QueryIncentivizedPacketRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryIncentivizedPacketRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryTotalTimeoutFeesResponse({
      value,
      fee,
      memo,
    }: sendQueryTotalTimeoutFeesResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryTotalTimeoutFeesResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryTotalTimeoutFeesResponse({ value: QueryTotalTimeoutFeesResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryTotalTimeoutFeesResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    queryTotalAckFeesRequest({ value }: queryTotalAckFeesRequestParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.applications.fee.v1.QueryTotalAckFeesRequest',
          value: QueryTotalAckFeesRequest.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryTotalAckFeesRequest: Could not create message: ' + e.message);
      }
    },

    queryCounterpartyPayeeResponse({ value }: queryCounterpartyPayeeResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.applications.fee.v1.QueryCounterpartyPayeeResponse',
          value: QueryCounterpartyPayeeResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryCounterpartyPayeeResponse: Could not create message: ' + e.message);
      }
    },

    queryFeeEnabledChannelsRequest({ value }: queryFeeEnabledChannelsRequestParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.applications.fee.v1.QueryFeeEnabledChannelsRequest',
          value: QueryFeeEnabledChannelsRequest.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryFeeEnabledChannelsRequest: Could not create message: ' + e.message);
      }
    },

    queryFeeEnabledChannelRequest({ value }: queryFeeEnabledChannelRequestParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.applications.fee.v1.QueryFeeEnabledChannelRequest',
          value: QueryFeeEnabledChannelRequest.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryFeeEnabledChannelRequest: Could not create message: ' + e.message);
      }
    },

    msgRegisterPayee({ value }: msgRegisterPayeeParams): EncodeObject {
      try {
        return { typeUrl: '/ibc.applications.fee.v1.MsgRegisterPayee', value: MsgRegisterPayee.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:MsgRegisterPayee: Could not create message: ' + e.message);
      }
    },

    registeredCounterpartyPayee({ value }: registeredCounterpartyPayeeParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.applications.fee.v1.RegisteredCounterpartyPayee',
          value: RegisteredCounterpartyPayee.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:RegisteredCounterpartyPayee: Could not create message: ' + e.message);
      }
    },

    fee({ value }: feeParams): EncodeObject {
      try {
        return { typeUrl: '/ibc.applications.fee.v1.Fee', value: Fee.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:Fee: Could not create message: ' + e.message);
      }
    },

    queryIncentivizedPacketsResponse({ value }: queryIncentivizedPacketsResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.applications.fee.v1.QueryIncentivizedPacketsResponse',
          value: QueryIncentivizedPacketsResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryIncentivizedPacketsResponse: Could not create message: ' + e.message);
      }
    },

    queryPayeeRequest({ value }: queryPayeeRequestParams): EncodeObject {
      try {
        return { typeUrl: '/ibc.applications.fee.v1.QueryPayeeRequest', value: QueryPayeeRequest.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:QueryPayeeRequest: Could not create message: ' + e.message);
      }
    },

    msgPayPacketFee({ value }: msgPayPacketFeeParams): EncodeObject {
      try {
        return { typeUrl: '/ibc.applications.fee.v1.MsgPayPacketFee', value: MsgPayPacketFee.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:MsgPayPacketFee: Could not create message: ' + e.message);
      }
    },

    feeEnabledChannel({ value }: feeEnabledChannelParams): EncodeObject {
      try {
        return { typeUrl: '/ibc.applications.fee.v1.FeeEnabledChannel', value: FeeEnabledChannel.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:FeeEnabledChannel: Could not create message: ' + e.message);
      }
    },

    queryIncentivizedPacketResponse({ value }: queryIncentivizedPacketResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.applications.fee.v1.QueryIncentivizedPacketResponse',
          value: QueryIncentivizedPacketResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryIncentivizedPacketResponse: Could not create message: ' + e.message);
      }
    },

    queryIncentivizedPacketsForChannelResponse({
      value,
    }: queryIncentivizedPacketsForChannelResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.applications.fee.v1.QueryIncentivizedPacketsForChannelResponse',
          value: QueryIncentivizedPacketsForChannelResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryIncentivizedPacketsForChannelResponse: Could not create message: ' + e.message);
      }
    },

    genesisState({ value }: genesisStateParams): EncodeObject {
      try {
        return { typeUrl: '/ibc.applications.fee.v1.GenesisState', value: GenesisState.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:GenesisState: Could not create message: ' + e.message);
      }
    },

    msgPayPacketFeeAsyncResponse({ value }: msgPayPacketFeeAsyncResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.applications.fee.v1.MsgPayPacketFeeAsyncResponse',
          value: MsgPayPacketFeeAsyncResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgPayPacketFeeAsyncResponse: Could not create message: ' + e.message);
      }
    },

    queryTotalTimeoutFeesRequest({ value }: queryTotalTimeoutFeesRequestParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.applications.fee.v1.QueryTotalTimeoutFeesRequest',
          value: QueryTotalTimeoutFeesRequest.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryTotalTimeoutFeesRequest: Could not create message: ' + e.message);
      }
    },

    msgRegisterCounterpartyPayee({ value }: msgRegisterCounterpartyPayeeParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.applications.fee.v1.MsgRegisterCounterpartyPayee',
          value: MsgRegisterCounterpartyPayee.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgRegisterCounterpartyPayee: Could not create message: ' + e.message);
      }
    },

    queryIncentivizedPacketsForChannelRequest({
      value,
    }: queryIncentivizedPacketsForChannelRequestParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.applications.fee.v1.QueryIncentivizedPacketsForChannelRequest',
          value: QueryIncentivizedPacketsForChannelRequest.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryIncentivizedPacketsForChannelRequest: Could not create message: ' + e.message);
      }
    },

    queryFeeEnabledChannelResponse({ value }: queryFeeEnabledChannelResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.applications.fee.v1.QueryFeeEnabledChannelResponse',
          value: QueryFeeEnabledChannelResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryFeeEnabledChannelResponse: Could not create message: ' + e.message);
      }
    },

    msgRegisterCounterpartyPayeeResponse({ value }: msgRegisterCounterpartyPayeeResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.applications.fee.v1.MsgRegisterCounterpartyPayeeResponse',
          value: MsgRegisterCounterpartyPayeeResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgRegisterCounterpartyPayeeResponse: Could not create message: ' + e.message);
      }
    },

    packetFee({ value }: packetFeeParams): EncodeObject {
      try {
        return { typeUrl: '/ibc.applications.fee.v1.PacketFee', value: PacketFee.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:PacketFee: Could not create message: ' + e.message);
      }
    },

    identifiedPacketFees({ value }: identifiedPacketFeesParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.applications.fee.v1.IdentifiedPacketFees',
          value: IdentifiedPacketFees.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:IdentifiedPacketFees: Could not create message: ' + e.message);
      }
    },

    msgRegisterPayeeResponse({ value }: msgRegisterPayeeResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.applications.fee.v1.MsgRegisterPayeeResponse',
          value: MsgRegisterPayeeResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgRegisterPayeeResponse: Could not create message: ' + e.message);
      }
    },

    queryTotalAckFeesResponse({ value }: queryTotalAckFeesResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.applications.fee.v1.QueryTotalAckFeesResponse',
          value: QueryTotalAckFeesResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryTotalAckFeesResponse: Could not create message: ' + e.message);
      }
    },

    queryPayeeResponse({ value }: queryPayeeResponseParams): EncodeObject {
      try {
        return { typeUrl: '/ibc.applications.fee.v1.QueryPayeeResponse', value: QueryPayeeResponse.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:QueryPayeeResponse: Could not create message: ' + e.message);
      }
    },

    queryCounterpartyPayeeRequest({ value }: queryCounterpartyPayeeRequestParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.applications.fee.v1.QueryCounterpartyPayeeRequest',
          value: QueryCounterpartyPayeeRequest.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryCounterpartyPayeeRequest: Could not create message: ' + e.message);
      }
    },

    msgPayPacketFeeAsync({ value }: msgPayPacketFeeAsyncParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.applications.fee.v1.MsgPayPacketFeeAsync',
          value: MsgPayPacketFeeAsync.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgPayPacketFeeAsync: Could not create message: ' + e.message);
      }
    },

    registeredPayee({ value }: registeredPayeeParams): EncodeObject {
      try {
        return { typeUrl: '/ibc.applications.fee.v1.RegisteredPayee', value: RegisteredPayee.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:RegisteredPayee: Could not create message: ' + e.message);
      }
    },

    metadata({ value }: metadataParams): EncodeObject {
      try {
        return { typeUrl: '/ibc.applications.fee.v1.Metadata', value: Metadata.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:Metadata: Could not create message: ' + e.message);
      }
    },

    packetFees({ value }: packetFeesParams): EncodeObject {
      try {
        return { typeUrl: '/ibc.applications.fee.v1.PacketFees', value: PacketFees.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:PacketFees: Could not create message: ' + e.message);
      }
    },

    queryIncentivizedPacketsRequest({ value }: queryIncentivizedPacketsRequestParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.applications.fee.v1.QueryIncentivizedPacketsRequest',
          value: QueryIncentivizedPacketsRequest.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryIncentivizedPacketsRequest: Could not create message: ' + e.message);
      }
    },

    queryFeeEnabledChannelsResponse({ value }: queryFeeEnabledChannelsResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.applications.fee.v1.QueryFeeEnabledChannelsResponse',
          value: QueryFeeEnabledChannelsResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryFeeEnabledChannelsResponse: Could not create message: ' + e.message);
      }
    },

    forwardRelayerAddress({ value }: forwardRelayerAddressParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.applications.fee.v1.ForwardRelayerAddress',
          value: ForwardRelayerAddress.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:ForwardRelayerAddress: Could not create message: ' + e.message);
      }
    },

    queryTotalRecvFeesRequest({ value }: queryTotalRecvFeesRequestParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.applications.fee.v1.QueryTotalRecvFeesRequest',
          value: QueryTotalRecvFeesRequest.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryTotalRecvFeesRequest: Could not create message: ' + e.message);
      }
    },

    queryTotalRecvFeesResponse({ value }: queryTotalRecvFeesResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.applications.fee.v1.QueryTotalRecvFeesResponse',
          value: QueryTotalRecvFeesResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryTotalRecvFeesResponse: Could not create message: ' + e.message);
      }
    },

    msgPayPacketFeeResponse({ value }: msgPayPacketFeeResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.applications.fee.v1.MsgPayPacketFeeResponse',
          value: MsgPayPacketFeeResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgPayPacketFeeResponse: Could not create message: ' + e.message);
      }
    },

    incentivizedAcknowledgement({ value }: incentivizedAcknowledgementParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.applications.fee.v1.IncentivizedAcknowledgement',
          value: IncentivizedAcknowledgement.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:IncentivizedAcknowledgement: Could not create message: ' + e.message);
      }
    },

    queryIncentivizedPacketRequest({ value }: queryIncentivizedPacketRequestParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.applications.fee.v1.QueryIncentivizedPacketRequest',
          value: QueryIncentivizedPacketRequest.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryIncentivizedPacketRequest: Could not create message: ' + e.message);
      }
    },

    queryTotalTimeoutFeesResponse({ value }: queryTotalTimeoutFeesResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.applications.fee.v1.QueryTotalTimeoutFeesResponse',
          value: QueryTotalTimeoutFeesResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryTotalTimeoutFeesResponse: Could not create message: ' + e.message);
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
      IbcApplicationsFeeV1: new SDKModule(test),
    },
    registry: msgTypes,
  };
};
export default IgntModule;
