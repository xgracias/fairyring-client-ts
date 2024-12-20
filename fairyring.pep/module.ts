import { SigningStargateClient, DeliverTxResponse, StdFee } from '@cosmjs/stargate';
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from '@cosmjs/proto-signing';
import { msgTypes } from './registry';
import { IgniteClient } from '../client';
import { MissingWalletError } from '../helpers';
import { Api } from './rest';
import { QueryPubKeyRequest } from './types/fairyring/pep/query';
import { PepNonce } from './types/fairyring/pep/pep_nonce';
import { QueryAllEncryptedTxFromHeightResponse } from './types/fairyring/pep/query';
import { GeneralEncryptedTxArray } from './types/fairyring/pep/encrypted_tx';
import { QueryAllEncryptedTxRequest } from './types/fairyring/pep/query';
import { QueryAllEncryptedTxFromHeightRequest } from './types/fairyring/pep/query';
import { MsgGetGeneralKeyshare } from './types/fairyring/pep/tx';
import { QueryKeyshareResponse } from './types/fairyring/pep/query';
import { QueryAllKeyshareRequest } from './types/fairyring/pep/query';
import { QueryPubKeyResponse } from './types/fairyring/pep/query';
import { GenesisState } from './types/fairyring/pep/genesis';
import { MsgUpdateParamsResponse } from './types/fairyring/pep/tx';
import { MsgRequestGeneralKeyshareResponse } from './types/fairyring/pep/tx';
import { AggregatedKeyShare } from './types/fairyring/pep/aggregated_key_share';
import { QueryAllPepNonceRequest } from './types/fairyring/pep/query';
import { EncryptedTxArray } from './types/fairyring/pep/encrypted_tx';
import { GenEncTxExecutionQueue } from './types/fairyring/pep/encrypted_tx';
import { QueryGetEncryptedTxRequest } from './types/fairyring/pep/query';
import { MsgRequestGeneralKeyshare } from './types/fairyring/pep/tx';
import { QueryAllEncryptedTxResponse } from './types/fairyring/pep/query';
import { QueryGetPepNonceRequest } from './types/fairyring/pep/query';
import { QueryAllPepNonceResponse } from './types/fairyring/pep/query';
import { EncryptedTx } from './types/fairyring/pep/encrypted_tx';
import { MsgSubmitGeneralEncryptedTx } from './types/fairyring/pep/tx';
import { MsgCreateAggregatedKeyShare } from './types/fairyring/pep/tx';
import { MsgSubmitEncryptedTx } from './types/fairyring/pep/tx';
import { MsgSubmitEncryptedTxResponse } from './types/fairyring/pep/tx';
import { MsgCreateAggregatedKeyShareResponse } from './types/fairyring/pep/tx';
import { MsgGetGeneralKeyshareResponse } from './types/fairyring/pep/tx';
import { QueryKeyshareRequest } from './types/fairyring/pep/query';
import { MsgUpdateParams } from './types/fairyring/pep/tx';
import { Params } from './types/fairyring/pep/params';
import { QueryGetEncryptedTxResponse } from './types/fairyring/pep/query';
import { QueryLatestHeightResponse } from './types/fairyring/pep/query';
import { GeneralEncryptedTx } from './types/fairyring/pep/encrypted_tx';
import { QueryParamsResponse } from './types/fairyring/pep/query';
import { QueryAllKeyshareResponse } from './types/fairyring/pep/query';
import { QueryLatestHeightRequest } from './types/fairyring/pep/query';
import { QueryGetPepNonceResponse } from './types/fairyring/pep/query';
import { TrustedCounterParty } from './types/fairyring/pep/params';
import { QueryParamsRequest } from './types/fairyring/pep/query';

export {
  QueryPubKeyRequest,
  PepNonce,
  QueryAllEncryptedTxFromHeightResponse,
  GeneralEncryptedTxArray,
  QueryAllEncryptedTxRequest,
  QueryAllEncryptedTxFromHeightRequest,
  MsgGetGeneralKeyshare,
  QueryKeyshareResponse,
  QueryAllKeyshareRequest,
  QueryPubKeyResponse,
  GenesisState,
  MsgUpdateParamsResponse,
  MsgRequestGeneralKeyshareResponse,
  AggregatedKeyShare,
  QueryAllPepNonceRequest,
  EncryptedTxArray,
  GenEncTxExecutionQueue,
  QueryGetEncryptedTxRequest,
  MsgRequestGeneralKeyshare,
  QueryAllEncryptedTxResponse,
  QueryGetPepNonceRequest,
  QueryAllPepNonceResponse,
  EncryptedTx,
  MsgSubmitGeneralEncryptedTx,
  MsgCreateAggregatedKeyShare,
  MsgSubmitEncryptedTx,
  MsgSubmitEncryptedTxResponse,
  MsgCreateAggregatedKeyShareResponse,
  MsgGetGeneralKeyshareResponse,
  QueryKeyshareRequest,
  MsgUpdateParams,
  Params,
  QueryGetEncryptedTxResponse,
  QueryLatestHeightResponse,
  GeneralEncryptedTx,
  QueryParamsResponse,
  QueryAllKeyshareResponse,
  QueryLatestHeightRequest,
  QueryGetPepNonceResponse,
  TrustedCounterParty,
  QueryParamsRequest,
};

type sendQueryPubKeyRequestParams = {
  value: QueryPubKeyRequest;
  fee?: StdFee;
  memo?: string;
};

type sendPepNonceParams = {
  value: PepNonce;
  fee?: StdFee;
  memo?: string;
};

type sendQueryAllEncryptedTxFromHeightResponseParams = {
  value: QueryAllEncryptedTxFromHeightResponse;
  fee?: StdFee;
  memo?: string;
};

type sendGeneralEncryptedTxArrayParams = {
  value: GeneralEncryptedTxArray;
  fee?: StdFee;
  memo?: string;
};

type sendQueryAllEncryptedTxRequestParams = {
  value: QueryAllEncryptedTxRequest;
  fee?: StdFee;
  memo?: string;
};

type sendQueryAllEncryptedTxFromHeightRequestParams = {
  value: QueryAllEncryptedTxFromHeightRequest;
  fee?: StdFee;
  memo?: string;
};

type sendMsgGetGeneralKeyshareParams = {
  value: MsgGetGeneralKeyshare;
  fee?: StdFee;
  memo?: string;
};

type sendQueryKeyshareResponseParams = {
  value: QueryKeyshareResponse;
  fee?: StdFee;
  memo?: string;
};

type sendQueryAllKeyshareRequestParams = {
  value: QueryAllKeyshareRequest;
  fee?: StdFee;
  memo?: string;
};

type sendQueryPubKeyResponseParams = {
  value: QueryPubKeyResponse;
  fee?: StdFee;
  memo?: string;
};

type sendGenesisStateParams = {
  value: GenesisState;
  fee?: StdFee;
  memo?: string;
};

type sendMsgUpdateParamsResponseParams = {
  value: MsgUpdateParamsResponse;
  fee?: StdFee;
  memo?: string;
};

type sendMsgRequestGeneralKeyshareResponseParams = {
  value: MsgRequestGeneralKeyshareResponse;
  fee?: StdFee;
  memo?: string;
};

type sendAggregatedKeyShareParams = {
  value: AggregatedKeyShare;
  fee?: StdFee;
  memo?: string;
};

type sendQueryAllPepNonceRequestParams = {
  value: QueryAllPepNonceRequest;
  fee?: StdFee;
  memo?: string;
};

type sendEncryptedTxArrayParams = {
  value: EncryptedTxArray;
  fee?: StdFee;
  memo?: string;
};

type sendGenEncTxExecutionQueueParams = {
  value: GenEncTxExecutionQueue;
  fee?: StdFee;
  memo?: string;
};

type sendQueryGetEncryptedTxRequestParams = {
  value: QueryGetEncryptedTxRequest;
  fee?: StdFee;
  memo?: string;
};

type sendMsgRequestGeneralKeyshareParams = {
  value: MsgRequestGeneralKeyshare;
  fee?: StdFee;
  memo?: string;
};

type sendQueryAllEncryptedTxResponseParams = {
  value: QueryAllEncryptedTxResponse;
  fee?: StdFee;
  memo?: string;
};

type sendQueryGetPepNonceRequestParams = {
  value: QueryGetPepNonceRequest;
  fee?: StdFee;
  memo?: string;
};

type sendQueryAllPepNonceResponseParams = {
  value: QueryAllPepNonceResponse;
  fee?: StdFee;
  memo?: string;
};

type sendEncryptedTxParams = {
  value: EncryptedTx;
  fee?: StdFee;
  memo?: string;
};

type sendMsgSubmitGeneralEncryptedTxParams = {
  value: MsgSubmitGeneralEncryptedTx;
  fee?: StdFee;
  memo?: string;
};

type sendMsgCreateAggregatedKeyShareParams = {
  value: MsgCreateAggregatedKeyShare;
  fee?: StdFee;
  memo?: string;
};

type sendMsgSubmitEncryptedTxParams = {
  value: MsgSubmitEncryptedTx;
  fee?: StdFee;
  memo?: string;
};

type sendMsgSubmitEncryptedTxResponseParams = {
  value: MsgSubmitEncryptedTxResponse;
  fee?: StdFee;
  memo?: string;
};

type sendMsgCreateAggregatedKeyShareResponseParams = {
  value: MsgCreateAggregatedKeyShareResponse;
  fee?: StdFee;
  memo?: string;
};

type sendMsgGetGeneralKeyshareResponseParams = {
  value: MsgGetGeneralKeyshareResponse;
  fee?: StdFee;
  memo?: string;
};

type sendQueryKeyshareRequestParams = {
  value: QueryKeyshareRequest;
  fee?: StdFee;
  memo?: string;
};

type sendMsgUpdateParamsParams = {
  value: MsgUpdateParams;
  fee?: StdFee;
  memo?: string;
};

type sendParamsParams = {
  value: Params;
  fee?: StdFee;
  memo?: string;
};

type sendQueryGetEncryptedTxResponseParams = {
  value: QueryGetEncryptedTxResponse;
  fee?: StdFee;
  memo?: string;
};

type sendQueryLatestHeightResponseParams = {
  value: QueryLatestHeightResponse;
  fee?: StdFee;
  memo?: string;
};

type sendGeneralEncryptedTxParams = {
  value: GeneralEncryptedTx;
  fee?: StdFee;
  memo?: string;
};

type sendQueryParamsResponseParams = {
  value: QueryParamsResponse;
  fee?: StdFee;
  memo?: string;
};

type sendQueryAllKeyshareResponseParams = {
  value: QueryAllKeyshareResponse;
  fee?: StdFee;
  memo?: string;
};

type sendQueryLatestHeightRequestParams = {
  value: QueryLatestHeightRequest;
  fee?: StdFee;
  memo?: string;
};

type sendQueryGetPepNonceResponseParams = {
  value: QueryGetPepNonceResponse;
  fee?: StdFee;
  memo?: string;
};

type sendTrustedCounterPartyParams = {
  value: TrustedCounterParty;
  fee?: StdFee;
  memo?: string;
};

type sendQueryParamsRequestParams = {
  value: QueryParamsRequest;
  fee?: StdFee;
  memo?: string;
};

type queryPubKeyRequestParams = {
  value: QueryPubKeyRequest;
};

type pepNonceParams = {
  value: PepNonce;
};

type queryAllEncryptedTxFromHeightResponseParams = {
  value: QueryAllEncryptedTxFromHeightResponse;
};

type generalEncryptedTxArrayParams = {
  value: GeneralEncryptedTxArray;
};

type queryAllEncryptedTxRequestParams = {
  value: QueryAllEncryptedTxRequest;
};

type queryAllEncryptedTxFromHeightRequestParams = {
  value: QueryAllEncryptedTxFromHeightRequest;
};

type msgGetGeneralKeyshareParams = {
  value: MsgGetGeneralKeyshare;
};

type queryKeyshareResponseParams = {
  value: QueryKeyshareResponse;
};

type queryAllKeyshareRequestParams = {
  value: QueryAllKeyshareRequest;
};

type queryPubKeyResponseParams = {
  value: QueryPubKeyResponse;
};

type genesisStateParams = {
  value: GenesisState;
};

type msgUpdateParamsResponseParams = {
  value: MsgUpdateParamsResponse;
};

type msgRequestGeneralKeyshareResponseParams = {
  value: MsgRequestGeneralKeyshareResponse;
};

type aggregatedKeyShareParams = {
  value: AggregatedKeyShare;
};

type queryAllPepNonceRequestParams = {
  value: QueryAllPepNonceRequest;
};

type encryptedTxArrayParams = {
  value: EncryptedTxArray;
};

type genEncTxExecutionQueueParams = {
  value: GenEncTxExecutionQueue;
};

type queryGetEncryptedTxRequestParams = {
  value: QueryGetEncryptedTxRequest;
};

type msgRequestGeneralKeyshareParams = {
  value: MsgRequestGeneralKeyshare;
};

type queryAllEncryptedTxResponseParams = {
  value: QueryAllEncryptedTxResponse;
};

type queryGetPepNonceRequestParams = {
  value: QueryGetPepNonceRequest;
};

type queryAllPepNonceResponseParams = {
  value: QueryAllPepNonceResponse;
};

type encryptedTxParams = {
  value: EncryptedTx;
};

type msgSubmitGeneralEncryptedTxParams = {
  value: MsgSubmitGeneralEncryptedTx;
};

type msgCreateAggregatedKeyShareParams = {
  value: MsgCreateAggregatedKeyShare;
};

type msgSubmitEncryptedTxParams = {
  value: MsgSubmitEncryptedTx;
};

type msgSubmitEncryptedTxResponseParams = {
  value: MsgSubmitEncryptedTxResponse;
};

type msgCreateAggregatedKeyShareResponseParams = {
  value: MsgCreateAggregatedKeyShareResponse;
};

type msgGetGeneralKeyshareResponseParams = {
  value: MsgGetGeneralKeyshareResponse;
};

type queryKeyshareRequestParams = {
  value: QueryKeyshareRequest;
};

type msgUpdateParamsParams = {
  value: MsgUpdateParams;
};

type paramsParams = {
  value: Params;
};

type queryGetEncryptedTxResponseParams = {
  value: QueryGetEncryptedTxResponse;
};

type queryLatestHeightResponseParams = {
  value: QueryLatestHeightResponse;
};

type generalEncryptedTxParams = {
  value: GeneralEncryptedTx;
};

type queryParamsResponseParams = {
  value: QueryParamsResponse;
};

type queryAllKeyshareResponseParams = {
  value: QueryAllKeyshareResponse;
};

type queryLatestHeightRequestParams = {
  value: QueryLatestHeightRequest;
};

type queryGetPepNonceResponseParams = {
  value: QueryGetPepNonceResponse;
};

type trustedCounterPartyParams = {
  value: TrustedCounterParty;
};

type queryParamsRequestParams = {
  value: QueryParamsRequest;
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
    async sendQueryPubKeyRequest({ value, fee, memo }: sendQueryPubKeyRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryPubKeyRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryPubKeyRequest({ value: QueryPubKeyRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryPubKeyRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendPepNonce({ value, fee, memo }: sendPepNonceParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendPepNonce: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.pepNonce({ value: PepNonce.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendPepNonce: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryAllEncryptedTxFromHeightResponse({
      value,
      fee,
      memo,
    }: sendQueryAllEncryptedTxFromHeightResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error(
          'TxClient:sendQueryAllEncryptedTxFromHeightResponse: Unable to sign Tx. Signer is not present.'
        );
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryAllEncryptedTxFromHeightResponse({
          value: QueryAllEncryptedTxFromHeightResponse.fromPartial(value),
        });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryAllEncryptedTxFromHeightResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendGeneralEncryptedTxArray({
      value,
      fee,
      memo,
    }: sendGeneralEncryptedTxArrayParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendGeneralEncryptedTxArray: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.generalEncryptedTxArray({ value: GeneralEncryptedTxArray.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendGeneralEncryptedTxArray: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryAllEncryptedTxRequest({
      value,
      fee,
      memo,
    }: sendQueryAllEncryptedTxRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryAllEncryptedTxRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryAllEncryptedTxRequest({ value: QueryAllEncryptedTxRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryAllEncryptedTxRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryAllEncryptedTxFromHeightRequest({
      value,
      fee,
      memo,
    }: sendQueryAllEncryptedTxFromHeightRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryAllEncryptedTxFromHeightRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryAllEncryptedTxFromHeightRequest({
          value: QueryAllEncryptedTxFromHeightRequest.fromPartial(value),
        });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryAllEncryptedTxFromHeightRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgGetGeneralKeyshare({ value, fee, memo }: sendMsgGetGeneralKeyshareParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgGetGeneralKeyshare: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgGetGeneralKeyshare({ value: MsgGetGeneralKeyshare.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgGetGeneralKeyshare: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryKeyshareResponse({ value, fee, memo }: sendQueryKeyshareResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryKeyshareResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryKeyshareResponse({ value: QueryKeyshareResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryKeyshareResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryAllKeyshareRequest({
      value,
      fee,
      memo,
    }: sendQueryAllKeyshareRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryAllKeyshareRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryAllKeyshareRequest({ value: QueryAllKeyshareRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryAllKeyshareRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryPubKeyResponse({ value, fee, memo }: sendQueryPubKeyResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryPubKeyResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryPubKeyResponse({ value: QueryPubKeyResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryPubKeyResponse: Could not broadcast Tx: ' + e.message);
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

    async sendMsgRequestGeneralKeyshareResponse({
      value,
      fee,
      memo,
    }: sendMsgRequestGeneralKeyshareResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgRequestGeneralKeyshareResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgRequestGeneralKeyshareResponse({
          value: MsgRequestGeneralKeyshareResponse.fromPartial(value),
        });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgRequestGeneralKeyshareResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendAggregatedKeyShare({ value, fee, memo }: sendAggregatedKeyShareParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendAggregatedKeyShare: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.aggregatedKeyShare({ value: AggregatedKeyShare.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendAggregatedKeyShare: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryAllPepNonceRequest({
      value,
      fee,
      memo,
    }: sendQueryAllPepNonceRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryAllPepNonceRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryAllPepNonceRequest({ value: QueryAllPepNonceRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryAllPepNonceRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendEncryptedTxArray({ value, fee, memo }: sendEncryptedTxArrayParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendEncryptedTxArray: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.encryptedTxArray({ value: EncryptedTxArray.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendEncryptedTxArray: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendGenEncTxExecutionQueue({
      value,
      fee,
      memo,
    }: sendGenEncTxExecutionQueueParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendGenEncTxExecutionQueue: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.genEncTxExecutionQueue({ value: GenEncTxExecutionQueue.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendGenEncTxExecutionQueue: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryGetEncryptedTxRequest({
      value,
      fee,
      memo,
    }: sendQueryGetEncryptedTxRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryGetEncryptedTxRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryGetEncryptedTxRequest({ value: QueryGetEncryptedTxRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryGetEncryptedTxRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgRequestGeneralKeyshare({
      value,
      fee,
      memo,
    }: sendMsgRequestGeneralKeyshareParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgRequestGeneralKeyshare: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgRequestGeneralKeyshare({ value: MsgRequestGeneralKeyshare.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgRequestGeneralKeyshare: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryAllEncryptedTxResponse({
      value,
      fee,
      memo,
    }: sendQueryAllEncryptedTxResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryAllEncryptedTxResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryAllEncryptedTxResponse({ value: QueryAllEncryptedTxResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryAllEncryptedTxResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryGetPepNonceRequest({
      value,
      fee,
      memo,
    }: sendQueryGetPepNonceRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryGetPepNonceRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryGetPepNonceRequest({ value: QueryGetPepNonceRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryGetPepNonceRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryAllPepNonceResponse({
      value,
      fee,
      memo,
    }: sendQueryAllPepNonceResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryAllPepNonceResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryAllPepNonceResponse({ value: QueryAllPepNonceResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryAllPepNonceResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendEncryptedTx({ value, fee, memo }: sendEncryptedTxParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendEncryptedTx: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.encryptedTx({ value: EncryptedTx.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendEncryptedTx: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgSubmitGeneralEncryptedTx({
      value,
      fee,
      memo,
    }: sendMsgSubmitGeneralEncryptedTxParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgSubmitGeneralEncryptedTx: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgSubmitGeneralEncryptedTx({ value: MsgSubmitGeneralEncryptedTx.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgSubmitGeneralEncryptedTx: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgCreateAggregatedKeyShare({
      value,
      fee,
      memo,
    }: sendMsgCreateAggregatedKeyShareParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgCreateAggregatedKeyShare: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgCreateAggregatedKeyShare({ value: MsgCreateAggregatedKeyShare.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgCreateAggregatedKeyShare: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgSubmitEncryptedTx({ value, fee, memo }: sendMsgSubmitEncryptedTxParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgSubmitEncryptedTx: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgSubmitEncryptedTx({ value: MsgSubmitEncryptedTx.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgSubmitEncryptedTx: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgSubmitEncryptedTxResponse({
      value,
      fee,
      memo,
    }: sendMsgSubmitEncryptedTxResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgSubmitEncryptedTxResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgSubmitEncryptedTxResponse({ value: MsgSubmitEncryptedTxResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgSubmitEncryptedTxResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgCreateAggregatedKeyShareResponse({
      value,
      fee,
      memo,
    }: sendMsgCreateAggregatedKeyShareResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgCreateAggregatedKeyShareResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgCreateAggregatedKeyShareResponse({
          value: MsgCreateAggregatedKeyShareResponse.fromPartial(value),
        });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgCreateAggregatedKeyShareResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgGetGeneralKeyshareResponse({
      value,
      fee,
      memo,
    }: sendMsgGetGeneralKeyshareResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgGetGeneralKeyshareResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgGetGeneralKeyshareResponse({ value: MsgGetGeneralKeyshareResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgGetGeneralKeyshareResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryKeyshareRequest({ value, fee, memo }: sendQueryKeyshareRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryKeyshareRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryKeyshareRequest({ value: QueryKeyshareRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryKeyshareRequest: Could not broadcast Tx: ' + e.message);
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

    async sendQueryGetEncryptedTxResponse({
      value,
      fee,
      memo,
    }: sendQueryGetEncryptedTxResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryGetEncryptedTxResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryGetEncryptedTxResponse({ value: QueryGetEncryptedTxResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryGetEncryptedTxResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryLatestHeightResponse({
      value,
      fee,
      memo,
    }: sendQueryLatestHeightResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryLatestHeightResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryLatestHeightResponse({ value: QueryLatestHeightResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryLatestHeightResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendGeneralEncryptedTx({ value, fee, memo }: sendGeneralEncryptedTxParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendGeneralEncryptedTx: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.generalEncryptedTx({ value: GeneralEncryptedTx.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendGeneralEncryptedTx: Could not broadcast Tx: ' + e.message);
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

    async sendQueryAllKeyshareResponse({
      value,
      fee,
      memo,
    }: sendQueryAllKeyshareResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryAllKeyshareResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryAllKeyshareResponse({ value: QueryAllKeyshareResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryAllKeyshareResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryLatestHeightRequest({
      value,
      fee,
      memo,
    }: sendQueryLatestHeightRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryLatestHeightRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryLatestHeightRequest({ value: QueryLatestHeightRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryLatestHeightRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryGetPepNonceResponse({
      value,
      fee,
      memo,
    }: sendQueryGetPepNonceResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryGetPepNonceResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryGetPepNonceResponse({ value: QueryGetPepNonceResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryGetPepNonceResponse: Could not broadcast Tx: ' + e.message);
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

    queryPubKeyRequest({ value }: queryPubKeyRequestParams): EncodeObject {
      try {
        return { typeUrl: '/fairyring.pep.QueryPubKeyRequest', value: QueryPubKeyRequest.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:QueryPubKeyRequest: Could not create message: ' + e.message);
      }
    },

    pepNonce({ value }: pepNonceParams): EncodeObject {
      try {
        return { typeUrl: '/fairyring.pep.PepNonce', value: PepNonce.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:PepNonce: Could not create message: ' + e.message);
      }
    },

    queryAllEncryptedTxFromHeightResponse({ value }: queryAllEncryptedTxFromHeightResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/fairyring.pep.QueryAllEncryptedTxFromHeightResponse',
          value: QueryAllEncryptedTxFromHeightResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryAllEncryptedTxFromHeightResponse: Could not create message: ' + e.message);
      }
    },

    generalEncryptedTxArray({ value }: generalEncryptedTxArrayParams): EncodeObject {
      try {
        return { typeUrl: '/fairyring.pep.GeneralEncryptedTxArray', value: GeneralEncryptedTxArray.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:GeneralEncryptedTxArray: Could not create message: ' + e.message);
      }
    },

    queryAllEncryptedTxRequest({ value }: queryAllEncryptedTxRequestParams): EncodeObject {
      try {
        return {
          typeUrl: '/fairyring.pep.QueryAllEncryptedTxRequest',
          value: QueryAllEncryptedTxRequest.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryAllEncryptedTxRequest: Could not create message: ' + e.message);
      }
    },

    queryAllEncryptedTxFromHeightRequest({ value }: queryAllEncryptedTxFromHeightRequestParams): EncodeObject {
      try {
        return {
          typeUrl: '/fairyring.pep.QueryAllEncryptedTxFromHeightRequest',
          value: QueryAllEncryptedTxFromHeightRequest.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryAllEncryptedTxFromHeightRequest: Could not create message: ' + e.message);
      }
    },

    msgGetGeneralKeyshare({ value }: msgGetGeneralKeyshareParams): EncodeObject {
      try {
        return { typeUrl: '/fairyring.pep.MsgGetGeneralKeyshare', value: MsgGetGeneralKeyshare.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:MsgGetGeneralKeyshare: Could not create message: ' + e.message);
      }
    },

    queryKeyshareResponse({ value }: queryKeyshareResponseParams): EncodeObject {
      try {
        return { typeUrl: '/fairyring.pep.QueryKeyshareResponse', value: QueryKeyshareResponse.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:QueryKeyshareResponse: Could not create message: ' + e.message);
      }
    },

    queryAllKeyshareRequest({ value }: queryAllKeyshareRequestParams): EncodeObject {
      try {
        return { typeUrl: '/fairyring.pep.QueryAllKeyshareRequest', value: QueryAllKeyshareRequest.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:QueryAllKeyshareRequest: Could not create message: ' + e.message);
      }
    },

    queryPubKeyResponse({ value }: queryPubKeyResponseParams): EncodeObject {
      try {
        return { typeUrl: '/fairyring.pep.QueryPubKeyResponse', value: QueryPubKeyResponse.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:QueryPubKeyResponse: Could not create message: ' + e.message);
      }
    },

    genesisState({ value }: genesisStateParams): EncodeObject {
      try {
        return { typeUrl: '/fairyring.pep.GenesisState', value: GenesisState.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:GenesisState: Could not create message: ' + e.message);
      }
    },

    msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject {
      try {
        return { typeUrl: '/fairyring.pep.MsgUpdateParamsResponse', value: MsgUpdateParamsResponse.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:MsgUpdateParamsResponse: Could not create message: ' + e.message);
      }
    },

    msgRequestGeneralKeyshareResponse({ value }: msgRequestGeneralKeyshareResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/fairyring.pep.MsgRequestGeneralKeyshareResponse',
          value: MsgRequestGeneralKeyshareResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgRequestGeneralKeyshareResponse: Could not create message: ' + e.message);
      }
    },

    aggregatedKeyShare({ value }: aggregatedKeyShareParams): EncodeObject {
      try {
        return { typeUrl: '/fairyring.pep.AggregatedKeyShare', value: AggregatedKeyShare.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:AggregatedKeyShare: Could not create message: ' + e.message);
      }
    },

    queryAllPepNonceRequest({ value }: queryAllPepNonceRequestParams): EncodeObject {
      try {
        return { typeUrl: '/fairyring.pep.QueryAllPepNonceRequest', value: QueryAllPepNonceRequest.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:QueryAllPepNonceRequest: Could not create message: ' + e.message);
      }
    },

    encryptedTxArray({ value }: encryptedTxArrayParams): EncodeObject {
      try {
        return { typeUrl: '/fairyring.pep.EncryptedTxArray', value: EncryptedTxArray.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:EncryptedTxArray: Could not create message: ' + e.message);
      }
    },

    genEncTxExecutionQueue({ value }: genEncTxExecutionQueueParams): EncodeObject {
      try {
        return { typeUrl: '/fairyring.pep.GenEncTxExecutionQueue', value: GenEncTxExecutionQueue.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:GenEncTxExecutionQueue: Could not create message: ' + e.message);
      }
    },

    queryGetEncryptedTxRequest({ value }: queryGetEncryptedTxRequestParams): EncodeObject {
      try {
        return {
          typeUrl: '/fairyring.pep.QueryGetEncryptedTxRequest',
          value: QueryGetEncryptedTxRequest.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryGetEncryptedTxRequest: Could not create message: ' + e.message);
      }
    },

    msgRequestGeneralKeyshare({ value }: msgRequestGeneralKeyshareParams): EncodeObject {
      try {
        return {
          typeUrl: '/fairyring.pep.MsgRequestGeneralKeyshare',
          value: MsgRequestGeneralKeyshare.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgRequestGeneralKeyshare: Could not create message: ' + e.message);
      }
    },

    queryAllEncryptedTxResponse({ value }: queryAllEncryptedTxResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/fairyring.pep.QueryAllEncryptedTxResponse',
          value: QueryAllEncryptedTxResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryAllEncryptedTxResponse: Could not create message: ' + e.message);
      }
    },

    queryGetPepNonceRequest({ value }: queryGetPepNonceRequestParams): EncodeObject {
      try {
        return { typeUrl: '/fairyring.pep.QueryGetPepNonceRequest', value: QueryGetPepNonceRequest.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:QueryGetPepNonceRequest: Could not create message: ' + e.message);
      }
    },

    queryAllPepNonceResponse({ value }: queryAllPepNonceResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/fairyring.pep.QueryAllPepNonceResponse',
          value: QueryAllPepNonceResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryAllPepNonceResponse: Could not create message: ' + e.message);
      }
    },

    encryptedTx({ value }: encryptedTxParams): EncodeObject {
      try {
        return { typeUrl: '/fairyring.pep.EncryptedTx', value: EncryptedTx.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:EncryptedTx: Could not create message: ' + e.message);
      }
    },

    msgSubmitGeneralEncryptedTx({ value }: msgSubmitGeneralEncryptedTxParams): EncodeObject {
      try {
        return {
          typeUrl: '/fairyring.pep.MsgSubmitGeneralEncryptedTx',
          value: MsgSubmitGeneralEncryptedTx.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgSubmitGeneralEncryptedTx: Could not create message: ' + e.message);
      }
    },

    msgCreateAggregatedKeyShare({ value }: msgCreateAggregatedKeyShareParams): EncodeObject {
      try {
        return {
          typeUrl: '/fairyring.pep.MsgCreateAggregatedKeyShare',
          value: MsgCreateAggregatedKeyShare.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgCreateAggregatedKeyShare: Could not create message: ' + e.message);
      }
    },

    msgSubmitEncryptedTx({ value }: msgSubmitEncryptedTxParams): EncodeObject {
      try {
        return { typeUrl: '/fairyring.pep.MsgSubmitEncryptedTx', value: MsgSubmitEncryptedTx.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:MsgSubmitEncryptedTx: Could not create message: ' + e.message);
      }
    },

    msgSubmitEncryptedTxResponse({ value }: msgSubmitEncryptedTxResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/fairyring.pep.MsgSubmitEncryptedTxResponse',
          value: MsgSubmitEncryptedTxResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgSubmitEncryptedTxResponse: Could not create message: ' + e.message);
      }
    },

    msgCreateAggregatedKeyShareResponse({ value }: msgCreateAggregatedKeyShareResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/fairyring.pep.MsgCreateAggregatedKeyShareResponse',
          value: MsgCreateAggregatedKeyShareResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgCreateAggregatedKeyShareResponse: Could not create message: ' + e.message);
      }
    },

    msgGetGeneralKeyshareResponse({ value }: msgGetGeneralKeyshareResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/fairyring.pep.MsgGetGeneralKeyshareResponse',
          value: MsgGetGeneralKeyshareResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgGetGeneralKeyshareResponse: Could not create message: ' + e.message);
      }
    },

    queryKeyshareRequest({ value }: queryKeyshareRequestParams): EncodeObject {
      try {
        return { typeUrl: '/fairyring.pep.QueryKeyshareRequest', value: QueryKeyshareRequest.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:QueryKeyshareRequest: Could not create message: ' + e.message);
      }
    },

    msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject {
      try {
        return { typeUrl: '/fairyring.pep.MsgUpdateParams', value: MsgUpdateParams.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:MsgUpdateParams: Could not create message: ' + e.message);
      }
    },

    params({ value }: paramsParams): EncodeObject {
      try {
        return { typeUrl: '/fairyring.pep.Params', value: Params.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:Params: Could not create message: ' + e.message);
      }
    },

    queryGetEncryptedTxResponse({ value }: queryGetEncryptedTxResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/fairyring.pep.QueryGetEncryptedTxResponse',
          value: QueryGetEncryptedTxResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryGetEncryptedTxResponse: Could not create message: ' + e.message);
      }
    },

    queryLatestHeightResponse({ value }: queryLatestHeightResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/fairyring.pep.QueryLatestHeightResponse',
          value: QueryLatestHeightResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryLatestHeightResponse: Could not create message: ' + e.message);
      }
    },

    generalEncryptedTx({ value }: generalEncryptedTxParams): EncodeObject {
      try {
        return { typeUrl: '/fairyring.pep.GeneralEncryptedTx', value: GeneralEncryptedTx.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:GeneralEncryptedTx: Could not create message: ' + e.message);
      }
    },

    queryParamsResponse({ value }: queryParamsResponseParams): EncodeObject {
      try {
        return { typeUrl: '/fairyring.pep.QueryParamsResponse', value: QueryParamsResponse.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:QueryParamsResponse: Could not create message: ' + e.message);
      }
    },

    queryAllKeyshareResponse({ value }: queryAllKeyshareResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/fairyring.pep.QueryAllKeyshareResponse',
          value: QueryAllKeyshareResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryAllKeyshareResponse: Could not create message: ' + e.message);
      }
    },

    queryLatestHeightRequest({ value }: queryLatestHeightRequestParams): EncodeObject {
      try {
        return {
          typeUrl: '/fairyring.pep.QueryLatestHeightRequest',
          value: QueryLatestHeightRequest.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryLatestHeightRequest: Could not create message: ' + e.message);
      }
    },

    queryGetPepNonceResponse({ value }: queryGetPepNonceResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/fairyring.pep.QueryGetPepNonceResponse',
          value: QueryGetPepNonceResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryGetPepNonceResponse: Could not create message: ' + e.message);
      }
    },

    trustedCounterParty({ value }: trustedCounterPartyParams): EncodeObject {
      try {
        return { typeUrl: '/fairyring.pep.TrustedCounterParty', value: TrustedCounterParty.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:TrustedCounterParty: Could not create message: ' + e.message);
      }
    },

    queryParamsRequest({ value }: queryParamsRequestParams): EncodeObject {
      try {
        return { typeUrl: '/fairyring.pep.QueryParamsRequest', value: QueryParamsRequest.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:QueryParamsRequest: Could not create message: ' + e.message);
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
      FairyringPep: new SDKModule(test),
    },
    registry: msgTypes,
  };
};
export default IgntModule;
