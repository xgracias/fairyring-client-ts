import { SigningStargateClient, DeliverTxResponse, StdFee } from '@cosmjs/stargate';
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from '@cosmjs/proto-signing';
import { msgTypes } from './registry';
import { IgniteClient } from '../client';
import { MissingWalletError } from '../helpers';
import { Api } from './rest';
import { QueryParamsRequest } from './types/cosmos/bank/v1beta1/query';
import { QueryDenomMetadataRequest } from './types/cosmos/bank/v1beta1/query';
import { SendAuthorization } from './types/cosmos/bank/v1beta1/authz';
import { QueryAllBalancesResponse } from './types/cosmos/bank/v1beta1/query';
import { QueryDenomsMetadataRequest } from './types/cosmos/bank/v1beta1/query';
import { MsgUpdateParamsResponse } from './types/cosmos/bank/v1beta1/tx';
import { QueryTotalSupplyRequest } from './types/cosmos/bank/v1beta1/query';
import { Output } from './types/cosmos/bank/v1beta1/bank';
import { QueryBalanceRequest } from './types/cosmos/bank/v1beta1/query';
import { QuerySpendableBalanceByDenomResponse } from './types/cosmos/bank/v1beta1/query';
import { DenomOwner } from './types/cosmos/bank/v1beta1/query';
import { QueryDenomOwnersByQueryRequest } from './types/cosmos/bank/v1beta1/query';
import { Balance } from './types/cosmos/bank/v1beta1/genesis';
import { DenomUnit } from './types/cosmos/bank/v1beta1/bank';
import { QueryDenomOwnersByQueryResponse } from './types/cosmos/bank/v1beta1/query';
import { MsgUpdateParams } from './types/cosmos/bank/v1beta1/tx';
import { GenesisState } from './types/cosmos/bank/v1beta1/genesis';
import { QuerySpendableBalancesRequest } from './types/cosmos/bank/v1beta1/query';
import { QueryParamsResponse } from './types/cosmos/bank/v1beta1/query';
import { MsgSendResponse } from './types/cosmos/bank/v1beta1/tx';
import { Metadata } from './types/cosmos/bank/v1beta1/bank';
import { QueryDenomMetadataByQueryStringResponse } from './types/cosmos/bank/v1beta1/query';
import { QueryDenomMetadataByQueryStringRequest } from './types/cosmos/bank/v1beta1/query';
import { QuerySendEnabledResponse } from './types/cosmos/bank/v1beta1/query';
import { MsgSetSendEnabled } from './types/cosmos/bank/v1beta1/tx';
import { QueryDenomsMetadataResponse } from './types/cosmos/bank/v1beta1/query';
import { MsgSetSendEnabledResponse } from './types/cosmos/bank/v1beta1/tx';
import { QueryTotalSupplyResponse } from './types/cosmos/bank/v1beta1/query';
import { QueryDenomMetadataResponse } from './types/cosmos/bank/v1beta1/query';
import { QueryDenomOwnersRequest } from './types/cosmos/bank/v1beta1/query';
import { Input } from './types/cosmos/bank/v1beta1/bank';
import { QuerySupplyOfResponse } from './types/cosmos/bank/v1beta1/query';
import { Supply } from './types/cosmos/bank/v1beta1/bank';
import { QueryBalanceResponse } from './types/cosmos/bank/v1beta1/query';
import { QueryAllBalancesRequest } from './types/cosmos/bank/v1beta1/query';
import { QuerySpendableBalanceByDenomRequest } from './types/cosmos/bank/v1beta1/query';
import { QuerySupplyOfRequest } from './types/cosmos/bank/v1beta1/query';
import { Params } from './types/cosmos/bank/v1beta1/bank';
import { MsgMultiSendResponse } from './types/cosmos/bank/v1beta1/tx';
import { QueryDenomOwnersResponse } from './types/cosmos/bank/v1beta1/query';
import { SendEnabled } from './types/cosmos/bank/v1beta1/bank';
import { QuerySpendableBalancesResponse } from './types/cosmos/bank/v1beta1/query';
import { QuerySendEnabledRequest } from './types/cosmos/bank/v1beta1/query';
import { MsgSend } from './types/cosmos/bank/v1beta1/tx';
import { MsgMultiSend } from './types/cosmos/bank/v1beta1/tx';

export {
  QueryParamsRequest,
  QueryDenomMetadataRequest,
  SendAuthorization,
  QueryAllBalancesResponse,
  QueryDenomsMetadataRequest,
  MsgUpdateParamsResponse,
  QueryTotalSupplyRequest,
  Output,
  QueryBalanceRequest,
  QuerySpendableBalanceByDenomResponse,
  DenomOwner,
  QueryDenomOwnersByQueryRequest,
  Balance,
  DenomUnit,
  QueryDenomOwnersByQueryResponse,
  MsgUpdateParams,
  GenesisState,
  QuerySpendableBalancesRequest,
  QueryParamsResponse,
  MsgSendResponse,
  Metadata,
  QueryDenomMetadataByQueryStringResponse,
  QueryDenomMetadataByQueryStringRequest,
  QuerySendEnabledResponse,
  MsgSetSendEnabled,
  QueryDenomsMetadataResponse,
  MsgSetSendEnabledResponse,
  QueryTotalSupplyResponse,
  QueryDenomMetadataResponse,
  QueryDenomOwnersRequest,
  Input,
  QuerySupplyOfResponse,
  Supply,
  QueryBalanceResponse,
  QueryAllBalancesRequest,
  QuerySpendableBalanceByDenomRequest,
  QuerySupplyOfRequest,
  Params,
  MsgMultiSendResponse,
  QueryDenomOwnersResponse,
  SendEnabled,
  QuerySpendableBalancesResponse,
  QuerySendEnabledRequest,
  MsgSend,
  MsgMultiSend,
};

type sendQueryParamsRequestParams = {
  value: QueryParamsRequest;
  fee?: StdFee;
  memo?: string;
};

type sendQueryDenomMetadataRequestParams = {
  value: QueryDenomMetadataRequest;
  fee?: StdFee;
  memo?: string;
};

type sendSendAuthorizationParams = {
  value: SendAuthorization;
  fee?: StdFee;
  memo?: string;
};

type sendQueryAllBalancesResponseParams = {
  value: QueryAllBalancesResponse;
  fee?: StdFee;
  memo?: string;
};

type sendQueryDenomsMetadataRequestParams = {
  value: QueryDenomsMetadataRequest;
  fee?: StdFee;
  memo?: string;
};

type sendMsgUpdateParamsResponseParams = {
  value: MsgUpdateParamsResponse;
  fee?: StdFee;
  memo?: string;
};

type sendQueryTotalSupplyRequestParams = {
  value: QueryTotalSupplyRequest;
  fee?: StdFee;
  memo?: string;
};

type sendOutputParams = {
  value: Output;
  fee?: StdFee;
  memo?: string;
};

type sendQueryBalanceRequestParams = {
  value: QueryBalanceRequest;
  fee?: StdFee;
  memo?: string;
};

type sendQuerySpendableBalanceByDenomResponseParams = {
  value: QuerySpendableBalanceByDenomResponse;
  fee?: StdFee;
  memo?: string;
};

type sendDenomOwnerParams = {
  value: DenomOwner;
  fee?: StdFee;
  memo?: string;
};

type sendQueryDenomOwnersByQueryRequestParams = {
  value: QueryDenomOwnersByQueryRequest;
  fee?: StdFee;
  memo?: string;
};

type sendBalanceParams = {
  value: Balance;
  fee?: StdFee;
  memo?: string;
};

type sendDenomUnitParams = {
  value: DenomUnit;
  fee?: StdFee;
  memo?: string;
};

type sendQueryDenomOwnersByQueryResponseParams = {
  value: QueryDenomOwnersByQueryResponse;
  fee?: StdFee;
  memo?: string;
};

type sendMsgUpdateParamsParams = {
  value: MsgUpdateParams;
  fee?: StdFee;
  memo?: string;
};

type sendGenesisStateParams = {
  value: GenesisState;
  fee?: StdFee;
  memo?: string;
};

type sendQuerySpendableBalancesRequestParams = {
  value: QuerySpendableBalancesRequest;
  fee?: StdFee;
  memo?: string;
};

type sendQueryParamsResponseParams = {
  value: QueryParamsResponse;
  fee?: StdFee;
  memo?: string;
};

type sendMsgSendResponseParams = {
  value: MsgSendResponse;
  fee?: StdFee;
  memo?: string;
};

type sendMetadataParams = {
  value: Metadata;
  fee?: StdFee;
  memo?: string;
};

type sendQueryDenomMetadataByQueryStringResponseParams = {
  value: QueryDenomMetadataByQueryStringResponse;
  fee?: StdFee;
  memo?: string;
};

type sendQueryDenomMetadataByQueryStringRequestParams = {
  value: QueryDenomMetadataByQueryStringRequest;
  fee?: StdFee;
  memo?: string;
};

type sendQuerySendEnabledResponseParams = {
  value: QuerySendEnabledResponse;
  fee?: StdFee;
  memo?: string;
};

type sendMsgSetSendEnabledParams = {
  value: MsgSetSendEnabled;
  fee?: StdFee;
  memo?: string;
};

type sendQueryDenomsMetadataResponseParams = {
  value: QueryDenomsMetadataResponse;
  fee?: StdFee;
  memo?: string;
};

type sendMsgSetSendEnabledResponseParams = {
  value: MsgSetSendEnabledResponse;
  fee?: StdFee;
  memo?: string;
};

type sendQueryTotalSupplyResponseParams = {
  value: QueryTotalSupplyResponse;
  fee?: StdFee;
  memo?: string;
};

type sendQueryDenomMetadataResponseParams = {
  value: QueryDenomMetadataResponse;
  fee?: StdFee;
  memo?: string;
};

type sendQueryDenomOwnersRequestParams = {
  value: QueryDenomOwnersRequest;
  fee?: StdFee;
  memo?: string;
};

type sendInputParams = {
  value: Input;
  fee?: StdFee;
  memo?: string;
};

type sendQuerySupplyOfResponseParams = {
  value: QuerySupplyOfResponse;
  fee?: StdFee;
  memo?: string;
};

type sendSupplyParams = {
  value: Supply;
  fee?: StdFee;
  memo?: string;
};

type sendQueryBalanceResponseParams = {
  value: QueryBalanceResponse;
  fee?: StdFee;
  memo?: string;
};

type sendQueryAllBalancesRequestParams = {
  value: QueryAllBalancesRequest;
  fee?: StdFee;
  memo?: string;
};

type sendQuerySpendableBalanceByDenomRequestParams = {
  value: QuerySpendableBalanceByDenomRequest;
  fee?: StdFee;
  memo?: string;
};

type sendQuerySupplyOfRequestParams = {
  value: QuerySupplyOfRequest;
  fee?: StdFee;
  memo?: string;
};

type sendParamsParams = {
  value: Params;
  fee?: StdFee;
  memo?: string;
};

type sendMsgMultiSendResponseParams = {
  value: MsgMultiSendResponse;
  fee?: StdFee;
  memo?: string;
};

type sendQueryDenomOwnersResponseParams = {
  value: QueryDenomOwnersResponse;
  fee?: StdFee;
  memo?: string;
};

type sendSendEnabledParams = {
  value: SendEnabled;
  fee?: StdFee;
  memo?: string;
};

type sendQuerySpendableBalancesResponseParams = {
  value: QuerySpendableBalancesResponse;
  fee?: StdFee;
  memo?: string;
};

type sendQuerySendEnabledRequestParams = {
  value: QuerySendEnabledRequest;
  fee?: StdFee;
  memo?: string;
};

type sendMsgSendParams = {
  value: MsgSend;
  fee?: StdFee;
  memo?: string;
};

type sendMsgMultiSendParams = {
  value: MsgMultiSend;
  fee?: StdFee;
  memo?: string;
};

type queryParamsRequestParams = {
  value: QueryParamsRequest;
};

type queryDenomMetadataRequestParams = {
  value: QueryDenomMetadataRequest;
};

type sendAuthorizationParams = {
  value: SendAuthorization;
};

type queryAllBalancesResponseParams = {
  value: QueryAllBalancesResponse;
};

type queryDenomsMetadataRequestParams = {
  value: QueryDenomsMetadataRequest;
};

type msgUpdateParamsResponseParams = {
  value: MsgUpdateParamsResponse;
};

type queryTotalSupplyRequestParams = {
  value: QueryTotalSupplyRequest;
};

type outputParams = {
  value: Output;
};

type queryBalanceRequestParams = {
  value: QueryBalanceRequest;
};

type querySpendableBalanceByDenomResponseParams = {
  value: QuerySpendableBalanceByDenomResponse;
};

type denomOwnerParams = {
  value: DenomOwner;
};

type queryDenomOwnersByQueryRequestParams = {
  value: QueryDenomOwnersByQueryRequest;
};

type balanceParams = {
  value: Balance;
};

type denomUnitParams = {
  value: DenomUnit;
};

type queryDenomOwnersByQueryResponseParams = {
  value: QueryDenomOwnersByQueryResponse;
};

type msgUpdateParamsParams = {
  value: MsgUpdateParams;
};

type genesisStateParams = {
  value: GenesisState;
};

type querySpendableBalancesRequestParams = {
  value: QuerySpendableBalancesRequest;
};

type queryParamsResponseParams = {
  value: QueryParamsResponse;
};

type msgSendResponseParams = {
  value: MsgSendResponse;
};

type metadataParams = {
  value: Metadata;
};

type queryDenomMetadataByQueryStringResponseParams = {
  value: QueryDenomMetadataByQueryStringResponse;
};

type queryDenomMetadataByQueryStringRequestParams = {
  value: QueryDenomMetadataByQueryStringRequest;
};

type querySendEnabledResponseParams = {
  value: QuerySendEnabledResponse;
};

type msgSetSendEnabledParams = {
  value: MsgSetSendEnabled;
};

type queryDenomsMetadataResponseParams = {
  value: QueryDenomsMetadataResponse;
};

type msgSetSendEnabledResponseParams = {
  value: MsgSetSendEnabledResponse;
};

type queryTotalSupplyResponseParams = {
  value: QueryTotalSupplyResponse;
};

type queryDenomMetadataResponseParams = {
  value: QueryDenomMetadataResponse;
};

type queryDenomOwnersRequestParams = {
  value: QueryDenomOwnersRequest;
};

type inputParams = {
  value: Input;
};

type querySupplyOfResponseParams = {
  value: QuerySupplyOfResponse;
};

type supplyParams = {
  value: Supply;
};

type queryBalanceResponseParams = {
  value: QueryBalanceResponse;
};

type queryAllBalancesRequestParams = {
  value: QueryAllBalancesRequest;
};

type querySpendableBalanceByDenomRequestParams = {
  value: QuerySpendableBalanceByDenomRequest;
};

type querySupplyOfRequestParams = {
  value: QuerySupplyOfRequest;
};

type paramsParams = {
  value: Params;
};

type msgMultiSendResponseParams = {
  value: MsgMultiSendResponse;
};

type queryDenomOwnersResponseParams = {
  value: QueryDenomOwnersResponse;
};

type sendEnabledParams = {
  value: SendEnabled;
};

type querySpendableBalancesResponseParams = {
  value: QuerySpendableBalancesResponse;
};

type querySendEnabledRequestParams = {
  value: QuerySendEnabledRequest;
};

type msgSendParams = {
  value: MsgSend;
};

type msgMultiSendParams = {
  value: MsgMultiSend;
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

    async sendQueryDenomMetadataRequest({
      value,
      fee,
      memo,
    }: sendQueryDenomMetadataRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryDenomMetadataRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryDenomMetadataRequest({ value: QueryDenomMetadataRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryDenomMetadataRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendSendAuthorization({ value, fee, memo }: sendSendAuthorizationParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendSendAuthorization: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.sendAuthorization({ value: SendAuthorization.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendSendAuthorization: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryAllBalancesResponse({
      value,
      fee,
      memo,
    }: sendQueryAllBalancesResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryAllBalancesResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryAllBalancesResponse({ value: QueryAllBalancesResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryAllBalancesResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryDenomsMetadataRequest({
      value,
      fee,
      memo,
    }: sendQueryDenomsMetadataRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryDenomsMetadataRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryDenomsMetadataRequest({ value: QueryDenomsMetadataRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryDenomsMetadataRequest: Could not broadcast Tx: ' + e.message);
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

    async sendQueryTotalSupplyRequest({
      value,
      fee,
      memo,
    }: sendQueryTotalSupplyRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryTotalSupplyRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryTotalSupplyRequest({ value: QueryTotalSupplyRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryTotalSupplyRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendOutput({ value, fee, memo }: sendOutputParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendOutput: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.output({ value: Output.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendOutput: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryBalanceRequest({ value, fee, memo }: sendQueryBalanceRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryBalanceRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryBalanceRequest({ value: QueryBalanceRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryBalanceRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQuerySpendableBalanceByDenomResponse({
      value,
      fee,
      memo,
    }: sendQuerySpendableBalanceByDenomResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQuerySpendableBalanceByDenomResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.querySpendableBalanceByDenomResponse({
          value: QuerySpendableBalanceByDenomResponse.fromPartial(value),
        });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQuerySpendableBalanceByDenomResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendDenomOwner({ value, fee, memo }: sendDenomOwnerParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendDenomOwner: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.denomOwner({ value: DenomOwner.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendDenomOwner: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryDenomOwnersByQueryRequest({
      value,
      fee,
      memo,
    }: sendQueryDenomOwnersByQueryRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryDenomOwnersByQueryRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryDenomOwnersByQueryRequest({ value: QueryDenomOwnersByQueryRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryDenomOwnersByQueryRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendBalance({ value, fee, memo }: sendBalanceParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendBalance: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.balance({ value: Balance.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendBalance: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendDenomUnit({ value, fee, memo }: sendDenomUnitParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendDenomUnit: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.denomUnit({ value: DenomUnit.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendDenomUnit: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryDenomOwnersByQueryResponse({
      value,
      fee,
      memo,
    }: sendQueryDenomOwnersByQueryResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryDenomOwnersByQueryResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryDenomOwnersByQueryResponse({ value: QueryDenomOwnersByQueryResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryDenomOwnersByQueryResponse: Could not broadcast Tx: ' + e.message);
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

    async sendQuerySpendableBalancesRequest({
      value,
      fee,
      memo,
    }: sendQuerySpendableBalancesRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQuerySpendableBalancesRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.querySpendableBalancesRequest({ value: QuerySpendableBalancesRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQuerySpendableBalancesRequest: Could not broadcast Tx: ' + e.message);
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

    async sendMsgSendResponse({ value, fee, memo }: sendMsgSendResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgSendResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgSendResponse({ value: MsgSendResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgSendResponse: Could not broadcast Tx: ' + e.message);
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

    async sendQueryDenomMetadataByQueryStringResponse({
      value,
      fee,
      memo,
    }: sendQueryDenomMetadataByQueryStringResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error(
          'TxClient:sendQueryDenomMetadataByQueryStringResponse: Unable to sign Tx. Signer is not present.'
        );
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryDenomMetadataByQueryStringResponse({
          value: QueryDenomMetadataByQueryStringResponse.fromPartial(value),
        });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryDenomMetadataByQueryStringResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryDenomMetadataByQueryStringRequest({
      value,
      fee,
      memo,
    }: sendQueryDenomMetadataByQueryStringRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error(
          'TxClient:sendQueryDenomMetadataByQueryStringRequest: Unable to sign Tx. Signer is not present.'
        );
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryDenomMetadataByQueryStringRequest({
          value: QueryDenomMetadataByQueryStringRequest.fromPartial(value),
        });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryDenomMetadataByQueryStringRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQuerySendEnabledResponse({
      value,
      fee,
      memo,
    }: sendQuerySendEnabledResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQuerySendEnabledResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.querySendEnabledResponse({ value: QuerySendEnabledResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQuerySendEnabledResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgSetSendEnabled({ value, fee, memo }: sendMsgSetSendEnabledParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgSetSendEnabled: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgSetSendEnabled({ value: MsgSetSendEnabled.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgSetSendEnabled: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryDenomsMetadataResponse({
      value,
      fee,
      memo,
    }: sendQueryDenomsMetadataResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryDenomsMetadataResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryDenomsMetadataResponse({ value: QueryDenomsMetadataResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryDenomsMetadataResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgSetSendEnabledResponse({
      value,
      fee,
      memo,
    }: sendMsgSetSendEnabledResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgSetSendEnabledResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgSetSendEnabledResponse({ value: MsgSetSendEnabledResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgSetSendEnabledResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryTotalSupplyResponse({
      value,
      fee,
      memo,
    }: sendQueryTotalSupplyResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryTotalSupplyResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryTotalSupplyResponse({ value: QueryTotalSupplyResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryTotalSupplyResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryDenomMetadataResponse({
      value,
      fee,
      memo,
    }: sendQueryDenomMetadataResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryDenomMetadataResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryDenomMetadataResponse({ value: QueryDenomMetadataResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryDenomMetadataResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryDenomOwnersRequest({
      value,
      fee,
      memo,
    }: sendQueryDenomOwnersRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryDenomOwnersRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryDenomOwnersRequest({ value: QueryDenomOwnersRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryDenomOwnersRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendInput({ value, fee, memo }: sendInputParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendInput: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.input({ value: Input.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendInput: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQuerySupplyOfResponse({ value, fee, memo }: sendQuerySupplyOfResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQuerySupplyOfResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.querySupplyOfResponse({ value: QuerySupplyOfResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQuerySupplyOfResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendSupply({ value, fee, memo }: sendSupplyParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendSupply: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.supply({ value: Supply.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendSupply: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryBalanceResponse({ value, fee, memo }: sendQueryBalanceResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryBalanceResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryBalanceResponse({ value: QueryBalanceResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryBalanceResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryAllBalancesRequest({
      value,
      fee,
      memo,
    }: sendQueryAllBalancesRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryAllBalancesRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryAllBalancesRequest({ value: QueryAllBalancesRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryAllBalancesRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQuerySpendableBalanceByDenomRequest({
      value,
      fee,
      memo,
    }: sendQuerySpendableBalanceByDenomRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQuerySpendableBalanceByDenomRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.querySpendableBalanceByDenomRequest({
          value: QuerySpendableBalanceByDenomRequest.fromPartial(value),
        });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQuerySpendableBalanceByDenomRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQuerySupplyOfRequest({ value, fee, memo }: sendQuerySupplyOfRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQuerySupplyOfRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.querySupplyOfRequest({ value: QuerySupplyOfRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQuerySupplyOfRequest: Could not broadcast Tx: ' + e.message);
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

    async sendMsgMultiSendResponse({ value, fee, memo }: sendMsgMultiSendResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgMultiSendResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgMultiSendResponse({ value: MsgMultiSendResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgMultiSendResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryDenomOwnersResponse({
      value,
      fee,
      memo,
    }: sendQueryDenomOwnersResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryDenomOwnersResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryDenomOwnersResponse({ value: QueryDenomOwnersResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryDenomOwnersResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendSendEnabled({ value, fee, memo }: sendSendEnabledParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendSendEnabled: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.sendEnabled({ value: SendEnabled.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendSendEnabled: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQuerySpendableBalancesResponse({
      value,
      fee,
      memo,
    }: sendQuerySpendableBalancesResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQuerySpendableBalancesResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.querySpendableBalancesResponse({ value: QuerySpendableBalancesResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQuerySpendableBalancesResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQuerySendEnabledRequest({
      value,
      fee,
      memo,
    }: sendQuerySendEnabledRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQuerySendEnabledRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.querySendEnabledRequest({ value: QuerySendEnabledRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQuerySendEnabledRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgSend({ value, fee, memo }: sendMsgSendParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgSend: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgSend({ value: MsgSend.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgSend: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgMultiSend({ value, fee, memo }: sendMsgMultiSendParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgMultiSend: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgMultiSend({ value: MsgMultiSend.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgMultiSend: Could not broadcast Tx: ' + e.message);
      }
    },

    queryParamsRequest({ value }: queryParamsRequestParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.bank.v1beta1.QueryParamsRequest', value: QueryParamsRequest.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:QueryParamsRequest: Could not create message: ' + e.message);
      }
    },

    queryDenomMetadataRequest({ value }: queryDenomMetadataRequestParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.bank.v1beta1.QueryDenomMetadataRequest',
          value: QueryDenomMetadataRequest.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryDenomMetadataRequest: Could not create message: ' + e.message);
      }
    },

    sendAuthorization({ value }: sendAuthorizationParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.bank.v1beta1.SendAuthorization', value: SendAuthorization.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:SendAuthorization: Could not create message: ' + e.message);
      }
    },

    queryAllBalancesResponse({ value }: queryAllBalancesResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.bank.v1beta1.QueryAllBalancesResponse',
          value: QueryAllBalancesResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryAllBalancesResponse: Could not create message: ' + e.message);
      }
    },

    queryDenomsMetadataRequest({ value }: queryDenomsMetadataRequestParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.bank.v1beta1.QueryDenomsMetadataRequest',
          value: QueryDenomsMetadataRequest.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryDenomsMetadataRequest: Could not create message: ' + e.message);
      }
    },

    msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.bank.v1beta1.MsgUpdateParamsResponse',
          value: MsgUpdateParamsResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgUpdateParamsResponse: Could not create message: ' + e.message);
      }
    },

    queryTotalSupplyRequest({ value }: queryTotalSupplyRequestParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.bank.v1beta1.QueryTotalSupplyRequest',
          value: QueryTotalSupplyRequest.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryTotalSupplyRequest: Could not create message: ' + e.message);
      }
    },

    output({ value }: outputParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.bank.v1beta1.Output', value: Output.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:Output: Could not create message: ' + e.message);
      }
    },

    queryBalanceRequest({ value }: queryBalanceRequestParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.bank.v1beta1.QueryBalanceRequest', value: QueryBalanceRequest.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:QueryBalanceRequest: Could not create message: ' + e.message);
      }
    },

    querySpendableBalanceByDenomResponse({ value }: querySpendableBalanceByDenomResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.bank.v1beta1.QuerySpendableBalanceByDenomResponse',
          value: QuerySpendableBalanceByDenomResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QuerySpendableBalanceByDenomResponse: Could not create message: ' + e.message);
      }
    },

    denomOwner({ value }: denomOwnerParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.bank.v1beta1.DenomOwner', value: DenomOwner.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:DenomOwner: Could not create message: ' + e.message);
      }
    },

    queryDenomOwnersByQueryRequest({ value }: queryDenomOwnersByQueryRequestParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.bank.v1beta1.QueryDenomOwnersByQueryRequest',
          value: QueryDenomOwnersByQueryRequest.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryDenomOwnersByQueryRequest: Could not create message: ' + e.message);
      }
    },

    balance({ value }: balanceParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.bank.v1beta1.Balance', value: Balance.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:Balance: Could not create message: ' + e.message);
      }
    },

    denomUnit({ value }: denomUnitParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.bank.v1beta1.DenomUnit', value: DenomUnit.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:DenomUnit: Could not create message: ' + e.message);
      }
    },

    queryDenomOwnersByQueryResponse({ value }: queryDenomOwnersByQueryResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.bank.v1beta1.QueryDenomOwnersByQueryResponse',
          value: QueryDenomOwnersByQueryResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryDenomOwnersByQueryResponse: Could not create message: ' + e.message);
      }
    },

    msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.bank.v1beta1.MsgUpdateParams', value: MsgUpdateParams.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:MsgUpdateParams: Could not create message: ' + e.message);
      }
    },

    genesisState({ value }: genesisStateParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.bank.v1beta1.GenesisState', value: GenesisState.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:GenesisState: Could not create message: ' + e.message);
      }
    },

    querySpendableBalancesRequest({ value }: querySpendableBalancesRequestParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.bank.v1beta1.QuerySpendableBalancesRequest',
          value: QuerySpendableBalancesRequest.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QuerySpendableBalancesRequest: Could not create message: ' + e.message);
      }
    },

    queryParamsResponse({ value }: queryParamsResponseParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.bank.v1beta1.QueryParamsResponse', value: QueryParamsResponse.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:QueryParamsResponse: Could not create message: ' + e.message);
      }
    },

    msgSendResponse({ value }: msgSendResponseParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.bank.v1beta1.MsgSendResponse', value: MsgSendResponse.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:MsgSendResponse: Could not create message: ' + e.message);
      }
    },

    metadata({ value }: metadataParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.bank.v1beta1.Metadata', value: Metadata.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:Metadata: Could not create message: ' + e.message);
      }
    },

    queryDenomMetadataByQueryStringResponse({ value }: queryDenomMetadataByQueryStringResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.bank.v1beta1.QueryDenomMetadataByQueryStringResponse',
          value: QueryDenomMetadataByQueryStringResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryDenomMetadataByQueryStringResponse: Could not create message: ' + e.message);
      }
    },

    queryDenomMetadataByQueryStringRequest({ value }: queryDenomMetadataByQueryStringRequestParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.bank.v1beta1.QueryDenomMetadataByQueryStringRequest',
          value: QueryDenomMetadataByQueryStringRequest.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryDenomMetadataByQueryStringRequest: Could not create message: ' + e.message);
      }
    },

    querySendEnabledResponse({ value }: querySendEnabledResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.bank.v1beta1.QuerySendEnabledResponse',
          value: QuerySendEnabledResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QuerySendEnabledResponse: Could not create message: ' + e.message);
      }
    },

    msgSetSendEnabled({ value }: msgSetSendEnabledParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.bank.v1beta1.MsgSetSendEnabled', value: MsgSetSendEnabled.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:MsgSetSendEnabled: Could not create message: ' + e.message);
      }
    },

    queryDenomsMetadataResponse({ value }: queryDenomsMetadataResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.bank.v1beta1.QueryDenomsMetadataResponse',
          value: QueryDenomsMetadataResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryDenomsMetadataResponse: Could not create message: ' + e.message);
      }
    },

    msgSetSendEnabledResponse({ value }: msgSetSendEnabledResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.bank.v1beta1.MsgSetSendEnabledResponse',
          value: MsgSetSendEnabledResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgSetSendEnabledResponse: Could not create message: ' + e.message);
      }
    },

    queryTotalSupplyResponse({ value }: queryTotalSupplyResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.bank.v1beta1.QueryTotalSupplyResponse',
          value: QueryTotalSupplyResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryTotalSupplyResponse: Could not create message: ' + e.message);
      }
    },

    queryDenomMetadataResponse({ value }: queryDenomMetadataResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.bank.v1beta1.QueryDenomMetadataResponse',
          value: QueryDenomMetadataResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryDenomMetadataResponse: Could not create message: ' + e.message);
      }
    },

    queryDenomOwnersRequest({ value }: queryDenomOwnersRequestParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.bank.v1beta1.QueryDenomOwnersRequest',
          value: QueryDenomOwnersRequest.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryDenomOwnersRequest: Could not create message: ' + e.message);
      }
    },

    input({ value }: inputParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.bank.v1beta1.Input', value: Input.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:Input: Could not create message: ' + e.message);
      }
    },

    querySupplyOfResponse({ value }: querySupplyOfResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.bank.v1beta1.QuerySupplyOfResponse',
          value: QuerySupplyOfResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QuerySupplyOfResponse: Could not create message: ' + e.message);
      }
    },

    supply({ value }: supplyParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.bank.v1beta1.Supply', value: Supply.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:Supply: Could not create message: ' + e.message);
      }
    },

    queryBalanceResponse({ value }: queryBalanceResponseParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.bank.v1beta1.QueryBalanceResponse', value: QueryBalanceResponse.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:QueryBalanceResponse: Could not create message: ' + e.message);
      }
    },

    queryAllBalancesRequest({ value }: queryAllBalancesRequestParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.bank.v1beta1.QueryAllBalancesRequest',
          value: QueryAllBalancesRequest.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryAllBalancesRequest: Could not create message: ' + e.message);
      }
    },

    querySpendableBalanceByDenomRequest({ value }: querySpendableBalanceByDenomRequestParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.bank.v1beta1.QuerySpendableBalanceByDenomRequest',
          value: QuerySpendableBalanceByDenomRequest.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QuerySpendableBalanceByDenomRequest: Could not create message: ' + e.message);
      }
    },

    querySupplyOfRequest({ value }: querySupplyOfRequestParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.bank.v1beta1.QuerySupplyOfRequest', value: QuerySupplyOfRequest.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:QuerySupplyOfRequest: Could not create message: ' + e.message);
      }
    },

    params({ value }: paramsParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.bank.v1beta1.Params', value: Params.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:Params: Could not create message: ' + e.message);
      }
    },

    msgMultiSendResponse({ value }: msgMultiSendResponseParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.bank.v1beta1.MsgMultiSendResponse', value: MsgMultiSendResponse.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:MsgMultiSendResponse: Could not create message: ' + e.message);
      }
    },

    queryDenomOwnersResponse({ value }: queryDenomOwnersResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.bank.v1beta1.QueryDenomOwnersResponse',
          value: QueryDenomOwnersResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryDenomOwnersResponse: Could not create message: ' + e.message);
      }
    },

    sendEnabled({ value }: sendEnabledParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.bank.v1beta1.SendEnabled', value: SendEnabled.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:SendEnabled: Could not create message: ' + e.message);
      }
    },

    querySpendableBalancesResponse({ value }: querySpendableBalancesResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.bank.v1beta1.QuerySpendableBalancesResponse',
          value: QuerySpendableBalancesResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QuerySpendableBalancesResponse: Could not create message: ' + e.message);
      }
    },

    querySendEnabledRequest({ value }: querySendEnabledRequestParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.bank.v1beta1.QuerySendEnabledRequest',
          value: QuerySendEnabledRequest.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QuerySendEnabledRequest: Could not create message: ' + e.message);
      }
    },

    msgSend({ value }: msgSendParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.bank.v1beta1.MsgSend', value: MsgSend.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:MsgSend: Could not create message: ' + e.message);
      }
    },

    msgMultiSend({ value }: msgMultiSendParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.bank.v1beta1.MsgMultiSend', value: MsgMultiSend.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:MsgMultiSend: Could not create message: ' + e.message);
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
      CosmosBankV1Beta1: new SDKModule(test),
    },
    registry: msgTypes,
  };
};
export default IgntModule;
