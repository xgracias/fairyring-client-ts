import { SigningStargateClient, DeliverTxResponse, StdFee } from '@cosmjs/stargate';
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from '@cosmjs/proto-signing';
import { msgTypes } from './registry';
import { IgniteClient } from '../client';
import { MissingWalletError } from '../helpers';
import { Api } from './rest';
import { GetBlockWithTxsRequest } from './types/cosmos/tx/v1beta1/service';
import { TxDecodeResponse } from './types/cosmos/tx/v1beta1/service';
import { AuthInfo } from './types/cosmos/tx/v1beta1/tx';
import { SignDocDirectAux } from './types/cosmos/tx/v1beta1/tx';
import { GetTxsEventResponse } from './types/cosmos/tx/v1beta1/service';
import { SimulateResponse } from './types/cosmos/tx/v1beta1/service';
import { GetTxRequest } from './types/cosmos/tx/v1beta1/service';
import { BroadcastTxResponse } from './types/cosmos/tx/v1beta1/service';
import { GetTxResponse } from './types/cosmos/tx/v1beta1/service';
import { TxEncodeResponse } from './types/cosmos/tx/v1beta1/service';
import { BroadcastTxRequest } from './types/cosmos/tx/v1beta1/service';
import { SimulateRequest } from './types/cosmos/tx/v1beta1/service';
import { GetBlockWithTxsResponse } from './types/cosmos/tx/v1beta1/service';
import { TxEncodeAminoResponse } from './types/cosmos/tx/v1beta1/service';
import { TxRaw } from './types/cosmos/tx/v1beta1/tx';
import { SignDoc } from './types/cosmos/tx/v1beta1/tx';
import { TxDecodeRequest } from './types/cosmos/tx/v1beta1/service';
import { TxEncodeRequest } from './types/cosmos/tx/v1beta1/service';
import { TxEncodeAminoRequest } from './types/cosmos/tx/v1beta1/service';
import { ModeInfo } from './types/cosmos/tx/v1beta1/tx';
import { GetTxsEventRequest } from './types/cosmos/tx/v1beta1/service';
import { Tx } from './types/cosmos/tx/v1beta1/tx';
import { TxBody } from './types/cosmos/tx/v1beta1/tx';
import { Fee } from './types/cosmos/tx/v1beta1/tx';
import { AuxSignerData } from './types/cosmos/tx/v1beta1/tx';
import { SignerInfo } from './types/cosmos/tx/v1beta1/tx';
import { ModeInfo_Multi } from './types/cosmos/tx/v1beta1/tx';
import { Tip } from './types/cosmos/tx/v1beta1/tx';
import { TxDecodeAminoRequest } from './types/cosmos/tx/v1beta1/service';
import { TxDecodeAminoResponse } from './types/cosmos/tx/v1beta1/service';
import { ModeInfo_Single } from './types/cosmos/tx/v1beta1/tx';

export {
  GetBlockWithTxsRequest,
  TxDecodeResponse,
  AuthInfo,
  SignDocDirectAux,
  GetTxsEventResponse,
  SimulateResponse,
  GetTxRequest,
  BroadcastTxResponse,
  GetTxResponse,
  TxEncodeResponse,
  BroadcastTxRequest,
  SimulateRequest,
  GetBlockWithTxsResponse,
  TxEncodeAminoResponse,
  TxRaw,
  SignDoc,
  TxDecodeRequest,
  TxEncodeRequest,
  TxEncodeAminoRequest,
  ModeInfo,
  GetTxsEventRequest,
  Tx,
  TxBody,
  Fee,
  AuxSignerData,
  SignerInfo,
  ModeInfo_Multi,
  Tip,
  TxDecodeAminoRequest,
  TxDecodeAminoResponse,
  ModeInfo_Single,
};

type sendGetBlockWithTxsRequestParams = {
  value: GetBlockWithTxsRequest;
  fee?: StdFee;
  memo?: string;
};

type sendTxDecodeResponseParams = {
  value: TxDecodeResponse;
  fee?: StdFee;
  memo?: string;
};

type sendAuthInfoParams = {
  value: AuthInfo;
  fee?: StdFee;
  memo?: string;
};

type sendSignDocDirectAuxParams = {
  value: SignDocDirectAux;
  fee?: StdFee;
  memo?: string;
};

type sendGetTxsEventResponseParams = {
  value: GetTxsEventResponse;
  fee?: StdFee;
  memo?: string;
};

type sendSimulateResponseParams = {
  value: SimulateResponse;
  fee?: StdFee;
  memo?: string;
};

type sendGetTxRequestParams = {
  value: GetTxRequest;
  fee?: StdFee;
  memo?: string;
};

type sendBroadcastTxResponseParams = {
  value: BroadcastTxResponse;
  fee?: StdFee;
  memo?: string;
};

type sendGetTxResponseParams = {
  value: GetTxResponse;
  fee?: StdFee;
  memo?: string;
};

type sendTxEncodeResponseParams = {
  value: TxEncodeResponse;
  fee?: StdFee;
  memo?: string;
};

type sendBroadcastTxRequestParams = {
  value: BroadcastTxRequest;
  fee?: StdFee;
  memo?: string;
};

type sendSimulateRequestParams = {
  value: SimulateRequest;
  fee?: StdFee;
  memo?: string;
};

type sendGetBlockWithTxsResponseParams = {
  value: GetBlockWithTxsResponse;
  fee?: StdFee;
  memo?: string;
};

type sendTxEncodeAminoResponseParams = {
  value: TxEncodeAminoResponse;
  fee?: StdFee;
  memo?: string;
};

type sendTxRawParams = {
  value: TxRaw;
  fee?: StdFee;
  memo?: string;
};

type sendSignDocParams = {
  value: SignDoc;
  fee?: StdFee;
  memo?: string;
};

type sendTxDecodeRequestParams = {
  value: TxDecodeRequest;
  fee?: StdFee;
  memo?: string;
};

type sendTxEncodeRequestParams = {
  value: TxEncodeRequest;
  fee?: StdFee;
  memo?: string;
};

type sendTxEncodeAminoRequestParams = {
  value: TxEncodeAminoRequest;
  fee?: StdFee;
  memo?: string;
};

type sendModeInfoParams = {
  value: ModeInfo;
  fee?: StdFee;
  memo?: string;
};

type sendGetTxsEventRequestParams = {
  value: GetTxsEventRequest;
  fee?: StdFee;
  memo?: string;
};

type sendTxParams = {
  value: Tx;
  fee?: StdFee;
  memo?: string;
};

type sendTxBodyParams = {
  value: TxBody;
  fee?: StdFee;
  memo?: string;
};

type sendFeeParams = {
  value: Fee;
  fee?: StdFee;
  memo?: string;
};

type sendAuxSignerDataParams = {
  value: AuxSignerData;
  fee?: StdFee;
  memo?: string;
};

type sendSignerInfoParams = {
  value: SignerInfo;
  fee?: StdFee;
  memo?: string;
};

type sendModeInfo_MultiParams = {
  value: ModeInfo_Multi;
  fee?: StdFee;
  memo?: string;
};

type sendTipParams = {
  value: Tip;
  fee?: StdFee;
  memo?: string;
};

type sendTxDecodeAminoRequestParams = {
  value: TxDecodeAminoRequest;
  fee?: StdFee;
  memo?: string;
};

type sendTxDecodeAminoResponseParams = {
  value: TxDecodeAminoResponse;
  fee?: StdFee;
  memo?: string;
};

type sendModeInfo_SingleParams = {
  value: ModeInfo_Single;
  fee?: StdFee;
  memo?: string;
};

type getBlockWithTxsRequestParams = {
  value: GetBlockWithTxsRequest;
};

type txDecodeResponseParams = {
  value: TxDecodeResponse;
};

type authInfoParams = {
  value: AuthInfo;
};

type signDocDirectAuxParams = {
  value: SignDocDirectAux;
};

type getTxsEventResponseParams = {
  value: GetTxsEventResponse;
};

type simulateResponseParams = {
  value: SimulateResponse;
};

type getTxRequestParams = {
  value: GetTxRequest;
};

type broadcastTxResponseParams = {
  value: BroadcastTxResponse;
};

type getTxResponseParams = {
  value: GetTxResponse;
};

type txEncodeResponseParams = {
  value: TxEncodeResponse;
};

type broadcastTxRequestParams = {
  value: BroadcastTxRequest;
};

type simulateRequestParams = {
  value: SimulateRequest;
};

type getBlockWithTxsResponseParams = {
  value: GetBlockWithTxsResponse;
};

type txEncodeAminoResponseParams = {
  value: TxEncodeAminoResponse;
};

type txRawParams = {
  value: TxRaw;
};

type signDocParams = {
  value: SignDoc;
};

type txDecodeRequestParams = {
  value: TxDecodeRequest;
};

type txEncodeRequestParams = {
  value: TxEncodeRequest;
};

type txEncodeAminoRequestParams = {
  value: TxEncodeAminoRequest;
};

type modeInfoParams = {
  value: ModeInfo;
};

type getTxsEventRequestParams = {
  value: GetTxsEventRequest;
};

type txParams = {
  value: Tx;
};

type txBodyParams = {
  value: TxBody;
};

type feeParams = {
  value: Fee;
};

type auxSignerDataParams = {
  value: AuxSignerData;
};

type signerInfoParams = {
  value: SignerInfo;
};

type modeInfoMultiParams = {
  value: ModeInfo_Multi;
};

type tipParams = {
  value: Tip;
};

type txDecodeAminoRequestParams = {
  value: TxDecodeAminoRequest;
};

type txDecodeAminoResponseParams = {
  value: TxDecodeAminoResponse;
};

type modeInfoSingleParams = {
  value: ModeInfo_Single;
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
    async sendGetBlockWithTxsRequest({
      value,
      fee,
      memo,
    }: sendGetBlockWithTxsRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendGetBlockWithTxsRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.getBlockWithTxsRequest({ value: GetBlockWithTxsRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendGetBlockWithTxsRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendTxDecodeResponse({ value, fee, memo }: sendTxDecodeResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendTxDecodeResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.txDecodeResponse({ value: TxDecodeResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendTxDecodeResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendAuthInfo({ value, fee, memo }: sendAuthInfoParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendAuthInfo: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.authInfo({ value: AuthInfo.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendAuthInfo: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendSignDocDirectAux({ value, fee, memo }: sendSignDocDirectAuxParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendSignDocDirectAux: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.signDocDirectAux({ value: SignDocDirectAux.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendSignDocDirectAux: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendGetTxsEventResponse({ value, fee, memo }: sendGetTxsEventResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendGetTxsEventResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.getTxsEventResponse({ value: GetTxsEventResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendGetTxsEventResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendSimulateResponse({ value, fee, memo }: sendSimulateResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendSimulateResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.simulateResponse({ value: SimulateResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendSimulateResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendGetTxRequest({ value, fee, memo }: sendGetTxRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendGetTxRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.getTxRequest({ value: GetTxRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendGetTxRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendBroadcastTxResponse({ value, fee, memo }: sendBroadcastTxResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendBroadcastTxResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.broadcastTxResponse({ value: BroadcastTxResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendBroadcastTxResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendGetTxResponse({ value, fee, memo }: sendGetTxResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendGetTxResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.getTxResponse({ value: GetTxResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendGetTxResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendTxEncodeResponse({ value, fee, memo }: sendTxEncodeResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendTxEncodeResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.txEncodeResponse({ value: TxEncodeResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendTxEncodeResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendBroadcastTxRequest({ value, fee, memo }: sendBroadcastTxRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendBroadcastTxRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.broadcastTxRequest({ value: BroadcastTxRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendBroadcastTxRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendSimulateRequest({ value, fee, memo }: sendSimulateRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendSimulateRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.simulateRequest({ value: SimulateRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendSimulateRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendGetBlockWithTxsResponse({
      value,
      fee,
      memo,
    }: sendGetBlockWithTxsResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendGetBlockWithTxsResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.getBlockWithTxsResponse({ value: GetBlockWithTxsResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendGetBlockWithTxsResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendTxEncodeAminoResponse({ value, fee, memo }: sendTxEncodeAminoResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendTxEncodeAminoResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.txEncodeAminoResponse({ value: TxEncodeAminoResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendTxEncodeAminoResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendTxRaw({ value, fee, memo }: sendTxRawParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendTxRaw: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.txRaw({ value: TxRaw.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendTxRaw: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendSignDoc({ value, fee, memo }: sendSignDocParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendSignDoc: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.signDoc({ value: SignDoc.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendSignDoc: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendTxDecodeRequest({ value, fee, memo }: sendTxDecodeRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendTxDecodeRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.txDecodeRequest({ value: TxDecodeRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendTxDecodeRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendTxEncodeRequest({ value, fee, memo }: sendTxEncodeRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendTxEncodeRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.txEncodeRequest({ value: TxEncodeRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendTxEncodeRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendTxEncodeAminoRequest({ value, fee, memo }: sendTxEncodeAminoRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendTxEncodeAminoRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.txEncodeAminoRequest({ value: TxEncodeAminoRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendTxEncodeAminoRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendModeInfo({ value, fee, memo }: sendModeInfoParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendModeInfo: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.modeInfo({ value: ModeInfo.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendModeInfo: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendGetTxsEventRequest({ value, fee, memo }: sendGetTxsEventRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendGetTxsEventRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.getTxsEventRequest({ value: GetTxsEventRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendGetTxsEventRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendTx({ value, fee, memo }: sendTxParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendTx: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.tx({ value: Tx.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendTx: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendTxBody({ value, fee, memo }: sendTxBodyParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendTxBody: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.txBody({ value: TxBody.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendTxBody: Could not broadcast Tx: ' + e.message);
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

    async sendAuxSignerData({ value, fee, memo }: sendAuxSignerDataParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendAuxSignerData: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.auxSignerData({ value: AuxSignerData.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendAuxSignerData: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendSignerInfo({ value, fee, memo }: sendSignerInfoParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendSignerInfo: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.signerInfo({ value: SignerInfo.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendSignerInfo: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendModeInfo_Multi({ value, fee, memo }: sendModeInfo_MultiParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendModeInfo_Multi: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.modeInfoMulti({ value: ModeInfo_Multi.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendModeInfo_Multi: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendTip({ value, fee, memo }: sendTipParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendTip: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.tip({ value: Tip.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendTip: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendTxDecodeAminoRequest({ value, fee, memo }: sendTxDecodeAminoRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendTxDecodeAminoRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.txDecodeAminoRequest({ value: TxDecodeAminoRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendTxDecodeAminoRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendTxDecodeAminoResponse({ value, fee, memo }: sendTxDecodeAminoResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendTxDecodeAminoResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.txDecodeAminoResponse({ value: TxDecodeAminoResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendTxDecodeAminoResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendModeInfo_Single({ value, fee, memo }: sendModeInfo_SingleParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendModeInfo_Single: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.modeInfoSingle({ value: ModeInfo_Single.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendModeInfo_Single: Could not broadcast Tx: ' + e.message);
      }
    },

    getBlockWithTxsRequest({ value }: getBlockWithTxsRequestParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.tx.v1beta1.GetBlockWithTxsRequest',
          value: GetBlockWithTxsRequest.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:GetBlockWithTxsRequest: Could not create message: ' + e.message);
      }
    },

    txDecodeResponse({ value }: txDecodeResponseParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.tx.v1beta1.TxDecodeResponse', value: TxDecodeResponse.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:TxDecodeResponse: Could not create message: ' + e.message);
      }
    },

    authInfo({ value }: authInfoParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.tx.v1beta1.AuthInfo', value: AuthInfo.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:AuthInfo: Could not create message: ' + e.message);
      }
    },

    signDocDirectAux({ value }: signDocDirectAuxParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.tx.v1beta1.SignDocDirectAux', value: SignDocDirectAux.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:SignDocDirectAux: Could not create message: ' + e.message);
      }
    },

    getTxsEventResponse({ value }: getTxsEventResponseParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.tx.v1beta1.GetTxsEventResponse', value: GetTxsEventResponse.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:GetTxsEventResponse: Could not create message: ' + e.message);
      }
    },

    simulateResponse({ value }: simulateResponseParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.tx.v1beta1.SimulateResponse', value: SimulateResponse.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:SimulateResponse: Could not create message: ' + e.message);
      }
    },

    getTxRequest({ value }: getTxRequestParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.tx.v1beta1.GetTxRequest', value: GetTxRequest.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:GetTxRequest: Could not create message: ' + e.message);
      }
    },

    broadcastTxResponse({ value }: broadcastTxResponseParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.tx.v1beta1.BroadcastTxResponse', value: BroadcastTxResponse.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:BroadcastTxResponse: Could not create message: ' + e.message);
      }
    },

    getTxResponse({ value }: getTxResponseParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.tx.v1beta1.GetTxResponse', value: GetTxResponse.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:GetTxResponse: Could not create message: ' + e.message);
      }
    },

    txEncodeResponse({ value }: txEncodeResponseParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.tx.v1beta1.TxEncodeResponse', value: TxEncodeResponse.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:TxEncodeResponse: Could not create message: ' + e.message);
      }
    },

    broadcastTxRequest({ value }: broadcastTxRequestParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.tx.v1beta1.BroadcastTxRequest', value: BroadcastTxRequest.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:BroadcastTxRequest: Could not create message: ' + e.message);
      }
    },

    simulateRequest({ value }: simulateRequestParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.tx.v1beta1.SimulateRequest', value: SimulateRequest.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:SimulateRequest: Could not create message: ' + e.message);
      }
    },

    getBlockWithTxsResponse({ value }: getBlockWithTxsResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.tx.v1beta1.GetBlockWithTxsResponse',
          value: GetBlockWithTxsResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:GetBlockWithTxsResponse: Could not create message: ' + e.message);
      }
    },

    txEncodeAminoResponse({ value }: txEncodeAminoResponseParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.tx.v1beta1.TxEncodeAminoResponse', value: TxEncodeAminoResponse.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:TxEncodeAminoResponse: Could not create message: ' + e.message);
      }
    },

    txRaw({ value }: txRawParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.tx.v1beta1.TxRaw', value: TxRaw.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:TxRaw: Could not create message: ' + e.message);
      }
    },

    signDoc({ value }: signDocParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.tx.v1beta1.SignDoc', value: SignDoc.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:SignDoc: Could not create message: ' + e.message);
      }
    },

    txDecodeRequest({ value }: txDecodeRequestParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.tx.v1beta1.TxDecodeRequest', value: TxDecodeRequest.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:TxDecodeRequest: Could not create message: ' + e.message);
      }
    },

    txEncodeRequest({ value }: txEncodeRequestParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.tx.v1beta1.TxEncodeRequest', value: TxEncodeRequest.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:TxEncodeRequest: Could not create message: ' + e.message);
      }
    },

    txEncodeAminoRequest({ value }: txEncodeAminoRequestParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.tx.v1beta1.TxEncodeAminoRequest', value: TxEncodeAminoRequest.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:TxEncodeAminoRequest: Could not create message: ' + e.message);
      }
    },

    modeInfo({ value }: modeInfoParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.tx.v1beta1.ModeInfo', value: ModeInfo.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:ModeInfo: Could not create message: ' + e.message);
      }
    },

    getTxsEventRequest({ value }: getTxsEventRequestParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.tx.v1beta1.GetTxsEventRequest', value: GetTxsEventRequest.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:GetTxsEventRequest: Could not create message: ' + e.message);
      }
    },

    tx({ value }: txParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.tx.v1beta1.Tx', value: Tx.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:Tx: Could not create message: ' + e.message);
      }
    },

    txBody({ value }: txBodyParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.tx.v1beta1.TxBody', value: TxBody.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:TxBody: Could not create message: ' + e.message);
      }
    },

    fee({ value }: feeParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.tx.v1beta1.Fee', value: Fee.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:Fee: Could not create message: ' + e.message);
      }
    },

    auxSignerData({ value }: auxSignerDataParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.tx.v1beta1.AuxSignerData', value: AuxSignerData.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:AuxSignerData: Could not create message: ' + e.message);
      }
    },

    signerInfo({ value }: signerInfoParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.tx.v1beta1.SignerInfo', value: SignerInfo.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:SignerInfo: Could not create message: ' + e.message);
      }
    },

    modeInfoMulti({ value }: modeInfoMultiParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.tx.v1beta1.ModeInfo_Multi', value: ModeInfo_Multi.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:ModeInfo_Multi: Could not create message: ' + e.message);
      }
    },

    tip({ value }: tipParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.tx.v1beta1.Tip', value: Tip.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:Tip: Could not create message: ' + e.message);
      }
    },

    txDecodeAminoRequest({ value }: txDecodeAminoRequestParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.tx.v1beta1.TxDecodeAminoRequest', value: TxDecodeAminoRequest.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:TxDecodeAminoRequest: Could not create message: ' + e.message);
      }
    },

    txDecodeAminoResponse({ value }: txDecodeAminoResponseParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.tx.v1beta1.TxDecodeAminoResponse', value: TxDecodeAminoResponse.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:TxDecodeAminoResponse: Could not create message: ' + e.message);
      }
    },

    modeInfoSingle({ value }: modeInfoSingleParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.tx.v1beta1.ModeInfo_Single', value: ModeInfo_Single.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:ModeInfo_Single: Could not create message: ' + e.message);
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
      CosmosTxV1Beta1: new SDKModule(test),
    },
    registry: msgTypes,
  };
};
export default IgntModule;
