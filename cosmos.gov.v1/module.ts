import { SigningStargateClient, DeliverTxResponse, StdFee } from '@cosmjs/stargate';
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from '@cosmjs/proto-signing';
import { msgTypes } from './registry';
import { IgniteClient } from '../client';
import { MissingWalletError } from '../helpers';
import { Api } from './rest';
import { MsgVoteEncryptedResponse } from './types/cosmos/gov/v1/tx';
import { MsgCancelProposalResponse } from './types/cosmos/gov/v1/tx';
import { TallyParams } from './types/cosmos/gov/v1/gov';
import { MsgVoteWeightedResponse } from './types/cosmos/gov/v1/tx';
import { MsgVoteResponse } from './types/cosmos/gov/v1/tx';
import { DepositParams } from './types/cosmos/gov/v1/gov';
import { TrustedCounterParty } from './types/cosmos/gov/v1/gov';
import { GenesisState } from './types/cosmos/gov/v1/genesis';
import { MsgVote } from './types/cosmos/gov/v1/tx';
import { QueryConstitutionResponse } from './types/cosmos/gov/v1/query';
import { QueryDepositRequest } from './types/cosmos/gov/v1/query';
import { Vote } from './types/cosmos/gov/v1/gov';
import { DecryptedVoteOption } from './types/cosmos/gov/v1/gov';
import { MsgSubmitProposalResponse } from './types/cosmos/gov/v1/tx';
import { MsgDeposit } from './types/cosmos/gov/v1/tx';
import { MsgUpdateParams } from './types/cosmos/gov/v1/tx';
import { TallyResult } from './types/cosmos/gov/v1/gov';
import { QueryConstitutionRequest } from './types/cosmos/gov/v1/query';
import { MsgExecLegacyContentResponse } from './types/cosmos/gov/v1/tx';
import { MsgCancelProposal } from './types/cosmos/gov/v1/tx';
import { QueryVotesRequest } from './types/cosmos/gov/v1/query';
import { QueryDepositsRequest } from './types/cosmos/gov/v1/query';
import { QueryTallyResultRequest } from './types/cosmos/gov/v1/query';
import { Proposal } from './types/cosmos/gov/v1/gov';
import { Params } from './types/cosmos/gov/v1/gov';
import { QueryProposalRequest } from './types/cosmos/gov/v1/query';
import { QueryProposalResponse } from './types/cosmos/gov/v1/query';
import { QueryTallyResultResponse } from './types/cosmos/gov/v1/query';
import { MsgExecLegacyContent } from './types/cosmos/gov/v1/tx';
import { MsgDepositResponse } from './types/cosmos/gov/v1/tx';
import { MsgVoteWeighted } from './types/cosmos/gov/v1/tx';
import { Deposit } from './types/cosmos/gov/v1/gov';
import { QueryVoteRequest } from './types/cosmos/gov/v1/query';
import { QueryVoteResponse } from './types/cosmos/gov/v1/query';
import { QueryProposalsResponse } from './types/cosmos/gov/v1/query';
import { QueryParamsResponse } from './types/cosmos/gov/v1/query';
import { VotingParams } from './types/cosmos/gov/v1/gov';
import { MsgSubmitProposal } from './types/cosmos/gov/v1/tx';
import { WeightedVoteOption } from './types/cosmos/gov/v1/gov';
import { QueryDepositsResponse } from './types/cosmos/gov/v1/query';
import { MsgVoteEncrypted } from './types/cosmos/gov/v1/tx';
import { MsgUpdateParamsResponse } from './types/cosmos/gov/v1/tx';
import { QueryParamsRequest } from './types/cosmos/gov/v1/query';
import { QueryDepositResponse } from './types/cosmos/gov/v1/query';
import { QueryProposalsRequest } from './types/cosmos/gov/v1/query';
import { QueryVotesResponse } from './types/cosmos/gov/v1/query';

export {
  MsgVoteEncryptedResponse,
  MsgCancelProposalResponse,
  TallyParams,
  MsgVoteWeightedResponse,
  MsgVoteResponse,
  DepositParams,
  TrustedCounterParty,
  GenesisState,
  MsgVote,
  QueryConstitutionResponse,
  QueryDepositRequest,
  Vote,
  DecryptedVoteOption,
  MsgSubmitProposalResponse,
  MsgDeposit,
  MsgUpdateParams,
  TallyResult,
  QueryConstitutionRequest,
  MsgExecLegacyContentResponse,
  MsgCancelProposal,
  QueryVotesRequest,
  QueryDepositsRequest,
  QueryTallyResultRequest,
  Proposal,
  Params,
  QueryProposalRequest,
  QueryProposalResponse,
  QueryTallyResultResponse,
  MsgExecLegacyContent,
  MsgDepositResponse,
  MsgVoteWeighted,
  Deposit,
  QueryVoteRequest,
  QueryVoteResponse,
  QueryProposalsResponse,
  QueryParamsResponse,
  VotingParams,
  MsgSubmitProposal,
  WeightedVoteOption,
  QueryDepositsResponse,
  MsgVoteEncrypted,
  MsgUpdateParamsResponse,
  QueryParamsRequest,
  QueryDepositResponse,
  QueryProposalsRequest,
  QueryVotesResponse,
};

type sendMsgVoteEncryptedResponseParams = {
  value: MsgVoteEncryptedResponse;
  fee?: StdFee;
  memo?: string;
};

type sendMsgCancelProposalResponseParams = {
  value: MsgCancelProposalResponse;
  fee?: StdFee;
  memo?: string;
};

type sendTallyParamsParams = {
  value: TallyParams;
  fee?: StdFee;
  memo?: string;
};

type sendMsgVoteWeightedResponseParams = {
  value: MsgVoteWeightedResponse;
  fee?: StdFee;
  memo?: string;
};

type sendMsgVoteResponseParams = {
  value: MsgVoteResponse;
  fee?: StdFee;
  memo?: string;
};

type sendDepositParamsParams = {
  value: DepositParams;
  fee?: StdFee;
  memo?: string;
};

type sendTrustedCounterPartyParams = {
  value: TrustedCounterParty;
  fee?: StdFee;
  memo?: string;
};

type sendGenesisStateParams = {
  value: GenesisState;
  fee?: StdFee;
  memo?: string;
};

type sendMsgVoteParams = {
  value: MsgVote;
  fee?: StdFee;
  memo?: string;
};

type sendQueryConstitutionResponseParams = {
  value: QueryConstitutionResponse;
  fee?: StdFee;
  memo?: string;
};

type sendQueryDepositRequestParams = {
  value: QueryDepositRequest;
  fee?: StdFee;
  memo?: string;
};

type sendVoteParams = {
  value: Vote;
  fee?: StdFee;
  memo?: string;
};

type sendDecryptedVoteOptionParams = {
  value: DecryptedVoteOption;
  fee?: StdFee;
  memo?: string;
};

type sendMsgSubmitProposalResponseParams = {
  value: MsgSubmitProposalResponse;
  fee?: StdFee;
  memo?: string;
};

type sendMsgDepositParams = {
  value: MsgDeposit;
  fee?: StdFee;
  memo?: string;
};

type sendMsgUpdateParamsParams = {
  value: MsgUpdateParams;
  fee?: StdFee;
  memo?: string;
};

type sendTallyResultParams = {
  value: TallyResult;
  fee?: StdFee;
  memo?: string;
};

type sendQueryConstitutionRequestParams = {
  value: QueryConstitutionRequest;
  fee?: StdFee;
  memo?: string;
};

type sendMsgExecLegacyContentResponseParams = {
  value: MsgExecLegacyContentResponse;
  fee?: StdFee;
  memo?: string;
};

type sendMsgCancelProposalParams = {
  value: MsgCancelProposal;
  fee?: StdFee;
  memo?: string;
};

type sendQueryVotesRequestParams = {
  value: QueryVotesRequest;
  fee?: StdFee;
  memo?: string;
};

type sendQueryDepositsRequestParams = {
  value: QueryDepositsRequest;
  fee?: StdFee;
  memo?: string;
};

type sendQueryTallyResultRequestParams = {
  value: QueryTallyResultRequest;
  fee?: StdFee;
  memo?: string;
};

type sendProposalParams = {
  value: Proposal;
  fee?: StdFee;
  memo?: string;
};

type sendParamsParams = {
  value: Params;
  fee?: StdFee;
  memo?: string;
};

type sendQueryProposalRequestParams = {
  value: QueryProposalRequest;
  fee?: StdFee;
  memo?: string;
};

type sendQueryProposalResponseParams = {
  value: QueryProposalResponse;
  fee?: StdFee;
  memo?: string;
};

type sendQueryTallyResultResponseParams = {
  value: QueryTallyResultResponse;
  fee?: StdFee;
  memo?: string;
};

type sendMsgExecLegacyContentParams = {
  value: MsgExecLegacyContent;
  fee?: StdFee;
  memo?: string;
};

type sendMsgDepositResponseParams = {
  value: MsgDepositResponse;
  fee?: StdFee;
  memo?: string;
};

type sendMsgVoteWeightedParams = {
  value: MsgVoteWeighted;
  fee?: StdFee;
  memo?: string;
};

type sendDepositParams = {
  value: Deposit;
  fee?: StdFee;
  memo?: string;
};

type sendQueryVoteRequestParams = {
  value: QueryVoteRequest;
  fee?: StdFee;
  memo?: string;
};

type sendQueryVoteResponseParams = {
  value: QueryVoteResponse;
  fee?: StdFee;
  memo?: string;
};

type sendQueryProposalsResponseParams = {
  value: QueryProposalsResponse;
  fee?: StdFee;
  memo?: string;
};

type sendQueryParamsResponseParams = {
  value: QueryParamsResponse;
  fee?: StdFee;
  memo?: string;
};

type sendVotingParamsParams = {
  value: VotingParams;
  fee?: StdFee;
  memo?: string;
};

type sendMsgSubmitProposalParams = {
  value: MsgSubmitProposal;
  fee?: StdFee;
  memo?: string;
};

type sendWeightedVoteOptionParams = {
  value: WeightedVoteOption;
  fee?: StdFee;
  memo?: string;
};

type sendQueryDepositsResponseParams = {
  value: QueryDepositsResponse;
  fee?: StdFee;
  memo?: string;
};

type sendMsgVoteEncryptedParams = {
  value: MsgVoteEncrypted;
  fee?: StdFee;
  memo?: string;
};

type sendMsgUpdateParamsResponseParams = {
  value: MsgUpdateParamsResponse;
  fee?: StdFee;
  memo?: string;
};

type sendQueryParamsRequestParams = {
  value: QueryParamsRequest;
  fee?: StdFee;
  memo?: string;
};

type sendQueryDepositResponseParams = {
  value: QueryDepositResponse;
  fee?: StdFee;
  memo?: string;
};

type sendQueryProposalsRequestParams = {
  value: QueryProposalsRequest;
  fee?: StdFee;
  memo?: string;
};

type sendQueryVotesResponseParams = {
  value: QueryVotesResponse;
  fee?: StdFee;
  memo?: string;
};

type msgVoteEncryptedResponseParams = {
  value: MsgVoteEncryptedResponse;
};

type msgCancelProposalResponseParams = {
  value: MsgCancelProposalResponse;
};

type tallyParamsParams = {
  value: TallyParams;
};

type msgVoteWeightedResponseParams = {
  value: MsgVoteWeightedResponse;
};

type msgVoteResponseParams = {
  value: MsgVoteResponse;
};

type depositParamsParams = {
  value: DepositParams;
};

type trustedCounterPartyParams = {
  value: TrustedCounterParty;
};

type genesisStateParams = {
  value: GenesisState;
};

type msgVoteParams = {
  value: MsgVote;
};

type queryConstitutionResponseParams = {
  value: QueryConstitutionResponse;
};

type queryDepositRequestParams = {
  value: QueryDepositRequest;
};

type voteParams = {
  value: Vote;
};

type decryptedVoteOptionParams = {
  value: DecryptedVoteOption;
};

type msgSubmitProposalResponseParams = {
  value: MsgSubmitProposalResponse;
};

type msgDepositParams = {
  value: MsgDeposit;
};

type msgUpdateParamsParams = {
  value: MsgUpdateParams;
};

type tallyResultParams = {
  value: TallyResult;
};

type queryConstitutionRequestParams = {
  value: QueryConstitutionRequest;
};

type msgExecLegacyContentResponseParams = {
  value: MsgExecLegacyContentResponse;
};

type msgCancelProposalParams = {
  value: MsgCancelProposal;
};

type queryVotesRequestParams = {
  value: QueryVotesRequest;
};

type queryDepositsRequestParams = {
  value: QueryDepositsRequest;
};

type queryTallyResultRequestParams = {
  value: QueryTallyResultRequest;
};

type proposalParams = {
  value: Proposal;
};

type paramsParams = {
  value: Params;
};

type queryProposalRequestParams = {
  value: QueryProposalRequest;
};

type queryProposalResponseParams = {
  value: QueryProposalResponse;
};

type queryTallyResultResponseParams = {
  value: QueryTallyResultResponse;
};

type msgExecLegacyContentParams = {
  value: MsgExecLegacyContent;
};

type msgDepositResponseParams = {
  value: MsgDepositResponse;
};

type msgVoteWeightedParams = {
  value: MsgVoteWeighted;
};

type depositParams = {
  value: Deposit;
};

type queryVoteRequestParams = {
  value: QueryVoteRequest;
};

type queryVoteResponseParams = {
  value: QueryVoteResponse;
};

type queryProposalsResponseParams = {
  value: QueryProposalsResponse;
};

type queryParamsResponseParams = {
  value: QueryParamsResponse;
};

type votingParamsParams = {
  value: VotingParams;
};

type msgSubmitProposalParams = {
  value: MsgSubmitProposal;
};

type weightedVoteOptionParams = {
  value: WeightedVoteOption;
};

type queryDepositsResponseParams = {
  value: QueryDepositsResponse;
};

type msgVoteEncryptedParams = {
  value: MsgVoteEncrypted;
};

type msgUpdateParamsResponseParams = {
  value: MsgUpdateParamsResponse;
};

type queryParamsRequestParams = {
  value: QueryParamsRequest;
};

type queryDepositResponseParams = {
  value: QueryDepositResponse;
};

type queryProposalsRequestParams = {
  value: QueryProposalsRequest;
};

type queryVotesResponseParams = {
  value: QueryVotesResponse;
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
    async sendMsgVoteEncryptedResponse({
      value,
      fee,
      memo,
    }: sendMsgVoteEncryptedResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgVoteEncryptedResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgVoteEncryptedResponse({ value: MsgVoteEncryptedResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgVoteEncryptedResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgCancelProposalResponse({
      value,
      fee,
      memo,
    }: sendMsgCancelProposalResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgCancelProposalResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgCancelProposalResponse({ value: MsgCancelProposalResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgCancelProposalResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendTallyParams({ value, fee, memo }: sendTallyParamsParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendTallyParams: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.tallyParams({ value: TallyParams.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendTallyParams: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgVoteWeightedResponse({
      value,
      fee,
      memo,
    }: sendMsgVoteWeightedResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgVoteWeightedResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgVoteWeightedResponse({ value: MsgVoteWeightedResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgVoteWeightedResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgVoteResponse({ value, fee, memo }: sendMsgVoteResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgVoteResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgVoteResponse({ value: MsgVoteResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgVoteResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendDepositParams({ value, fee, memo }: sendDepositParamsParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendDepositParams: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.depositParams({ value: DepositParams.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendDepositParams: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendTrustedCounterParty({ value, fee, memo }: sendTrustedCounterPartyParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendTrustedCounterParty: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.trustedCounterParty({ value: TrustedCounterParty.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendTrustedCounterParty: Could not broadcast Tx: ' + e.message);
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

    async sendMsgVote({ value, fee, memo }: sendMsgVoteParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgVote: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgVote({ value: MsgVote.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgVote: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryConstitutionResponse({
      value,
      fee,
      memo,
    }: sendQueryConstitutionResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryConstitutionResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryConstitutionResponse({ value: QueryConstitutionResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryConstitutionResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryDepositRequest({ value, fee, memo }: sendQueryDepositRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryDepositRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryDepositRequest({ value: QueryDepositRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryDepositRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendVote({ value, fee, memo }: sendVoteParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendVote: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.vote({ value: Vote.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendVote: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendDecryptedVoteOption({ value, fee, memo }: sendDecryptedVoteOptionParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendDecryptedVoteOption: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.decryptedVoteOption({ value: DecryptedVoteOption.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendDecryptedVoteOption: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgSubmitProposalResponse({
      value,
      fee,
      memo,
    }: sendMsgSubmitProposalResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgSubmitProposalResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgSubmitProposalResponse({ value: MsgSubmitProposalResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgSubmitProposalResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgDeposit({ value, fee, memo }: sendMsgDepositParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgDeposit: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgDeposit({ value: MsgDeposit.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgDeposit: Could not broadcast Tx: ' + e.message);
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

    async sendTallyResult({ value, fee, memo }: sendTallyResultParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendTallyResult: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.tallyResult({ value: TallyResult.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendTallyResult: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryConstitutionRequest({
      value,
      fee,
      memo,
    }: sendQueryConstitutionRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryConstitutionRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryConstitutionRequest({ value: QueryConstitutionRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryConstitutionRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgExecLegacyContentResponse({
      value,
      fee,
      memo,
    }: sendMsgExecLegacyContentResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgExecLegacyContentResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgExecLegacyContentResponse({ value: MsgExecLegacyContentResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgExecLegacyContentResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgCancelProposal({ value, fee, memo }: sendMsgCancelProposalParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgCancelProposal: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgCancelProposal({ value: MsgCancelProposal.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgCancelProposal: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryVotesRequest({ value, fee, memo }: sendQueryVotesRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryVotesRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryVotesRequest({ value: QueryVotesRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryVotesRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryDepositsRequest({ value, fee, memo }: sendQueryDepositsRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryDepositsRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryDepositsRequest({ value: QueryDepositsRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryDepositsRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryTallyResultRequest({
      value,
      fee,
      memo,
    }: sendQueryTallyResultRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryTallyResultRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryTallyResultRequest({ value: QueryTallyResultRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryTallyResultRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendProposal({ value, fee, memo }: sendProposalParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendProposal: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.proposal({ value: Proposal.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendProposal: Could not broadcast Tx: ' + e.message);
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

    async sendQueryProposalRequest({ value, fee, memo }: sendQueryProposalRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryProposalRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryProposalRequest({ value: QueryProposalRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryProposalRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryProposalResponse({ value, fee, memo }: sendQueryProposalResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryProposalResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryProposalResponse({ value: QueryProposalResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryProposalResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryTallyResultResponse({
      value,
      fee,
      memo,
    }: sendQueryTallyResultResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryTallyResultResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryTallyResultResponse({ value: QueryTallyResultResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryTallyResultResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgExecLegacyContent({ value, fee, memo }: sendMsgExecLegacyContentParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgExecLegacyContent: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgExecLegacyContent({ value: MsgExecLegacyContent.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgExecLegacyContent: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgDepositResponse({ value, fee, memo }: sendMsgDepositResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgDepositResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgDepositResponse({ value: MsgDepositResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgDepositResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgVoteWeighted({ value, fee, memo }: sendMsgVoteWeightedParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgVoteWeighted: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgVoteWeighted({ value: MsgVoteWeighted.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgVoteWeighted: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendDeposit({ value, fee, memo }: sendDepositParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendDeposit: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.deposit({ value: Deposit.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendDeposit: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryVoteRequest({ value, fee, memo }: sendQueryVoteRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryVoteRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryVoteRequest({ value: QueryVoteRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryVoteRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryVoteResponse({ value, fee, memo }: sendQueryVoteResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryVoteResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryVoteResponse({ value: QueryVoteResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryVoteResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryProposalsResponse({
      value,
      fee,
      memo,
    }: sendQueryProposalsResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryProposalsResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryProposalsResponse({ value: QueryProposalsResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryProposalsResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryParamsResponse({ value, fee, memo }: sendQueryParamsResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryParamsResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryParamsResponse({ value: QueryParamsResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryParamsResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendVotingParams({ value, fee, memo }: sendVotingParamsParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendVotingParams: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.votingParams({ value: VotingParams.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendVotingParams: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgSubmitProposal({ value, fee, memo }: sendMsgSubmitProposalParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgSubmitProposal: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgSubmitProposal({ value: MsgSubmitProposal.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgSubmitProposal: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendWeightedVoteOption({ value, fee, memo }: sendWeightedVoteOptionParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendWeightedVoteOption: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.weightedVoteOption({ value: WeightedVoteOption.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendWeightedVoteOption: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryDepositsResponse({ value, fee, memo }: sendQueryDepositsResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryDepositsResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryDepositsResponse({ value: QueryDepositsResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryDepositsResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgVoteEncrypted({ value, fee, memo }: sendMsgVoteEncryptedParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgVoteEncrypted: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgVoteEncrypted({ value: MsgVoteEncrypted.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgVoteEncrypted: Could not broadcast Tx: ' + e.message);
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

    async sendQueryParamsRequest({ value, fee, memo }: sendQueryParamsRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryParamsRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryParamsRequest({ value: QueryParamsRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryParamsRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryDepositResponse({ value, fee, memo }: sendQueryDepositResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryDepositResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryDepositResponse({ value: QueryDepositResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryDepositResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryProposalsRequest({ value, fee, memo }: sendQueryProposalsRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryProposalsRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryProposalsRequest({ value: QueryProposalsRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryProposalsRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryVotesResponse({ value, fee, memo }: sendQueryVotesResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryVotesResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryVotesResponse({ value: QueryVotesResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryVotesResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    msgVoteEncryptedResponse({ value }: msgVoteEncryptedResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.gov.v1.MsgVoteEncryptedResponse',
          value: MsgVoteEncryptedResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgVoteEncryptedResponse: Could not create message: ' + e.message);
      }
    },

    msgCancelProposalResponse({ value }: msgCancelProposalResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.gov.v1.MsgCancelProposalResponse',
          value: MsgCancelProposalResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgCancelProposalResponse: Could not create message: ' + e.message);
      }
    },

    tallyParams({ value }: tallyParamsParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.gov.v1.TallyParams', value: TallyParams.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:TallyParams: Could not create message: ' + e.message);
      }
    },

    msgVoteWeightedResponse({ value }: msgVoteWeightedResponseParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.gov.v1.MsgVoteWeightedResponse', value: MsgVoteWeightedResponse.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:MsgVoteWeightedResponse: Could not create message: ' + e.message);
      }
    },

    msgVoteResponse({ value }: msgVoteResponseParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.gov.v1.MsgVoteResponse', value: MsgVoteResponse.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:MsgVoteResponse: Could not create message: ' + e.message);
      }
    },

    depositParams({ value }: depositParamsParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.gov.v1.DepositParams', value: DepositParams.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:DepositParams: Could not create message: ' + e.message);
      }
    },

    trustedCounterParty({ value }: trustedCounterPartyParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.gov.v1.TrustedCounterParty', value: TrustedCounterParty.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:TrustedCounterParty: Could not create message: ' + e.message);
      }
    },

    genesisState({ value }: genesisStateParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.gov.v1.GenesisState', value: GenesisState.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:GenesisState: Could not create message: ' + e.message);
      }
    },

    msgVote({ value }: msgVoteParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.gov.v1.MsgVote', value: MsgVote.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:MsgVote: Could not create message: ' + e.message);
      }
    },

    queryConstitutionResponse({ value }: queryConstitutionResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.gov.v1.QueryConstitutionResponse',
          value: QueryConstitutionResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryConstitutionResponse: Could not create message: ' + e.message);
      }
    },

    queryDepositRequest({ value }: queryDepositRequestParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.gov.v1.QueryDepositRequest', value: QueryDepositRequest.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:QueryDepositRequest: Could not create message: ' + e.message);
      }
    },

    vote({ value }: voteParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.gov.v1.Vote', value: Vote.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:Vote: Could not create message: ' + e.message);
      }
    },

    decryptedVoteOption({ value }: decryptedVoteOptionParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.gov.v1.DecryptedVoteOption', value: DecryptedVoteOption.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:DecryptedVoteOption: Could not create message: ' + e.message);
      }
    },

    msgSubmitProposalResponse({ value }: msgSubmitProposalResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.gov.v1.MsgSubmitProposalResponse',
          value: MsgSubmitProposalResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgSubmitProposalResponse: Could not create message: ' + e.message);
      }
    },

    msgDeposit({ value }: msgDepositParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.gov.v1.MsgDeposit', value: MsgDeposit.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:MsgDeposit: Could not create message: ' + e.message);
      }
    },

    msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.gov.v1.MsgUpdateParams', value: MsgUpdateParams.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:MsgUpdateParams: Could not create message: ' + e.message);
      }
    },

    tallyResult({ value }: tallyResultParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.gov.v1.TallyResult', value: TallyResult.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:TallyResult: Could not create message: ' + e.message);
      }
    },

    queryConstitutionRequest({ value }: queryConstitutionRequestParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.gov.v1.QueryConstitutionRequest',
          value: QueryConstitutionRequest.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryConstitutionRequest: Could not create message: ' + e.message);
      }
    },

    msgExecLegacyContentResponse({ value }: msgExecLegacyContentResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.gov.v1.MsgExecLegacyContentResponse',
          value: MsgExecLegacyContentResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgExecLegacyContentResponse: Could not create message: ' + e.message);
      }
    },

    msgCancelProposal({ value }: msgCancelProposalParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.gov.v1.MsgCancelProposal', value: MsgCancelProposal.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:MsgCancelProposal: Could not create message: ' + e.message);
      }
    },

    queryVotesRequest({ value }: queryVotesRequestParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.gov.v1.QueryVotesRequest', value: QueryVotesRequest.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:QueryVotesRequest: Could not create message: ' + e.message);
      }
    },

    queryDepositsRequest({ value }: queryDepositsRequestParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.gov.v1.QueryDepositsRequest', value: QueryDepositsRequest.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:QueryDepositsRequest: Could not create message: ' + e.message);
      }
    },

    queryTallyResultRequest({ value }: queryTallyResultRequestParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.gov.v1.QueryTallyResultRequest', value: QueryTallyResultRequest.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:QueryTallyResultRequest: Could not create message: ' + e.message);
      }
    },

    proposal({ value }: proposalParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.gov.v1.Proposal', value: Proposal.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:Proposal: Could not create message: ' + e.message);
      }
    },

    params({ value }: paramsParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.gov.v1.Params', value: Params.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:Params: Could not create message: ' + e.message);
      }
    },

    queryProposalRequest({ value }: queryProposalRequestParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.gov.v1.QueryProposalRequest', value: QueryProposalRequest.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:QueryProposalRequest: Could not create message: ' + e.message);
      }
    },

    queryProposalResponse({ value }: queryProposalResponseParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.gov.v1.QueryProposalResponse', value: QueryProposalResponse.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:QueryProposalResponse: Could not create message: ' + e.message);
      }
    },

    queryTallyResultResponse({ value }: queryTallyResultResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.gov.v1.QueryTallyResultResponse',
          value: QueryTallyResultResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryTallyResultResponse: Could not create message: ' + e.message);
      }
    },

    msgExecLegacyContent({ value }: msgExecLegacyContentParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.gov.v1.MsgExecLegacyContent', value: MsgExecLegacyContent.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:MsgExecLegacyContent: Could not create message: ' + e.message);
      }
    },

    msgDepositResponse({ value }: msgDepositResponseParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.gov.v1.MsgDepositResponse', value: MsgDepositResponse.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:MsgDepositResponse: Could not create message: ' + e.message);
      }
    },

    msgVoteWeighted({ value }: msgVoteWeightedParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.gov.v1.MsgVoteWeighted', value: MsgVoteWeighted.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:MsgVoteWeighted: Could not create message: ' + e.message);
      }
    },

    deposit({ value }: depositParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.gov.v1.Deposit', value: Deposit.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:Deposit: Could not create message: ' + e.message);
      }
    },

    queryVoteRequest({ value }: queryVoteRequestParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.gov.v1.QueryVoteRequest', value: QueryVoteRequest.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:QueryVoteRequest: Could not create message: ' + e.message);
      }
    },

    queryVoteResponse({ value }: queryVoteResponseParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.gov.v1.QueryVoteResponse', value: QueryVoteResponse.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:QueryVoteResponse: Could not create message: ' + e.message);
      }
    },

    queryProposalsResponse({ value }: queryProposalsResponseParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.gov.v1.QueryProposalsResponse', value: QueryProposalsResponse.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:QueryProposalsResponse: Could not create message: ' + e.message);
      }
    },

    queryParamsResponse({ value }: queryParamsResponseParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.gov.v1.QueryParamsResponse', value: QueryParamsResponse.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:QueryParamsResponse: Could not create message: ' + e.message);
      }
    },

    votingParams({ value }: votingParamsParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.gov.v1.VotingParams', value: VotingParams.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:VotingParams: Could not create message: ' + e.message);
      }
    },

    msgSubmitProposal({ value }: msgSubmitProposalParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.gov.v1.MsgSubmitProposal', value: MsgSubmitProposal.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:MsgSubmitProposal: Could not create message: ' + e.message);
      }
    },

    weightedVoteOption({ value }: weightedVoteOptionParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.gov.v1.WeightedVoteOption', value: WeightedVoteOption.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:WeightedVoteOption: Could not create message: ' + e.message);
      }
    },

    queryDepositsResponse({ value }: queryDepositsResponseParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.gov.v1.QueryDepositsResponse', value: QueryDepositsResponse.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:QueryDepositsResponse: Could not create message: ' + e.message);
      }
    },

    msgVoteEncrypted({ value }: msgVoteEncryptedParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.gov.v1.MsgVoteEncrypted', value: MsgVoteEncrypted.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:MsgVoteEncrypted: Could not create message: ' + e.message);
      }
    },

    msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.gov.v1.MsgUpdateParamsResponse', value: MsgUpdateParamsResponse.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:MsgUpdateParamsResponse: Could not create message: ' + e.message);
      }
    },

    queryParamsRequest({ value }: queryParamsRequestParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.gov.v1.QueryParamsRequest', value: QueryParamsRequest.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:QueryParamsRequest: Could not create message: ' + e.message);
      }
    },

    queryDepositResponse({ value }: queryDepositResponseParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.gov.v1.QueryDepositResponse', value: QueryDepositResponse.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:QueryDepositResponse: Could not create message: ' + e.message);
      }
    },

    queryProposalsRequest({ value }: queryProposalsRequestParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.gov.v1.QueryProposalsRequest', value: QueryProposalsRequest.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:QueryProposalsRequest: Could not create message: ' + e.message);
      }
    },

    queryVotesResponse({ value }: queryVotesResponseParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.gov.v1.QueryVotesResponse', value: QueryVotesResponse.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:QueryVotesResponse: Could not create message: ' + e.message);
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
      CosmosGovV1: new SDKModule(test),
    },
    registry: msgTypes,
  };
};
export default IgntModule;
