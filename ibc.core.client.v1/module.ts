import { SigningStargateClient, DeliverTxResponse, StdFee } from '@cosmjs/stargate';
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from '@cosmjs/proto-signing';
import { msgTypes } from './registry';
import { IgniteClient } from '../client';
import { MissingWalletError } from '../helpers';
import { Api } from './rest';
import { QueryClientStateResponse } from './types/ibc/core/client/v1/query';
import { QueryClientStatesResponse } from './types/ibc/core/client/v1/query';
import { QueryConsensusStatesRequest } from './types/ibc/core/client/v1/query';
import { QueryClientStatusRequest } from './types/ibc/core/client/v1/query';
import { MsgIBCSoftwareUpgrade } from './types/ibc/core/client/v1/tx';
import { QueryClientStatusResponse } from './types/ibc/core/client/v1/query';
import { QueryUpgradedClientStateResponse } from './types/ibc/core/client/v1/query';
import { MsgCreateClient } from './types/ibc/core/client/v1/tx';
import { MsgUpgradeClient } from './types/ibc/core/client/v1/tx';
import { MsgUpgradeClientResponse } from './types/ibc/core/client/v1/tx';
import { MsgUpdateParams } from './types/ibc/core/client/v1/tx';
import { QueryClientStateRequest } from './types/ibc/core/client/v1/query';
import { QueryConsensusStateRequest } from './types/ibc/core/client/v1/query';
import { QueryConsensusStateHeightsResponse } from './types/ibc/core/client/v1/query';
import { QueryClientParamsResponse } from './types/ibc/core/client/v1/query';
import { Params } from './types/ibc/core/client/v1/client';
import { IdentifiedGenesisMetadata } from './types/ibc/core/client/v1/genesis';
import { MsgUpdateClient } from './types/ibc/core/client/v1/tx';
import { MsgRecoverClient } from './types/ibc/core/client/v1/tx';
import { GenesisState } from './types/ibc/core/client/v1/genesis';
import { QueryClientStatesRequest } from './types/ibc/core/client/v1/query';
import { QueryConsensusStateResponse } from './types/ibc/core/client/v1/query';
import { QueryUpgradedClientStateRequest } from './types/ibc/core/client/v1/query';
import { QueryConsensusStateHeightsRequest } from './types/ibc/core/client/v1/query';
import { QueryClientParamsRequest } from './types/ibc/core/client/v1/query';
import { QueryUpgradedConsensusStateResponse } from './types/ibc/core/client/v1/query';
import { ConsensusStateWithHeight } from './types/ibc/core/client/v1/client';
import { MsgUpdateParamsResponse } from './types/ibc/core/client/v1/tx';
import { MsgSubmitMisbehaviourResponse } from './types/ibc/core/client/v1/tx';
import { MsgRecoverClientResponse } from './types/ibc/core/client/v1/tx';
import { UpgradeProposal } from './types/ibc/core/client/v1/client';
import { MsgIBCSoftwareUpgradeResponse } from './types/ibc/core/client/v1/tx';
import { ClientConsensusStates } from './types/ibc/core/client/v1/client';
import { GenesisMetadata } from './types/ibc/core/client/v1/genesis';
import { QueryConsensusStatesResponse } from './types/ibc/core/client/v1/query';
import { IdentifiedClientState } from './types/ibc/core/client/v1/client';
import { MsgCreateClientResponse } from './types/ibc/core/client/v1/tx';
import { ClientUpdateProposal } from './types/ibc/core/client/v1/client';
import { Height } from './types/ibc/core/client/v1/client';
import { QueryUpgradedConsensusStateRequest } from './types/ibc/core/client/v1/query';
import { MsgUpdateClientResponse } from './types/ibc/core/client/v1/tx';
import { MsgSubmitMisbehaviour } from './types/ibc/core/client/v1/tx';

export {
  QueryClientStateResponse,
  QueryClientStatesResponse,
  QueryConsensusStatesRequest,
  QueryClientStatusRequest,
  MsgIBCSoftwareUpgrade,
  QueryClientStatusResponse,
  QueryUpgradedClientStateResponse,
  MsgCreateClient,
  MsgUpgradeClient,
  MsgUpgradeClientResponse,
  MsgUpdateParams,
  QueryClientStateRequest,
  QueryConsensusStateRequest,
  QueryConsensusStateHeightsResponse,
  QueryClientParamsResponse,
  Params,
  IdentifiedGenesisMetadata,
  MsgUpdateClient,
  MsgRecoverClient,
  GenesisState,
  QueryClientStatesRequest,
  QueryConsensusStateResponse,
  QueryUpgradedClientStateRequest,
  QueryConsensusStateHeightsRequest,
  QueryClientParamsRequest,
  QueryUpgradedConsensusStateResponse,
  ConsensusStateWithHeight,
  MsgUpdateParamsResponse,
  MsgSubmitMisbehaviourResponse,
  MsgRecoverClientResponse,
  UpgradeProposal,
  MsgIBCSoftwareUpgradeResponse,
  ClientConsensusStates,
  GenesisMetadata,
  QueryConsensusStatesResponse,
  IdentifiedClientState,
  MsgCreateClientResponse,
  ClientUpdateProposal,
  Height,
  QueryUpgradedConsensusStateRequest,
  MsgUpdateClientResponse,
  MsgSubmitMisbehaviour,
};

type sendQueryClientStateResponseParams = {
  value: QueryClientStateResponse;
  fee?: StdFee;
  memo?: string;
};

type sendQueryClientStatesResponseParams = {
  value: QueryClientStatesResponse;
  fee?: StdFee;
  memo?: string;
};

type sendQueryConsensusStatesRequestParams = {
  value: QueryConsensusStatesRequest;
  fee?: StdFee;
  memo?: string;
};

type sendQueryClientStatusRequestParams = {
  value: QueryClientStatusRequest;
  fee?: StdFee;
  memo?: string;
};

type sendMsgIBCSoftwareUpgradeParams = {
  value: MsgIBCSoftwareUpgrade;
  fee?: StdFee;
  memo?: string;
};

type sendQueryClientStatusResponseParams = {
  value: QueryClientStatusResponse;
  fee?: StdFee;
  memo?: string;
};

type sendQueryUpgradedClientStateResponseParams = {
  value: QueryUpgradedClientStateResponse;
  fee?: StdFee;
  memo?: string;
};

type sendMsgCreateClientParams = {
  value: MsgCreateClient;
  fee?: StdFee;
  memo?: string;
};

type sendMsgUpgradeClientParams = {
  value: MsgUpgradeClient;
  fee?: StdFee;
  memo?: string;
};

type sendMsgUpgradeClientResponseParams = {
  value: MsgUpgradeClientResponse;
  fee?: StdFee;
  memo?: string;
};

type sendMsgUpdateParamsParams = {
  value: MsgUpdateParams;
  fee?: StdFee;
  memo?: string;
};

type sendQueryClientStateRequestParams = {
  value: QueryClientStateRequest;
  fee?: StdFee;
  memo?: string;
};

type sendQueryConsensusStateRequestParams = {
  value: QueryConsensusStateRequest;
  fee?: StdFee;
  memo?: string;
};

type sendQueryConsensusStateHeightsResponseParams = {
  value: QueryConsensusStateHeightsResponse;
  fee?: StdFee;
  memo?: string;
};

type sendQueryClientParamsResponseParams = {
  value: QueryClientParamsResponse;
  fee?: StdFee;
  memo?: string;
};

type sendParamsParams = {
  value: Params;
  fee?: StdFee;
  memo?: string;
};

type sendIdentifiedGenesisMetadataParams = {
  value: IdentifiedGenesisMetadata;
  fee?: StdFee;
  memo?: string;
};

type sendMsgUpdateClientParams = {
  value: MsgUpdateClient;
  fee?: StdFee;
  memo?: string;
};

type sendMsgRecoverClientParams = {
  value: MsgRecoverClient;
  fee?: StdFee;
  memo?: string;
};

type sendGenesisStateParams = {
  value: GenesisState;
  fee?: StdFee;
  memo?: string;
};

type sendQueryClientStatesRequestParams = {
  value: QueryClientStatesRequest;
  fee?: StdFee;
  memo?: string;
};

type sendQueryConsensusStateResponseParams = {
  value: QueryConsensusStateResponse;
  fee?: StdFee;
  memo?: string;
};

type sendQueryUpgradedClientStateRequestParams = {
  value: QueryUpgradedClientStateRequest;
  fee?: StdFee;
  memo?: string;
};

type sendQueryConsensusStateHeightsRequestParams = {
  value: QueryConsensusStateHeightsRequest;
  fee?: StdFee;
  memo?: string;
};

type sendQueryClientParamsRequestParams = {
  value: QueryClientParamsRequest;
  fee?: StdFee;
  memo?: string;
};

type sendQueryUpgradedConsensusStateResponseParams = {
  value: QueryUpgradedConsensusStateResponse;
  fee?: StdFee;
  memo?: string;
};

type sendConsensusStateWithHeightParams = {
  value: ConsensusStateWithHeight;
  fee?: StdFee;
  memo?: string;
};

type sendMsgUpdateParamsResponseParams = {
  value: MsgUpdateParamsResponse;
  fee?: StdFee;
  memo?: string;
};

type sendMsgSubmitMisbehaviourResponseParams = {
  value: MsgSubmitMisbehaviourResponse;
  fee?: StdFee;
  memo?: string;
};

type sendMsgRecoverClientResponseParams = {
  value: MsgRecoverClientResponse;
  fee?: StdFee;
  memo?: string;
};

type sendUpgradeProposalParams = {
  value: UpgradeProposal;
  fee?: StdFee;
  memo?: string;
};

type sendMsgIBCSoftwareUpgradeResponseParams = {
  value: MsgIBCSoftwareUpgradeResponse;
  fee?: StdFee;
  memo?: string;
};

type sendClientConsensusStatesParams = {
  value: ClientConsensusStates;
  fee?: StdFee;
  memo?: string;
};

type sendGenesisMetadataParams = {
  value: GenesisMetadata;
  fee?: StdFee;
  memo?: string;
};

type sendQueryConsensusStatesResponseParams = {
  value: QueryConsensusStatesResponse;
  fee?: StdFee;
  memo?: string;
};

type sendIdentifiedClientStateParams = {
  value: IdentifiedClientState;
  fee?: StdFee;
  memo?: string;
};

type sendMsgCreateClientResponseParams = {
  value: MsgCreateClientResponse;
  fee?: StdFee;
  memo?: string;
};

type sendClientUpdateProposalParams = {
  value: ClientUpdateProposal;
  fee?: StdFee;
  memo?: string;
};

type sendHeightParams = {
  value: Height;
  fee?: StdFee;
  memo?: string;
};

type sendQueryUpgradedConsensusStateRequestParams = {
  value: QueryUpgradedConsensusStateRequest;
  fee?: StdFee;
  memo?: string;
};

type sendMsgUpdateClientResponseParams = {
  value: MsgUpdateClientResponse;
  fee?: StdFee;
  memo?: string;
};

type sendMsgSubmitMisbehaviourParams = {
  value: MsgSubmitMisbehaviour;
  fee?: StdFee;
  memo?: string;
};

type queryClientStateResponseParams = {
  value: QueryClientStateResponse;
};

type queryClientStatesResponseParams = {
  value: QueryClientStatesResponse;
};

type queryConsensusStatesRequestParams = {
  value: QueryConsensusStatesRequest;
};

type queryClientStatusRequestParams = {
  value: QueryClientStatusRequest;
};

type msgIbcsoftwareUpgradeParams = {
  value: MsgIBCSoftwareUpgrade;
};

type queryClientStatusResponseParams = {
  value: QueryClientStatusResponse;
};

type queryUpgradedClientStateResponseParams = {
  value: QueryUpgradedClientStateResponse;
};

type msgCreateClientParams = {
  value: MsgCreateClient;
};

type msgUpgradeClientParams = {
  value: MsgUpgradeClient;
};

type msgUpgradeClientResponseParams = {
  value: MsgUpgradeClientResponse;
};

type msgUpdateParamsParams = {
  value: MsgUpdateParams;
};

type queryClientStateRequestParams = {
  value: QueryClientStateRequest;
};

type queryConsensusStateRequestParams = {
  value: QueryConsensusStateRequest;
};

type queryConsensusStateHeightsResponseParams = {
  value: QueryConsensusStateHeightsResponse;
};

type queryClientParamsResponseParams = {
  value: QueryClientParamsResponse;
};

type paramsParams = {
  value: Params;
};

type identifiedGenesisMetadataParams = {
  value: IdentifiedGenesisMetadata;
};

type msgUpdateClientParams = {
  value: MsgUpdateClient;
};

type msgRecoverClientParams = {
  value: MsgRecoverClient;
};

type genesisStateParams = {
  value: GenesisState;
};

type queryClientStatesRequestParams = {
  value: QueryClientStatesRequest;
};

type queryConsensusStateResponseParams = {
  value: QueryConsensusStateResponse;
};

type queryUpgradedClientStateRequestParams = {
  value: QueryUpgradedClientStateRequest;
};

type queryConsensusStateHeightsRequestParams = {
  value: QueryConsensusStateHeightsRequest;
};

type queryClientParamsRequestParams = {
  value: QueryClientParamsRequest;
};

type queryUpgradedConsensusStateResponseParams = {
  value: QueryUpgradedConsensusStateResponse;
};

type consensusStateWithHeightParams = {
  value: ConsensusStateWithHeight;
};

type msgUpdateParamsResponseParams = {
  value: MsgUpdateParamsResponse;
};

type msgSubmitMisbehaviourResponseParams = {
  value: MsgSubmitMisbehaviourResponse;
};

type msgRecoverClientResponseParams = {
  value: MsgRecoverClientResponse;
};

type upgradeProposalParams = {
  value: UpgradeProposal;
};

type msgIbcsoftwareUpgradeResponseParams = {
  value: MsgIBCSoftwareUpgradeResponse;
};

type clientConsensusStatesParams = {
  value: ClientConsensusStates;
};

type genesisMetadataParams = {
  value: GenesisMetadata;
};

type queryConsensusStatesResponseParams = {
  value: QueryConsensusStatesResponse;
};

type identifiedClientStateParams = {
  value: IdentifiedClientState;
};

type msgCreateClientResponseParams = {
  value: MsgCreateClientResponse;
};

type clientUpdateProposalParams = {
  value: ClientUpdateProposal;
};

type heightParams = {
  value: Height;
};

type queryUpgradedConsensusStateRequestParams = {
  value: QueryUpgradedConsensusStateRequest;
};

type msgUpdateClientResponseParams = {
  value: MsgUpdateClientResponse;
};

type msgSubmitMisbehaviourParams = {
  value: MsgSubmitMisbehaviour;
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
    async sendQueryClientStateResponse({
      value,
      fee,
      memo,
    }: sendQueryClientStateResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryClientStateResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryClientStateResponse({ value: QueryClientStateResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryClientStateResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryClientStatesResponse({
      value,
      fee,
      memo,
    }: sendQueryClientStatesResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryClientStatesResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryClientStatesResponse({ value: QueryClientStatesResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryClientStatesResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryConsensusStatesRequest({
      value,
      fee,
      memo,
    }: sendQueryConsensusStatesRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryConsensusStatesRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryConsensusStatesRequest({ value: QueryConsensusStatesRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryConsensusStatesRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryClientStatusRequest({
      value,
      fee,
      memo,
    }: sendQueryClientStatusRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryClientStatusRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryClientStatusRequest({ value: QueryClientStatusRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryClientStatusRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgIBCSoftwareUpgrade({ value, fee, memo }: sendMsgIBCSoftwareUpgradeParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgIBCSoftwareUpgrade: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgIbcsoftwareUpgrade({ value: MsgIBCSoftwareUpgrade.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgIBCSoftwareUpgrade: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryClientStatusResponse({
      value,
      fee,
      memo,
    }: sendQueryClientStatusResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryClientStatusResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryClientStatusResponse({ value: QueryClientStatusResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryClientStatusResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryUpgradedClientStateResponse({
      value,
      fee,
      memo,
    }: sendQueryUpgradedClientStateResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryUpgradedClientStateResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryUpgradedClientStateResponse({ value: QueryUpgradedClientStateResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryUpgradedClientStateResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgCreateClient({ value, fee, memo }: sendMsgCreateClientParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgCreateClient: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgCreateClient({ value: MsgCreateClient.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgCreateClient: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgUpgradeClient({ value, fee, memo }: sendMsgUpgradeClientParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgUpgradeClient: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgUpgradeClient({ value: MsgUpgradeClient.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgUpgradeClient: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgUpgradeClientResponse({
      value,
      fee,
      memo,
    }: sendMsgUpgradeClientResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgUpgradeClientResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgUpgradeClientResponse({ value: MsgUpgradeClientResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgUpgradeClientResponse: Could not broadcast Tx: ' + e.message);
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

    async sendQueryClientStateRequest({
      value,
      fee,
      memo,
    }: sendQueryClientStateRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryClientStateRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryClientStateRequest({ value: QueryClientStateRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryClientStateRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryConsensusStateRequest({
      value,
      fee,
      memo,
    }: sendQueryConsensusStateRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryConsensusStateRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryConsensusStateRequest({ value: QueryConsensusStateRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryConsensusStateRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryConsensusStateHeightsResponse({
      value,
      fee,
      memo,
    }: sendQueryConsensusStateHeightsResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryConsensusStateHeightsResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryConsensusStateHeightsResponse({
          value: QueryConsensusStateHeightsResponse.fromPartial(value),
        });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryConsensusStateHeightsResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryClientParamsResponse({
      value,
      fee,
      memo,
    }: sendQueryClientParamsResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryClientParamsResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryClientParamsResponse({ value: QueryClientParamsResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryClientParamsResponse: Could not broadcast Tx: ' + e.message);
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

    async sendIdentifiedGenesisMetadata({
      value,
      fee,
      memo,
    }: sendIdentifiedGenesisMetadataParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendIdentifiedGenesisMetadata: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.identifiedGenesisMetadata({ value: IdentifiedGenesisMetadata.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendIdentifiedGenesisMetadata: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgUpdateClient({ value, fee, memo }: sendMsgUpdateClientParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgUpdateClient: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgUpdateClient({ value: MsgUpdateClient.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgUpdateClient: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgRecoverClient({ value, fee, memo }: sendMsgRecoverClientParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgRecoverClient: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgRecoverClient({ value: MsgRecoverClient.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgRecoverClient: Could not broadcast Tx: ' + e.message);
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

    async sendQueryClientStatesRequest({
      value,
      fee,
      memo,
    }: sendQueryClientStatesRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryClientStatesRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryClientStatesRequest({ value: QueryClientStatesRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryClientStatesRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryConsensusStateResponse({
      value,
      fee,
      memo,
    }: sendQueryConsensusStateResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryConsensusStateResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryConsensusStateResponse({ value: QueryConsensusStateResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryConsensusStateResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryUpgradedClientStateRequest({
      value,
      fee,
      memo,
    }: sendQueryUpgradedClientStateRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryUpgradedClientStateRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryUpgradedClientStateRequest({ value: QueryUpgradedClientStateRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryUpgradedClientStateRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryConsensusStateHeightsRequest({
      value,
      fee,
      memo,
    }: sendQueryConsensusStateHeightsRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryConsensusStateHeightsRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryConsensusStateHeightsRequest({
          value: QueryConsensusStateHeightsRequest.fromPartial(value),
        });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryConsensusStateHeightsRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryClientParamsRequest({
      value,
      fee,
      memo,
    }: sendQueryClientParamsRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryClientParamsRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryClientParamsRequest({ value: QueryClientParamsRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryClientParamsRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryUpgradedConsensusStateResponse({
      value,
      fee,
      memo,
    }: sendQueryUpgradedConsensusStateResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryUpgradedConsensusStateResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryUpgradedConsensusStateResponse({
          value: QueryUpgradedConsensusStateResponse.fromPartial(value),
        });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryUpgradedConsensusStateResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendConsensusStateWithHeight({
      value,
      fee,
      memo,
    }: sendConsensusStateWithHeightParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendConsensusStateWithHeight: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.consensusStateWithHeight({ value: ConsensusStateWithHeight.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendConsensusStateWithHeight: Could not broadcast Tx: ' + e.message);
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

    async sendMsgSubmitMisbehaviourResponse({
      value,
      fee,
      memo,
    }: sendMsgSubmitMisbehaviourResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgSubmitMisbehaviourResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgSubmitMisbehaviourResponse({ value: MsgSubmitMisbehaviourResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgSubmitMisbehaviourResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgRecoverClientResponse({
      value,
      fee,
      memo,
    }: sendMsgRecoverClientResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgRecoverClientResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgRecoverClientResponse({ value: MsgRecoverClientResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgRecoverClientResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendUpgradeProposal({ value, fee, memo }: sendUpgradeProposalParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendUpgradeProposal: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.upgradeProposal({ value: UpgradeProposal.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendUpgradeProposal: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgIBCSoftwareUpgradeResponse({
      value,
      fee,
      memo,
    }: sendMsgIBCSoftwareUpgradeResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgIBCSoftwareUpgradeResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgIbcsoftwareUpgradeResponse({ value: MsgIBCSoftwareUpgradeResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgIBCSoftwareUpgradeResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendClientConsensusStates({ value, fee, memo }: sendClientConsensusStatesParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendClientConsensusStates: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.clientConsensusStates({ value: ClientConsensusStates.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendClientConsensusStates: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendGenesisMetadata({ value, fee, memo }: sendGenesisMetadataParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendGenesisMetadata: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.genesisMetadata({ value: GenesisMetadata.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendGenesisMetadata: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryConsensusStatesResponse({
      value,
      fee,
      memo,
    }: sendQueryConsensusStatesResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryConsensusStatesResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryConsensusStatesResponse({ value: QueryConsensusStatesResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryConsensusStatesResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendIdentifiedClientState({ value, fee, memo }: sendIdentifiedClientStateParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendIdentifiedClientState: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.identifiedClientState({ value: IdentifiedClientState.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendIdentifiedClientState: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgCreateClientResponse({
      value,
      fee,
      memo,
    }: sendMsgCreateClientResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgCreateClientResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgCreateClientResponse({ value: MsgCreateClientResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgCreateClientResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendClientUpdateProposal({ value, fee, memo }: sendClientUpdateProposalParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendClientUpdateProposal: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.clientUpdateProposal({ value: ClientUpdateProposal.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendClientUpdateProposal: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendHeight({ value, fee, memo }: sendHeightParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendHeight: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.height({ value: Height.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendHeight: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryUpgradedConsensusStateRequest({
      value,
      fee,
      memo,
    }: sendQueryUpgradedConsensusStateRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryUpgradedConsensusStateRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryUpgradedConsensusStateRequest({
          value: QueryUpgradedConsensusStateRequest.fromPartial(value),
        });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryUpgradedConsensusStateRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgUpdateClientResponse({
      value,
      fee,
      memo,
    }: sendMsgUpdateClientResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgUpdateClientResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgUpdateClientResponse({ value: MsgUpdateClientResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgUpdateClientResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgSubmitMisbehaviour({ value, fee, memo }: sendMsgSubmitMisbehaviourParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgSubmitMisbehaviour: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgSubmitMisbehaviour({ value: MsgSubmitMisbehaviour.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgSubmitMisbehaviour: Could not broadcast Tx: ' + e.message);
      }
    },

    queryClientStateResponse({ value }: queryClientStateResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.client.v1.QueryClientStateResponse',
          value: QueryClientStateResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryClientStateResponse: Could not create message: ' + e.message);
      }
    },

    queryClientStatesResponse({ value }: queryClientStatesResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.client.v1.QueryClientStatesResponse',
          value: QueryClientStatesResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryClientStatesResponse: Could not create message: ' + e.message);
      }
    },

    queryConsensusStatesRequest({ value }: queryConsensusStatesRequestParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.client.v1.QueryConsensusStatesRequest',
          value: QueryConsensusStatesRequest.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryConsensusStatesRequest: Could not create message: ' + e.message);
      }
    },

    queryClientStatusRequest({ value }: queryClientStatusRequestParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.client.v1.QueryClientStatusRequest',
          value: QueryClientStatusRequest.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryClientStatusRequest: Could not create message: ' + e.message);
      }
    },

    msgIbcsoftwareUpgrade({ value }: msgIbcsoftwareUpgradeParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.client.v1.MsgIBCSoftwareUpgrade',
          value: MsgIBCSoftwareUpgrade.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgIBCSoftwareUpgrade: Could not create message: ' + e.message);
      }
    },

    queryClientStatusResponse({ value }: queryClientStatusResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.client.v1.QueryClientStatusResponse',
          value: QueryClientStatusResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryClientStatusResponse: Could not create message: ' + e.message);
      }
    },

    queryUpgradedClientStateResponse({ value }: queryUpgradedClientStateResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.client.v1.QueryUpgradedClientStateResponse',
          value: QueryUpgradedClientStateResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryUpgradedClientStateResponse: Could not create message: ' + e.message);
      }
    },

    msgCreateClient({ value }: msgCreateClientParams): EncodeObject {
      try {
        return { typeUrl: '/ibc.core.client.v1.MsgCreateClient', value: MsgCreateClient.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:MsgCreateClient: Could not create message: ' + e.message);
      }
    },

    msgUpgradeClient({ value }: msgUpgradeClientParams): EncodeObject {
      try {
        return { typeUrl: '/ibc.core.client.v1.MsgUpgradeClient', value: MsgUpgradeClient.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:MsgUpgradeClient: Could not create message: ' + e.message);
      }
    },

    msgUpgradeClientResponse({ value }: msgUpgradeClientResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.client.v1.MsgUpgradeClientResponse',
          value: MsgUpgradeClientResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgUpgradeClientResponse: Could not create message: ' + e.message);
      }
    },

    msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject {
      try {
        return { typeUrl: '/ibc.core.client.v1.MsgUpdateParams', value: MsgUpdateParams.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:MsgUpdateParams: Could not create message: ' + e.message);
      }
    },

    queryClientStateRequest({ value }: queryClientStateRequestParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.client.v1.QueryClientStateRequest',
          value: QueryClientStateRequest.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryClientStateRequest: Could not create message: ' + e.message);
      }
    },

    queryConsensusStateRequest({ value }: queryConsensusStateRequestParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.client.v1.QueryConsensusStateRequest',
          value: QueryConsensusStateRequest.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryConsensusStateRequest: Could not create message: ' + e.message);
      }
    },

    queryConsensusStateHeightsResponse({ value }: queryConsensusStateHeightsResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.client.v1.QueryConsensusStateHeightsResponse',
          value: QueryConsensusStateHeightsResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryConsensusStateHeightsResponse: Could not create message: ' + e.message);
      }
    },

    queryClientParamsResponse({ value }: queryClientParamsResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.client.v1.QueryClientParamsResponse',
          value: QueryClientParamsResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryClientParamsResponse: Could not create message: ' + e.message);
      }
    },

    params({ value }: paramsParams): EncodeObject {
      try {
        return { typeUrl: '/ibc.core.client.v1.Params', value: Params.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:Params: Could not create message: ' + e.message);
      }
    },

    identifiedGenesisMetadata({ value }: identifiedGenesisMetadataParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.client.v1.IdentifiedGenesisMetadata',
          value: IdentifiedGenesisMetadata.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:IdentifiedGenesisMetadata: Could not create message: ' + e.message);
      }
    },

    msgUpdateClient({ value }: msgUpdateClientParams): EncodeObject {
      try {
        return { typeUrl: '/ibc.core.client.v1.MsgUpdateClient', value: MsgUpdateClient.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:MsgUpdateClient: Could not create message: ' + e.message);
      }
    },

    msgRecoverClient({ value }: msgRecoverClientParams): EncodeObject {
      try {
        return { typeUrl: '/ibc.core.client.v1.MsgRecoverClient', value: MsgRecoverClient.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:MsgRecoverClient: Could not create message: ' + e.message);
      }
    },

    genesisState({ value }: genesisStateParams): EncodeObject {
      try {
        return { typeUrl: '/ibc.core.client.v1.GenesisState', value: GenesisState.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:GenesisState: Could not create message: ' + e.message);
      }
    },

    queryClientStatesRequest({ value }: queryClientStatesRequestParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.client.v1.QueryClientStatesRequest',
          value: QueryClientStatesRequest.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryClientStatesRequest: Could not create message: ' + e.message);
      }
    },

    queryConsensusStateResponse({ value }: queryConsensusStateResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.client.v1.QueryConsensusStateResponse',
          value: QueryConsensusStateResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryConsensusStateResponse: Could not create message: ' + e.message);
      }
    },

    queryUpgradedClientStateRequest({ value }: queryUpgradedClientStateRequestParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.client.v1.QueryUpgradedClientStateRequest',
          value: QueryUpgradedClientStateRequest.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryUpgradedClientStateRequest: Could not create message: ' + e.message);
      }
    },

    queryConsensusStateHeightsRequest({ value }: queryConsensusStateHeightsRequestParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.client.v1.QueryConsensusStateHeightsRequest',
          value: QueryConsensusStateHeightsRequest.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryConsensusStateHeightsRequest: Could not create message: ' + e.message);
      }
    },

    queryClientParamsRequest({ value }: queryClientParamsRequestParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.client.v1.QueryClientParamsRequest',
          value: QueryClientParamsRequest.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryClientParamsRequest: Could not create message: ' + e.message);
      }
    },

    queryUpgradedConsensusStateResponse({ value }: queryUpgradedConsensusStateResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.client.v1.QueryUpgradedConsensusStateResponse',
          value: QueryUpgradedConsensusStateResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryUpgradedConsensusStateResponse: Could not create message: ' + e.message);
      }
    },

    consensusStateWithHeight({ value }: consensusStateWithHeightParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.client.v1.ConsensusStateWithHeight',
          value: ConsensusStateWithHeight.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:ConsensusStateWithHeight: Could not create message: ' + e.message);
      }
    },

    msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.client.v1.MsgUpdateParamsResponse',
          value: MsgUpdateParamsResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgUpdateParamsResponse: Could not create message: ' + e.message);
      }
    },

    msgSubmitMisbehaviourResponse({ value }: msgSubmitMisbehaviourResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.client.v1.MsgSubmitMisbehaviourResponse',
          value: MsgSubmitMisbehaviourResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgSubmitMisbehaviourResponse: Could not create message: ' + e.message);
      }
    },

    msgRecoverClientResponse({ value }: msgRecoverClientResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.client.v1.MsgRecoverClientResponse',
          value: MsgRecoverClientResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgRecoverClientResponse: Could not create message: ' + e.message);
      }
    },

    upgradeProposal({ value }: upgradeProposalParams): EncodeObject {
      try {
        return { typeUrl: '/ibc.core.client.v1.UpgradeProposal', value: UpgradeProposal.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:UpgradeProposal: Could not create message: ' + e.message);
      }
    },

    msgIbcsoftwareUpgradeResponse({ value }: msgIbcsoftwareUpgradeResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.client.v1.MsgIBCSoftwareUpgradeResponse',
          value: MsgIBCSoftwareUpgradeResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgIBCSoftwareUpgradeResponse: Could not create message: ' + e.message);
      }
    },

    clientConsensusStates({ value }: clientConsensusStatesParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.client.v1.ClientConsensusStates',
          value: ClientConsensusStates.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:ClientConsensusStates: Could not create message: ' + e.message);
      }
    },

    genesisMetadata({ value }: genesisMetadataParams): EncodeObject {
      try {
        return { typeUrl: '/ibc.core.client.v1.GenesisMetadata', value: GenesisMetadata.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:GenesisMetadata: Could not create message: ' + e.message);
      }
    },

    queryConsensusStatesResponse({ value }: queryConsensusStatesResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.client.v1.QueryConsensusStatesResponse',
          value: QueryConsensusStatesResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryConsensusStatesResponse: Could not create message: ' + e.message);
      }
    },

    identifiedClientState({ value }: identifiedClientStateParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.client.v1.IdentifiedClientState',
          value: IdentifiedClientState.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:IdentifiedClientState: Could not create message: ' + e.message);
      }
    },

    msgCreateClientResponse({ value }: msgCreateClientResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.client.v1.MsgCreateClientResponse',
          value: MsgCreateClientResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgCreateClientResponse: Could not create message: ' + e.message);
      }
    },

    clientUpdateProposal({ value }: clientUpdateProposalParams): EncodeObject {
      try {
        return { typeUrl: '/ibc.core.client.v1.ClientUpdateProposal', value: ClientUpdateProposal.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:ClientUpdateProposal: Could not create message: ' + e.message);
      }
    },

    height({ value }: heightParams): EncodeObject {
      try {
        return { typeUrl: '/ibc.core.client.v1.Height', value: Height.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:Height: Could not create message: ' + e.message);
      }
    },

    queryUpgradedConsensusStateRequest({ value }: queryUpgradedConsensusStateRequestParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.client.v1.QueryUpgradedConsensusStateRequest',
          value: QueryUpgradedConsensusStateRequest.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryUpgradedConsensusStateRequest: Could not create message: ' + e.message);
      }
    },

    msgUpdateClientResponse({ value }: msgUpdateClientResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.client.v1.MsgUpdateClientResponse',
          value: MsgUpdateClientResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgUpdateClientResponse: Could not create message: ' + e.message);
      }
    },

    msgSubmitMisbehaviour({ value }: msgSubmitMisbehaviourParams): EncodeObject {
      try {
        return {
          typeUrl: '/ibc.core.client.v1.MsgSubmitMisbehaviour',
          value: MsgSubmitMisbehaviour.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgSubmitMisbehaviour: Could not create message: ' + e.message);
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
      IbcCoreClientV1: new SDKModule(test),
    },
    registry: msgTypes,
  };
};
export default IgntModule;
