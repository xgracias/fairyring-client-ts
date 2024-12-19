import { SigningStargateClient, DeliverTxResponse, StdFee } from '@cosmjs/stargate';
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from '@cosmjs/proto-signing';
import { msgTypes } from './registry';
import { IgniteClient } from '../client';
import { MissingWalletError } from '../helpers';
import { Api } from './rest';
import { ValidatorCurrentRewardsRecord } from './types/cosmos/distribution/v1beta1/genesis';
import { ValidatorSlashEvent } from './types/cosmos/distribution/v1beta1/distribution';
import { QueryDelegatorWithdrawAddressRequest } from './types/cosmos/distribution/v1beta1/query';
import { MsgFundCommunityPool } from './types/cosmos/distribution/v1beta1/tx';
import { QueryValidatorOutstandingRewardsResponse } from './types/cosmos/distribution/v1beta1/query';
import { QueryDelegationRewardsResponse } from './types/cosmos/distribution/v1beta1/query';
import { Params } from './types/cosmos/distribution/v1beta1/distribution';
import { MsgWithdrawDelegatorRewardResponse } from './types/cosmos/distribution/v1beta1/tx';
import { QueryParamsRequest } from './types/cosmos/distribution/v1beta1/query';
import { DelegatorWithdrawInfo } from './types/cosmos/distribution/v1beta1/genesis';
import { MsgDepositValidatorRewardsPoolResponse } from './types/cosmos/distribution/v1beta1/tx';
import { QueryDelegatorWithdrawAddressResponse } from './types/cosmos/distribution/v1beta1/query';
import { ValidatorOutstandingRewardsRecord } from './types/cosmos/distribution/v1beta1/genesis';
import { MsgSetWithdrawAddress } from './types/cosmos/distribution/v1beta1/tx';
import { MsgWithdrawValidatorCommission } from './types/cosmos/distribution/v1beta1/tx';
import { MsgDepositValidatorRewardsPool } from './types/cosmos/distribution/v1beta1/tx';
import { QueryValidatorDistributionInfoRequest } from './types/cosmos/distribution/v1beta1/query';
import { QueryValidatorSlashesResponse } from './types/cosmos/distribution/v1beta1/query';
import { ValidatorAccumulatedCommissionRecord } from './types/cosmos/distribution/v1beta1/genesis';
import { MsgUpdateParams } from './types/cosmos/distribution/v1beta1/tx';
import { MsgCommunityPoolSpend } from './types/cosmos/distribution/v1beta1/tx';
import { QueryValidatorSlashesRequest } from './types/cosmos/distribution/v1beta1/query';
import { DelegatorStartingInfoRecord } from './types/cosmos/distribution/v1beta1/genesis';
import { ValidatorSlashEventRecord } from './types/cosmos/distribution/v1beta1/genesis';
import { MsgSetWithdrawAddressResponse } from './types/cosmos/distribution/v1beta1/tx';
import { MsgWithdrawDelegatorReward } from './types/cosmos/distribution/v1beta1/tx';
import { MsgWithdrawValidatorCommissionResponse } from './types/cosmos/distribution/v1beta1/tx';
import { MsgUpdateParamsResponse } from './types/cosmos/distribution/v1beta1/tx';
import { ValidatorSlashEvents } from './types/cosmos/distribution/v1beta1/distribution';
import { QueryValidatorOutstandingRewardsRequest } from './types/cosmos/distribution/v1beta1/query';
import { QueryDelegationTotalRewardsResponse } from './types/cosmos/distribution/v1beta1/query';
import { FeePool } from './types/cosmos/distribution/v1beta1/distribution';
import { ValidatorOutstandingRewards } from './types/cosmos/distribution/v1beta1/distribution';
import { QueryValidatorDistributionInfoResponse } from './types/cosmos/distribution/v1beta1/query';
import { MsgFundCommunityPoolResponse } from './types/cosmos/distribution/v1beta1/tx';
import { MsgCommunityPoolSpendResponse } from './types/cosmos/distribution/v1beta1/tx';
import { ValidatorAccumulatedCommission } from './types/cosmos/distribution/v1beta1/distribution';
import { QueryValidatorCommissionResponse } from './types/cosmos/distribution/v1beta1/query';
import { QueryDelegatorValidatorsRequest } from './types/cosmos/distribution/v1beta1/query';
import { QueryDelegatorValidatorsResponse } from './types/cosmos/distribution/v1beta1/query';
import { QueryCommunityPoolResponse } from './types/cosmos/distribution/v1beta1/query';
import { DelegatorStartingInfo } from './types/cosmos/distribution/v1beta1/distribution';
import { QueryParamsResponse } from './types/cosmos/distribution/v1beta1/query';
import { QueryValidatorCommissionRequest } from './types/cosmos/distribution/v1beta1/query';
import { ValidatorHistoricalRewardsRecord } from './types/cosmos/distribution/v1beta1/genesis';
import { GenesisState } from './types/cosmos/distribution/v1beta1/genesis';
import { QueryDelegationRewardsRequest } from './types/cosmos/distribution/v1beta1/query';
import { QueryCommunityPoolRequest } from './types/cosmos/distribution/v1beta1/query';
import { ValidatorHistoricalRewards } from './types/cosmos/distribution/v1beta1/distribution';
import { CommunityPoolSpendProposalWithDeposit } from './types/cosmos/distribution/v1beta1/distribution';
import { QueryDelegationTotalRewardsRequest } from './types/cosmos/distribution/v1beta1/query';
import { CommunityPoolSpendProposal } from './types/cosmos/distribution/v1beta1/distribution';
import { ValidatorCurrentRewards } from './types/cosmos/distribution/v1beta1/distribution';
import { DelegationDelegatorReward } from './types/cosmos/distribution/v1beta1/distribution';

export {
  ValidatorCurrentRewardsRecord,
  ValidatorSlashEvent,
  QueryDelegatorWithdrawAddressRequest,
  MsgFundCommunityPool,
  QueryValidatorOutstandingRewardsResponse,
  QueryDelegationRewardsResponse,
  Params,
  MsgWithdrawDelegatorRewardResponse,
  QueryParamsRequest,
  DelegatorWithdrawInfo,
  MsgDepositValidatorRewardsPoolResponse,
  QueryDelegatorWithdrawAddressResponse,
  ValidatorOutstandingRewardsRecord,
  MsgSetWithdrawAddress,
  MsgWithdrawValidatorCommission,
  MsgDepositValidatorRewardsPool,
  QueryValidatorDistributionInfoRequest,
  QueryValidatorSlashesResponse,
  ValidatorAccumulatedCommissionRecord,
  MsgUpdateParams,
  MsgCommunityPoolSpend,
  QueryValidatorSlashesRequest,
  DelegatorStartingInfoRecord,
  ValidatorSlashEventRecord,
  MsgSetWithdrawAddressResponse,
  MsgWithdrawDelegatorReward,
  MsgWithdrawValidatorCommissionResponse,
  MsgUpdateParamsResponse,
  ValidatorSlashEvents,
  QueryValidatorOutstandingRewardsRequest,
  QueryDelegationTotalRewardsResponse,
  FeePool,
  ValidatorOutstandingRewards,
  QueryValidatorDistributionInfoResponse,
  MsgFundCommunityPoolResponse,
  MsgCommunityPoolSpendResponse,
  ValidatorAccumulatedCommission,
  QueryValidatorCommissionResponse,
  QueryDelegatorValidatorsRequest,
  QueryDelegatorValidatorsResponse,
  QueryCommunityPoolResponse,
  DelegatorStartingInfo,
  QueryParamsResponse,
  QueryValidatorCommissionRequest,
  ValidatorHistoricalRewardsRecord,
  GenesisState,
  QueryDelegationRewardsRequest,
  QueryCommunityPoolRequest,
  ValidatorHistoricalRewards,
  CommunityPoolSpendProposalWithDeposit,
  QueryDelegationTotalRewardsRequest,
  CommunityPoolSpendProposal,
  ValidatorCurrentRewards,
  DelegationDelegatorReward,
};

type sendValidatorCurrentRewardsRecordParams = {
  value: ValidatorCurrentRewardsRecord;
  fee?: StdFee;
  memo?: string;
};

type sendValidatorSlashEventParams = {
  value: ValidatorSlashEvent;
  fee?: StdFee;
  memo?: string;
};

type sendQueryDelegatorWithdrawAddressRequestParams = {
  value: QueryDelegatorWithdrawAddressRequest;
  fee?: StdFee;
  memo?: string;
};

type sendMsgFundCommunityPoolParams = {
  value: MsgFundCommunityPool;
  fee?: StdFee;
  memo?: string;
};

type sendQueryValidatorOutstandingRewardsResponseParams = {
  value: QueryValidatorOutstandingRewardsResponse;
  fee?: StdFee;
  memo?: string;
};

type sendQueryDelegationRewardsResponseParams = {
  value: QueryDelegationRewardsResponse;
  fee?: StdFee;
  memo?: string;
};

type sendParamsParams = {
  value: Params;
  fee?: StdFee;
  memo?: string;
};

type sendMsgWithdrawDelegatorRewardResponseParams = {
  value: MsgWithdrawDelegatorRewardResponse;
  fee?: StdFee;
  memo?: string;
};

type sendQueryParamsRequestParams = {
  value: QueryParamsRequest;
  fee?: StdFee;
  memo?: string;
};

type sendDelegatorWithdrawInfoParams = {
  value: DelegatorWithdrawInfo;
  fee?: StdFee;
  memo?: string;
};

type sendMsgDepositValidatorRewardsPoolResponseParams = {
  value: MsgDepositValidatorRewardsPoolResponse;
  fee?: StdFee;
  memo?: string;
};

type sendQueryDelegatorWithdrawAddressResponseParams = {
  value: QueryDelegatorWithdrawAddressResponse;
  fee?: StdFee;
  memo?: string;
};

type sendValidatorOutstandingRewardsRecordParams = {
  value: ValidatorOutstandingRewardsRecord;
  fee?: StdFee;
  memo?: string;
};

type sendMsgSetWithdrawAddressParams = {
  value: MsgSetWithdrawAddress;
  fee?: StdFee;
  memo?: string;
};

type sendMsgWithdrawValidatorCommissionParams = {
  value: MsgWithdrawValidatorCommission;
  fee?: StdFee;
  memo?: string;
};

type sendMsgDepositValidatorRewardsPoolParams = {
  value: MsgDepositValidatorRewardsPool;
  fee?: StdFee;
  memo?: string;
};

type sendQueryValidatorDistributionInfoRequestParams = {
  value: QueryValidatorDistributionInfoRequest;
  fee?: StdFee;
  memo?: string;
};

type sendQueryValidatorSlashesResponseParams = {
  value: QueryValidatorSlashesResponse;
  fee?: StdFee;
  memo?: string;
};

type sendValidatorAccumulatedCommissionRecordParams = {
  value: ValidatorAccumulatedCommissionRecord;
  fee?: StdFee;
  memo?: string;
};

type sendMsgUpdateParamsParams = {
  value: MsgUpdateParams;
  fee?: StdFee;
  memo?: string;
};

type sendMsgCommunityPoolSpendParams = {
  value: MsgCommunityPoolSpend;
  fee?: StdFee;
  memo?: string;
};

type sendQueryValidatorSlashesRequestParams = {
  value: QueryValidatorSlashesRequest;
  fee?: StdFee;
  memo?: string;
};

type sendDelegatorStartingInfoRecordParams = {
  value: DelegatorStartingInfoRecord;
  fee?: StdFee;
  memo?: string;
};

type sendValidatorSlashEventRecordParams = {
  value: ValidatorSlashEventRecord;
  fee?: StdFee;
  memo?: string;
};

type sendMsgSetWithdrawAddressResponseParams = {
  value: MsgSetWithdrawAddressResponse;
  fee?: StdFee;
  memo?: string;
};

type sendMsgWithdrawDelegatorRewardParams = {
  value: MsgWithdrawDelegatorReward;
  fee?: StdFee;
  memo?: string;
};

type sendMsgWithdrawValidatorCommissionResponseParams = {
  value: MsgWithdrawValidatorCommissionResponse;
  fee?: StdFee;
  memo?: string;
};

type sendMsgUpdateParamsResponseParams = {
  value: MsgUpdateParamsResponse;
  fee?: StdFee;
  memo?: string;
};

type sendValidatorSlashEventsParams = {
  value: ValidatorSlashEvents;
  fee?: StdFee;
  memo?: string;
};

type sendQueryValidatorOutstandingRewardsRequestParams = {
  value: QueryValidatorOutstandingRewardsRequest;
  fee?: StdFee;
  memo?: string;
};

type sendQueryDelegationTotalRewardsResponseParams = {
  value: QueryDelegationTotalRewardsResponse;
  fee?: StdFee;
  memo?: string;
};

type sendFeePoolParams = {
  value: FeePool;
  fee?: StdFee;
  memo?: string;
};

type sendValidatorOutstandingRewardsParams = {
  value: ValidatorOutstandingRewards;
  fee?: StdFee;
  memo?: string;
};

type sendQueryValidatorDistributionInfoResponseParams = {
  value: QueryValidatorDistributionInfoResponse;
  fee?: StdFee;
  memo?: string;
};

type sendMsgFundCommunityPoolResponseParams = {
  value: MsgFundCommunityPoolResponse;
  fee?: StdFee;
  memo?: string;
};

type sendMsgCommunityPoolSpendResponseParams = {
  value: MsgCommunityPoolSpendResponse;
  fee?: StdFee;
  memo?: string;
};

type sendValidatorAccumulatedCommissionParams = {
  value: ValidatorAccumulatedCommission;
  fee?: StdFee;
  memo?: string;
};

type sendQueryValidatorCommissionResponseParams = {
  value: QueryValidatorCommissionResponse;
  fee?: StdFee;
  memo?: string;
};

type sendQueryDelegatorValidatorsRequestParams = {
  value: QueryDelegatorValidatorsRequest;
  fee?: StdFee;
  memo?: string;
};

type sendQueryDelegatorValidatorsResponseParams = {
  value: QueryDelegatorValidatorsResponse;
  fee?: StdFee;
  memo?: string;
};

type sendQueryCommunityPoolResponseParams = {
  value: QueryCommunityPoolResponse;
  fee?: StdFee;
  memo?: string;
};

type sendDelegatorStartingInfoParams = {
  value: DelegatorStartingInfo;
  fee?: StdFee;
  memo?: string;
};

type sendQueryParamsResponseParams = {
  value: QueryParamsResponse;
  fee?: StdFee;
  memo?: string;
};

type sendQueryValidatorCommissionRequestParams = {
  value: QueryValidatorCommissionRequest;
  fee?: StdFee;
  memo?: string;
};

type sendValidatorHistoricalRewardsRecordParams = {
  value: ValidatorHistoricalRewardsRecord;
  fee?: StdFee;
  memo?: string;
};

type sendGenesisStateParams = {
  value: GenesisState;
  fee?: StdFee;
  memo?: string;
};

type sendQueryDelegationRewardsRequestParams = {
  value: QueryDelegationRewardsRequest;
  fee?: StdFee;
  memo?: string;
};

type sendQueryCommunityPoolRequestParams = {
  value: QueryCommunityPoolRequest;
  fee?: StdFee;
  memo?: string;
};

type sendValidatorHistoricalRewardsParams = {
  value: ValidatorHistoricalRewards;
  fee?: StdFee;
  memo?: string;
};

type sendCommunityPoolSpendProposalWithDepositParams = {
  value: CommunityPoolSpendProposalWithDeposit;
  fee?: StdFee;
  memo?: string;
};

type sendQueryDelegationTotalRewardsRequestParams = {
  value: QueryDelegationTotalRewardsRequest;
  fee?: StdFee;
  memo?: string;
};

type sendCommunityPoolSpendProposalParams = {
  value: CommunityPoolSpendProposal;
  fee?: StdFee;
  memo?: string;
};

type sendValidatorCurrentRewardsParams = {
  value: ValidatorCurrentRewards;
  fee?: StdFee;
  memo?: string;
};

type sendDelegationDelegatorRewardParams = {
  value: DelegationDelegatorReward;
  fee?: StdFee;
  memo?: string;
};

type validatorCurrentRewardsRecordParams = {
  value: ValidatorCurrentRewardsRecord;
};

type validatorSlashEventParams = {
  value: ValidatorSlashEvent;
};

type queryDelegatorWithdrawAddressRequestParams = {
  value: QueryDelegatorWithdrawAddressRequest;
};

type msgFundCommunityPoolParams = {
  value: MsgFundCommunityPool;
};

type queryValidatorOutstandingRewardsResponseParams = {
  value: QueryValidatorOutstandingRewardsResponse;
};

type queryDelegationRewardsResponseParams = {
  value: QueryDelegationRewardsResponse;
};

type paramsParams = {
  value: Params;
};

type msgWithdrawDelegatorRewardResponseParams = {
  value: MsgWithdrawDelegatorRewardResponse;
};

type queryParamsRequestParams = {
  value: QueryParamsRequest;
};

type delegatorWithdrawInfoParams = {
  value: DelegatorWithdrawInfo;
};

type msgDepositValidatorRewardsPoolResponseParams = {
  value: MsgDepositValidatorRewardsPoolResponse;
};

type queryDelegatorWithdrawAddressResponseParams = {
  value: QueryDelegatorWithdrawAddressResponse;
};

type validatorOutstandingRewardsRecordParams = {
  value: ValidatorOutstandingRewardsRecord;
};

type msgSetWithdrawAddressParams = {
  value: MsgSetWithdrawAddress;
};

type msgWithdrawValidatorCommissionParams = {
  value: MsgWithdrawValidatorCommission;
};

type msgDepositValidatorRewardsPoolParams = {
  value: MsgDepositValidatorRewardsPool;
};

type queryValidatorDistributionInfoRequestParams = {
  value: QueryValidatorDistributionInfoRequest;
};

type queryValidatorSlashesResponseParams = {
  value: QueryValidatorSlashesResponse;
};

type validatorAccumulatedCommissionRecordParams = {
  value: ValidatorAccumulatedCommissionRecord;
};

type msgUpdateParamsParams = {
  value: MsgUpdateParams;
};

type msgCommunityPoolSpendParams = {
  value: MsgCommunityPoolSpend;
};

type queryValidatorSlashesRequestParams = {
  value: QueryValidatorSlashesRequest;
};

type delegatorStartingInfoRecordParams = {
  value: DelegatorStartingInfoRecord;
};

type validatorSlashEventRecordParams = {
  value: ValidatorSlashEventRecord;
};

type msgSetWithdrawAddressResponseParams = {
  value: MsgSetWithdrawAddressResponse;
};

type msgWithdrawDelegatorRewardParams = {
  value: MsgWithdrawDelegatorReward;
};

type msgWithdrawValidatorCommissionResponseParams = {
  value: MsgWithdrawValidatorCommissionResponse;
};

type msgUpdateParamsResponseParams = {
  value: MsgUpdateParamsResponse;
};

type validatorSlashEventsParams = {
  value: ValidatorSlashEvents;
};

type queryValidatorOutstandingRewardsRequestParams = {
  value: QueryValidatorOutstandingRewardsRequest;
};

type queryDelegationTotalRewardsResponseParams = {
  value: QueryDelegationTotalRewardsResponse;
};

type feePoolParams = {
  value: FeePool;
};

type validatorOutstandingRewardsParams = {
  value: ValidatorOutstandingRewards;
};

type queryValidatorDistributionInfoResponseParams = {
  value: QueryValidatorDistributionInfoResponse;
};

type msgFundCommunityPoolResponseParams = {
  value: MsgFundCommunityPoolResponse;
};

type msgCommunityPoolSpendResponseParams = {
  value: MsgCommunityPoolSpendResponse;
};

type validatorAccumulatedCommissionParams = {
  value: ValidatorAccumulatedCommission;
};

type queryValidatorCommissionResponseParams = {
  value: QueryValidatorCommissionResponse;
};

type queryDelegatorValidatorsRequestParams = {
  value: QueryDelegatorValidatorsRequest;
};

type queryDelegatorValidatorsResponseParams = {
  value: QueryDelegatorValidatorsResponse;
};

type queryCommunityPoolResponseParams = {
  value: QueryCommunityPoolResponse;
};

type delegatorStartingInfoParams = {
  value: DelegatorStartingInfo;
};

type queryParamsResponseParams = {
  value: QueryParamsResponse;
};

type queryValidatorCommissionRequestParams = {
  value: QueryValidatorCommissionRequest;
};

type validatorHistoricalRewardsRecordParams = {
  value: ValidatorHistoricalRewardsRecord;
};

type genesisStateParams = {
  value: GenesisState;
};

type queryDelegationRewardsRequestParams = {
  value: QueryDelegationRewardsRequest;
};

type queryCommunityPoolRequestParams = {
  value: QueryCommunityPoolRequest;
};

type validatorHistoricalRewardsParams = {
  value: ValidatorHistoricalRewards;
};

type communityPoolSpendProposalWithDepositParams = {
  value: CommunityPoolSpendProposalWithDeposit;
};

type queryDelegationTotalRewardsRequestParams = {
  value: QueryDelegationTotalRewardsRequest;
};

type communityPoolSpendProposalParams = {
  value: CommunityPoolSpendProposal;
};

type validatorCurrentRewardsParams = {
  value: ValidatorCurrentRewards;
};

type delegationDelegatorRewardParams = {
  value: DelegationDelegatorReward;
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
    async sendValidatorCurrentRewardsRecord({
      value,
      fee,
      memo,
    }: sendValidatorCurrentRewardsRecordParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendValidatorCurrentRewardsRecord: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.validatorCurrentRewardsRecord({ value: ValidatorCurrentRewardsRecord.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendValidatorCurrentRewardsRecord: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendValidatorSlashEvent({ value, fee, memo }: sendValidatorSlashEventParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendValidatorSlashEvent: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.validatorSlashEvent({ value: ValidatorSlashEvent.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendValidatorSlashEvent: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryDelegatorWithdrawAddressRequest({
      value,
      fee,
      memo,
    }: sendQueryDelegatorWithdrawAddressRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryDelegatorWithdrawAddressRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryDelegatorWithdrawAddressRequest({
          value: QueryDelegatorWithdrawAddressRequest.fromPartial(value),
        });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryDelegatorWithdrawAddressRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgFundCommunityPool({ value, fee, memo }: sendMsgFundCommunityPoolParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgFundCommunityPool: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgFundCommunityPool({ value: MsgFundCommunityPool.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgFundCommunityPool: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryValidatorOutstandingRewardsResponse({
      value,
      fee,
      memo,
    }: sendQueryValidatorOutstandingRewardsResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error(
          'TxClient:sendQueryValidatorOutstandingRewardsResponse: Unable to sign Tx. Signer is not present.'
        );
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryValidatorOutstandingRewardsResponse({
          value: QueryValidatorOutstandingRewardsResponse.fromPartial(value),
        });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryValidatorOutstandingRewardsResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryDelegationRewardsResponse({
      value,
      fee,
      memo,
    }: sendQueryDelegationRewardsResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryDelegationRewardsResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryDelegationRewardsResponse({ value: QueryDelegationRewardsResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryDelegationRewardsResponse: Could not broadcast Tx: ' + e.message);
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

    async sendMsgWithdrawDelegatorRewardResponse({
      value,
      fee,
      memo,
    }: sendMsgWithdrawDelegatorRewardResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgWithdrawDelegatorRewardResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgWithdrawDelegatorRewardResponse({
          value: MsgWithdrawDelegatorRewardResponse.fromPartial(value),
        });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgWithdrawDelegatorRewardResponse: Could not broadcast Tx: ' + e.message);
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

    async sendDelegatorWithdrawInfo({ value, fee, memo }: sendDelegatorWithdrawInfoParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendDelegatorWithdrawInfo: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.delegatorWithdrawInfo({ value: DelegatorWithdrawInfo.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendDelegatorWithdrawInfo: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgDepositValidatorRewardsPoolResponse({
      value,
      fee,
      memo,
    }: sendMsgDepositValidatorRewardsPoolResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error(
          'TxClient:sendMsgDepositValidatorRewardsPoolResponse: Unable to sign Tx. Signer is not present.'
        );
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgDepositValidatorRewardsPoolResponse({
          value: MsgDepositValidatorRewardsPoolResponse.fromPartial(value),
        });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgDepositValidatorRewardsPoolResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryDelegatorWithdrawAddressResponse({
      value,
      fee,
      memo,
    }: sendQueryDelegatorWithdrawAddressResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error(
          'TxClient:sendQueryDelegatorWithdrawAddressResponse: Unable to sign Tx. Signer is not present.'
        );
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryDelegatorWithdrawAddressResponse({
          value: QueryDelegatorWithdrawAddressResponse.fromPartial(value),
        });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryDelegatorWithdrawAddressResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendValidatorOutstandingRewardsRecord({
      value,
      fee,
      memo,
    }: sendValidatorOutstandingRewardsRecordParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendValidatorOutstandingRewardsRecord: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.validatorOutstandingRewardsRecord({
          value: ValidatorOutstandingRewardsRecord.fromPartial(value),
        });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendValidatorOutstandingRewardsRecord: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgSetWithdrawAddress({ value, fee, memo }: sendMsgSetWithdrawAddressParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgSetWithdrawAddress: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgSetWithdrawAddress({ value: MsgSetWithdrawAddress.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgSetWithdrawAddress: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgWithdrawValidatorCommission({
      value,
      fee,
      memo,
    }: sendMsgWithdrawValidatorCommissionParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgWithdrawValidatorCommission: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgWithdrawValidatorCommission({ value: MsgWithdrawValidatorCommission.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgWithdrawValidatorCommission: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgDepositValidatorRewardsPool({
      value,
      fee,
      memo,
    }: sendMsgDepositValidatorRewardsPoolParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgDepositValidatorRewardsPool: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgDepositValidatorRewardsPool({ value: MsgDepositValidatorRewardsPool.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgDepositValidatorRewardsPool: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryValidatorDistributionInfoRequest({
      value,
      fee,
      memo,
    }: sendQueryValidatorDistributionInfoRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error(
          'TxClient:sendQueryValidatorDistributionInfoRequest: Unable to sign Tx. Signer is not present.'
        );
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryValidatorDistributionInfoRequest({
          value: QueryValidatorDistributionInfoRequest.fromPartial(value),
        });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryValidatorDistributionInfoRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryValidatorSlashesResponse({
      value,
      fee,
      memo,
    }: sendQueryValidatorSlashesResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryValidatorSlashesResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryValidatorSlashesResponse({ value: QueryValidatorSlashesResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryValidatorSlashesResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendValidatorAccumulatedCommissionRecord({
      value,
      fee,
      memo,
    }: sendValidatorAccumulatedCommissionRecordParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendValidatorAccumulatedCommissionRecord: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.validatorAccumulatedCommissionRecord({
          value: ValidatorAccumulatedCommissionRecord.fromPartial(value),
        });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendValidatorAccumulatedCommissionRecord: Could not broadcast Tx: ' + e.message);
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

    async sendMsgCommunityPoolSpend({ value, fee, memo }: sendMsgCommunityPoolSpendParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgCommunityPoolSpend: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgCommunityPoolSpend({ value: MsgCommunityPoolSpend.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgCommunityPoolSpend: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryValidatorSlashesRequest({
      value,
      fee,
      memo,
    }: sendQueryValidatorSlashesRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryValidatorSlashesRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryValidatorSlashesRequest({ value: QueryValidatorSlashesRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryValidatorSlashesRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendDelegatorStartingInfoRecord({
      value,
      fee,
      memo,
    }: sendDelegatorStartingInfoRecordParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendDelegatorStartingInfoRecord: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.delegatorStartingInfoRecord({ value: DelegatorStartingInfoRecord.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendDelegatorStartingInfoRecord: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendValidatorSlashEventRecord({
      value,
      fee,
      memo,
    }: sendValidatorSlashEventRecordParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendValidatorSlashEventRecord: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.validatorSlashEventRecord({ value: ValidatorSlashEventRecord.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendValidatorSlashEventRecord: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgSetWithdrawAddressResponse({
      value,
      fee,
      memo,
    }: sendMsgSetWithdrawAddressResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgSetWithdrawAddressResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgSetWithdrawAddressResponse({ value: MsgSetWithdrawAddressResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgSetWithdrawAddressResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgWithdrawDelegatorReward({
      value,
      fee,
      memo,
    }: sendMsgWithdrawDelegatorRewardParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgWithdrawDelegatorReward: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgWithdrawDelegatorReward({ value: MsgWithdrawDelegatorReward.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgWithdrawDelegatorReward: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgWithdrawValidatorCommissionResponse({
      value,
      fee,
      memo,
    }: sendMsgWithdrawValidatorCommissionResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error(
          'TxClient:sendMsgWithdrawValidatorCommissionResponse: Unable to sign Tx. Signer is not present.'
        );
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgWithdrawValidatorCommissionResponse({
          value: MsgWithdrawValidatorCommissionResponse.fromPartial(value),
        });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgWithdrawValidatorCommissionResponse: Could not broadcast Tx: ' + e.message);
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

    async sendValidatorSlashEvents({ value, fee, memo }: sendValidatorSlashEventsParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendValidatorSlashEvents: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.validatorSlashEvents({ value: ValidatorSlashEvents.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendValidatorSlashEvents: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryValidatorOutstandingRewardsRequest({
      value,
      fee,
      memo,
    }: sendQueryValidatorOutstandingRewardsRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error(
          'TxClient:sendQueryValidatorOutstandingRewardsRequest: Unable to sign Tx. Signer is not present.'
        );
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryValidatorOutstandingRewardsRequest({
          value: QueryValidatorOutstandingRewardsRequest.fromPartial(value),
        });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryValidatorOutstandingRewardsRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryDelegationTotalRewardsResponse({
      value,
      fee,
      memo,
    }: sendQueryDelegationTotalRewardsResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryDelegationTotalRewardsResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryDelegationTotalRewardsResponse({
          value: QueryDelegationTotalRewardsResponse.fromPartial(value),
        });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryDelegationTotalRewardsResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendFeePool({ value, fee, memo }: sendFeePoolParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendFeePool: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.feePool({ value: FeePool.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendFeePool: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendValidatorOutstandingRewards({
      value,
      fee,
      memo,
    }: sendValidatorOutstandingRewardsParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendValidatorOutstandingRewards: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.validatorOutstandingRewards({ value: ValidatorOutstandingRewards.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendValidatorOutstandingRewards: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryValidatorDistributionInfoResponse({
      value,
      fee,
      memo,
    }: sendQueryValidatorDistributionInfoResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error(
          'TxClient:sendQueryValidatorDistributionInfoResponse: Unable to sign Tx. Signer is not present.'
        );
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryValidatorDistributionInfoResponse({
          value: QueryValidatorDistributionInfoResponse.fromPartial(value),
        });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryValidatorDistributionInfoResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgFundCommunityPoolResponse({
      value,
      fee,
      memo,
    }: sendMsgFundCommunityPoolResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgFundCommunityPoolResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgFundCommunityPoolResponse({ value: MsgFundCommunityPoolResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgFundCommunityPoolResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgCommunityPoolSpendResponse({
      value,
      fee,
      memo,
    }: sendMsgCommunityPoolSpendResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgCommunityPoolSpendResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgCommunityPoolSpendResponse({ value: MsgCommunityPoolSpendResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgCommunityPoolSpendResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendValidatorAccumulatedCommission({
      value,
      fee,
      memo,
    }: sendValidatorAccumulatedCommissionParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendValidatorAccumulatedCommission: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.validatorAccumulatedCommission({ value: ValidatorAccumulatedCommission.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendValidatorAccumulatedCommission: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryValidatorCommissionResponse({
      value,
      fee,
      memo,
    }: sendQueryValidatorCommissionResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryValidatorCommissionResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryValidatorCommissionResponse({ value: QueryValidatorCommissionResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryValidatorCommissionResponse: Could not broadcast Tx: ' + e.message);
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

    async sendQueryCommunityPoolResponse({
      value,
      fee,
      memo,
    }: sendQueryCommunityPoolResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryCommunityPoolResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryCommunityPoolResponse({ value: QueryCommunityPoolResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryCommunityPoolResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendDelegatorStartingInfo({ value, fee, memo }: sendDelegatorStartingInfoParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendDelegatorStartingInfo: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.delegatorStartingInfo({ value: DelegatorStartingInfo.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendDelegatorStartingInfo: Could not broadcast Tx: ' + e.message);
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

    async sendQueryValidatorCommissionRequest({
      value,
      fee,
      memo,
    }: sendQueryValidatorCommissionRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryValidatorCommissionRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryValidatorCommissionRequest({ value: QueryValidatorCommissionRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryValidatorCommissionRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendValidatorHistoricalRewardsRecord({
      value,
      fee,
      memo,
    }: sendValidatorHistoricalRewardsRecordParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendValidatorHistoricalRewardsRecord: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.validatorHistoricalRewardsRecord({ value: ValidatorHistoricalRewardsRecord.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendValidatorHistoricalRewardsRecord: Could not broadcast Tx: ' + e.message);
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

    async sendQueryDelegationRewardsRequest({
      value,
      fee,
      memo,
    }: sendQueryDelegationRewardsRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryDelegationRewardsRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryDelegationRewardsRequest({ value: QueryDelegationRewardsRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryDelegationRewardsRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryCommunityPoolRequest({
      value,
      fee,
      memo,
    }: sendQueryCommunityPoolRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryCommunityPoolRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryCommunityPoolRequest({ value: QueryCommunityPoolRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryCommunityPoolRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendValidatorHistoricalRewards({
      value,
      fee,
      memo,
    }: sendValidatorHistoricalRewardsParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendValidatorHistoricalRewards: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.validatorHistoricalRewards({ value: ValidatorHistoricalRewards.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendValidatorHistoricalRewards: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendCommunityPoolSpendProposalWithDeposit({
      value,
      fee,
      memo,
    }: sendCommunityPoolSpendProposalWithDepositParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error(
          'TxClient:sendCommunityPoolSpendProposalWithDeposit: Unable to sign Tx. Signer is not present.'
        );
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.communityPoolSpendProposalWithDeposit({
          value: CommunityPoolSpendProposalWithDeposit.fromPartial(value),
        });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendCommunityPoolSpendProposalWithDeposit: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryDelegationTotalRewardsRequest({
      value,
      fee,
      memo,
    }: sendQueryDelegationTotalRewardsRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryDelegationTotalRewardsRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryDelegationTotalRewardsRequest({
          value: QueryDelegationTotalRewardsRequest.fromPartial(value),
        });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryDelegationTotalRewardsRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendCommunityPoolSpendProposal({
      value,
      fee,
      memo,
    }: sendCommunityPoolSpendProposalParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendCommunityPoolSpendProposal: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.communityPoolSpendProposal({ value: CommunityPoolSpendProposal.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendCommunityPoolSpendProposal: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendValidatorCurrentRewards({
      value,
      fee,
      memo,
    }: sendValidatorCurrentRewardsParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendValidatorCurrentRewards: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.validatorCurrentRewards({ value: ValidatorCurrentRewards.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendValidatorCurrentRewards: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendDelegationDelegatorReward({
      value,
      fee,
      memo,
    }: sendDelegationDelegatorRewardParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendDelegationDelegatorReward: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.delegationDelegatorReward({ value: DelegationDelegatorReward.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendDelegationDelegatorReward: Could not broadcast Tx: ' + e.message);
      }
    },

    validatorCurrentRewardsRecord({ value }: validatorCurrentRewardsRecordParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.distribution.v1beta1.ValidatorCurrentRewardsRecord',
          value: ValidatorCurrentRewardsRecord.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:ValidatorCurrentRewardsRecord: Could not create message: ' + e.message);
      }
    },

    validatorSlashEvent({ value }: validatorSlashEventParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.distribution.v1beta1.ValidatorSlashEvent',
          value: ValidatorSlashEvent.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:ValidatorSlashEvent: Could not create message: ' + e.message);
      }
    },

    queryDelegatorWithdrawAddressRequest({ value }: queryDelegatorWithdrawAddressRequestParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressRequest',
          value: QueryDelegatorWithdrawAddressRequest.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryDelegatorWithdrawAddressRequest: Could not create message: ' + e.message);
      }
    },

    msgFundCommunityPool({ value }: msgFundCommunityPoolParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.distribution.v1beta1.MsgFundCommunityPool',
          value: MsgFundCommunityPool.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgFundCommunityPool: Could not create message: ' + e.message);
      }
    },

    queryValidatorOutstandingRewardsResponse({ value }: queryValidatorOutstandingRewardsResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsResponse',
          value: QueryValidatorOutstandingRewardsResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryValidatorOutstandingRewardsResponse: Could not create message: ' + e.message);
      }
    },

    queryDelegationRewardsResponse({ value }: queryDelegationRewardsResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.distribution.v1beta1.QueryDelegationRewardsResponse',
          value: QueryDelegationRewardsResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryDelegationRewardsResponse: Could not create message: ' + e.message);
      }
    },

    params({ value }: paramsParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.distribution.v1beta1.Params', value: Params.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:Params: Could not create message: ' + e.message);
      }
    },

    msgWithdrawDelegatorRewardResponse({ value }: msgWithdrawDelegatorRewardResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.distribution.v1beta1.MsgWithdrawDelegatorRewardResponse',
          value: MsgWithdrawDelegatorRewardResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgWithdrawDelegatorRewardResponse: Could not create message: ' + e.message);
      }
    },

    queryParamsRequest({ value }: queryParamsRequestParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.distribution.v1beta1.QueryParamsRequest',
          value: QueryParamsRequest.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryParamsRequest: Could not create message: ' + e.message);
      }
    },

    delegatorWithdrawInfo({ value }: delegatorWithdrawInfoParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.distribution.v1beta1.DelegatorWithdrawInfo',
          value: DelegatorWithdrawInfo.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:DelegatorWithdrawInfo: Could not create message: ' + e.message);
      }
    },

    msgDepositValidatorRewardsPoolResponse({ value }: msgDepositValidatorRewardsPoolResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.distribution.v1beta1.MsgDepositValidatorRewardsPoolResponse',
          value: MsgDepositValidatorRewardsPoolResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgDepositValidatorRewardsPoolResponse: Could not create message: ' + e.message);
      }
    },

    queryDelegatorWithdrawAddressResponse({ value }: queryDelegatorWithdrawAddressResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressResponse',
          value: QueryDelegatorWithdrawAddressResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryDelegatorWithdrawAddressResponse: Could not create message: ' + e.message);
      }
    },

    validatorOutstandingRewardsRecord({ value }: validatorOutstandingRewardsRecordParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.distribution.v1beta1.ValidatorOutstandingRewardsRecord',
          value: ValidatorOutstandingRewardsRecord.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:ValidatorOutstandingRewardsRecord: Could not create message: ' + e.message);
      }
    },

    msgSetWithdrawAddress({ value }: msgSetWithdrawAddressParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.distribution.v1beta1.MsgSetWithdrawAddress',
          value: MsgSetWithdrawAddress.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgSetWithdrawAddress: Could not create message: ' + e.message);
      }
    },

    msgWithdrawValidatorCommission({ value }: msgWithdrawValidatorCommissionParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission',
          value: MsgWithdrawValidatorCommission.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgWithdrawValidatorCommission: Could not create message: ' + e.message);
      }
    },

    msgDepositValidatorRewardsPool({ value }: msgDepositValidatorRewardsPoolParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.distribution.v1beta1.MsgDepositValidatorRewardsPool',
          value: MsgDepositValidatorRewardsPool.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgDepositValidatorRewardsPool: Could not create message: ' + e.message);
      }
    },

    queryValidatorDistributionInfoRequest({ value }: queryValidatorDistributionInfoRequestParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.distribution.v1beta1.QueryValidatorDistributionInfoRequest',
          value: QueryValidatorDistributionInfoRequest.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryValidatorDistributionInfoRequest: Could not create message: ' + e.message);
      }
    },

    queryValidatorSlashesResponse({ value }: queryValidatorSlashesResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.distribution.v1beta1.QueryValidatorSlashesResponse',
          value: QueryValidatorSlashesResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryValidatorSlashesResponse: Could not create message: ' + e.message);
      }
    },

    validatorAccumulatedCommissionRecord({ value }: validatorAccumulatedCommissionRecordParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.distribution.v1beta1.ValidatorAccumulatedCommissionRecord',
          value: ValidatorAccumulatedCommissionRecord.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:ValidatorAccumulatedCommissionRecord: Could not create message: ' + e.message);
      }
    },

    msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.distribution.v1beta1.MsgUpdateParams', value: MsgUpdateParams.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:MsgUpdateParams: Could not create message: ' + e.message);
      }
    },

    msgCommunityPoolSpend({ value }: msgCommunityPoolSpendParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.distribution.v1beta1.MsgCommunityPoolSpend',
          value: MsgCommunityPoolSpend.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgCommunityPoolSpend: Could not create message: ' + e.message);
      }
    },

    queryValidatorSlashesRequest({ value }: queryValidatorSlashesRequestParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.distribution.v1beta1.QueryValidatorSlashesRequest',
          value: QueryValidatorSlashesRequest.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryValidatorSlashesRequest: Could not create message: ' + e.message);
      }
    },

    delegatorStartingInfoRecord({ value }: delegatorStartingInfoRecordParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.distribution.v1beta1.DelegatorStartingInfoRecord',
          value: DelegatorStartingInfoRecord.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:DelegatorStartingInfoRecord: Could not create message: ' + e.message);
      }
    },

    validatorSlashEventRecord({ value }: validatorSlashEventRecordParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.distribution.v1beta1.ValidatorSlashEventRecord',
          value: ValidatorSlashEventRecord.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:ValidatorSlashEventRecord: Could not create message: ' + e.message);
      }
    },

    msgSetWithdrawAddressResponse({ value }: msgSetWithdrawAddressResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.distribution.v1beta1.MsgSetWithdrawAddressResponse',
          value: MsgSetWithdrawAddressResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgSetWithdrawAddressResponse: Could not create message: ' + e.message);
      }
    },

    msgWithdrawDelegatorReward({ value }: msgWithdrawDelegatorRewardParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward',
          value: MsgWithdrawDelegatorReward.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgWithdrawDelegatorReward: Could not create message: ' + e.message);
      }
    },

    msgWithdrawValidatorCommissionResponse({ value }: msgWithdrawValidatorCommissionResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommissionResponse',
          value: MsgWithdrawValidatorCommissionResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgWithdrawValidatorCommissionResponse: Could not create message: ' + e.message);
      }
    },

    msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.distribution.v1beta1.MsgUpdateParamsResponse',
          value: MsgUpdateParamsResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgUpdateParamsResponse: Could not create message: ' + e.message);
      }
    },

    validatorSlashEvents({ value }: validatorSlashEventsParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.distribution.v1beta1.ValidatorSlashEvents',
          value: ValidatorSlashEvents.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:ValidatorSlashEvents: Could not create message: ' + e.message);
      }
    },

    queryValidatorOutstandingRewardsRequest({ value }: queryValidatorOutstandingRewardsRequestParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsRequest',
          value: QueryValidatorOutstandingRewardsRequest.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryValidatorOutstandingRewardsRequest: Could not create message: ' + e.message);
      }
    },

    queryDelegationTotalRewardsResponse({ value }: queryDelegationTotalRewardsResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.distribution.v1beta1.QueryDelegationTotalRewardsResponse',
          value: QueryDelegationTotalRewardsResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryDelegationTotalRewardsResponse: Could not create message: ' + e.message);
      }
    },

    feePool({ value }: feePoolParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.distribution.v1beta1.FeePool', value: FeePool.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:FeePool: Could not create message: ' + e.message);
      }
    },

    validatorOutstandingRewards({ value }: validatorOutstandingRewardsParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.distribution.v1beta1.ValidatorOutstandingRewards',
          value: ValidatorOutstandingRewards.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:ValidatorOutstandingRewards: Could not create message: ' + e.message);
      }
    },

    queryValidatorDistributionInfoResponse({ value }: queryValidatorDistributionInfoResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.distribution.v1beta1.QueryValidatorDistributionInfoResponse',
          value: QueryValidatorDistributionInfoResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryValidatorDistributionInfoResponse: Could not create message: ' + e.message);
      }
    },

    msgFundCommunityPoolResponse({ value }: msgFundCommunityPoolResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.distribution.v1beta1.MsgFundCommunityPoolResponse',
          value: MsgFundCommunityPoolResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgFundCommunityPoolResponse: Could not create message: ' + e.message);
      }
    },

    msgCommunityPoolSpendResponse({ value }: msgCommunityPoolSpendResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.distribution.v1beta1.MsgCommunityPoolSpendResponse',
          value: MsgCommunityPoolSpendResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgCommunityPoolSpendResponse: Could not create message: ' + e.message);
      }
    },

    validatorAccumulatedCommission({ value }: validatorAccumulatedCommissionParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.distribution.v1beta1.ValidatorAccumulatedCommission',
          value: ValidatorAccumulatedCommission.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:ValidatorAccumulatedCommission: Could not create message: ' + e.message);
      }
    },

    queryValidatorCommissionResponse({ value }: queryValidatorCommissionResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.distribution.v1beta1.QueryValidatorCommissionResponse',
          value: QueryValidatorCommissionResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryValidatorCommissionResponse: Could not create message: ' + e.message);
      }
    },

    queryDelegatorValidatorsRequest({ value }: queryDelegatorValidatorsRequestParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.distribution.v1beta1.QueryDelegatorValidatorsRequest',
          value: QueryDelegatorValidatorsRequest.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryDelegatorValidatorsRequest: Could not create message: ' + e.message);
      }
    },

    queryDelegatorValidatorsResponse({ value }: queryDelegatorValidatorsResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.distribution.v1beta1.QueryDelegatorValidatorsResponse',
          value: QueryDelegatorValidatorsResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryDelegatorValidatorsResponse: Could not create message: ' + e.message);
      }
    },

    queryCommunityPoolResponse({ value }: queryCommunityPoolResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.distribution.v1beta1.QueryCommunityPoolResponse',
          value: QueryCommunityPoolResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryCommunityPoolResponse: Could not create message: ' + e.message);
      }
    },

    delegatorStartingInfo({ value }: delegatorStartingInfoParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.distribution.v1beta1.DelegatorStartingInfo',
          value: DelegatorStartingInfo.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:DelegatorStartingInfo: Could not create message: ' + e.message);
      }
    },

    queryParamsResponse({ value }: queryParamsResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.distribution.v1beta1.QueryParamsResponse',
          value: QueryParamsResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryParamsResponse: Could not create message: ' + e.message);
      }
    },

    queryValidatorCommissionRequest({ value }: queryValidatorCommissionRequestParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.distribution.v1beta1.QueryValidatorCommissionRequest',
          value: QueryValidatorCommissionRequest.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryValidatorCommissionRequest: Could not create message: ' + e.message);
      }
    },

    validatorHistoricalRewardsRecord({ value }: validatorHistoricalRewardsRecordParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.distribution.v1beta1.ValidatorHistoricalRewardsRecord',
          value: ValidatorHistoricalRewardsRecord.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:ValidatorHistoricalRewardsRecord: Could not create message: ' + e.message);
      }
    },

    genesisState({ value }: genesisStateParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.distribution.v1beta1.GenesisState', value: GenesisState.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:GenesisState: Could not create message: ' + e.message);
      }
    },

    queryDelegationRewardsRequest({ value }: queryDelegationRewardsRequestParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.distribution.v1beta1.QueryDelegationRewardsRequest',
          value: QueryDelegationRewardsRequest.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryDelegationRewardsRequest: Could not create message: ' + e.message);
      }
    },

    queryCommunityPoolRequest({ value }: queryCommunityPoolRequestParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.distribution.v1beta1.QueryCommunityPoolRequest',
          value: QueryCommunityPoolRequest.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryCommunityPoolRequest: Could not create message: ' + e.message);
      }
    },

    validatorHistoricalRewards({ value }: validatorHistoricalRewardsParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.distribution.v1beta1.ValidatorHistoricalRewards',
          value: ValidatorHistoricalRewards.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:ValidatorHistoricalRewards: Could not create message: ' + e.message);
      }
    },

    communityPoolSpendProposalWithDeposit({ value }: communityPoolSpendProposalWithDepositParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.distribution.v1beta1.CommunityPoolSpendProposalWithDeposit',
          value: CommunityPoolSpendProposalWithDeposit.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:CommunityPoolSpendProposalWithDeposit: Could not create message: ' + e.message);
      }
    },

    queryDelegationTotalRewardsRequest({ value }: queryDelegationTotalRewardsRequestParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.distribution.v1beta1.QueryDelegationTotalRewardsRequest',
          value: QueryDelegationTotalRewardsRequest.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryDelegationTotalRewardsRequest: Could not create message: ' + e.message);
      }
    },

    communityPoolSpendProposal({ value }: communityPoolSpendProposalParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.distribution.v1beta1.CommunityPoolSpendProposal',
          value: CommunityPoolSpendProposal.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:CommunityPoolSpendProposal: Could not create message: ' + e.message);
      }
    },

    validatorCurrentRewards({ value }: validatorCurrentRewardsParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.distribution.v1beta1.ValidatorCurrentRewards',
          value: ValidatorCurrentRewards.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:ValidatorCurrentRewards: Could not create message: ' + e.message);
      }
    },

    delegationDelegatorReward({ value }: delegationDelegatorRewardParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.distribution.v1beta1.DelegationDelegatorReward',
          value: DelegationDelegatorReward.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:DelegationDelegatorReward: Could not create message: ' + e.message);
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
      CosmosDistributionV1Beta1: new SDKModule(test),
    },
    registry: msgTypes,
  };
};
export default IgntModule;
