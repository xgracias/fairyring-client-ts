import { SigningStargateClient, DeliverTxResponse, StdFee } from '@cosmjs/stargate';
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from '@cosmjs/proto-signing';
import { msgTypes } from './registry';
import { IgniteClient } from '../client';
import { MissingWalletError } from '../helpers';
import { Api } from './rest';
import { QueryAllGeneralKeyShareRequest } from './types/fairyring/keyshare/query';
import { MsgDeRegisterValidator } from './types/fairyring/keyshare/tx';
import { QueryGetValidatorSetRequest } from './types/fairyring/keyshare/query';
import { QueryGetValidatorSetResponse } from './types/fairyring/keyshare/query';
import { QueryAllValidatorSetRequest } from './types/fairyring/keyshare/query';
import { MsgOverrideLatestPubKey } from './types/fairyring/keyshare/tx';
import { MsgCreateAuthorizedAddressResponse } from './types/fairyring/keyshare/tx';
import { MsgCreateAuthorizedAddress } from './types/fairyring/keyshare/tx';
import { MsgCreateLatestPubKeyResponse } from './types/fairyring/keyshare/tx';
import { ValidatorSet } from './types/fairyring/keyshare/validator_set';
import { CounterPartyIBCInfo } from './types/fairyring/keyshare/requested_keyshare';
import { AggregatedKeyShare } from './types/fairyring/keyshare/aggregated_key_share';
import { MsgUpdateParamsResponse } from './types/fairyring/keyshare/tx';
import { MsgUpdateAuthorizedAddressResponse } from './types/fairyring/keyshare/tx';
import { MsgDeleteAuthorizedAddressResponse } from './types/fairyring/keyshare/tx';
import { RequestAggrKeysharePacketData } from './types/fairyring/keyshare/packet';
import { QueryVerifiableRandomnessQuery } from './types/fairyring/keyshare/query';
import { QueryPubKeyResponse } from './types/fairyring/keyshare/query';
import { MsgRegisterValidator } from './types/fairyring/keyshare/tx';
import { KeysharePacketData } from './types/fairyring/keyshare/packet';
import { RequestAggrKeysharePacketAck } from './types/fairyring/keyshare/packet';
import { EncryptedKeyShare } from './types/fairyring/keyshare/pub_key';
import { QueryGetKeyShareResponse } from './types/fairyring/keyshare/query';
import { QueryGetAuthorizedAddressResponse } from './types/fairyring/keyshare/query';
import { Commitments } from './types/fairyring/keyshare/commitments';
import { KeyShare } from './types/fairyring/keyshare/key_share';
import { KeyShareRequest } from './types/fairyring/keyshare/requested_keyshare';
import { QueryCommitmentsResponse } from './types/fairyring/keyshare/query';
import { QueryAllAggregatedKeyShareResponse } from './types/fairyring/keyshare/query';
import { QueryAllGeneralKeyShareResponse } from './types/fairyring/keyshare/query';
import { MsgDeleteAuthorizedAddress } from './types/fairyring/keyshare/tx';
import { NoData } from './types/fairyring/keyshare/packet';
import { CurrentKeysPacketData } from './types/fairyring/keyshare/packet';
import { QueryAllKeyShareResponse } from './types/fairyring/keyshare/query';
import { QueryGetGeneralKeyShareRequest } from './types/fairyring/keyshare/query';
import { MsgSendKeyshare } from './types/fairyring/keyshare/tx';
import { MsgOverrideLatestPubKeyResponse } from './types/fairyring/keyshare/tx';
import { QueryVerifiableRandomnessResponse } from './types/fairyring/keyshare/query';
import { QueryParamsResponse } from './types/fairyring/keyshare/query';
import { GetAggrKeysharePacketData } from './types/fairyring/keyshare/packet';
import { CurrentKeysPacketAck } from './types/fairyring/keyshare/packet';
import { GenesisState } from './types/fairyring/keyshare/genesis';
import { QueryCommitmentsRequest } from './types/fairyring/keyshare/query';
import { QueryGetKeyShareRequest } from './types/fairyring/keyshare/query';
import { QueryGetAggregatedKeyShareResponse } from './types/fairyring/keyshare/query';
import { MsgDeRegisterValidatorResponse } from './types/fairyring/keyshare/tx';
import { QueryAllValidatorSetResponse } from './types/fairyring/keyshare/query';
import { QueryAllKeyShareRequest } from './types/fairyring/keyshare/query';
import { QueryAllAuthorizedAddressResponse } from './types/fairyring/keyshare/query';
import { QueryGetAuthorizedAddressRequest } from './types/fairyring/keyshare/query';
import { QueryAllAuthorizedAddressRequest } from './types/fairyring/keyshare/query';
import { AggrKeyshareDataPacketAck } from './types/fairyring/keyshare/packet';
import { MsgSendKeyshareResponse } from './types/fairyring/keyshare/tx';
import { MsgCreateGeneralKeyShare } from './types/fairyring/keyshare/tx';
import { QueryParamsRequest } from './types/fairyring/keyshare/query';
import { QueryGetAggregatedKeyShareRequest } from './types/fairyring/keyshare/query';
import { ActivePubKey } from './types/fairyring/keyshare/pub_key';
import { MsgRegisterValidatorResponse } from './types/fairyring/keyshare/tx';
import { MsgCreateGeneralKeyShareResponse } from './types/fairyring/keyshare/tx';
import { AggrKeyshareDataPacketData } from './types/fairyring/keyshare/packet';
import { QueryGetGeneralKeyShareResponse } from './types/fairyring/keyshare/query';
import { MsgUpdateParams } from './types/fairyring/keyshare/tx';
import { QueryPubKeyRequest } from './types/fairyring/keyshare/query';
import { MsgUpdateAuthorizedAddress } from './types/fairyring/keyshare/tx';
import { GeneralKeyShare } from './types/fairyring/keyshare/general_key_share';
import { Params } from './types/fairyring/keyshare/params';
import { IBCInfo } from './types/fairyring/keyshare/requested_keyshare';
import { AuthorizedAddress } from './types/fairyring/keyshare/authorized_address';
import { QueuedPubKey } from './types/fairyring/keyshare/pub_key';
import { QueryAllAggregatedKeyShareRequest } from './types/fairyring/keyshare/query';
import { GetAggrKeysharePacketAck } from './types/fairyring/keyshare/packet';
import { MsgCreateLatestPubKey } from './types/fairyring/keyshare/tx';

export {
  QueryAllGeneralKeyShareRequest,
  MsgDeRegisterValidator,
  QueryGetValidatorSetRequest,
  QueryGetValidatorSetResponse,
  QueryAllValidatorSetRequest,
  MsgOverrideLatestPubKey,
  MsgCreateAuthorizedAddressResponse,
  MsgCreateAuthorizedAddress,
  MsgCreateLatestPubKeyResponse,
  ValidatorSet,
  CounterPartyIBCInfo,
  AggregatedKeyShare,
  MsgUpdateParamsResponse,
  MsgUpdateAuthorizedAddressResponse,
  MsgDeleteAuthorizedAddressResponse,
  RequestAggrKeysharePacketData,
  QueryVerifiableRandomnessQuery,
  QueryPubKeyResponse,
  MsgRegisterValidator,
  KeysharePacketData,
  RequestAggrKeysharePacketAck,
  EncryptedKeyShare,
  QueryGetKeyShareResponse,
  QueryGetAuthorizedAddressResponse,
  Commitments,
  KeyShare,
  KeyShareRequest,
  QueryCommitmentsResponse,
  QueryAllAggregatedKeyShareResponse,
  QueryAllGeneralKeyShareResponse,
  MsgDeleteAuthorizedAddress,
  NoData,
  CurrentKeysPacketData,
  QueryAllKeyShareResponse,
  QueryGetGeneralKeyShareRequest,
  MsgSendKeyshare,
  MsgOverrideLatestPubKeyResponse,
  QueryVerifiableRandomnessResponse,
  QueryParamsResponse,
  GetAggrKeysharePacketData,
  CurrentKeysPacketAck,
  GenesisState,
  QueryCommitmentsRequest,
  QueryGetKeyShareRequest,
  QueryGetAggregatedKeyShareResponse,
  MsgDeRegisterValidatorResponse,
  QueryAllValidatorSetResponse,
  QueryAllKeyShareRequest,
  QueryAllAuthorizedAddressResponse,
  QueryGetAuthorizedAddressRequest,
  QueryAllAuthorizedAddressRequest,
  AggrKeyshareDataPacketAck,
  MsgSendKeyshareResponse,
  MsgCreateGeneralKeyShare,
  QueryParamsRequest,
  QueryGetAggregatedKeyShareRequest,
  ActivePubKey,
  MsgRegisterValidatorResponse,
  MsgCreateGeneralKeyShareResponse,
  AggrKeyshareDataPacketData,
  QueryGetGeneralKeyShareResponse,
  MsgUpdateParams,
  QueryPubKeyRequest,
  MsgUpdateAuthorizedAddress,
  GeneralKeyShare,
  Params,
  IBCInfo,
  AuthorizedAddress,
  QueuedPubKey,
  QueryAllAggregatedKeyShareRequest,
  GetAggrKeysharePacketAck,
  MsgCreateLatestPubKey,
};

type sendQueryAllGeneralKeyShareRequestParams = {
  value: QueryAllGeneralKeyShareRequest;
  fee?: StdFee;
  memo?: string;
};

type sendMsgDeRegisterValidatorParams = {
  value: MsgDeRegisterValidator;
  fee?: StdFee;
  memo?: string;
};

type sendQueryGetValidatorSetRequestParams = {
  value: QueryGetValidatorSetRequest;
  fee?: StdFee;
  memo?: string;
};

type sendQueryGetValidatorSetResponseParams = {
  value: QueryGetValidatorSetResponse;
  fee?: StdFee;
  memo?: string;
};

type sendQueryAllValidatorSetRequestParams = {
  value: QueryAllValidatorSetRequest;
  fee?: StdFee;
  memo?: string;
};

type sendMsgOverrideLatestPubKeyParams = {
  value: MsgOverrideLatestPubKey;
  fee?: StdFee;
  memo?: string;
};

type sendMsgCreateAuthorizedAddressResponseParams = {
  value: MsgCreateAuthorizedAddressResponse;
  fee?: StdFee;
  memo?: string;
};

type sendMsgCreateAuthorizedAddressParams = {
  value: MsgCreateAuthorizedAddress;
  fee?: StdFee;
  memo?: string;
};

type sendMsgCreateLatestPubKeyResponseParams = {
  value: MsgCreateLatestPubKeyResponse;
  fee?: StdFee;
  memo?: string;
};

type sendValidatorSetParams = {
  value: ValidatorSet;
  fee?: StdFee;
  memo?: string;
};

type sendCounterPartyIBCInfoParams = {
  value: CounterPartyIBCInfo;
  fee?: StdFee;
  memo?: string;
};

type sendAggregatedKeyShareParams = {
  value: AggregatedKeyShare;
  fee?: StdFee;
  memo?: string;
};

type sendMsgUpdateParamsResponseParams = {
  value: MsgUpdateParamsResponse;
  fee?: StdFee;
  memo?: string;
};

type sendMsgUpdateAuthorizedAddressResponseParams = {
  value: MsgUpdateAuthorizedAddressResponse;
  fee?: StdFee;
  memo?: string;
};

type sendMsgDeleteAuthorizedAddressResponseParams = {
  value: MsgDeleteAuthorizedAddressResponse;
  fee?: StdFee;
  memo?: string;
};

type sendRequestAggrKeysharePacketDataParams = {
  value: RequestAggrKeysharePacketData;
  fee?: StdFee;
  memo?: string;
};

type sendQueryVerifiableRandomnessQueryParams = {
  value: QueryVerifiableRandomnessQuery;
  fee?: StdFee;
  memo?: string;
};

type sendQueryPubKeyResponseParams = {
  value: QueryPubKeyResponse;
  fee?: StdFee;
  memo?: string;
};

type sendMsgRegisterValidatorParams = {
  value: MsgRegisterValidator;
  fee?: StdFee;
  memo?: string;
};

type sendKeysharePacketDataParams = {
  value: KeysharePacketData;
  fee?: StdFee;
  memo?: string;
};

type sendRequestAggrKeysharePacketAckParams = {
  value: RequestAggrKeysharePacketAck;
  fee?: StdFee;
  memo?: string;
};

type sendEncryptedKeyShareParams = {
  value: EncryptedKeyShare;
  fee?: StdFee;
  memo?: string;
};

type sendQueryGetKeyShareResponseParams = {
  value: QueryGetKeyShareResponse;
  fee?: StdFee;
  memo?: string;
};

type sendQueryGetAuthorizedAddressResponseParams = {
  value: QueryGetAuthorizedAddressResponse;
  fee?: StdFee;
  memo?: string;
};

type sendCommitmentsParams = {
  value: Commitments;
  fee?: StdFee;
  memo?: string;
};

type sendKeyShareParams = {
  value: KeyShare;
  fee?: StdFee;
  memo?: string;
};

type sendKeyShareRequestParams = {
  value: KeyShareRequest;
  fee?: StdFee;
  memo?: string;
};

type sendQueryCommitmentsResponseParams = {
  value: QueryCommitmentsResponse;
  fee?: StdFee;
  memo?: string;
};

type sendQueryAllAggregatedKeyShareResponseParams = {
  value: QueryAllAggregatedKeyShareResponse;
  fee?: StdFee;
  memo?: string;
};

type sendQueryAllGeneralKeyShareResponseParams = {
  value: QueryAllGeneralKeyShareResponse;
  fee?: StdFee;
  memo?: string;
};

type sendMsgDeleteAuthorizedAddressParams = {
  value: MsgDeleteAuthorizedAddress;
  fee?: StdFee;
  memo?: string;
};

type sendNoDataParams = {
  value: NoData;
  fee?: StdFee;
  memo?: string;
};

type sendCurrentKeysPacketDataParams = {
  value: CurrentKeysPacketData;
  fee?: StdFee;
  memo?: string;
};

type sendQueryAllKeyShareResponseParams = {
  value: QueryAllKeyShareResponse;
  fee?: StdFee;
  memo?: string;
};

type sendQueryGetGeneralKeyShareRequestParams = {
  value: QueryGetGeneralKeyShareRequest;
  fee?: StdFee;
  memo?: string;
};

type sendMsgSendKeyshareParams = {
  value: MsgSendKeyshare;
  fee?: StdFee;
  memo?: string;
};

type sendMsgOverrideLatestPubKeyResponseParams = {
  value: MsgOverrideLatestPubKeyResponse;
  fee?: StdFee;
  memo?: string;
};

type sendQueryVerifiableRandomnessResponseParams = {
  value: QueryVerifiableRandomnessResponse;
  fee?: StdFee;
  memo?: string;
};

type sendQueryParamsResponseParams = {
  value: QueryParamsResponse;
  fee?: StdFee;
  memo?: string;
};

type sendGetAggrKeysharePacketDataParams = {
  value: GetAggrKeysharePacketData;
  fee?: StdFee;
  memo?: string;
};

type sendCurrentKeysPacketAckParams = {
  value: CurrentKeysPacketAck;
  fee?: StdFee;
  memo?: string;
};

type sendGenesisStateParams = {
  value: GenesisState;
  fee?: StdFee;
  memo?: string;
};

type sendQueryCommitmentsRequestParams = {
  value: QueryCommitmentsRequest;
  fee?: StdFee;
  memo?: string;
};

type sendQueryGetKeyShareRequestParams = {
  value: QueryGetKeyShareRequest;
  fee?: StdFee;
  memo?: string;
};

type sendQueryGetAggregatedKeyShareResponseParams = {
  value: QueryGetAggregatedKeyShareResponse;
  fee?: StdFee;
  memo?: string;
};

type sendMsgDeRegisterValidatorResponseParams = {
  value: MsgDeRegisterValidatorResponse;
  fee?: StdFee;
  memo?: string;
};

type sendQueryAllValidatorSetResponseParams = {
  value: QueryAllValidatorSetResponse;
  fee?: StdFee;
  memo?: string;
};

type sendQueryAllKeyShareRequestParams = {
  value: QueryAllKeyShareRequest;
  fee?: StdFee;
  memo?: string;
};

type sendQueryAllAuthorizedAddressResponseParams = {
  value: QueryAllAuthorizedAddressResponse;
  fee?: StdFee;
  memo?: string;
};

type sendQueryGetAuthorizedAddressRequestParams = {
  value: QueryGetAuthorizedAddressRequest;
  fee?: StdFee;
  memo?: string;
};

type sendQueryAllAuthorizedAddressRequestParams = {
  value: QueryAllAuthorizedAddressRequest;
  fee?: StdFee;
  memo?: string;
};

type sendAggrKeyshareDataPacketAckParams = {
  value: AggrKeyshareDataPacketAck;
  fee?: StdFee;
  memo?: string;
};

type sendMsgSendKeyshareResponseParams = {
  value: MsgSendKeyshareResponse;
  fee?: StdFee;
  memo?: string;
};

type sendMsgCreateGeneralKeyShareParams = {
  value: MsgCreateGeneralKeyShare;
  fee?: StdFee;
  memo?: string;
};

type sendQueryParamsRequestParams = {
  value: QueryParamsRequest;
  fee?: StdFee;
  memo?: string;
};

type sendQueryGetAggregatedKeyShareRequestParams = {
  value: QueryGetAggregatedKeyShareRequest;
  fee?: StdFee;
  memo?: string;
};

type sendActivePubKeyParams = {
  value: ActivePubKey;
  fee?: StdFee;
  memo?: string;
};

type sendMsgRegisterValidatorResponseParams = {
  value: MsgRegisterValidatorResponse;
  fee?: StdFee;
  memo?: string;
};

type sendMsgCreateGeneralKeyShareResponseParams = {
  value: MsgCreateGeneralKeyShareResponse;
  fee?: StdFee;
  memo?: string;
};

type sendAggrKeyshareDataPacketDataParams = {
  value: AggrKeyshareDataPacketData;
  fee?: StdFee;
  memo?: string;
};

type sendQueryGetGeneralKeyShareResponseParams = {
  value: QueryGetGeneralKeyShareResponse;
  fee?: StdFee;
  memo?: string;
};

type sendMsgUpdateParamsParams = {
  value: MsgUpdateParams;
  fee?: StdFee;
  memo?: string;
};

type sendQueryPubKeyRequestParams = {
  value: QueryPubKeyRequest;
  fee?: StdFee;
  memo?: string;
};

type sendMsgUpdateAuthorizedAddressParams = {
  value: MsgUpdateAuthorizedAddress;
  fee?: StdFee;
  memo?: string;
};

type sendGeneralKeyShareParams = {
  value: GeneralKeyShare;
  fee?: StdFee;
  memo?: string;
};

type sendParamsParams = {
  value: Params;
  fee?: StdFee;
  memo?: string;
};

type sendIBCInfoParams = {
  value: IBCInfo;
  fee?: StdFee;
  memo?: string;
};

type sendAuthorizedAddressParams = {
  value: AuthorizedAddress;
  fee?: StdFee;
  memo?: string;
};

type sendQueuedPubKeyParams = {
  value: QueuedPubKey;
  fee?: StdFee;
  memo?: string;
};

type sendQueryAllAggregatedKeyShareRequestParams = {
  value: QueryAllAggregatedKeyShareRequest;
  fee?: StdFee;
  memo?: string;
};

type sendGetAggrKeysharePacketAckParams = {
  value: GetAggrKeysharePacketAck;
  fee?: StdFee;
  memo?: string;
};

type sendMsgCreateLatestPubKeyParams = {
  value: MsgCreateLatestPubKey;
  fee?: StdFee;
  memo?: string;
};

type queryAllGeneralKeyShareRequestParams = {
  value: QueryAllGeneralKeyShareRequest;
};

type msgDeRegisterValidatorParams = {
  value: MsgDeRegisterValidator;
};

type queryGetValidatorSetRequestParams = {
  value: QueryGetValidatorSetRequest;
};

type queryGetValidatorSetResponseParams = {
  value: QueryGetValidatorSetResponse;
};

type queryAllValidatorSetRequestParams = {
  value: QueryAllValidatorSetRequest;
};

type msgOverrideLatestPubKeyParams = {
  value: MsgOverrideLatestPubKey;
};

type msgCreateAuthorizedAddressResponseParams = {
  value: MsgCreateAuthorizedAddressResponse;
};

type msgCreateAuthorizedAddressParams = {
  value: MsgCreateAuthorizedAddress;
};

type msgCreateLatestPubKeyResponseParams = {
  value: MsgCreateLatestPubKeyResponse;
};

type validatorSetParams = {
  value: ValidatorSet;
};

type counterPartyIbcinfoParams = {
  value: CounterPartyIBCInfo;
};

type aggregatedKeyShareParams = {
  value: AggregatedKeyShare;
};

type msgUpdateParamsResponseParams = {
  value: MsgUpdateParamsResponse;
};

type msgUpdateAuthorizedAddressResponseParams = {
  value: MsgUpdateAuthorizedAddressResponse;
};

type msgDeleteAuthorizedAddressResponseParams = {
  value: MsgDeleteAuthorizedAddressResponse;
};

type requestAggrKeysharePacketDataParams = {
  value: RequestAggrKeysharePacketData;
};

type queryVerifiableRandomnessQueryParams = {
  value: QueryVerifiableRandomnessQuery;
};

type queryPubKeyResponseParams = {
  value: QueryPubKeyResponse;
};

type msgRegisterValidatorParams = {
  value: MsgRegisterValidator;
};

type keysharePacketDataParams = {
  value: KeysharePacketData;
};

type requestAggrKeysharePacketAckParams = {
  value: RequestAggrKeysharePacketAck;
};

type encryptedKeyShareParams = {
  value: EncryptedKeyShare;
};

type queryGetKeyShareResponseParams = {
  value: QueryGetKeyShareResponse;
};

type queryGetAuthorizedAddressResponseParams = {
  value: QueryGetAuthorizedAddressResponse;
};

type commitmentsParams = {
  value: Commitments;
};

type keyShareParams = {
  value: KeyShare;
};

type keyShareRequestParams = {
  value: KeyShareRequest;
};

type queryCommitmentsResponseParams = {
  value: QueryCommitmentsResponse;
};

type queryAllAggregatedKeyShareResponseParams = {
  value: QueryAllAggregatedKeyShareResponse;
};

type queryAllGeneralKeyShareResponseParams = {
  value: QueryAllGeneralKeyShareResponse;
};

type msgDeleteAuthorizedAddressParams = {
  value: MsgDeleteAuthorizedAddress;
};

type noDataParams = {
  value: NoData;
};

type currentKeysPacketDataParams = {
  value: CurrentKeysPacketData;
};

type queryAllKeyShareResponseParams = {
  value: QueryAllKeyShareResponse;
};

type queryGetGeneralKeyShareRequestParams = {
  value: QueryGetGeneralKeyShareRequest;
};

type msgSendKeyshareParams = {
  value: MsgSendKeyshare;
};

type msgOverrideLatestPubKeyResponseParams = {
  value: MsgOverrideLatestPubKeyResponse;
};

type queryVerifiableRandomnessResponseParams = {
  value: QueryVerifiableRandomnessResponse;
};

type queryParamsResponseParams = {
  value: QueryParamsResponse;
};

type getAggrKeysharePacketDataParams = {
  value: GetAggrKeysharePacketData;
};

type currentKeysPacketAckParams = {
  value: CurrentKeysPacketAck;
};

type genesisStateParams = {
  value: GenesisState;
};

type queryCommitmentsRequestParams = {
  value: QueryCommitmentsRequest;
};

type queryGetKeyShareRequestParams = {
  value: QueryGetKeyShareRequest;
};

type queryGetAggregatedKeyShareResponseParams = {
  value: QueryGetAggregatedKeyShareResponse;
};

type msgDeRegisterValidatorResponseParams = {
  value: MsgDeRegisterValidatorResponse;
};

type queryAllValidatorSetResponseParams = {
  value: QueryAllValidatorSetResponse;
};

type queryAllKeyShareRequestParams = {
  value: QueryAllKeyShareRequest;
};

type queryAllAuthorizedAddressResponseParams = {
  value: QueryAllAuthorizedAddressResponse;
};

type queryGetAuthorizedAddressRequestParams = {
  value: QueryGetAuthorizedAddressRequest;
};

type queryAllAuthorizedAddressRequestParams = {
  value: QueryAllAuthorizedAddressRequest;
};

type aggrKeyshareDataPacketAckParams = {
  value: AggrKeyshareDataPacketAck;
};

type msgSendKeyshareResponseParams = {
  value: MsgSendKeyshareResponse;
};

type msgCreateGeneralKeyShareParams = {
  value: MsgCreateGeneralKeyShare;
};

type queryParamsRequestParams = {
  value: QueryParamsRequest;
};

type queryGetAggregatedKeyShareRequestParams = {
  value: QueryGetAggregatedKeyShareRequest;
};

type activePubKeyParams = {
  value: ActivePubKey;
};

type msgRegisterValidatorResponseParams = {
  value: MsgRegisterValidatorResponse;
};

type msgCreateGeneralKeyShareResponseParams = {
  value: MsgCreateGeneralKeyShareResponse;
};

type aggrKeyshareDataPacketDataParams = {
  value: AggrKeyshareDataPacketData;
};

type queryGetGeneralKeyShareResponseParams = {
  value: QueryGetGeneralKeyShareResponse;
};

type msgUpdateParamsParams = {
  value: MsgUpdateParams;
};

type queryPubKeyRequestParams = {
  value: QueryPubKeyRequest;
};

type msgUpdateAuthorizedAddressParams = {
  value: MsgUpdateAuthorizedAddress;
};

type generalKeyShareParams = {
  value: GeneralKeyShare;
};

type paramsParams = {
  value: Params;
};

type ibcinfoParams = {
  value: IBCInfo;
};

type authorizedAddressParams = {
  value: AuthorizedAddress;
};

type queuedPubKeyParams = {
  value: QueuedPubKey;
};

type queryAllAggregatedKeyShareRequestParams = {
  value: QueryAllAggregatedKeyShareRequest;
};

type getAggrKeysharePacketAckParams = {
  value: GetAggrKeysharePacketAck;
};

type msgCreateLatestPubKeyParams = {
  value: MsgCreateLatestPubKey;
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
    async sendQueryAllGeneralKeyShareRequest({
      value,
      fee,
      memo,
    }: sendQueryAllGeneralKeyShareRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryAllGeneralKeyShareRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryAllGeneralKeyShareRequest({ value: QueryAllGeneralKeyShareRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryAllGeneralKeyShareRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgDeRegisterValidator({
      value,
      fee,
      memo,
    }: sendMsgDeRegisterValidatorParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgDeRegisterValidator: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgDeRegisterValidator({ value: MsgDeRegisterValidator.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgDeRegisterValidator: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryGetValidatorSetRequest({
      value,
      fee,
      memo,
    }: sendQueryGetValidatorSetRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryGetValidatorSetRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryGetValidatorSetRequest({ value: QueryGetValidatorSetRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryGetValidatorSetRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryGetValidatorSetResponse({
      value,
      fee,
      memo,
    }: sendQueryGetValidatorSetResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryGetValidatorSetResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryGetValidatorSetResponse({ value: QueryGetValidatorSetResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryGetValidatorSetResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryAllValidatorSetRequest({
      value,
      fee,
      memo,
    }: sendQueryAllValidatorSetRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryAllValidatorSetRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryAllValidatorSetRequest({ value: QueryAllValidatorSetRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryAllValidatorSetRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgOverrideLatestPubKey({
      value,
      fee,
      memo,
    }: sendMsgOverrideLatestPubKeyParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgOverrideLatestPubKey: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgOverrideLatestPubKey({ value: MsgOverrideLatestPubKey.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgOverrideLatestPubKey: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgCreateAuthorizedAddressResponse({
      value,
      fee,
      memo,
    }: sendMsgCreateAuthorizedAddressResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgCreateAuthorizedAddressResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgCreateAuthorizedAddressResponse({
          value: MsgCreateAuthorizedAddressResponse.fromPartial(value),
        });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgCreateAuthorizedAddressResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgCreateAuthorizedAddress({
      value,
      fee,
      memo,
    }: sendMsgCreateAuthorizedAddressParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgCreateAuthorizedAddress: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgCreateAuthorizedAddress({ value: MsgCreateAuthorizedAddress.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgCreateAuthorizedAddress: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgCreateLatestPubKeyResponse({
      value,
      fee,
      memo,
    }: sendMsgCreateLatestPubKeyResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgCreateLatestPubKeyResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgCreateLatestPubKeyResponse({ value: MsgCreateLatestPubKeyResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgCreateLatestPubKeyResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendValidatorSet({ value, fee, memo }: sendValidatorSetParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendValidatorSet: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.validatorSet({ value: ValidatorSet.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendValidatorSet: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendCounterPartyIBCInfo({ value, fee, memo }: sendCounterPartyIBCInfoParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendCounterPartyIBCInfo: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.counterPartyIbcinfo({ value: CounterPartyIBCInfo.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendCounterPartyIBCInfo: Could not broadcast Tx: ' + e.message);
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

    async sendMsgUpdateAuthorizedAddressResponse({
      value,
      fee,
      memo,
    }: sendMsgUpdateAuthorizedAddressResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgUpdateAuthorizedAddressResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgUpdateAuthorizedAddressResponse({
          value: MsgUpdateAuthorizedAddressResponse.fromPartial(value),
        });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgUpdateAuthorizedAddressResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgDeleteAuthorizedAddressResponse({
      value,
      fee,
      memo,
    }: sendMsgDeleteAuthorizedAddressResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgDeleteAuthorizedAddressResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgDeleteAuthorizedAddressResponse({
          value: MsgDeleteAuthorizedAddressResponse.fromPartial(value),
        });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgDeleteAuthorizedAddressResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendRequestAggrKeysharePacketData({
      value,
      fee,
      memo,
    }: sendRequestAggrKeysharePacketDataParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendRequestAggrKeysharePacketData: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.requestAggrKeysharePacketData({ value: RequestAggrKeysharePacketData.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendRequestAggrKeysharePacketData: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryVerifiableRandomnessQuery({
      value,
      fee,
      memo,
    }: sendQueryVerifiableRandomnessQueryParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryVerifiableRandomnessQuery: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryVerifiableRandomnessQuery({ value: QueryVerifiableRandomnessQuery.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryVerifiableRandomnessQuery: Could not broadcast Tx: ' + e.message);
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

    async sendMsgRegisterValidator({ value, fee, memo }: sendMsgRegisterValidatorParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgRegisterValidator: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgRegisterValidator({ value: MsgRegisterValidator.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgRegisterValidator: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendKeysharePacketData({ value, fee, memo }: sendKeysharePacketDataParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendKeysharePacketData: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.keysharePacketData({ value: KeysharePacketData.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendKeysharePacketData: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendRequestAggrKeysharePacketAck({
      value,
      fee,
      memo,
    }: sendRequestAggrKeysharePacketAckParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendRequestAggrKeysharePacketAck: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.requestAggrKeysharePacketAck({ value: RequestAggrKeysharePacketAck.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendRequestAggrKeysharePacketAck: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendEncryptedKeyShare({ value, fee, memo }: sendEncryptedKeyShareParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendEncryptedKeyShare: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.encryptedKeyShare({ value: EncryptedKeyShare.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendEncryptedKeyShare: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryGetKeyShareResponse({
      value,
      fee,
      memo,
    }: sendQueryGetKeyShareResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryGetKeyShareResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryGetKeyShareResponse({ value: QueryGetKeyShareResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryGetKeyShareResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryGetAuthorizedAddressResponse({
      value,
      fee,
      memo,
    }: sendQueryGetAuthorizedAddressResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryGetAuthorizedAddressResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryGetAuthorizedAddressResponse({
          value: QueryGetAuthorizedAddressResponse.fromPartial(value),
        });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryGetAuthorizedAddressResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendCommitments({ value, fee, memo }: sendCommitmentsParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendCommitments: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.commitments({ value: Commitments.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendCommitments: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendKeyShare({ value, fee, memo }: sendKeyShareParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendKeyShare: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.keyShare({ value: KeyShare.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendKeyShare: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendKeyShareRequest({ value, fee, memo }: sendKeyShareRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendKeyShareRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.keyShareRequest({ value: KeyShareRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendKeyShareRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryCommitmentsResponse({
      value,
      fee,
      memo,
    }: sendQueryCommitmentsResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryCommitmentsResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryCommitmentsResponse({ value: QueryCommitmentsResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryCommitmentsResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryAllAggregatedKeyShareResponse({
      value,
      fee,
      memo,
    }: sendQueryAllAggregatedKeyShareResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryAllAggregatedKeyShareResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryAllAggregatedKeyShareResponse({
          value: QueryAllAggregatedKeyShareResponse.fromPartial(value),
        });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryAllAggregatedKeyShareResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryAllGeneralKeyShareResponse({
      value,
      fee,
      memo,
    }: sendQueryAllGeneralKeyShareResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryAllGeneralKeyShareResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryAllGeneralKeyShareResponse({ value: QueryAllGeneralKeyShareResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryAllGeneralKeyShareResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgDeleteAuthorizedAddress({
      value,
      fee,
      memo,
    }: sendMsgDeleteAuthorizedAddressParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgDeleteAuthorizedAddress: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgDeleteAuthorizedAddress({ value: MsgDeleteAuthorizedAddress.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgDeleteAuthorizedAddress: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendNoData({ value, fee, memo }: sendNoDataParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendNoData: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.noData({ value: NoData.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendNoData: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendCurrentKeysPacketData({ value, fee, memo }: sendCurrentKeysPacketDataParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendCurrentKeysPacketData: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.currentKeysPacketData({ value: CurrentKeysPacketData.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendCurrentKeysPacketData: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryAllKeyShareResponse({
      value,
      fee,
      memo,
    }: sendQueryAllKeyShareResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryAllKeyShareResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryAllKeyShareResponse({ value: QueryAllKeyShareResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryAllKeyShareResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryGetGeneralKeyShareRequest({
      value,
      fee,
      memo,
    }: sendQueryGetGeneralKeyShareRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryGetGeneralKeyShareRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryGetGeneralKeyShareRequest({ value: QueryGetGeneralKeyShareRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryGetGeneralKeyShareRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgSendKeyshare({ value, fee, memo }: sendMsgSendKeyshareParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgSendKeyshare: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgSendKeyshare({ value: MsgSendKeyshare.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgSendKeyshare: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgOverrideLatestPubKeyResponse({
      value,
      fee,
      memo,
    }: sendMsgOverrideLatestPubKeyResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgOverrideLatestPubKeyResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgOverrideLatestPubKeyResponse({ value: MsgOverrideLatestPubKeyResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgOverrideLatestPubKeyResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryVerifiableRandomnessResponse({
      value,
      fee,
      memo,
    }: sendQueryVerifiableRandomnessResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryVerifiableRandomnessResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryVerifiableRandomnessResponse({
          value: QueryVerifiableRandomnessResponse.fromPartial(value),
        });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryVerifiableRandomnessResponse: Could not broadcast Tx: ' + e.message);
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

    async sendGetAggrKeysharePacketData({
      value,
      fee,
      memo,
    }: sendGetAggrKeysharePacketDataParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendGetAggrKeysharePacketData: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.getAggrKeysharePacketData({ value: GetAggrKeysharePacketData.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendGetAggrKeysharePacketData: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendCurrentKeysPacketAck({ value, fee, memo }: sendCurrentKeysPacketAckParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendCurrentKeysPacketAck: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.currentKeysPacketAck({ value: CurrentKeysPacketAck.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendCurrentKeysPacketAck: Could not broadcast Tx: ' + e.message);
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

    async sendQueryCommitmentsRequest({
      value,
      fee,
      memo,
    }: sendQueryCommitmentsRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryCommitmentsRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryCommitmentsRequest({ value: QueryCommitmentsRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryCommitmentsRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryGetKeyShareRequest({
      value,
      fee,
      memo,
    }: sendQueryGetKeyShareRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryGetKeyShareRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryGetKeyShareRequest({ value: QueryGetKeyShareRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryGetKeyShareRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryGetAggregatedKeyShareResponse({
      value,
      fee,
      memo,
    }: sendQueryGetAggregatedKeyShareResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryGetAggregatedKeyShareResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryGetAggregatedKeyShareResponse({
          value: QueryGetAggregatedKeyShareResponse.fromPartial(value),
        });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryGetAggregatedKeyShareResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgDeRegisterValidatorResponse({
      value,
      fee,
      memo,
    }: sendMsgDeRegisterValidatorResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgDeRegisterValidatorResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgDeRegisterValidatorResponse({ value: MsgDeRegisterValidatorResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgDeRegisterValidatorResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryAllValidatorSetResponse({
      value,
      fee,
      memo,
    }: sendQueryAllValidatorSetResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryAllValidatorSetResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryAllValidatorSetResponse({ value: QueryAllValidatorSetResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryAllValidatorSetResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryAllKeyShareRequest({
      value,
      fee,
      memo,
    }: sendQueryAllKeyShareRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryAllKeyShareRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryAllKeyShareRequest({ value: QueryAllKeyShareRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryAllKeyShareRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryAllAuthorizedAddressResponse({
      value,
      fee,
      memo,
    }: sendQueryAllAuthorizedAddressResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryAllAuthorizedAddressResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryAllAuthorizedAddressResponse({
          value: QueryAllAuthorizedAddressResponse.fromPartial(value),
        });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryAllAuthorizedAddressResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryGetAuthorizedAddressRequest({
      value,
      fee,
      memo,
    }: sendQueryGetAuthorizedAddressRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryGetAuthorizedAddressRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryGetAuthorizedAddressRequest({ value: QueryGetAuthorizedAddressRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryGetAuthorizedAddressRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryAllAuthorizedAddressRequest({
      value,
      fee,
      memo,
    }: sendQueryAllAuthorizedAddressRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryAllAuthorizedAddressRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryAllAuthorizedAddressRequest({ value: QueryAllAuthorizedAddressRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryAllAuthorizedAddressRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendAggrKeyshareDataPacketAck({
      value,
      fee,
      memo,
    }: sendAggrKeyshareDataPacketAckParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendAggrKeyshareDataPacketAck: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.aggrKeyshareDataPacketAck({ value: AggrKeyshareDataPacketAck.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendAggrKeyshareDataPacketAck: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgSendKeyshareResponse({
      value,
      fee,
      memo,
    }: sendMsgSendKeyshareResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgSendKeyshareResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgSendKeyshareResponse({ value: MsgSendKeyshareResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgSendKeyshareResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgCreateGeneralKeyShare({
      value,
      fee,
      memo,
    }: sendMsgCreateGeneralKeyShareParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgCreateGeneralKeyShare: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgCreateGeneralKeyShare({ value: MsgCreateGeneralKeyShare.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgCreateGeneralKeyShare: Could not broadcast Tx: ' + e.message);
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

    async sendQueryGetAggregatedKeyShareRequest({
      value,
      fee,
      memo,
    }: sendQueryGetAggregatedKeyShareRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryGetAggregatedKeyShareRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryGetAggregatedKeyShareRequest({
          value: QueryGetAggregatedKeyShareRequest.fromPartial(value),
        });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryGetAggregatedKeyShareRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendActivePubKey({ value, fee, memo }: sendActivePubKeyParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendActivePubKey: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.activePubKey({ value: ActivePubKey.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendActivePubKey: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgRegisterValidatorResponse({
      value,
      fee,
      memo,
    }: sendMsgRegisterValidatorResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgRegisterValidatorResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgRegisterValidatorResponse({ value: MsgRegisterValidatorResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgRegisterValidatorResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgCreateGeneralKeyShareResponse({
      value,
      fee,
      memo,
    }: sendMsgCreateGeneralKeyShareResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgCreateGeneralKeyShareResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgCreateGeneralKeyShareResponse({ value: MsgCreateGeneralKeyShareResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgCreateGeneralKeyShareResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendAggrKeyshareDataPacketData({
      value,
      fee,
      memo,
    }: sendAggrKeyshareDataPacketDataParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendAggrKeyshareDataPacketData: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.aggrKeyshareDataPacketData({ value: AggrKeyshareDataPacketData.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendAggrKeyshareDataPacketData: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryGetGeneralKeyShareResponse({
      value,
      fee,
      memo,
    }: sendQueryGetGeneralKeyShareResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryGetGeneralKeyShareResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryGetGeneralKeyShareResponse({ value: QueryGetGeneralKeyShareResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryGetGeneralKeyShareResponse: Could not broadcast Tx: ' + e.message);
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

    async sendMsgUpdateAuthorizedAddress({
      value,
      fee,
      memo,
    }: sendMsgUpdateAuthorizedAddressParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgUpdateAuthorizedAddress: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgUpdateAuthorizedAddress({ value: MsgUpdateAuthorizedAddress.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgUpdateAuthorizedAddress: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendGeneralKeyShare({ value, fee, memo }: sendGeneralKeyShareParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendGeneralKeyShare: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.generalKeyShare({ value: GeneralKeyShare.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendGeneralKeyShare: Could not broadcast Tx: ' + e.message);
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

    async sendIBCInfo({ value, fee, memo }: sendIBCInfoParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendIBCInfo: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.ibcinfo({ value: IBCInfo.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendIBCInfo: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendAuthorizedAddress({ value, fee, memo }: sendAuthorizedAddressParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendAuthorizedAddress: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.authorizedAddress({ value: AuthorizedAddress.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendAuthorizedAddress: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueuedPubKey({ value, fee, memo }: sendQueuedPubKeyParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueuedPubKey: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queuedPubKey({ value: QueuedPubKey.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueuedPubKey: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryAllAggregatedKeyShareRequest({
      value,
      fee,
      memo,
    }: sendQueryAllAggregatedKeyShareRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryAllAggregatedKeyShareRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryAllAggregatedKeyShareRequest({
          value: QueryAllAggregatedKeyShareRequest.fromPartial(value),
        });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryAllAggregatedKeyShareRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendGetAggrKeysharePacketAck({
      value,
      fee,
      memo,
    }: sendGetAggrKeysharePacketAckParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendGetAggrKeysharePacketAck: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.getAggrKeysharePacketAck({ value: GetAggrKeysharePacketAck.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendGetAggrKeysharePacketAck: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgCreateLatestPubKey({ value, fee, memo }: sendMsgCreateLatestPubKeyParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgCreateLatestPubKey: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgCreateLatestPubKey({ value: MsgCreateLatestPubKey.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgCreateLatestPubKey: Could not broadcast Tx: ' + e.message);
      }
    },

    queryAllGeneralKeyShareRequest({ value }: queryAllGeneralKeyShareRequestParams): EncodeObject {
      try {
        return {
          typeUrl: '/fairyring.keyshare.QueryAllGeneralKeyShareRequest',
          value: QueryAllGeneralKeyShareRequest.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryAllGeneralKeyShareRequest: Could not create message: ' + e.message);
      }
    },

    msgDeRegisterValidator({ value }: msgDeRegisterValidatorParams): EncodeObject {
      try {
        return {
          typeUrl: '/fairyring.keyshare.MsgDeRegisterValidator',
          value: MsgDeRegisterValidator.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgDeRegisterValidator: Could not create message: ' + e.message);
      }
    },

    queryGetValidatorSetRequest({ value }: queryGetValidatorSetRequestParams): EncodeObject {
      try {
        return {
          typeUrl: '/fairyring.keyshare.QueryGetValidatorSetRequest',
          value: QueryGetValidatorSetRequest.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryGetValidatorSetRequest: Could not create message: ' + e.message);
      }
    },

    queryGetValidatorSetResponse({ value }: queryGetValidatorSetResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/fairyring.keyshare.QueryGetValidatorSetResponse',
          value: QueryGetValidatorSetResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryGetValidatorSetResponse: Could not create message: ' + e.message);
      }
    },

    queryAllValidatorSetRequest({ value }: queryAllValidatorSetRequestParams): EncodeObject {
      try {
        return {
          typeUrl: '/fairyring.keyshare.QueryAllValidatorSetRequest',
          value: QueryAllValidatorSetRequest.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryAllValidatorSetRequest: Could not create message: ' + e.message);
      }
    },

    msgOverrideLatestPubKey({ value }: msgOverrideLatestPubKeyParams): EncodeObject {
      try {
        return {
          typeUrl: '/fairyring.keyshare.MsgOverrideLatestPubKey',
          value: MsgOverrideLatestPubKey.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgOverrideLatestPubKey: Could not create message: ' + e.message);
      }
    },

    msgCreateAuthorizedAddressResponse({ value }: msgCreateAuthorizedAddressResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/fairyring.keyshare.MsgCreateAuthorizedAddressResponse',
          value: MsgCreateAuthorizedAddressResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgCreateAuthorizedAddressResponse: Could not create message: ' + e.message);
      }
    },

    msgCreateAuthorizedAddress({ value }: msgCreateAuthorizedAddressParams): EncodeObject {
      try {
        return {
          typeUrl: '/fairyring.keyshare.MsgCreateAuthorizedAddress',
          value: MsgCreateAuthorizedAddress.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgCreateAuthorizedAddress: Could not create message: ' + e.message);
      }
    },

    msgCreateLatestPubKeyResponse({ value }: msgCreateLatestPubKeyResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/fairyring.keyshare.MsgCreateLatestPubKeyResponse',
          value: MsgCreateLatestPubKeyResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgCreateLatestPubKeyResponse: Could not create message: ' + e.message);
      }
    },

    validatorSet({ value }: validatorSetParams): EncodeObject {
      try {
        return { typeUrl: '/fairyring.keyshare.ValidatorSet', value: ValidatorSet.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:ValidatorSet: Could not create message: ' + e.message);
      }
    },

    counterPartyIbcinfo({ value }: counterPartyIbcinfoParams): EncodeObject {
      try {
        return { typeUrl: '/fairyring.keyshare.CounterPartyIBCInfo', value: CounterPartyIBCInfo.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:CounterPartyIBCInfo: Could not create message: ' + e.message);
      }
    },

    aggregatedKeyShare({ value }: aggregatedKeyShareParams): EncodeObject {
      try {
        return { typeUrl: '/fairyring.keyshare.AggregatedKeyShare', value: AggregatedKeyShare.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:AggregatedKeyShare: Could not create message: ' + e.message);
      }
    },

    msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/fairyring.keyshare.MsgUpdateParamsResponse',
          value: MsgUpdateParamsResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgUpdateParamsResponse: Could not create message: ' + e.message);
      }
    },

    msgUpdateAuthorizedAddressResponse({ value }: msgUpdateAuthorizedAddressResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/fairyring.keyshare.MsgUpdateAuthorizedAddressResponse',
          value: MsgUpdateAuthorizedAddressResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgUpdateAuthorizedAddressResponse: Could not create message: ' + e.message);
      }
    },

    msgDeleteAuthorizedAddressResponse({ value }: msgDeleteAuthorizedAddressResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/fairyring.keyshare.MsgDeleteAuthorizedAddressResponse',
          value: MsgDeleteAuthorizedAddressResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgDeleteAuthorizedAddressResponse: Could not create message: ' + e.message);
      }
    },

    requestAggrKeysharePacketData({ value }: requestAggrKeysharePacketDataParams): EncodeObject {
      try {
        return {
          typeUrl: '/fairyring.keyshare.RequestAggrKeysharePacketData',
          value: RequestAggrKeysharePacketData.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:RequestAggrKeysharePacketData: Could not create message: ' + e.message);
      }
    },

    queryVerifiableRandomnessQuery({ value }: queryVerifiableRandomnessQueryParams): EncodeObject {
      try {
        return {
          typeUrl: '/fairyring.keyshare.QueryVerifiableRandomnessQuery',
          value: QueryVerifiableRandomnessQuery.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryVerifiableRandomnessQuery: Could not create message: ' + e.message);
      }
    },

    queryPubKeyResponse({ value }: queryPubKeyResponseParams): EncodeObject {
      try {
        return { typeUrl: '/fairyring.keyshare.QueryPubKeyResponse', value: QueryPubKeyResponse.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:QueryPubKeyResponse: Could not create message: ' + e.message);
      }
    },

    msgRegisterValidator({ value }: msgRegisterValidatorParams): EncodeObject {
      try {
        return { typeUrl: '/fairyring.keyshare.MsgRegisterValidator', value: MsgRegisterValidator.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:MsgRegisterValidator: Could not create message: ' + e.message);
      }
    },

    keysharePacketData({ value }: keysharePacketDataParams): EncodeObject {
      try {
        return { typeUrl: '/fairyring.keyshare.KeysharePacketData', value: KeysharePacketData.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:KeysharePacketData: Could not create message: ' + e.message);
      }
    },

    requestAggrKeysharePacketAck({ value }: requestAggrKeysharePacketAckParams): EncodeObject {
      try {
        return {
          typeUrl: '/fairyring.keyshare.RequestAggrKeysharePacketAck',
          value: RequestAggrKeysharePacketAck.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:RequestAggrKeysharePacketAck: Could not create message: ' + e.message);
      }
    },

    encryptedKeyShare({ value }: encryptedKeyShareParams): EncodeObject {
      try {
        return { typeUrl: '/fairyring.keyshare.EncryptedKeyShare', value: EncryptedKeyShare.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:EncryptedKeyShare: Could not create message: ' + e.message);
      }
    },

    queryGetKeyShareResponse({ value }: queryGetKeyShareResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/fairyring.keyshare.QueryGetKeyShareResponse',
          value: QueryGetKeyShareResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryGetKeyShareResponse: Could not create message: ' + e.message);
      }
    },

    queryGetAuthorizedAddressResponse({ value }: queryGetAuthorizedAddressResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/fairyring.keyshare.QueryGetAuthorizedAddressResponse',
          value: QueryGetAuthorizedAddressResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryGetAuthorizedAddressResponse: Could not create message: ' + e.message);
      }
    },

    commitments({ value }: commitmentsParams): EncodeObject {
      try {
        return { typeUrl: '/fairyring.keyshare.Commitments', value: Commitments.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:Commitments: Could not create message: ' + e.message);
      }
    },

    keyShare({ value }: keyShareParams): EncodeObject {
      try {
        return { typeUrl: '/fairyring.keyshare.KeyShare', value: KeyShare.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:KeyShare: Could not create message: ' + e.message);
      }
    },

    keyShareRequest({ value }: keyShareRequestParams): EncodeObject {
      try {
        return { typeUrl: '/fairyring.keyshare.KeyShareRequest', value: KeyShareRequest.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:KeyShareRequest: Could not create message: ' + e.message);
      }
    },

    queryCommitmentsResponse({ value }: queryCommitmentsResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/fairyring.keyshare.QueryCommitmentsResponse',
          value: QueryCommitmentsResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryCommitmentsResponse: Could not create message: ' + e.message);
      }
    },

    queryAllAggregatedKeyShareResponse({ value }: queryAllAggregatedKeyShareResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/fairyring.keyshare.QueryAllAggregatedKeyShareResponse',
          value: QueryAllAggregatedKeyShareResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryAllAggregatedKeyShareResponse: Could not create message: ' + e.message);
      }
    },

    queryAllGeneralKeyShareResponse({ value }: queryAllGeneralKeyShareResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/fairyring.keyshare.QueryAllGeneralKeyShareResponse',
          value: QueryAllGeneralKeyShareResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryAllGeneralKeyShareResponse: Could not create message: ' + e.message);
      }
    },

    msgDeleteAuthorizedAddress({ value }: msgDeleteAuthorizedAddressParams): EncodeObject {
      try {
        return {
          typeUrl: '/fairyring.keyshare.MsgDeleteAuthorizedAddress',
          value: MsgDeleteAuthorizedAddress.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgDeleteAuthorizedAddress: Could not create message: ' + e.message);
      }
    },

    noData({ value }: noDataParams): EncodeObject {
      try {
        return { typeUrl: '/fairyring.keyshare.NoData', value: NoData.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:NoData: Could not create message: ' + e.message);
      }
    },

    currentKeysPacketData({ value }: currentKeysPacketDataParams): EncodeObject {
      try {
        return {
          typeUrl: '/fairyring.keyshare.CurrentKeysPacketData',
          value: CurrentKeysPacketData.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:CurrentKeysPacketData: Could not create message: ' + e.message);
      }
    },

    queryAllKeyShareResponse({ value }: queryAllKeyShareResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/fairyring.keyshare.QueryAllKeyShareResponse',
          value: QueryAllKeyShareResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryAllKeyShareResponse: Could not create message: ' + e.message);
      }
    },

    queryGetGeneralKeyShareRequest({ value }: queryGetGeneralKeyShareRequestParams): EncodeObject {
      try {
        return {
          typeUrl: '/fairyring.keyshare.QueryGetGeneralKeyShareRequest',
          value: QueryGetGeneralKeyShareRequest.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryGetGeneralKeyShareRequest: Could not create message: ' + e.message);
      }
    },

    msgSendKeyshare({ value }: msgSendKeyshareParams): EncodeObject {
      try {
        return { typeUrl: '/fairyring.keyshare.MsgSendKeyshare', value: MsgSendKeyshare.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:MsgSendKeyshare: Could not create message: ' + e.message);
      }
    },

    msgOverrideLatestPubKeyResponse({ value }: msgOverrideLatestPubKeyResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/fairyring.keyshare.MsgOverrideLatestPubKeyResponse',
          value: MsgOverrideLatestPubKeyResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgOverrideLatestPubKeyResponse: Could not create message: ' + e.message);
      }
    },

    queryVerifiableRandomnessResponse({ value }: queryVerifiableRandomnessResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/fairyring.keyshare.QueryVerifiableRandomnessResponse',
          value: QueryVerifiableRandomnessResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryVerifiableRandomnessResponse: Could not create message: ' + e.message);
      }
    },

    queryParamsResponse({ value }: queryParamsResponseParams): EncodeObject {
      try {
        return { typeUrl: '/fairyring.keyshare.QueryParamsResponse', value: QueryParamsResponse.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:QueryParamsResponse: Could not create message: ' + e.message);
      }
    },

    getAggrKeysharePacketData({ value }: getAggrKeysharePacketDataParams): EncodeObject {
      try {
        return {
          typeUrl: '/fairyring.keyshare.GetAggrKeysharePacketData',
          value: GetAggrKeysharePacketData.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:GetAggrKeysharePacketData: Could not create message: ' + e.message);
      }
    },

    currentKeysPacketAck({ value }: currentKeysPacketAckParams): EncodeObject {
      try {
        return { typeUrl: '/fairyring.keyshare.CurrentKeysPacketAck', value: CurrentKeysPacketAck.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:CurrentKeysPacketAck: Could not create message: ' + e.message);
      }
    },

    genesisState({ value }: genesisStateParams): EncodeObject {
      try {
        return { typeUrl: '/fairyring.keyshare.GenesisState', value: GenesisState.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:GenesisState: Could not create message: ' + e.message);
      }
    },

    queryCommitmentsRequest({ value }: queryCommitmentsRequestParams): EncodeObject {
      try {
        return {
          typeUrl: '/fairyring.keyshare.QueryCommitmentsRequest',
          value: QueryCommitmentsRequest.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryCommitmentsRequest: Could not create message: ' + e.message);
      }
    },

    queryGetKeyShareRequest({ value }: queryGetKeyShareRequestParams): EncodeObject {
      try {
        return {
          typeUrl: '/fairyring.keyshare.QueryGetKeyShareRequest',
          value: QueryGetKeyShareRequest.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryGetKeyShareRequest: Could not create message: ' + e.message);
      }
    },

    queryGetAggregatedKeyShareResponse({ value }: queryGetAggregatedKeyShareResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/fairyring.keyshare.QueryGetAggregatedKeyShareResponse',
          value: QueryGetAggregatedKeyShareResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryGetAggregatedKeyShareResponse: Could not create message: ' + e.message);
      }
    },

    msgDeRegisterValidatorResponse({ value }: msgDeRegisterValidatorResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/fairyring.keyshare.MsgDeRegisterValidatorResponse',
          value: MsgDeRegisterValidatorResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgDeRegisterValidatorResponse: Could not create message: ' + e.message);
      }
    },

    queryAllValidatorSetResponse({ value }: queryAllValidatorSetResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/fairyring.keyshare.QueryAllValidatorSetResponse',
          value: QueryAllValidatorSetResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryAllValidatorSetResponse: Could not create message: ' + e.message);
      }
    },

    queryAllKeyShareRequest({ value }: queryAllKeyShareRequestParams): EncodeObject {
      try {
        return {
          typeUrl: '/fairyring.keyshare.QueryAllKeyShareRequest',
          value: QueryAllKeyShareRequest.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryAllKeyShareRequest: Could not create message: ' + e.message);
      }
    },

    queryAllAuthorizedAddressResponse({ value }: queryAllAuthorizedAddressResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/fairyring.keyshare.QueryAllAuthorizedAddressResponse',
          value: QueryAllAuthorizedAddressResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryAllAuthorizedAddressResponse: Could not create message: ' + e.message);
      }
    },

    queryGetAuthorizedAddressRequest({ value }: queryGetAuthorizedAddressRequestParams): EncodeObject {
      try {
        return {
          typeUrl: '/fairyring.keyshare.QueryGetAuthorizedAddressRequest',
          value: QueryGetAuthorizedAddressRequest.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryGetAuthorizedAddressRequest: Could not create message: ' + e.message);
      }
    },

    queryAllAuthorizedAddressRequest({ value }: queryAllAuthorizedAddressRequestParams): EncodeObject {
      try {
        return {
          typeUrl: '/fairyring.keyshare.QueryAllAuthorizedAddressRequest',
          value: QueryAllAuthorizedAddressRequest.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryAllAuthorizedAddressRequest: Could not create message: ' + e.message);
      }
    },

    aggrKeyshareDataPacketAck({ value }: aggrKeyshareDataPacketAckParams): EncodeObject {
      try {
        return {
          typeUrl: '/fairyring.keyshare.AggrKeyshareDataPacketAck',
          value: AggrKeyshareDataPacketAck.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:AggrKeyshareDataPacketAck: Could not create message: ' + e.message);
      }
    },

    msgSendKeyshareResponse({ value }: msgSendKeyshareResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/fairyring.keyshare.MsgSendKeyshareResponse',
          value: MsgSendKeyshareResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgSendKeyshareResponse: Could not create message: ' + e.message);
      }
    },

    msgCreateGeneralKeyShare({ value }: msgCreateGeneralKeyShareParams): EncodeObject {
      try {
        return {
          typeUrl: '/fairyring.keyshare.MsgCreateGeneralKeyShare',
          value: MsgCreateGeneralKeyShare.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgCreateGeneralKeyShare: Could not create message: ' + e.message);
      }
    },

    queryParamsRequest({ value }: queryParamsRequestParams): EncodeObject {
      try {
        return { typeUrl: '/fairyring.keyshare.QueryParamsRequest', value: QueryParamsRequest.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:QueryParamsRequest: Could not create message: ' + e.message);
      }
    },

    queryGetAggregatedKeyShareRequest({ value }: queryGetAggregatedKeyShareRequestParams): EncodeObject {
      try {
        return {
          typeUrl: '/fairyring.keyshare.QueryGetAggregatedKeyShareRequest',
          value: QueryGetAggregatedKeyShareRequest.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryGetAggregatedKeyShareRequest: Could not create message: ' + e.message);
      }
    },

    activePubKey({ value }: activePubKeyParams): EncodeObject {
      try {
        return { typeUrl: '/fairyring.keyshare.ActivePubKey', value: ActivePubKey.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:ActivePubKey: Could not create message: ' + e.message);
      }
    },

    msgRegisterValidatorResponse({ value }: msgRegisterValidatorResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/fairyring.keyshare.MsgRegisterValidatorResponse',
          value: MsgRegisterValidatorResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgRegisterValidatorResponse: Could not create message: ' + e.message);
      }
    },

    msgCreateGeneralKeyShareResponse({ value }: msgCreateGeneralKeyShareResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/fairyring.keyshare.MsgCreateGeneralKeyShareResponse',
          value: MsgCreateGeneralKeyShareResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgCreateGeneralKeyShareResponse: Could not create message: ' + e.message);
      }
    },

    aggrKeyshareDataPacketData({ value }: aggrKeyshareDataPacketDataParams): EncodeObject {
      try {
        return {
          typeUrl: '/fairyring.keyshare.AggrKeyshareDataPacketData',
          value: AggrKeyshareDataPacketData.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:AggrKeyshareDataPacketData: Could not create message: ' + e.message);
      }
    },

    queryGetGeneralKeyShareResponse({ value }: queryGetGeneralKeyShareResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/fairyring.keyshare.QueryGetGeneralKeyShareResponse',
          value: QueryGetGeneralKeyShareResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryGetGeneralKeyShareResponse: Could not create message: ' + e.message);
      }
    },

    msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject {
      try {
        return { typeUrl: '/fairyring.keyshare.MsgUpdateParams', value: MsgUpdateParams.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:MsgUpdateParams: Could not create message: ' + e.message);
      }
    },

    queryPubKeyRequest({ value }: queryPubKeyRequestParams): EncodeObject {
      try {
        return { typeUrl: '/fairyring.keyshare.QueryPubKeyRequest', value: QueryPubKeyRequest.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:QueryPubKeyRequest: Could not create message: ' + e.message);
      }
    },

    msgUpdateAuthorizedAddress({ value }: msgUpdateAuthorizedAddressParams): EncodeObject {
      try {
        return {
          typeUrl: '/fairyring.keyshare.MsgUpdateAuthorizedAddress',
          value: MsgUpdateAuthorizedAddress.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgUpdateAuthorizedAddress: Could not create message: ' + e.message);
      }
    },

    generalKeyShare({ value }: generalKeyShareParams): EncodeObject {
      try {
        return { typeUrl: '/fairyring.keyshare.GeneralKeyShare', value: GeneralKeyShare.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:GeneralKeyShare: Could not create message: ' + e.message);
      }
    },

    params({ value }: paramsParams): EncodeObject {
      try {
        return { typeUrl: '/fairyring.keyshare.Params', value: Params.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:Params: Could not create message: ' + e.message);
      }
    },

    ibcinfo({ value }: ibcinfoParams): EncodeObject {
      try {
        return { typeUrl: '/fairyring.keyshare.IBCInfo', value: IBCInfo.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:IBCInfo: Could not create message: ' + e.message);
      }
    },

    authorizedAddress({ value }: authorizedAddressParams): EncodeObject {
      try {
        return { typeUrl: '/fairyring.keyshare.AuthorizedAddress', value: AuthorizedAddress.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:AuthorizedAddress: Could not create message: ' + e.message);
      }
    },

    queuedPubKey({ value }: queuedPubKeyParams): EncodeObject {
      try {
        return { typeUrl: '/fairyring.keyshare.QueuedPubKey', value: QueuedPubKey.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:QueuedPubKey: Could not create message: ' + e.message);
      }
    },

    queryAllAggregatedKeyShareRequest({ value }: queryAllAggregatedKeyShareRequestParams): EncodeObject {
      try {
        return {
          typeUrl: '/fairyring.keyshare.QueryAllAggregatedKeyShareRequest',
          value: QueryAllAggregatedKeyShareRequest.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryAllAggregatedKeyShareRequest: Could not create message: ' + e.message);
      }
    },

    getAggrKeysharePacketAck({ value }: getAggrKeysharePacketAckParams): EncodeObject {
      try {
        return {
          typeUrl: '/fairyring.keyshare.GetAggrKeysharePacketAck',
          value: GetAggrKeysharePacketAck.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:GetAggrKeysharePacketAck: Could not create message: ' + e.message);
      }
    },

    msgCreateLatestPubKey({ value }: msgCreateLatestPubKeyParams): EncodeObject {
      try {
        return {
          typeUrl: '/fairyring.keyshare.MsgCreateLatestPubKey',
          value: MsgCreateLatestPubKey.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgCreateLatestPubKey: Could not create message: ' + e.message);
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
      FairyringKeyshare: new SDKModule(test),
    },
    registry: msgTypes,
  };
};
export default IgntModule;
