import { SigningStargateClient, DeliverTxResponse, StdFee } from '@cosmjs/stargate';
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from '@cosmjs/proto-signing';
import { msgTypes } from './registry';
import { IgniteClient } from '../client';
import { MissingWalletError } from '../helpers';
import { Api } from './rest';
import { GenesisState } from './types/cosmos/staking/v1beta1/genesis';
import { QueryHistoricalInfoResponse } from './types/cosmos/staking/v1beta1/query';
import { Description } from './types/cosmos/staking/v1beta1/staking';
import { CommissionRates } from './types/cosmos/staking/v1beta1/staking';
import { HistoricalInfo } from './types/cosmos/staking/v1beta1/staking';
import { QueryRedelegationsRequest } from './types/cosmos/staking/v1beta1/query';
import { QueryDelegatorValidatorResponse } from './types/cosmos/staking/v1beta1/query';
import { QueryPoolResponse } from './types/cosmos/staking/v1beta1/query';
import { UnbondingDelegationEntry } from './types/cosmos/staking/v1beta1/staking';
import { QueryValidatorDelegationsResponse } from './types/cosmos/staking/v1beta1/query';
import { QueryValidatorUnbondingDelegationsRequest } from './types/cosmos/staking/v1beta1/query';
import { ValAddresses } from './types/cosmos/staking/v1beta1/staking';
import { StakeAuthorization_Validators } from './types/cosmos/staking/v1beta1/authz';
import { QueryDelegatorDelegationsResponse } from './types/cosmos/staking/v1beta1/query';
import { QueryDelegatorValidatorsRequest } from './types/cosmos/staking/v1beta1/query';
import { QueryHistoricalInfoRequest } from './types/cosmos/staking/v1beta1/query';
import { QueryParamsRequest } from './types/cosmos/staking/v1beta1/query';
import { RedelegationResponse } from './types/cosmos/staking/v1beta1/staking';
import { MsgCreateValidatorResponse } from './types/cosmos/staking/v1beta1/tx';
import { DelegationResponse } from './types/cosmos/staking/v1beta1/staking';
import { QueryValidatorDelegationsRequest } from './types/cosmos/staking/v1beta1/query';
import { MsgUndelegate } from './types/cosmos/staking/v1beta1/tx';
import { RedelegationEntry } from './types/cosmos/staking/v1beta1/staking';
import { DVPairs } from './types/cosmos/staking/v1beta1/staking';
import { Pool } from './types/cosmos/staking/v1beta1/staking';
import { MsgEditValidator } from './types/cosmos/staking/v1beta1/tx';
import { MsgCancelUnbondingDelegationResponse } from './types/cosmos/staking/v1beta1/tx';
import { QueryUnbondingDelegationResponse } from './types/cosmos/staking/v1beta1/query';
import { QueryDelegationRequest } from './types/cosmos/staking/v1beta1/query';
import { MsgCancelUnbondingDelegation } from './types/cosmos/staking/v1beta1/tx';
import { StakeAuthorization } from './types/cosmos/staking/v1beta1/authz';
import { QueryValidatorRequest } from './types/cosmos/staking/v1beta1/query';
import { MsgCreateValidator } from './types/cosmos/staking/v1beta1/tx';
import { QueryParamsResponse } from './types/cosmos/staking/v1beta1/query';
import { DVPair } from './types/cosmos/staking/v1beta1/staking';
import { QueryDelegatorValidatorRequest } from './types/cosmos/staking/v1beta1/query';
import { QueryValidatorResponse } from './types/cosmos/staking/v1beta1/query';
import { DVVTriplet } from './types/cosmos/staking/v1beta1/staking';
import { DVVTriplets } from './types/cosmos/staking/v1beta1/staking';
import { ValidatorUpdates } from './types/cosmos/staking/v1beta1/staking';
import { MsgBeginRedelegateResponse } from './types/cosmos/staking/v1beta1/tx';
import { QueryValidatorsRequest } from './types/cosmos/staking/v1beta1/query';
import { Redelegation } from './types/cosmos/staking/v1beta1/staking';
import { Commission } from './types/cosmos/staking/v1beta1/staking';
import { QueryDelegatorUnbondingDelegationsRequest } from './types/cosmos/staking/v1beta1/query';
import { QueryDelegatorValidatorsResponse } from './types/cosmos/staking/v1beta1/query';
import { MsgBeginRedelegate } from './types/cosmos/staking/v1beta1/tx';
import { Validator } from './types/cosmos/staking/v1beta1/staking';
import { LastValidatorPower } from './types/cosmos/staking/v1beta1/genesis';
import { MsgEditValidatorResponse } from './types/cosmos/staking/v1beta1/tx';
import { QueryRedelegationsResponse } from './types/cosmos/staking/v1beta1/query';
import { QueryPoolRequest } from './types/cosmos/staking/v1beta1/query';
import { MsgUpdateParams } from './types/cosmos/staking/v1beta1/tx';
import { MsgUpdateParamsResponse } from './types/cosmos/staking/v1beta1/tx';
import { Params } from './types/cosmos/staking/v1beta1/staking';
import { QueryDelegatorDelegationsRequest } from './types/cosmos/staking/v1beta1/query';
import { RedelegationEntryResponse } from './types/cosmos/staking/v1beta1/staking';
import { MsgDelegate } from './types/cosmos/staking/v1beta1/tx';
import { MsgDelegateResponse } from './types/cosmos/staking/v1beta1/tx';
import { QueryValidatorUnbondingDelegationsResponse } from './types/cosmos/staking/v1beta1/query';
import { UnbondingDelegation } from './types/cosmos/staking/v1beta1/staking';
import { QueryValidatorsResponse } from './types/cosmos/staking/v1beta1/query';
import { QueryDelegationResponse } from './types/cosmos/staking/v1beta1/query';
import { QueryUnbondingDelegationRequest } from './types/cosmos/staking/v1beta1/query';
import { QueryDelegatorUnbondingDelegationsResponse } from './types/cosmos/staking/v1beta1/query';
import { MsgUndelegateResponse } from './types/cosmos/staking/v1beta1/tx';
import { Delegation } from './types/cosmos/staking/v1beta1/staking';

export {
  GenesisState,
  QueryHistoricalInfoResponse,
  Description,
  CommissionRates,
  HistoricalInfo,
  QueryRedelegationsRequest,
  QueryDelegatorValidatorResponse,
  QueryPoolResponse,
  UnbondingDelegationEntry,
  QueryValidatorDelegationsResponse,
  QueryValidatorUnbondingDelegationsRequest,
  ValAddresses,
  StakeAuthorization_Validators,
  QueryDelegatorDelegationsResponse,
  QueryDelegatorValidatorsRequest,
  QueryHistoricalInfoRequest,
  QueryParamsRequest,
  RedelegationResponse,
  MsgCreateValidatorResponse,
  DelegationResponse,
  QueryValidatorDelegationsRequest,
  MsgUndelegate,
  RedelegationEntry,
  DVPairs,
  Pool,
  MsgEditValidator,
  MsgCancelUnbondingDelegationResponse,
  QueryUnbondingDelegationResponse,
  QueryDelegationRequest,
  MsgCancelUnbondingDelegation,
  StakeAuthorization,
  QueryValidatorRequest,
  MsgCreateValidator,
  QueryParamsResponse,
  DVPair,
  QueryDelegatorValidatorRequest,
  QueryValidatorResponse,
  DVVTriplet,
  DVVTriplets,
  ValidatorUpdates,
  MsgBeginRedelegateResponse,
  QueryValidatorsRequest,
  Redelegation,
  Commission,
  QueryDelegatorUnbondingDelegationsRequest,
  QueryDelegatorValidatorsResponse,
  MsgBeginRedelegate,
  Validator,
  LastValidatorPower,
  MsgEditValidatorResponse,
  QueryRedelegationsResponse,
  QueryPoolRequest,
  MsgUpdateParams,
  MsgUpdateParamsResponse,
  Params,
  QueryDelegatorDelegationsRequest,
  RedelegationEntryResponse,
  MsgDelegate,
  MsgDelegateResponse,
  QueryValidatorUnbondingDelegationsResponse,
  UnbondingDelegation,
  QueryValidatorsResponse,
  QueryDelegationResponse,
  QueryUnbondingDelegationRequest,
  QueryDelegatorUnbondingDelegationsResponse,
  MsgUndelegateResponse,
  Delegation,
};

type sendGenesisStateParams = {
  value: GenesisState;
  fee?: StdFee;
  memo?: string;
};

type sendQueryHistoricalInfoResponseParams = {
  value: QueryHistoricalInfoResponse;
  fee?: StdFee;
  memo?: string;
};

type sendDescriptionParams = {
  value: Description;
  fee?: StdFee;
  memo?: string;
};

type sendCommissionRatesParams = {
  value: CommissionRates;
  fee?: StdFee;
  memo?: string;
};

type sendHistoricalInfoParams = {
  value: HistoricalInfo;
  fee?: StdFee;
  memo?: string;
};

type sendQueryRedelegationsRequestParams = {
  value: QueryRedelegationsRequest;
  fee?: StdFee;
  memo?: string;
};

type sendQueryDelegatorValidatorResponseParams = {
  value: QueryDelegatorValidatorResponse;
  fee?: StdFee;
  memo?: string;
};

type sendQueryPoolResponseParams = {
  value: QueryPoolResponse;
  fee?: StdFee;
  memo?: string;
};

type sendUnbondingDelegationEntryParams = {
  value: UnbondingDelegationEntry;
  fee?: StdFee;
  memo?: string;
};

type sendQueryValidatorDelegationsResponseParams = {
  value: QueryValidatorDelegationsResponse;
  fee?: StdFee;
  memo?: string;
};

type sendQueryValidatorUnbondingDelegationsRequestParams = {
  value: QueryValidatorUnbondingDelegationsRequest;
  fee?: StdFee;
  memo?: string;
};

type sendValAddressesParams = {
  value: ValAddresses;
  fee?: StdFee;
  memo?: string;
};

type sendStakeAuthorization_ValidatorsParams = {
  value: StakeAuthorization_Validators;
  fee?: StdFee;
  memo?: string;
};

type sendQueryDelegatorDelegationsResponseParams = {
  value: QueryDelegatorDelegationsResponse;
  fee?: StdFee;
  memo?: string;
};

type sendQueryDelegatorValidatorsRequestParams = {
  value: QueryDelegatorValidatorsRequest;
  fee?: StdFee;
  memo?: string;
};

type sendQueryHistoricalInfoRequestParams = {
  value: QueryHistoricalInfoRequest;
  fee?: StdFee;
  memo?: string;
};

type sendQueryParamsRequestParams = {
  value: QueryParamsRequest;
  fee?: StdFee;
  memo?: string;
};

type sendRedelegationResponseParams = {
  value: RedelegationResponse;
  fee?: StdFee;
  memo?: string;
};

type sendMsgCreateValidatorResponseParams = {
  value: MsgCreateValidatorResponse;
  fee?: StdFee;
  memo?: string;
};

type sendDelegationResponseParams = {
  value: DelegationResponse;
  fee?: StdFee;
  memo?: string;
};

type sendQueryValidatorDelegationsRequestParams = {
  value: QueryValidatorDelegationsRequest;
  fee?: StdFee;
  memo?: string;
};

type sendMsgUndelegateParams = {
  value: MsgUndelegate;
  fee?: StdFee;
  memo?: string;
};

type sendRedelegationEntryParams = {
  value: RedelegationEntry;
  fee?: StdFee;
  memo?: string;
};

type sendDVPairsParams = {
  value: DVPairs;
  fee?: StdFee;
  memo?: string;
};

type sendPoolParams = {
  value: Pool;
  fee?: StdFee;
  memo?: string;
};

type sendMsgEditValidatorParams = {
  value: MsgEditValidator;
  fee?: StdFee;
  memo?: string;
};

type sendMsgCancelUnbondingDelegationResponseParams = {
  value: MsgCancelUnbondingDelegationResponse;
  fee?: StdFee;
  memo?: string;
};

type sendQueryUnbondingDelegationResponseParams = {
  value: QueryUnbondingDelegationResponse;
  fee?: StdFee;
  memo?: string;
};

type sendQueryDelegationRequestParams = {
  value: QueryDelegationRequest;
  fee?: StdFee;
  memo?: string;
};

type sendMsgCancelUnbondingDelegationParams = {
  value: MsgCancelUnbondingDelegation;
  fee?: StdFee;
  memo?: string;
};

type sendStakeAuthorizationParams = {
  value: StakeAuthorization;
  fee?: StdFee;
  memo?: string;
};

type sendQueryValidatorRequestParams = {
  value: QueryValidatorRequest;
  fee?: StdFee;
  memo?: string;
};

type sendMsgCreateValidatorParams = {
  value: MsgCreateValidator;
  fee?: StdFee;
  memo?: string;
};

type sendQueryParamsResponseParams = {
  value: QueryParamsResponse;
  fee?: StdFee;
  memo?: string;
};

type sendDVPairParams = {
  value: DVPair;
  fee?: StdFee;
  memo?: string;
};

type sendQueryDelegatorValidatorRequestParams = {
  value: QueryDelegatorValidatorRequest;
  fee?: StdFee;
  memo?: string;
};

type sendQueryValidatorResponseParams = {
  value: QueryValidatorResponse;
  fee?: StdFee;
  memo?: string;
};

type sendDVVTripletParams = {
  value: DVVTriplet;
  fee?: StdFee;
  memo?: string;
};

type sendDVVTripletsParams = {
  value: DVVTriplets;
  fee?: StdFee;
  memo?: string;
};

type sendValidatorUpdatesParams = {
  value: ValidatorUpdates;
  fee?: StdFee;
  memo?: string;
};

type sendMsgBeginRedelegateResponseParams = {
  value: MsgBeginRedelegateResponse;
  fee?: StdFee;
  memo?: string;
};

type sendQueryValidatorsRequestParams = {
  value: QueryValidatorsRequest;
  fee?: StdFee;
  memo?: string;
};

type sendRedelegationParams = {
  value: Redelegation;
  fee?: StdFee;
  memo?: string;
};

type sendCommissionParams = {
  value: Commission;
  fee?: StdFee;
  memo?: string;
};

type sendQueryDelegatorUnbondingDelegationsRequestParams = {
  value: QueryDelegatorUnbondingDelegationsRequest;
  fee?: StdFee;
  memo?: string;
};

type sendQueryDelegatorValidatorsResponseParams = {
  value: QueryDelegatorValidatorsResponse;
  fee?: StdFee;
  memo?: string;
};

type sendMsgBeginRedelegateParams = {
  value: MsgBeginRedelegate;
  fee?: StdFee;
  memo?: string;
};

type sendValidatorParams = {
  value: Validator;
  fee?: StdFee;
  memo?: string;
};

type sendLastValidatorPowerParams = {
  value: LastValidatorPower;
  fee?: StdFee;
  memo?: string;
};

type sendMsgEditValidatorResponseParams = {
  value: MsgEditValidatorResponse;
  fee?: StdFee;
  memo?: string;
};

type sendQueryRedelegationsResponseParams = {
  value: QueryRedelegationsResponse;
  fee?: StdFee;
  memo?: string;
};

type sendQueryPoolRequestParams = {
  value: QueryPoolRequest;
  fee?: StdFee;
  memo?: string;
};

type sendMsgUpdateParamsParams = {
  value: MsgUpdateParams;
  fee?: StdFee;
  memo?: string;
};

type sendMsgUpdateParamsResponseParams = {
  value: MsgUpdateParamsResponse;
  fee?: StdFee;
  memo?: string;
};

type sendParamsParams = {
  value: Params;
  fee?: StdFee;
  memo?: string;
};

type sendQueryDelegatorDelegationsRequestParams = {
  value: QueryDelegatorDelegationsRequest;
  fee?: StdFee;
  memo?: string;
};

type sendRedelegationEntryResponseParams = {
  value: RedelegationEntryResponse;
  fee?: StdFee;
  memo?: string;
};

type sendMsgDelegateParams = {
  value: MsgDelegate;
  fee?: StdFee;
  memo?: string;
};

type sendMsgDelegateResponseParams = {
  value: MsgDelegateResponse;
  fee?: StdFee;
  memo?: string;
};

type sendQueryValidatorUnbondingDelegationsResponseParams = {
  value: QueryValidatorUnbondingDelegationsResponse;
  fee?: StdFee;
  memo?: string;
};

type sendUnbondingDelegationParams = {
  value: UnbondingDelegation;
  fee?: StdFee;
  memo?: string;
};

type sendQueryValidatorsResponseParams = {
  value: QueryValidatorsResponse;
  fee?: StdFee;
  memo?: string;
};

type sendQueryDelegationResponseParams = {
  value: QueryDelegationResponse;
  fee?: StdFee;
  memo?: string;
};

type sendQueryUnbondingDelegationRequestParams = {
  value: QueryUnbondingDelegationRequest;
  fee?: StdFee;
  memo?: string;
};

type sendQueryDelegatorUnbondingDelegationsResponseParams = {
  value: QueryDelegatorUnbondingDelegationsResponse;
  fee?: StdFee;
  memo?: string;
};

type sendMsgUndelegateResponseParams = {
  value: MsgUndelegateResponse;
  fee?: StdFee;
  memo?: string;
};

type sendDelegationParams = {
  value: Delegation;
  fee?: StdFee;
  memo?: string;
};

type genesisStateParams = {
  value: GenesisState;
};

type queryHistoricalInfoResponseParams = {
  value: QueryHistoricalInfoResponse;
};

type descriptionParams = {
  value: Description;
};

type commissionRatesParams = {
  value: CommissionRates;
};

type historicalInfoParams = {
  value: HistoricalInfo;
};

type queryRedelegationsRequestParams = {
  value: QueryRedelegationsRequest;
};

type queryDelegatorValidatorResponseParams = {
  value: QueryDelegatorValidatorResponse;
};

type queryPoolResponseParams = {
  value: QueryPoolResponse;
};

type unbondingDelegationEntryParams = {
  value: UnbondingDelegationEntry;
};

type queryValidatorDelegationsResponseParams = {
  value: QueryValidatorDelegationsResponse;
};

type queryValidatorUnbondingDelegationsRequestParams = {
  value: QueryValidatorUnbondingDelegationsRequest;
};

type valAddressesParams = {
  value: ValAddresses;
};

type stakeAuthorizationValidatorsParams = {
  value: StakeAuthorization_Validators;
};

type queryDelegatorDelegationsResponseParams = {
  value: QueryDelegatorDelegationsResponse;
};

type queryDelegatorValidatorsRequestParams = {
  value: QueryDelegatorValidatorsRequest;
};

type queryHistoricalInfoRequestParams = {
  value: QueryHistoricalInfoRequest;
};

type queryParamsRequestParams = {
  value: QueryParamsRequest;
};

type redelegationResponseParams = {
  value: RedelegationResponse;
};

type msgCreateValidatorResponseParams = {
  value: MsgCreateValidatorResponse;
};

type delegationResponseParams = {
  value: DelegationResponse;
};

type queryValidatorDelegationsRequestParams = {
  value: QueryValidatorDelegationsRequest;
};

type msgUndelegateParams = {
  value: MsgUndelegate;
};

type redelegationEntryParams = {
  value: RedelegationEntry;
};

type dvpairsParams = {
  value: DVPairs;
};

type poolParams = {
  value: Pool;
};

type msgEditValidatorParams = {
  value: MsgEditValidator;
};

type msgCancelUnbondingDelegationResponseParams = {
  value: MsgCancelUnbondingDelegationResponse;
};

type queryUnbondingDelegationResponseParams = {
  value: QueryUnbondingDelegationResponse;
};

type queryDelegationRequestParams = {
  value: QueryDelegationRequest;
};

type msgCancelUnbondingDelegationParams = {
  value: MsgCancelUnbondingDelegation;
};

type stakeAuthorizationParams = {
  value: StakeAuthorization;
};

type queryValidatorRequestParams = {
  value: QueryValidatorRequest;
};

type msgCreateValidatorParams = {
  value: MsgCreateValidator;
};

type queryParamsResponseParams = {
  value: QueryParamsResponse;
};

type dvpairParams = {
  value: DVPair;
};

type queryDelegatorValidatorRequestParams = {
  value: QueryDelegatorValidatorRequest;
};

type queryValidatorResponseParams = {
  value: QueryValidatorResponse;
};

type dvvtripletParams = {
  value: DVVTriplet;
};

type dvvtripletsParams = {
  value: DVVTriplets;
};

type validatorUpdatesParams = {
  value: ValidatorUpdates;
};

type msgBeginRedelegateResponseParams = {
  value: MsgBeginRedelegateResponse;
};

type queryValidatorsRequestParams = {
  value: QueryValidatorsRequest;
};

type redelegationParams = {
  value: Redelegation;
};

type commissionParams = {
  value: Commission;
};

type queryDelegatorUnbondingDelegationsRequestParams = {
  value: QueryDelegatorUnbondingDelegationsRequest;
};

type queryDelegatorValidatorsResponseParams = {
  value: QueryDelegatorValidatorsResponse;
};

type msgBeginRedelegateParams = {
  value: MsgBeginRedelegate;
};

type validatorParams = {
  value: Validator;
};

type lastValidatorPowerParams = {
  value: LastValidatorPower;
};

type msgEditValidatorResponseParams = {
  value: MsgEditValidatorResponse;
};

type queryRedelegationsResponseParams = {
  value: QueryRedelegationsResponse;
};

type queryPoolRequestParams = {
  value: QueryPoolRequest;
};

type msgUpdateParamsParams = {
  value: MsgUpdateParams;
};

type msgUpdateParamsResponseParams = {
  value: MsgUpdateParamsResponse;
};

type paramsParams = {
  value: Params;
};

type queryDelegatorDelegationsRequestParams = {
  value: QueryDelegatorDelegationsRequest;
};

type redelegationEntryResponseParams = {
  value: RedelegationEntryResponse;
};

type msgDelegateParams = {
  value: MsgDelegate;
};

type msgDelegateResponseParams = {
  value: MsgDelegateResponse;
};

type queryValidatorUnbondingDelegationsResponseParams = {
  value: QueryValidatorUnbondingDelegationsResponse;
};

type unbondingDelegationParams = {
  value: UnbondingDelegation;
};

type queryValidatorsResponseParams = {
  value: QueryValidatorsResponse;
};

type queryDelegationResponseParams = {
  value: QueryDelegationResponse;
};

type queryUnbondingDelegationRequestParams = {
  value: QueryUnbondingDelegationRequest;
};

type queryDelegatorUnbondingDelegationsResponseParams = {
  value: QueryDelegatorUnbondingDelegationsResponse;
};

type msgUndelegateResponseParams = {
  value: MsgUndelegateResponse;
};

type delegationParams = {
  value: Delegation;
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

    async sendQueryHistoricalInfoResponse({
      value,
      fee,
      memo,
    }: sendQueryHistoricalInfoResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryHistoricalInfoResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryHistoricalInfoResponse({ value: QueryHistoricalInfoResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryHistoricalInfoResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendDescription({ value, fee, memo }: sendDescriptionParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendDescription: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.description({ value: Description.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendDescription: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendCommissionRates({ value, fee, memo }: sendCommissionRatesParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendCommissionRates: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.commissionRates({ value: CommissionRates.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendCommissionRates: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendHistoricalInfo({ value, fee, memo }: sendHistoricalInfoParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendHistoricalInfo: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.historicalInfo({ value: HistoricalInfo.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendHistoricalInfo: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryRedelegationsRequest({
      value,
      fee,
      memo,
    }: sendQueryRedelegationsRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryRedelegationsRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryRedelegationsRequest({ value: QueryRedelegationsRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryRedelegationsRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryDelegatorValidatorResponse({
      value,
      fee,
      memo,
    }: sendQueryDelegatorValidatorResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryDelegatorValidatorResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryDelegatorValidatorResponse({ value: QueryDelegatorValidatorResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryDelegatorValidatorResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryPoolResponse({ value, fee, memo }: sendQueryPoolResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryPoolResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryPoolResponse({ value: QueryPoolResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryPoolResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendUnbondingDelegationEntry({
      value,
      fee,
      memo,
    }: sendUnbondingDelegationEntryParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendUnbondingDelegationEntry: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.unbondingDelegationEntry({ value: UnbondingDelegationEntry.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendUnbondingDelegationEntry: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryValidatorDelegationsResponse({
      value,
      fee,
      memo,
    }: sendQueryValidatorDelegationsResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryValidatorDelegationsResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryValidatorDelegationsResponse({
          value: QueryValidatorDelegationsResponse.fromPartial(value),
        });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryValidatorDelegationsResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryValidatorUnbondingDelegationsRequest({
      value,
      fee,
      memo,
    }: sendQueryValidatorUnbondingDelegationsRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error(
          'TxClient:sendQueryValidatorUnbondingDelegationsRequest: Unable to sign Tx. Signer is not present.'
        );
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryValidatorUnbondingDelegationsRequest({
          value: QueryValidatorUnbondingDelegationsRequest.fromPartial(value),
        });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryValidatorUnbondingDelegationsRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendValAddresses({ value, fee, memo }: sendValAddressesParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendValAddresses: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.valAddresses({ value: ValAddresses.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendValAddresses: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendStakeAuthorization_Validators({
      value,
      fee,
      memo,
    }: sendStakeAuthorization_ValidatorsParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendStakeAuthorization_Validators: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.stakeAuthorizationValidators({ value: StakeAuthorization_Validators.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendStakeAuthorization_Validators: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryDelegatorDelegationsResponse({
      value,
      fee,
      memo,
    }: sendQueryDelegatorDelegationsResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryDelegatorDelegationsResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryDelegatorDelegationsResponse({
          value: QueryDelegatorDelegationsResponse.fromPartial(value),
        });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryDelegatorDelegationsResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryDelegatorValidatorsRequest({
      value,
      fee,
      memo,
    }: sendQueryDelegatorValidatorsRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryDelegatorValidatorsRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryDelegatorValidatorsRequest({ value: QueryDelegatorValidatorsRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryDelegatorValidatorsRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryHistoricalInfoRequest({
      value,
      fee,
      memo,
    }: sendQueryHistoricalInfoRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryHistoricalInfoRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryHistoricalInfoRequest({ value: QueryHistoricalInfoRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryHistoricalInfoRequest: Could not broadcast Tx: ' + e.message);
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

    async sendRedelegationResponse({ value, fee, memo }: sendRedelegationResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendRedelegationResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.redelegationResponse({ value: RedelegationResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendRedelegationResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgCreateValidatorResponse({
      value,
      fee,
      memo,
    }: sendMsgCreateValidatorResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgCreateValidatorResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgCreateValidatorResponse({ value: MsgCreateValidatorResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgCreateValidatorResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendDelegationResponse({ value, fee, memo }: sendDelegationResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendDelegationResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.delegationResponse({ value: DelegationResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendDelegationResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryValidatorDelegationsRequest({
      value,
      fee,
      memo,
    }: sendQueryValidatorDelegationsRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryValidatorDelegationsRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryValidatorDelegationsRequest({ value: QueryValidatorDelegationsRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryValidatorDelegationsRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgUndelegate({ value, fee, memo }: sendMsgUndelegateParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgUndelegate: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgUndelegate({ value: MsgUndelegate.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgUndelegate: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendRedelegationEntry({ value, fee, memo }: sendRedelegationEntryParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendRedelegationEntry: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.redelegationEntry({ value: RedelegationEntry.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendRedelegationEntry: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendDVPairs({ value, fee, memo }: sendDVPairsParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendDVPairs: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.dvpairs({ value: DVPairs.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendDVPairs: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendPool({ value, fee, memo }: sendPoolParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendPool: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.pool({ value: Pool.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendPool: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgEditValidator({ value, fee, memo }: sendMsgEditValidatorParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgEditValidator: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgEditValidator({ value: MsgEditValidator.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgEditValidator: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgCancelUnbondingDelegationResponse({
      value,
      fee,
      memo,
    }: sendMsgCancelUnbondingDelegationResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgCancelUnbondingDelegationResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgCancelUnbondingDelegationResponse({
          value: MsgCancelUnbondingDelegationResponse.fromPartial(value),
        });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgCancelUnbondingDelegationResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryUnbondingDelegationResponse({
      value,
      fee,
      memo,
    }: sendQueryUnbondingDelegationResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryUnbondingDelegationResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryUnbondingDelegationResponse({ value: QueryUnbondingDelegationResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryUnbondingDelegationResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryDelegationRequest({
      value,
      fee,
      memo,
    }: sendQueryDelegationRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryDelegationRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryDelegationRequest({ value: QueryDelegationRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryDelegationRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgCancelUnbondingDelegation({
      value,
      fee,
      memo,
    }: sendMsgCancelUnbondingDelegationParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgCancelUnbondingDelegation: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgCancelUnbondingDelegation({ value: MsgCancelUnbondingDelegation.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgCancelUnbondingDelegation: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendStakeAuthorization({ value, fee, memo }: sendStakeAuthorizationParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendStakeAuthorization: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.stakeAuthorization({ value: StakeAuthorization.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendStakeAuthorization: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryValidatorRequest({ value, fee, memo }: sendQueryValidatorRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryValidatorRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryValidatorRequest({ value: QueryValidatorRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryValidatorRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgCreateValidator({ value, fee, memo }: sendMsgCreateValidatorParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgCreateValidator: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgCreateValidator({ value: MsgCreateValidator.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgCreateValidator: Could not broadcast Tx: ' + e.message);
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

    async sendDVPair({ value, fee, memo }: sendDVPairParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendDVPair: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.dvpair({ value: DVPair.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendDVPair: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryDelegatorValidatorRequest({
      value,
      fee,
      memo,
    }: sendQueryDelegatorValidatorRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryDelegatorValidatorRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryDelegatorValidatorRequest({ value: QueryDelegatorValidatorRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryDelegatorValidatorRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryValidatorResponse({
      value,
      fee,
      memo,
    }: sendQueryValidatorResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryValidatorResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryValidatorResponse({ value: QueryValidatorResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryValidatorResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendDVVTriplet({ value, fee, memo }: sendDVVTripletParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendDVVTriplet: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.dvvtriplet({ value: DVVTriplet.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendDVVTriplet: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendDVVTriplets({ value, fee, memo }: sendDVVTripletsParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendDVVTriplets: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.dvvtriplets({ value: DVVTriplets.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendDVVTriplets: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendValidatorUpdates({ value, fee, memo }: sendValidatorUpdatesParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendValidatorUpdates: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.validatorUpdates({ value: ValidatorUpdates.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendValidatorUpdates: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgBeginRedelegateResponse({
      value,
      fee,
      memo,
    }: sendMsgBeginRedelegateResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgBeginRedelegateResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgBeginRedelegateResponse({ value: MsgBeginRedelegateResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgBeginRedelegateResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryValidatorsRequest({
      value,
      fee,
      memo,
    }: sendQueryValidatorsRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryValidatorsRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryValidatorsRequest({ value: QueryValidatorsRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryValidatorsRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendRedelegation({ value, fee, memo }: sendRedelegationParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendRedelegation: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.redelegation({ value: Redelegation.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendRedelegation: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendCommission({ value, fee, memo }: sendCommissionParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendCommission: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.commission({ value: Commission.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendCommission: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryDelegatorUnbondingDelegationsRequest({
      value,
      fee,
      memo,
    }: sendQueryDelegatorUnbondingDelegationsRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error(
          'TxClient:sendQueryDelegatorUnbondingDelegationsRequest: Unable to sign Tx. Signer is not present.'
        );
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryDelegatorUnbondingDelegationsRequest({
          value: QueryDelegatorUnbondingDelegationsRequest.fromPartial(value),
        });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryDelegatorUnbondingDelegationsRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryDelegatorValidatorsResponse({
      value,
      fee,
      memo,
    }: sendQueryDelegatorValidatorsResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryDelegatorValidatorsResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryDelegatorValidatorsResponse({ value: QueryDelegatorValidatorsResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryDelegatorValidatorsResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgBeginRedelegate({ value, fee, memo }: sendMsgBeginRedelegateParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgBeginRedelegate: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgBeginRedelegate({ value: MsgBeginRedelegate.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgBeginRedelegate: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendValidator({ value, fee, memo }: sendValidatorParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendValidator: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.validator({ value: Validator.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendValidator: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendLastValidatorPower({ value, fee, memo }: sendLastValidatorPowerParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendLastValidatorPower: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.lastValidatorPower({ value: LastValidatorPower.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendLastValidatorPower: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgEditValidatorResponse({
      value,
      fee,
      memo,
    }: sendMsgEditValidatorResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgEditValidatorResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgEditValidatorResponse({ value: MsgEditValidatorResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgEditValidatorResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryRedelegationsResponse({
      value,
      fee,
      memo,
    }: sendQueryRedelegationsResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryRedelegationsResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryRedelegationsResponse({ value: QueryRedelegationsResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryRedelegationsResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryPoolRequest({ value, fee, memo }: sendQueryPoolRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryPoolRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryPoolRequest({ value: QueryPoolRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryPoolRequest: Could not broadcast Tx: ' + e.message);
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

    async sendQueryDelegatorDelegationsRequest({
      value,
      fee,
      memo,
    }: sendQueryDelegatorDelegationsRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryDelegatorDelegationsRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryDelegatorDelegationsRequest({ value: QueryDelegatorDelegationsRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryDelegatorDelegationsRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendRedelegationEntryResponse({
      value,
      fee,
      memo,
    }: sendRedelegationEntryResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendRedelegationEntryResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.redelegationEntryResponse({ value: RedelegationEntryResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendRedelegationEntryResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgDelegate({ value, fee, memo }: sendMsgDelegateParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgDelegate: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgDelegate({ value: MsgDelegate.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgDelegate: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgDelegateResponse({ value, fee, memo }: sendMsgDelegateResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgDelegateResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgDelegateResponse({ value: MsgDelegateResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgDelegateResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryValidatorUnbondingDelegationsResponse({
      value,
      fee,
      memo,
    }: sendQueryValidatorUnbondingDelegationsResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error(
          'TxClient:sendQueryValidatorUnbondingDelegationsResponse: Unable to sign Tx. Signer is not present.'
        );
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryValidatorUnbondingDelegationsResponse({
          value: QueryValidatorUnbondingDelegationsResponse.fromPartial(value),
        });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error(
          'TxClient:sendQueryValidatorUnbondingDelegationsResponse: Could not broadcast Tx: ' + e.message
        );
      }
    },

    async sendUnbondingDelegation({ value, fee, memo }: sendUnbondingDelegationParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendUnbondingDelegation: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.unbondingDelegation({ value: UnbondingDelegation.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendUnbondingDelegation: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryValidatorsResponse({
      value,
      fee,
      memo,
    }: sendQueryValidatorsResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryValidatorsResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryValidatorsResponse({ value: QueryValidatorsResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryValidatorsResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryDelegationResponse({
      value,
      fee,
      memo,
    }: sendQueryDelegationResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryDelegationResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryDelegationResponse({ value: QueryDelegationResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryDelegationResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryUnbondingDelegationRequest({
      value,
      fee,
      memo,
    }: sendQueryUnbondingDelegationRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryUnbondingDelegationRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryUnbondingDelegationRequest({ value: QueryUnbondingDelegationRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryUnbondingDelegationRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryDelegatorUnbondingDelegationsResponse({
      value,
      fee,
      memo,
    }: sendQueryDelegatorUnbondingDelegationsResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error(
          'TxClient:sendQueryDelegatorUnbondingDelegationsResponse: Unable to sign Tx. Signer is not present.'
        );
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryDelegatorUnbondingDelegationsResponse({
          value: QueryDelegatorUnbondingDelegationsResponse.fromPartial(value),
        });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error(
          'TxClient:sendQueryDelegatorUnbondingDelegationsResponse: Could not broadcast Tx: ' + e.message
        );
      }
    },

    async sendMsgUndelegateResponse({ value, fee, memo }: sendMsgUndelegateResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgUndelegateResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgUndelegateResponse({ value: MsgUndelegateResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgUndelegateResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendDelegation({ value, fee, memo }: sendDelegationParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendDelegation: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.delegation({ value: Delegation.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendDelegation: Could not broadcast Tx: ' + e.message);
      }
    },

    genesisState({ value }: genesisStateParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.staking.v1beta1.GenesisState', value: GenesisState.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:GenesisState: Could not create message: ' + e.message);
      }
    },

    queryHistoricalInfoResponse({ value }: queryHistoricalInfoResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.staking.v1beta1.QueryHistoricalInfoResponse',
          value: QueryHistoricalInfoResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryHistoricalInfoResponse: Could not create message: ' + e.message);
      }
    },

    description({ value }: descriptionParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.staking.v1beta1.Description', value: Description.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:Description: Could not create message: ' + e.message);
      }
    },

    commissionRates({ value }: commissionRatesParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.staking.v1beta1.CommissionRates', value: CommissionRates.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:CommissionRates: Could not create message: ' + e.message);
      }
    },

    historicalInfo({ value }: historicalInfoParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.staking.v1beta1.HistoricalInfo', value: HistoricalInfo.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:HistoricalInfo: Could not create message: ' + e.message);
      }
    },

    queryRedelegationsRequest({ value }: queryRedelegationsRequestParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.staking.v1beta1.QueryRedelegationsRequest',
          value: QueryRedelegationsRequest.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryRedelegationsRequest: Could not create message: ' + e.message);
      }
    },

    queryDelegatorValidatorResponse({ value }: queryDelegatorValidatorResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.staking.v1beta1.QueryDelegatorValidatorResponse',
          value: QueryDelegatorValidatorResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryDelegatorValidatorResponse: Could not create message: ' + e.message);
      }
    },

    queryPoolResponse({ value }: queryPoolResponseParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.staking.v1beta1.QueryPoolResponse', value: QueryPoolResponse.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:QueryPoolResponse: Could not create message: ' + e.message);
      }
    },

    unbondingDelegationEntry({ value }: unbondingDelegationEntryParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.staking.v1beta1.UnbondingDelegationEntry',
          value: UnbondingDelegationEntry.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:UnbondingDelegationEntry: Could not create message: ' + e.message);
      }
    },

    queryValidatorDelegationsResponse({ value }: queryValidatorDelegationsResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.staking.v1beta1.QueryValidatorDelegationsResponse',
          value: QueryValidatorDelegationsResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryValidatorDelegationsResponse: Could not create message: ' + e.message);
      }
    },

    queryValidatorUnbondingDelegationsRequest({
      value,
    }: queryValidatorUnbondingDelegationsRequestParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsRequest',
          value: QueryValidatorUnbondingDelegationsRequest.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryValidatorUnbondingDelegationsRequest: Could not create message: ' + e.message);
      }
    },

    valAddresses({ value }: valAddressesParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.staking.v1beta1.ValAddresses', value: ValAddresses.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:ValAddresses: Could not create message: ' + e.message);
      }
    },

    stakeAuthorizationValidators({ value }: stakeAuthorizationValidatorsParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.staking.v1beta1.StakeAuthorization_Validators',
          value: StakeAuthorization_Validators.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:StakeAuthorization_Validators: Could not create message: ' + e.message);
      }
    },

    queryDelegatorDelegationsResponse({ value }: queryDelegatorDelegationsResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.staking.v1beta1.QueryDelegatorDelegationsResponse',
          value: QueryDelegatorDelegationsResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryDelegatorDelegationsResponse: Could not create message: ' + e.message);
      }
    },

    queryDelegatorValidatorsRequest({ value }: queryDelegatorValidatorsRequestParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.staking.v1beta1.QueryDelegatorValidatorsRequest',
          value: QueryDelegatorValidatorsRequest.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryDelegatorValidatorsRequest: Could not create message: ' + e.message);
      }
    },

    queryHistoricalInfoRequest({ value }: queryHistoricalInfoRequestParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.staking.v1beta1.QueryHistoricalInfoRequest',
          value: QueryHistoricalInfoRequest.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryHistoricalInfoRequest: Could not create message: ' + e.message);
      }
    },

    queryParamsRequest({ value }: queryParamsRequestParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.staking.v1beta1.QueryParamsRequest', value: QueryParamsRequest.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:QueryParamsRequest: Could not create message: ' + e.message);
      }
    },

    redelegationResponse({ value }: redelegationResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.staking.v1beta1.RedelegationResponse',
          value: RedelegationResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:RedelegationResponse: Could not create message: ' + e.message);
      }
    },

    msgCreateValidatorResponse({ value }: msgCreateValidatorResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.staking.v1beta1.MsgCreateValidatorResponse',
          value: MsgCreateValidatorResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgCreateValidatorResponse: Could not create message: ' + e.message);
      }
    },

    delegationResponse({ value }: delegationResponseParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.staking.v1beta1.DelegationResponse', value: DelegationResponse.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:DelegationResponse: Could not create message: ' + e.message);
      }
    },

    queryValidatorDelegationsRequest({ value }: queryValidatorDelegationsRequestParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.staking.v1beta1.QueryValidatorDelegationsRequest',
          value: QueryValidatorDelegationsRequest.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryValidatorDelegationsRequest: Could not create message: ' + e.message);
      }
    },

    msgUndelegate({ value }: msgUndelegateParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.staking.v1beta1.MsgUndelegate', value: MsgUndelegate.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:MsgUndelegate: Could not create message: ' + e.message);
      }
    },

    redelegationEntry({ value }: redelegationEntryParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.staking.v1beta1.RedelegationEntry', value: RedelegationEntry.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:RedelegationEntry: Could not create message: ' + e.message);
      }
    },

    dvpairs({ value }: dvpairsParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.staking.v1beta1.DVPairs', value: DVPairs.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:DVPairs: Could not create message: ' + e.message);
      }
    },

    pool({ value }: poolParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.staking.v1beta1.Pool', value: Pool.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:Pool: Could not create message: ' + e.message);
      }
    },

    msgEditValidator({ value }: msgEditValidatorParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.staking.v1beta1.MsgEditValidator', value: MsgEditValidator.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:MsgEditValidator: Could not create message: ' + e.message);
      }
    },

    msgCancelUnbondingDelegationResponse({ value }: msgCancelUnbondingDelegationResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.staking.v1beta1.MsgCancelUnbondingDelegationResponse',
          value: MsgCancelUnbondingDelegationResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgCancelUnbondingDelegationResponse: Could not create message: ' + e.message);
      }
    },

    queryUnbondingDelegationResponse({ value }: queryUnbondingDelegationResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.staking.v1beta1.QueryUnbondingDelegationResponse',
          value: QueryUnbondingDelegationResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryUnbondingDelegationResponse: Could not create message: ' + e.message);
      }
    },

    queryDelegationRequest({ value }: queryDelegationRequestParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.staking.v1beta1.QueryDelegationRequest',
          value: QueryDelegationRequest.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryDelegationRequest: Could not create message: ' + e.message);
      }
    },

    msgCancelUnbondingDelegation({ value }: msgCancelUnbondingDelegationParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation',
          value: MsgCancelUnbondingDelegation.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgCancelUnbondingDelegation: Could not create message: ' + e.message);
      }
    },

    stakeAuthorization({ value }: stakeAuthorizationParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.staking.v1beta1.StakeAuthorization', value: StakeAuthorization.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:StakeAuthorization: Could not create message: ' + e.message);
      }
    },

    queryValidatorRequest({ value }: queryValidatorRequestParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.staking.v1beta1.QueryValidatorRequest',
          value: QueryValidatorRequest.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryValidatorRequest: Could not create message: ' + e.message);
      }
    },

    msgCreateValidator({ value }: msgCreateValidatorParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.staking.v1beta1.MsgCreateValidator', value: MsgCreateValidator.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:MsgCreateValidator: Could not create message: ' + e.message);
      }
    },

    queryParamsResponse({ value }: queryParamsResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.staking.v1beta1.QueryParamsResponse',
          value: QueryParamsResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryParamsResponse: Could not create message: ' + e.message);
      }
    },

    dvpair({ value }: dvpairParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.staking.v1beta1.DVPair', value: DVPair.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:DVPair: Could not create message: ' + e.message);
      }
    },

    queryDelegatorValidatorRequest({ value }: queryDelegatorValidatorRequestParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.staking.v1beta1.QueryDelegatorValidatorRequest',
          value: QueryDelegatorValidatorRequest.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryDelegatorValidatorRequest: Could not create message: ' + e.message);
      }
    },

    queryValidatorResponse({ value }: queryValidatorResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.staking.v1beta1.QueryValidatorResponse',
          value: QueryValidatorResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryValidatorResponse: Could not create message: ' + e.message);
      }
    },

    dvvtriplet({ value }: dvvtripletParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.staking.v1beta1.DVVTriplet', value: DVVTriplet.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:DVVTriplet: Could not create message: ' + e.message);
      }
    },

    dvvtriplets({ value }: dvvtripletsParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.staking.v1beta1.DVVTriplets', value: DVVTriplets.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:DVVTriplets: Could not create message: ' + e.message);
      }
    },

    validatorUpdates({ value }: validatorUpdatesParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.staking.v1beta1.ValidatorUpdates', value: ValidatorUpdates.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:ValidatorUpdates: Could not create message: ' + e.message);
      }
    },

    msgBeginRedelegateResponse({ value }: msgBeginRedelegateResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.staking.v1beta1.MsgBeginRedelegateResponse',
          value: MsgBeginRedelegateResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgBeginRedelegateResponse: Could not create message: ' + e.message);
      }
    },

    queryValidatorsRequest({ value }: queryValidatorsRequestParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.staking.v1beta1.QueryValidatorsRequest',
          value: QueryValidatorsRequest.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryValidatorsRequest: Could not create message: ' + e.message);
      }
    },

    redelegation({ value }: redelegationParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.staking.v1beta1.Redelegation', value: Redelegation.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:Redelegation: Could not create message: ' + e.message);
      }
    },

    commission({ value }: commissionParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.staking.v1beta1.Commission', value: Commission.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:Commission: Could not create message: ' + e.message);
      }
    },

    queryDelegatorUnbondingDelegationsRequest({
      value,
    }: queryDelegatorUnbondingDelegationsRequestParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsRequest',
          value: QueryDelegatorUnbondingDelegationsRequest.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryDelegatorUnbondingDelegationsRequest: Could not create message: ' + e.message);
      }
    },

    queryDelegatorValidatorsResponse({ value }: queryDelegatorValidatorsResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.staking.v1beta1.QueryDelegatorValidatorsResponse',
          value: QueryDelegatorValidatorsResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryDelegatorValidatorsResponse: Could not create message: ' + e.message);
      }
    },

    msgBeginRedelegate({ value }: msgBeginRedelegateParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.staking.v1beta1.MsgBeginRedelegate', value: MsgBeginRedelegate.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:MsgBeginRedelegate: Could not create message: ' + e.message);
      }
    },

    validator({ value }: validatorParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.staking.v1beta1.Validator', value: Validator.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:Validator: Could not create message: ' + e.message);
      }
    },

    lastValidatorPower({ value }: lastValidatorPowerParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.staking.v1beta1.LastValidatorPower', value: LastValidatorPower.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:LastValidatorPower: Could not create message: ' + e.message);
      }
    },

    msgEditValidatorResponse({ value }: msgEditValidatorResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.staking.v1beta1.MsgEditValidatorResponse',
          value: MsgEditValidatorResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgEditValidatorResponse: Could not create message: ' + e.message);
      }
    },

    queryRedelegationsResponse({ value }: queryRedelegationsResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.staking.v1beta1.QueryRedelegationsResponse',
          value: QueryRedelegationsResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryRedelegationsResponse: Could not create message: ' + e.message);
      }
    },

    queryPoolRequest({ value }: queryPoolRequestParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.staking.v1beta1.QueryPoolRequest', value: QueryPoolRequest.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:QueryPoolRequest: Could not create message: ' + e.message);
      }
    },

    msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.staking.v1beta1.MsgUpdateParams', value: MsgUpdateParams.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:MsgUpdateParams: Could not create message: ' + e.message);
      }
    },

    msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.staking.v1beta1.MsgUpdateParamsResponse',
          value: MsgUpdateParamsResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgUpdateParamsResponse: Could not create message: ' + e.message);
      }
    },

    params({ value }: paramsParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.staking.v1beta1.Params', value: Params.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:Params: Could not create message: ' + e.message);
      }
    },

    queryDelegatorDelegationsRequest({ value }: queryDelegatorDelegationsRequestParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.staking.v1beta1.QueryDelegatorDelegationsRequest',
          value: QueryDelegatorDelegationsRequest.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryDelegatorDelegationsRequest: Could not create message: ' + e.message);
      }
    },

    redelegationEntryResponse({ value }: redelegationEntryResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.staking.v1beta1.RedelegationEntryResponse',
          value: RedelegationEntryResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:RedelegationEntryResponse: Could not create message: ' + e.message);
      }
    },

    msgDelegate({ value }: msgDelegateParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.staking.v1beta1.MsgDelegate', value: MsgDelegate.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:MsgDelegate: Could not create message: ' + e.message);
      }
    },

    msgDelegateResponse({ value }: msgDelegateResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.staking.v1beta1.MsgDelegateResponse',
          value: MsgDelegateResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgDelegateResponse: Could not create message: ' + e.message);
      }
    },

    queryValidatorUnbondingDelegationsResponse({
      value,
    }: queryValidatorUnbondingDelegationsResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsResponse',
          value: QueryValidatorUnbondingDelegationsResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryValidatorUnbondingDelegationsResponse: Could not create message: ' + e.message);
      }
    },

    unbondingDelegation({ value }: unbondingDelegationParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.staking.v1beta1.UnbondingDelegation',
          value: UnbondingDelegation.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:UnbondingDelegation: Could not create message: ' + e.message);
      }
    },

    queryValidatorsResponse({ value }: queryValidatorsResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.staking.v1beta1.QueryValidatorsResponse',
          value: QueryValidatorsResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryValidatorsResponse: Could not create message: ' + e.message);
      }
    },

    queryDelegationResponse({ value }: queryDelegationResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.staking.v1beta1.QueryDelegationResponse',
          value: QueryDelegationResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryDelegationResponse: Could not create message: ' + e.message);
      }
    },

    queryUnbondingDelegationRequest({ value }: queryUnbondingDelegationRequestParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.staking.v1beta1.QueryUnbondingDelegationRequest',
          value: QueryUnbondingDelegationRequest.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryUnbondingDelegationRequest: Could not create message: ' + e.message);
      }
    },

    queryDelegatorUnbondingDelegationsResponse({
      value,
    }: queryDelegatorUnbondingDelegationsResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsResponse',
          value: QueryDelegatorUnbondingDelegationsResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryDelegatorUnbondingDelegationsResponse: Could not create message: ' + e.message);
      }
    },

    msgUndelegateResponse({ value }: msgUndelegateResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.staking.v1beta1.MsgUndelegateResponse',
          value: MsgUndelegateResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgUndelegateResponse: Could not create message: ' + e.message);
      }
    },

    delegation({ value }: delegationParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.staking.v1beta1.Delegation', value: Delegation.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:Delegation: Could not create message: ' + e.message);
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
      CosmosStakingV1Beta1: new SDKModule(test),
    },
    registry: msgTypes,
  };
};
export default IgntModule;
