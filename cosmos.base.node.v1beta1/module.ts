import { SigningStargateClient, DeliverTxResponse, StdFee } from '@cosmjs/stargate';
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from '@cosmjs/proto-signing';
import { msgTypes } from './registry';
import { IgniteClient } from '../client';
import { MissingWalletError } from '../helpers';
import { Api } from './rest';
import { StatusRequest } from './types/cosmos/base/node/v1beta1/query';
import { StatusResponse } from './types/cosmos/base/node/v1beta1/query';
import { ConfigRequest } from './types/cosmos/base/node/v1beta1/query';
import { ConfigResponse } from './types/cosmos/base/node/v1beta1/query';

export { StatusRequest, StatusResponse, ConfigRequest, ConfigResponse };

type sendStatusRequestParams = {
  value: StatusRequest;
  fee?: StdFee;
  memo?: string;
};

type sendStatusResponseParams = {
  value: StatusResponse;
  fee?: StdFee;
  memo?: string;
};

type sendConfigRequestParams = {
  value: ConfigRequest;
  fee?: StdFee;
  memo?: string;
};

type sendConfigResponseParams = {
  value: ConfigResponse;
  fee?: StdFee;
  memo?: string;
};

type statusRequestParams = {
  value: StatusRequest;
};

type statusResponseParams = {
  value: StatusResponse;
};

type configRequestParams = {
  value: ConfigRequest;
};

type configResponseParams = {
  value: ConfigResponse;
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
    async sendStatusRequest({ value, fee, memo }: sendStatusRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendStatusRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.statusRequest({ value: StatusRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendStatusRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendStatusResponse({ value, fee, memo }: sendStatusResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendStatusResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.statusResponse({ value: StatusResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendStatusResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendConfigRequest({ value, fee, memo }: sendConfigRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendConfigRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.configRequest({ value: ConfigRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendConfigRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendConfigResponse({ value, fee, memo }: sendConfigResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendConfigResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.configResponse({ value: ConfigResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendConfigResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    statusRequest({ value }: statusRequestParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.base.node.v1beta1.StatusRequest', value: StatusRequest.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:StatusRequest: Could not create message: ' + e.message);
      }
    },

    statusResponse({ value }: statusResponseParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.base.node.v1beta1.StatusResponse', value: StatusResponse.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:StatusResponse: Could not create message: ' + e.message);
      }
    },

    configRequest({ value }: configRequestParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.base.node.v1beta1.ConfigRequest', value: ConfigRequest.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:ConfigRequest: Could not create message: ' + e.message);
      }
    },

    configResponse({ value }: configResponseParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.base.node.v1beta1.ConfigResponse', value: ConfigResponse.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:ConfigResponse: Could not create message: ' + e.message);
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
      CosmosBaseNodeV1Beta1: new SDKModule(test),
    },
    registry: msgTypes,
  };
};
export default IgntModule;
