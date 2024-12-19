import { SigningStargateClient, DeliverTxResponse, StdFee } from '@cosmjs/stargate';
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from '@cosmjs/proto-signing';
import { msgTypes } from './registry';
import { IgniteClient } from '../client';
import { MissingWalletError } from '../helpers';
import { Api } from './rest';
import { Counterparty } from './types/ibc/core/connection/v1/connection';
import { Version } from './types/ibc/core/connection/v1/connection';
import { Params } from './types/ibc/core/connection/v1/connection';
import { QueryConnectionsResponse } from './types/ibc/core/connection/v1/query';
import { QueryConnectionClientStateRequest } from './types/ibc/core/connection/v1/query';
import { MsgConnectionOpenConfirmResponse } from './types/ibc/core/connection/v1/tx';
import { QueryClientConnectionsResponse } from './types/ibc/core/connection/v1/query';
import { QueryConnectionParamsRequest } from './types/ibc/core/connection/v1/query';
import { MsgConnectionOpenInitResponse } from './types/ibc/core/connection/v1/tx';
import { ClientPaths } from './types/ibc/core/connection/v1/connection';
import { QueryConnectionResponse } from './types/ibc/core/connection/v1/query';
import { QueryConnectionParamsResponse } from './types/ibc/core/connection/v1/query';
import { QueryConnectionsRequest } from './types/ibc/core/connection/v1/query';
import { MsgConnectionOpenInit } from './types/ibc/core/connection/v1/tx';
import { MsgUpdateParamsResponse } from './types/ibc/core/connection/v1/tx';
import { ConnectionEnd } from './types/ibc/core/connection/v1/connection';
import { QueryConnectionClientStateResponse } from './types/ibc/core/connection/v1/query';
import { QueryClientConnectionsRequest } from './types/ibc/core/connection/v1/query';
import { MsgConnectionOpenAck } from './types/ibc/core/connection/v1/tx';
import { MsgConnectionOpenTryResponse } from './types/ibc/core/connection/v1/tx';
import { IdentifiedConnection } from './types/ibc/core/connection/v1/connection';
import { ConnectionPaths } from './types/ibc/core/connection/v1/connection';
import { GenesisState } from './types/ibc/core/connection/v1/genesis';
import { MsgConnectionOpenConfirm } from './types/ibc/core/connection/v1/tx';
import { MsgUpdateParams } from './types/ibc/core/connection/v1/tx';
import { MsgConnectionOpenAckResponse } from './types/ibc/core/connection/v1/tx';
import { QueryConnectionConsensusStateResponse } from './types/ibc/core/connection/v1/query';
import { QueryConnectionRequest } from './types/ibc/core/connection/v1/query';
import { QueryConnectionConsensusStateRequest } from './types/ibc/core/connection/v1/query';
import { MsgConnectionOpenTry } from './types/ibc/core/connection/v1/tx';

export {
  Counterparty,
  Version,
  Params,
  QueryConnectionsResponse,
  QueryConnectionClientStateRequest,
  MsgConnectionOpenConfirmResponse,
  QueryClientConnectionsResponse,
  QueryConnectionParamsRequest,
  MsgConnectionOpenInitResponse,
  ClientPaths,
  QueryConnectionResponse,
  QueryConnectionParamsResponse,
  QueryConnectionsRequest,
  MsgConnectionOpenInit,
  MsgUpdateParamsResponse,
  ConnectionEnd,
  QueryConnectionClientStateResponse,
  QueryClientConnectionsRequest,
  MsgConnectionOpenAck,
  MsgConnectionOpenTryResponse,
  IdentifiedConnection,
  ConnectionPaths,
  GenesisState,
  MsgConnectionOpenConfirm,
  MsgUpdateParams,
  MsgConnectionOpenAckResponse,
  QueryConnectionConsensusStateResponse,
  QueryConnectionRequest,
  QueryConnectionConsensusStateRequest,
  MsgConnectionOpenTry,
};

type sendCounterpartyParams = {
  value: Counterparty;
  fee?: StdFee;
  memo?: string;
};

type sendVersionParams = {
  value: Version;
  fee?: StdFee;
  memo?: string;
};

type sendParamsParams = {
  value: Params;
  fee?: StdFee;
  memo?: string;
};

type sendQueryConnectionsResponseParams = {
  value: QueryConnectionsResponse;
  fee?: StdFee;
  memo?: string;
};

type sendQueryConnectionClientStateRequestParams = {
  value: QueryConnectionClientStateRequest;
  fee?: StdFee;
  memo?: string;
};

type sendMsgConnectionOpenConfirmResponseParams = {
  value: MsgConnectionOpenConfirmResponse;
  fee?: StdFee;
  memo?: string;
};

type sendQueryClientConnectionsResponseParams = {
  value: QueryClientConnectionsResponse;
  fee?: StdFee;
  memo?: string;
};

type sendQueryConnectionParamsRequestParams = {
  value: QueryConnectionParamsRequest;
  fee?: StdFee;
  memo?: string;
};

type sendMsgConnectionOpenInitResponseParams = {
  value: MsgConnectionOpenInitResponse;
  fee?: StdFee;
  memo?: string;
};

type sendClientPathsParams = {
  value: ClientPaths;
  fee?: StdFee;
  memo?: string;
};

type sendQueryConnectionResponseParams = {
  value: QueryConnectionResponse;
  fee?: StdFee;
  memo?: string;
};

type sendQueryConnectionParamsResponseParams = {
  value: QueryConnectionParamsResponse;
  fee?: StdFee;
  memo?: string;
};

type sendQueryConnectionsRequestParams = {
  value: QueryConnectionsRequest;
  fee?: StdFee;
  memo?: string;
};

type sendMsgConnectionOpenInitParams = {
  value: MsgConnectionOpenInit;
  fee?: StdFee;
  memo?: string;
};

type sendMsgUpdateParamsResponseParams = {
  value: MsgUpdateParamsResponse;
  fee?: StdFee;
  memo?: string;
};

type sendConnectionEndParams = {
  value: ConnectionEnd;
  fee?: StdFee;
  memo?: string;
};

type sendQueryConnectionClientStateResponseParams = {
  value: QueryConnectionClientStateResponse;
  fee?: StdFee;
  memo?: string;
};

type sendQueryClientConnectionsRequestParams = {
  value: QueryClientConnectionsRequest;
  fee?: StdFee;
  memo?: string;
};

type sendMsgConnectionOpenAckParams = {
  value: MsgConnectionOpenAck;
  fee?: StdFee;
  memo?: string;
};

type sendMsgConnectionOpenTryResponseParams = {
  value: MsgConnectionOpenTryResponse;
  fee?: StdFee;
  memo?: string;
};

type sendIdentifiedConnectionParams = {
  value: IdentifiedConnection;
  fee?: StdFee;
  memo?: string;
};

type sendConnectionPathsParams = {
  value: ConnectionPaths;
  fee?: StdFee;
  memo?: string;
};

type sendGenesisStateParams = {
  value: GenesisState;
  fee?: StdFee;
  memo?: string;
};

type sendMsgConnectionOpenConfirmParams = {
  value: MsgConnectionOpenConfirm;
  fee?: StdFee;
  memo?: string;
};

type sendMsgUpdateParamsParams = {
  value: MsgUpdateParams;
  fee?: StdFee;
  memo?: string;
};

type sendMsgConnectionOpenAckResponseParams = {
  value: MsgConnectionOpenAckResponse;
  fee?: StdFee;
  memo?: string;
};

type sendQueryConnectionConsensusStateResponseParams = {
  value: QueryConnectionConsensusStateResponse;
  fee?: StdFee;
  memo?: string;
};

type sendQueryConnectionRequestParams = {
  value: QueryConnectionRequest;
  fee?: StdFee;
  memo?: string;
};

type sendQueryConnectionConsensusStateRequestParams = {
  value: QueryConnectionConsensusStateRequest;
  fee?: StdFee;
  memo?: string;
};

type sendMsgConnectionOpenTryParams = {
  value: MsgConnectionOpenTry;
  fee?: StdFee;
  memo?: string;
};

type counterpartyParams = {
  value: Counterparty;
};

type versionParams = {
  value: Version;
};

type paramsParams = {
  value: Params;
};

type queryConnectionsResponseParams = {
  value: QueryConnectionsResponse;
};

type queryConnectionClientStateRequestParams = {
  value: QueryConnectionClientStateRequest;
};

type msgConnectionOpenConfirmResponseParams = {
  value: MsgConnectionOpenConfirmResponse;
};

type queryClientConnectionsResponseParams = {
  value: QueryClientConnectionsResponse;
};

type queryConnectionParamsRequestParams = {
  value: QueryConnectionParamsRequest;
};

type msgConnectionOpenInitResponseParams = {
  value: MsgConnectionOpenInitResponse;
};

type clientPathsParams = {
  value: ClientPaths;
};

type queryConnectionResponseParams = {
  value: QueryConnectionResponse;
};

type queryConnectionParamsResponseParams = {
  value: QueryConnectionParamsResponse;
};

type queryConnectionsRequestParams = {
  value: QueryConnectionsRequest;
};

type msgConnectionOpenInitParams = {
  value: MsgConnectionOpenInit;
};

type msgUpdateParamsResponseParams = {
  value: MsgUpdateParamsResponse;
};

type connectionEndParams = {
  value: ConnectionEnd;
};

type queryConnectionClientStateResponseParams = {
  value: QueryConnectionClientStateResponse;
};

type queryClientConnectionsRequestParams = {
  value: QueryClientConnectionsRequest;
};

type msgConnectionOpenAckParams = {
  value: MsgConnectionOpenAck;
};

type msgConnectionOpenTryResponseParams = {
  value: MsgConnectionOpenTryResponse;
};

type identifiedConnectionParams = {
  value: IdentifiedConnection;
};

type connectionPathsParams = {
  value: ConnectionPaths;
};

type genesisStateParams = {
  value: GenesisState;
};

type msgConnectionOpenConfirmParams = {
  value: MsgConnectionOpenConfirm;
};

type msgUpdateParamsParams = {
  value: MsgUpdateParams;
};

type msgConnectionOpenAckResponseParams = {
  value: MsgConnectionOpenAckResponse;
};

type queryConnectionConsensusStateResponseParams = {
  value: QueryConnectionConsensusStateResponse;
};

type queryConnectionRequestParams = {
  value: QueryConnectionRequest;
};

type queryConnectionConsensusStateRequestParams = {
  value: QueryConnectionConsensusStateRequest;
};

type msgConnectionOpenTryParams = {
  value: MsgConnectionOpenTry;
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

    async sendVersion({ value, fee, memo }: sendVersionParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendVersion: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.version({ value: Version.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendVersion: Could not broadcast Tx: ' + e.message);
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

    async sendQueryConnectionsResponse({
      value,
      fee,
      memo,
    }: sendQueryConnectionsResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryConnectionsResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryConnectionsResponse({ value: QueryConnectionsResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryConnectionsResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryConnectionClientStateRequest({
      value,
      fee,
      memo,
    }: sendQueryConnectionClientStateRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryConnectionClientStateRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryConnectionClientStateRequest({
          value: QueryConnectionClientStateRequest.fromPartial(value),
        });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryConnectionClientStateRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgConnectionOpenConfirmResponse({
      value,
      fee,
      memo,
    }: sendMsgConnectionOpenConfirmResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgConnectionOpenConfirmResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgConnectionOpenConfirmResponse({ value: MsgConnectionOpenConfirmResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgConnectionOpenConfirmResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryClientConnectionsResponse({
      value,
      fee,
      memo,
    }: sendQueryClientConnectionsResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryClientConnectionsResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryClientConnectionsResponse({ value: QueryClientConnectionsResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryClientConnectionsResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryConnectionParamsRequest({
      value,
      fee,
      memo,
    }: sendQueryConnectionParamsRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryConnectionParamsRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryConnectionParamsRequest({ value: QueryConnectionParamsRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryConnectionParamsRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgConnectionOpenInitResponse({
      value,
      fee,
      memo,
    }: sendMsgConnectionOpenInitResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgConnectionOpenInitResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgConnectionOpenInitResponse({ value: MsgConnectionOpenInitResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgConnectionOpenInitResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendClientPaths({ value, fee, memo }: sendClientPathsParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendClientPaths: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.clientPaths({ value: ClientPaths.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendClientPaths: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryConnectionResponse({
      value,
      fee,
      memo,
    }: sendQueryConnectionResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryConnectionResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryConnectionResponse({ value: QueryConnectionResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryConnectionResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryConnectionParamsResponse({
      value,
      fee,
      memo,
    }: sendQueryConnectionParamsResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryConnectionParamsResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryConnectionParamsResponse({ value: QueryConnectionParamsResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryConnectionParamsResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryConnectionsRequest({
      value,
      fee,
      memo,
    }: sendQueryConnectionsRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryConnectionsRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryConnectionsRequest({ value: QueryConnectionsRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryConnectionsRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgConnectionOpenInit({ value, fee, memo }: sendMsgConnectionOpenInitParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgConnectionOpenInit: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgConnectionOpenInit({ value: MsgConnectionOpenInit.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgConnectionOpenInit: Could not broadcast Tx: ' + e.message);
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

    async sendConnectionEnd({ value, fee, memo }: sendConnectionEndParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendConnectionEnd: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.connectionEnd({ value: ConnectionEnd.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendConnectionEnd: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryConnectionClientStateResponse({
      value,
      fee,
      memo,
    }: sendQueryConnectionClientStateResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryConnectionClientStateResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryConnectionClientStateResponse({
          value: QueryConnectionClientStateResponse.fromPartial(value),
        });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryConnectionClientStateResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryClientConnectionsRequest({
      value,
      fee,
      memo,
    }: sendQueryClientConnectionsRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryClientConnectionsRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryClientConnectionsRequest({ value: QueryClientConnectionsRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryClientConnectionsRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgConnectionOpenAck({ value, fee, memo }: sendMsgConnectionOpenAckParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgConnectionOpenAck: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgConnectionOpenAck({ value: MsgConnectionOpenAck.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgConnectionOpenAck: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgConnectionOpenTryResponse({
      value,
      fee,
      memo,
    }: sendMsgConnectionOpenTryResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgConnectionOpenTryResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgConnectionOpenTryResponse({ value: MsgConnectionOpenTryResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgConnectionOpenTryResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendIdentifiedConnection({ value, fee, memo }: sendIdentifiedConnectionParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendIdentifiedConnection: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.identifiedConnection({ value: IdentifiedConnection.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendIdentifiedConnection: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendConnectionPaths({ value, fee, memo }: sendConnectionPathsParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendConnectionPaths: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.connectionPaths({ value: ConnectionPaths.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendConnectionPaths: Could not broadcast Tx: ' + e.message);
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

    async sendMsgConnectionOpenConfirm({
      value,
      fee,
      memo,
    }: sendMsgConnectionOpenConfirmParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgConnectionOpenConfirm: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgConnectionOpenConfirm({ value: MsgConnectionOpenConfirm.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgConnectionOpenConfirm: Could not broadcast Tx: ' + e.message);
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

    async sendMsgConnectionOpenAckResponse({
      value,
      fee,
      memo,
    }: sendMsgConnectionOpenAckResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgConnectionOpenAckResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgConnectionOpenAckResponse({ value: MsgConnectionOpenAckResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgConnectionOpenAckResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryConnectionConsensusStateResponse({
      value,
      fee,
      memo,
    }: sendQueryConnectionConsensusStateResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error(
          'TxClient:sendQueryConnectionConsensusStateResponse: Unable to sign Tx. Signer is not present.'
        );
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryConnectionConsensusStateResponse({
          value: QueryConnectionConsensusStateResponse.fromPartial(value),
        });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryConnectionConsensusStateResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryConnectionRequest({
      value,
      fee,
      memo,
    }: sendQueryConnectionRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryConnectionRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryConnectionRequest({ value: QueryConnectionRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryConnectionRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryConnectionConsensusStateRequest({
      value,
      fee,
      memo,
    }: sendQueryConnectionConsensusStateRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryConnectionConsensusStateRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryConnectionConsensusStateRequest({
          value: QueryConnectionConsensusStateRequest.fromPartial(value),
        });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryConnectionConsensusStateRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgConnectionOpenTry({ value, fee, memo }: sendMsgConnectionOpenTryParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgConnectionOpenTry: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgConnectionOpenTry({ value: MsgConnectionOpenTry.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgConnectionOpenTry: Could not broadcast Tx: ' + e.message);
      }
    },

    counterparty({ value }: counterpartyParams): EncodeObject {
      try {
        return { typeUrl: '/ibc.core.connection.v1.Counterparty', value: Counterparty.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:Counterparty: Could not create message: ' + e.message);
      }
    },

    version({ value }: versionParams): EncodeObject {
      try {
        return { typeUrl: '/ibc.core.connection.v1.Version', value: Version.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:Version: Could not create message: ' + e.message);
      }
    },

    params({ value }: paramsParams): EncodeObject {
      try {
        return { typeUrl: '/ibc.core.connection.v1.Params', value: Params.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:Params: Could not create message: ' + e.message);
      }
    },

    queryConnectionsResponse({ value }: queryConnectionsResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.connection.v1.QueryConnectionsResponse',
          value: QueryConnectionsResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryConnectionsResponse: Could not create message: ' + e.message);
      }
    },

    queryConnectionClientStateRequest({ value }: queryConnectionClientStateRequestParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.connection.v1.QueryConnectionClientStateRequest',
          value: QueryConnectionClientStateRequest.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryConnectionClientStateRequest: Could not create message: ' + e.message);
      }
    },

    msgConnectionOpenConfirmResponse({ value }: msgConnectionOpenConfirmResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.connection.v1.MsgConnectionOpenConfirmResponse',
          value: MsgConnectionOpenConfirmResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgConnectionOpenConfirmResponse: Could not create message: ' + e.message);
      }
    },

    queryClientConnectionsResponse({ value }: queryClientConnectionsResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.connection.v1.QueryClientConnectionsResponse',
          value: QueryClientConnectionsResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryClientConnectionsResponse: Could not create message: ' + e.message);
      }
    },

    queryConnectionParamsRequest({ value }: queryConnectionParamsRequestParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.connection.v1.QueryConnectionParamsRequest',
          value: QueryConnectionParamsRequest.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryConnectionParamsRequest: Could not create message: ' + e.message);
      }
    },

    msgConnectionOpenInitResponse({ value }: msgConnectionOpenInitResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.connection.v1.MsgConnectionOpenInitResponse',
          value: MsgConnectionOpenInitResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgConnectionOpenInitResponse: Could not create message: ' + e.message);
      }
    },

    clientPaths({ value }: clientPathsParams): EncodeObject {
      try {
        return { typeUrl: '/ibc.core.connection.v1.ClientPaths', value: ClientPaths.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:ClientPaths: Could not create message: ' + e.message);
      }
    },

    queryConnectionResponse({ value }: queryConnectionResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.connection.v1.QueryConnectionResponse',
          value: QueryConnectionResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryConnectionResponse: Could not create message: ' + e.message);
      }
    },

    queryConnectionParamsResponse({ value }: queryConnectionParamsResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.connection.v1.QueryConnectionParamsResponse',
          value: QueryConnectionParamsResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryConnectionParamsResponse: Could not create message: ' + e.message);
      }
    },

    queryConnectionsRequest({ value }: queryConnectionsRequestParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.connection.v1.QueryConnectionsRequest',
          value: QueryConnectionsRequest.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryConnectionsRequest: Could not create message: ' + e.message);
      }
    },

    msgConnectionOpenInit({ value }: msgConnectionOpenInitParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.connection.v1.MsgConnectionOpenInit',
          value: MsgConnectionOpenInit.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgConnectionOpenInit: Could not create message: ' + e.message);
      }
    },

    msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.connection.v1.MsgUpdateParamsResponse',
          value: MsgUpdateParamsResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgUpdateParamsResponse: Could not create message: ' + e.message);
      }
    },

    connectionEnd({ value }: connectionEndParams): EncodeObject {
      try {
        return { typeUrl: '/ibc.core.connection.v1.ConnectionEnd', value: ConnectionEnd.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:ConnectionEnd: Could not create message: ' + e.message);
      }
    },

    queryConnectionClientStateResponse({ value }: queryConnectionClientStateResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.connection.v1.QueryConnectionClientStateResponse',
          value: QueryConnectionClientStateResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryConnectionClientStateResponse: Could not create message: ' + e.message);
      }
    },

    queryClientConnectionsRequest({ value }: queryClientConnectionsRequestParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.connection.v1.QueryClientConnectionsRequest',
          value: QueryClientConnectionsRequest.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryClientConnectionsRequest: Could not create message: ' + e.message);
      }
    },

    msgConnectionOpenAck({ value }: msgConnectionOpenAckParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.connection.v1.MsgConnectionOpenAck',
          value: MsgConnectionOpenAck.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgConnectionOpenAck: Could not create message: ' + e.message);
      }
    },

    msgConnectionOpenTryResponse({ value }: msgConnectionOpenTryResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.connection.v1.MsgConnectionOpenTryResponse',
          value: MsgConnectionOpenTryResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgConnectionOpenTryResponse: Could not create message: ' + e.message);
      }
    },

    identifiedConnection({ value }: identifiedConnectionParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.connection.v1.IdentifiedConnection',
          value: IdentifiedConnection.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:IdentifiedConnection: Could not create message: ' + e.message);
      }
    },

    connectionPaths({ value }: connectionPathsParams): EncodeObject {
      try {
        return { typeUrl: '/ibc.core.connection.v1.ConnectionPaths', value: ConnectionPaths.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:ConnectionPaths: Could not create message: ' + e.message);
      }
    },

    genesisState({ value }: genesisStateParams): EncodeObject {
      try {
        return { typeUrl: '/ibc.core.connection.v1.GenesisState', value: GenesisState.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:GenesisState: Could not create message: ' + e.message);
      }
    },

    msgConnectionOpenConfirm({ value }: msgConnectionOpenConfirmParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.connection.v1.MsgConnectionOpenConfirm',
          value: MsgConnectionOpenConfirm.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgConnectionOpenConfirm: Could not create message: ' + e.message);
      }
    },

    msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject {
      try {
        return { typeUrl: '/ibc.core.connection.v1.MsgUpdateParams', value: MsgUpdateParams.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:MsgUpdateParams: Could not create message: ' + e.message);
      }
    },

    msgConnectionOpenAckResponse({ value }: msgConnectionOpenAckResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.connection.v1.MsgConnectionOpenAckResponse',
          value: MsgConnectionOpenAckResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgConnectionOpenAckResponse: Could not create message: ' + e.message);
      }
    },

    queryConnectionConsensusStateResponse({ value }: queryConnectionConsensusStateResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.connection.v1.QueryConnectionConsensusStateResponse',
          value: QueryConnectionConsensusStateResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryConnectionConsensusStateResponse: Could not create message: ' + e.message);
      }
    },

    queryConnectionRequest({ value }: queryConnectionRequestParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.connection.v1.QueryConnectionRequest',
          value: QueryConnectionRequest.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryConnectionRequest: Could not create message: ' + e.message);
      }
    },

    queryConnectionConsensusStateRequest({ value }: queryConnectionConsensusStateRequestParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.connection.v1.QueryConnectionConsensusStateRequest',
          value: QueryConnectionConsensusStateRequest.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryConnectionConsensusStateRequest: Could not create message: ' + e.message);
      }
    },

    msgConnectionOpenTry({ value }: msgConnectionOpenTryParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.connection.v1.MsgConnectionOpenTry',
          value: MsgConnectionOpenTry.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgConnectionOpenTry: Could not create message: ' + e.message);
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
      IbcCoreConnectionV1: new SDKModule(test),
    },
    registry: msgTypes,
  };
};
export default IgntModule;
