import { SigningStargateClient, DeliverTxResponse, StdFee } from '@cosmjs/stargate';
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from '@cosmjs/proto-signing';
import { msgTypes } from './registry';
import { IgniteClient } from '../client';
import { MissingWalletError } from '../helpers';
import { Api } from './rest';
import { MsgIBCCloseChannel } from './types/cosmwasm/wasm/v1/ibc';
import { MsgUpdateInstantiateConfig } from './types/cosmwasm/wasm/v1/tx';
import { MsgUpdateInstantiateConfigResponse } from './types/cosmwasm/wasm/v1/tx';
import { QueryCodeRequest } from './types/cosmwasm/wasm/v1/query';
import { InstantiateContractProposal } from './types/cosmwasm/wasm/v1/proposal_legacy';
import { InstantiateContract2Proposal } from './types/cosmwasm/wasm/v1/proposal_legacy';
import { MsgPinCodes } from './types/cosmwasm/wasm/v1/tx';
import { QueryRawContractStateRequest } from './types/cosmwasm/wasm/v1/query';
import { QueryCodesRequest } from './types/cosmwasm/wasm/v1/query';
import { MsgIBCSendResponse } from './types/cosmwasm/wasm/v1/ibc';
import { StoreCodeProposal } from './types/cosmwasm/wasm/v1/proposal_legacy';
import { AccessConfigUpdate } from './types/cosmwasm/wasm/v1/proposal_legacy';
import { AccessTypeParam } from './types/cosmwasm/wasm/v1/types';
import { StoreCodeAuthorization } from './types/cosmwasm/wasm/v1/authz';
import { QueryBuildAddressRequest } from './types/cosmwasm/wasm/v1/query';
import { MsgUnpinCodes } from './types/cosmwasm/wasm/v1/tx';
import { MsgMigrateContract } from './types/cosmwasm/wasm/v1/tx';
import { MsgSudoContract } from './types/cosmwasm/wasm/v1/tx';
import { MsgPinCodesResponse } from './types/cosmwasm/wasm/v1/tx';
import { MsgUpdateContractLabelResponse } from './types/cosmwasm/wasm/v1/tx';
import { UnpinCodesProposal } from './types/cosmwasm/wasm/v1/proposal_legacy';
import { GenesisState } from './types/cosmwasm/wasm/v1/genesis';
import { MsgMigrateContractResponse } from './types/cosmwasm/wasm/v1/tx';
import { AccessConfig } from './types/cosmwasm/wasm/v1/types';
import { QueryContractHistoryResponse } from './types/cosmwasm/wasm/v1/query';
import { CombinedLimit } from './types/cosmwasm/wasm/v1/authz';
import { MsgIBCSend } from './types/cosmwasm/wasm/v1/ibc';
import { ContractInfo } from './types/cosmwasm/wasm/v1/types';
import { MsgRemoveCodeUploadParamsAddressesResponse } from './types/cosmwasm/wasm/v1/tx';
import { QueryAllContractStateRequest } from './types/cosmwasm/wasm/v1/query';
import { MsgInstantiateContract } from './types/cosmwasm/wasm/v1/tx';
import { MsgStoreAndMigrateContract } from './types/cosmwasm/wasm/v1/tx';
import { MsgSudoContractResponse } from './types/cosmwasm/wasm/v1/tx';
import { MsgAddCodeUploadParamsAddressesResponse } from './types/cosmwasm/wasm/v1/tx';
import { AbsoluteTxPosition } from './types/cosmwasm/wasm/v1/types';
import { MsgClearAdminResponse } from './types/cosmwasm/wasm/v1/tx';
import { CodeGrant } from './types/cosmwasm/wasm/v1/authz';
import { AllowAllMessagesFilter } from './types/cosmwasm/wasm/v1/authz';
import { QueryContractsByCodeResponse } from './types/cosmwasm/wasm/v1/query';
import { PinCodesProposal } from './types/cosmwasm/wasm/v1/proposal_legacy';
import { MsgRemoveCodeUploadParamsAddresses } from './types/cosmwasm/wasm/v1/tx';
import { MsgUpdateAdminResponse } from './types/cosmwasm/wasm/v1/tx';
import { QueryContractInfoRequest } from './types/cosmwasm/wasm/v1/query';
import { QueryCodesResponse } from './types/cosmwasm/wasm/v1/query';
import { MsgUpdateParams } from './types/cosmwasm/wasm/v1/tx';
import { MsgExecuteContractResponse } from './types/cosmwasm/wasm/v1/tx';
import { ContractGrant } from './types/cosmwasm/wasm/v1/authz';
import { QueryCodeResponse } from './types/cosmwasm/wasm/v1/query';
import { MsgInstantiateContractResponse } from './types/cosmwasm/wasm/v1/tx';
import { MsgStoreAndInstantiateContractResponse } from './types/cosmwasm/wasm/v1/tx';
import { MsgStoreAndMigrateContractResponse } from './types/cosmwasm/wasm/v1/tx';
import { QueryContractsByCodeRequest } from './types/cosmwasm/wasm/v1/query';
import { QueryRawContractStateResponse } from './types/cosmwasm/wasm/v1/query';
import { QueryContractsByCreatorResponse } from './types/cosmwasm/wasm/v1/query';
import { SudoContractProposal } from './types/cosmwasm/wasm/v1/proposal_legacy';
import { CodeInfo } from './types/cosmwasm/wasm/v1/types';
import { MsgUpdateParamsResponse } from './types/cosmwasm/wasm/v1/tx';
import { ContractExecutionAuthorization } from './types/cosmwasm/wasm/v1/authz';
import { QuerySmartContractStateRequest } from './types/cosmwasm/wasm/v1/query';
import { ClearAdminProposal } from './types/cosmwasm/wasm/v1/proposal_legacy';
import { Sequence } from './types/cosmwasm/wasm/v1/genesis';
import { Code } from './types/cosmwasm/wasm/v1/genesis';
import { MsgUnpinCodesResponse } from './types/cosmwasm/wasm/v1/tx';
import { QueryBuildAddressResponse } from './types/cosmwasm/wasm/v1/query';
import { QueryPinnedCodesResponse } from './types/cosmwasm/wasm/v1/query';
import { QueryContractsByCreatorRequest } from './types/cosmwasm/wasm/v1/query';
import { StoreAndInstantiateContractProposal } from './types/cosmwasm/wasm/v1/proposal_legacy';
import { MsgInstantiateContract2 } from './types/cosmwasm/wasm/v1/tx';
import { Contract } from './types/cosmwasm/wasm/v1/genesis';
import { Params } from './types/cosmwasm/wasm/v1/types';
import { Model } from './types/cosmwasm/wasm/v1/types';
import { ExecuteContractProposal } from './types/cosmwasm/wasm/v1/proposal_legacy';
import { MsgStoreCode } from './types/cosmwasm/wasm/v1/tx';
import { MsgUpdateAdmin } from './types/cosmwasm/wasm/v1/tx';
import { MsgAddCodeUploadParamsAddresses } from './types/cosmwasm/wasm/v1/tx';
import { MsgInstantiateContract2Response } from './types/cosmwasm/wasm/v1/tx';
import { QuerySmartContractStateResponse } from './types/cosmwasm/wasm/v1/query';
import { MsgStoreCodeResponse } from './types/cosmwasm/wasm/v1/tx';
import { QueryPinnedCodesRequest } from './types/cosmwasm/wasm/v1/query';
import { MsgExecuteContract } from './types/cosmwasm/wasm/v1/tx';
import { MsgClearAdmin } from './types/cosmwasm/wasm/v1/tx';
import { MsgUpdateContractLabel } from './types/cosmwasm/wasm/v1/tx';
import { QueryParamsResponse } from './types/cosmwasm/wasm/v1/query';
import { UpdateInstantiateConfigProposal } from './types/cosmwasm/wasm/v1/proposal_legacy';
import { QueryAllContractStateResponse } from './types/cosmwasm/wasm/v1/query';
import { UpdateAdminProposal } from './types/cosmwasm/wasm/v1/proposal_legacy';
import { MsgStoreAndInstantiateContract } from './types/cosmwasm/wasm/v1/tx';
import { ContractCodeHistoryEntry } from './types/cosmwasm/wasm/v1/types';
import { ContractMigrationAuthorization } from './types/cosmwasm/wasm/v1/authz';
import { AcceptedMessagesFilter } from './types/cosmwasm/wasm/v1/authz';
import { CodeInfoResponse } from './types/cosmwasm/wasm/v1/query';
import { MigrateContractProposal } from './types/cosmwasm/wasm/v1/proposal_legacy';
import { AcceptedMessageKeysFilter } from './types/cosmwasm/wasm/v1/authz';
import { MaxCallsLimit } from './types/cosmwasm/wasm/v1/authz';
import { MaxFundsLimit } from './types/cosmwasm/wasm/v1/authz';
import { QueryContractInfoResponse } from './types/cosmwasm/wasm/v1/query';
import { QueryContractHistoryRequest } from './types/cosmwasm/wasm/v1/query';
import { QueryParamsRequest } from './types/cosmwasm/wasm/v1/query';

export {
  MsgIBCCloseChannel,
  MsgUpdateInstantiateConfig,
  MsgUpdateInstantiateConfigResponse,
  QueryCodeRequest,
  InstantiateContractProposal,
  InstantiateContract2Proposal,
  MsgPinCodes,
  QueryRawContractStateRequest,
  QueryCodesRequest,
  MsgIBCSendResponse,
  StoreCodeProposal,
  AccessConfigUpdate,
  AccessTypeParam,
  StoreCodeAuthorization,
  QueryBuildAddressRequest,
  MsgUnpinCodes,
  MsgMigrateContract,
  MsgSudoContract,
  MsgPinCodesResponse,
  MsgUpdateContractLabelResponse,
  UnpinCodesProposal,
  GenesisState,
  MsgMigrateContractResponse,
  AccessConfig,
  QueryContractHistoryResponse,
  CombinedLimit,
  MsgIBCSend,
  ContractInfo,
  MsgRemoveCodeUploadParamsAddressesResponse,
  QueryAllContractStateRequest,
  MsgInstantiateContract,
  MsgStoreAndMigrateContract,
  MsgSudoContractResponse,
  MsgAddCodeUploadParamsAddressesResponse,
  AbsoluteTxPosition,
  MsgClearAdminResponse,
  CodeGrant,
  AllowAllMessagesFilter,
  QueryContractsByCodeResponse,
  PinCodesProposal,
  MsgRemoveCodeUploadParamsAddresses,
  MsgUpdateAdminResponse,
  QueryContractInfoRequest,
  QueryCodesResponse,
  MsgUpdateParams,
  MsgExecuteContractResponse,
  ContractGrant,
  QueryCodeResponse,
  MsgInstantiateContractResponse,
  MsgStoreAndInstantiateContractResponse,
  MsgStoreAndMigrateContractResponse,
  QueryContractsByCodeRequest,
  QueryRawContractStateResponse,
  QueryContractsByCreatorResponse,
  SudoContractProposal,
  CodeInfo,
  MsgUpdateParamsResponse,
  ContractExecutionAuthorization,
  QuerySmartContractStateRequest,
  ClearAdminProposal,
  Sequence,
  Code,
  MsgUnpinCodesResponse,
  QueryBuildAddressResponse,
  QueryPinnedCodesResponse,
  QueryContractsByCreatorRequest,
  StoreAndInstantiateContractProposal,
  MsgInstantiateContract2,
  Contract,
  Params,
  Model,
  ExecuteContractProposal,
  MsgStoreCode,
  MsgUpdateAdmin,
  MsgAddCodeUploadParamsAddresses,
  MsgInstantiateContract2Response,
  QuerySmartContractStateResponse,
  MsgStoreCodeResponse,
  QueryPinnedCodesRequest,
  MsgExecuteContract,
  MsgClearAdmin,
  MsgUpdateContractLabel,
  QueryParamsResponse,
  UpdateInstantiateConfigProposal,
  QueryAllContractStateResponse,
  UpdateAdminProposal,
  MsgStoreAndInstantiateContract,
  ContractCodeHistoryEntry,
  ContractMigrationAuthorization,
  AcceptedMessagesFilter,
  CodeInfoResponse,
  MigrateContractProposal,
  AcceptedMessageKeysFilter,
  MaxCallsLimit,
  MaxFundsLimit,
  QueryContractInfoResponse,
  QueryContractHistoryRequest,
  QueryParamsRequest,
};

type sendMsgIBCCloseChannelParams = {
  value: MsgIBCCloseChannel;
  fee?: StdFee;
  memo?: string;
};

type sendMsgUpdateInstantiateConfigParams = {
  value: MsgUpdateInstantiateConfig;
  fee?: StdFee;
  memo?: string;
};

type sendMsgUpdateInstantiateConfigResponseParams = {
  value: MsgUpdateInstantiateConfigResponse;
  fee?: StdFee;
  memo?: string;
};

type sendQueryCodeRequestParams = {
  value: QueryCodeRequest;
  fee?: StdFee;
  memo?: string;
};

type sendInstantiateContractProposalParams = {
  value: InstantiateContractProposal;
  fee?: StdFee;
  memo?: string;
};

type sendInstantiateContract2ProposalParams = {
  value: InstantiateContract2Proposal;
  fee?: StdFee;
  memo?: string;
};

type sendMsgPinCodesParams = {
  value: MsgPinCodes;
  fee?: StdFee;
  memo?: string;
};

type sendQueryRawContractStateRequestParams = {
  value: QueryRawContractStateRequest;
  fee?: StdFee;
  memo?: string;
};

type sendQueryCodesRequestParams = {
  value: QueryCodesRequest;
  fee?: StdFee;
  memo?: string;
};

type sendMsgIBCSendResponseParams = {
  value: MsgIBCSendResponse;
  fee?: StdFee;
  memo?: string;
};

type sendStoreCodeProposalParams = {
  value: StoreCodeProposal;
  fee?: StdFee;
  memo?: string;
};

type sendAccessConfigUpdateParams = {
  value: AccessConfigUpdate;
  fee?: StdFee;
  memo?: string;
};

type sendAccessTypeParamParams = {
  value: AccessTypeParam;
  fee?: StdFee;
  memo?: string;
};

type sendStoreCodeAuthorizationParams = {
  value: StoreCodeAuthorization;
  fee?: StdFee;
  memo?: string;
};

type sendQueryBuildAddressRequestParams = {
  value: QueryBuildAddressRequest;
  fee?: StdFee;
  memo?: string;
};

type sendMsgUnpinCodesParams = {
  value: MsgUnpinCodes;
  fee?: StdFee;
  memo?: string;
};

type sendMsgMigrateContractParams = {
  value: MsgMigrateContract;
  fee?: StdFee;
  memo?: string;
};

type sendMsgSudoContractParams = {
  value: MsgSudoContract;
  fee?: StdFee;
  memo?: string;
};

type sendMsgPinCodesResponseParams = {
  value: MsgPinCodesResponse;
  fee?: StdFee;
  memo?: string;
};

type sendMsgUpdateContractLabelResponseParams = {
  value: MsgUpdateContractLabelResponse;
  fee?: StdFee;
  memo?: string;
};

type sendUnpinCodesProposalParams = {
  value: UnpinCodesProposal;
  fee?: StdFee;
  memo?: string;
};

type sendGenesisStateParams = {
  value: GenesisState;
  fee?: StdFee;
  memo?: string;
};

type sendMsgMigrateContractResponseParams = {
  value: MsgMigrateContractResponse;
  fee?: StdFee;
  memo?: string;
};

type sendAccessConfigParams = {
  value: AccessConfig;
  fee?: StdFee;
  memo?: string;
};

type sendQueryContractHistoryResponseParams = {
  value: QueryContractHistoryResponse;
  fee?: StdFee;
  memo?: string;
};

type sendCombinedLimitParams = {
  value: CombinedLimit;
  fee?: StdFee;
  memo?: string;
};

type sendMsgIBCSendParams = {
  value: MsgIBCSend;
  fee?: StdFee;
  memo?: string;
};

type sendContractInfoParams = {
  value: ContractInfo;
  fee?: StdFee;
  memo?: string;
};

type sendMsgRemoveCodeUploadParamsAddressesResponseParams = {
  value: MsgRemoveCodeUploadParamsAddressesResponse;
  fee?: StdFee;
  memo?: string;
};

type sendQueryAllContractStateRequestParams = {
  value: QueryAllContractStateRequest;
  fee?: StdFee;
  memo?: string;
};

type sendMsgInstantiateContractParams = {
  value: MsgInstantiateContract;
  fee?: StdFee;
  memo?: string;
};

type sendMsgStoreAndMigrateContractParams = {
  value: MsgStoreAndMigrateContract;
  fee?: StdFee;
  memo?: string;
};

type sendMsgSudoContractResponseParams = {
  value: MsgSudoContractResponse;
  fee?: StdFee;
  memo?: string;
};

type sendMsgAddCodeUploadParamsAddressesResponseParams = {
  value: MsgAddCodeUploadParamsAddressesResponse;
  fee?: StdFee;
  memo?: string;
};

type sendAbsoluteTxPositionParams = {
  value: AbsoluteTxPosition;
  fee?: StdFee;
  memo?: string;
};

type sendMsgClearAdminResponseParams = {
  value: MsgClearAdminResponse;
  fee?: StdFee;
  memo?: string;
};

type sendCodeGrantParams = {
  value: CodeGrant;
  fee?: StdFee;
  memo?: string;
};

type sendAllowAllMessagesFilterParams = {
  value: AllowAllMessagesFilter;
  fee?: StdFee;
  memo?: string;
};

type sendQueryContractsByCodeResponseParams = {
  value: QueryContractsByCodeResponse;
  fee?: StdFee;
  memo?: string;
};

type sendPinCodesProposalParams = {
  value: PinCodesProposal;
  fee?: StdFee;
  memo?: string;
};

type sendMsgRemoveCodeUploadParamsAddressesParams = {
  value: MsgRemoveCodeUploadParamsAddresses;
  fee?: StdFee;
  memo?: string;
};

type sendMsgUpdateAdminResponseParams = {
  value: MsgUpdateAdminResponse;
  fee?: StdFee;
  memo?: string;
};

type sendQueryContractInfoRequestParams = {
  value: QueryContractInfoRequest;
  fee?: StdFee;
  memo?: string;
};

type sendQueryCodesResponseParams = {
  value: QueryCodesResponse;
  fee?: StdFee;
  memo?: string;
};

type sendMsgUpdateParamsParams = {
  value: MsgUpdateParams;
  fee?: StdFee;
  memo?: string;
};

type sendMsgExecuteContractResponseParams = {
  value: MsgExecuteContractResponse;
  fee?: StdFee;
  memo?: string;
};

type sendContractGrantParams = {
  value: ContractGrant;
  fee?: StdFee;
  memo?: string;
};

type sendQueryCodeResponseParams = {
  value: QueryCodeResponse;
  fee?: StdFee;
  memo?: string;
};

type sendMsgInstantiateContractResponseParams = {
  value: MsgInstantiateContractResponse;
  fee?: StdFee;
  memo?: string;
};

type sendMsgStoreAndInstantiateContractResponseParams = {
  value: MsgStoreAndInstantiateContractResponse;
  fee?: StdFee;
  memo?: string;
};

type sendMsgStoreAndMigrateContractResponseParams = {
  value: MsgStoreAndMigrateContractResponse;
  fee?: StdFee;
  memo?: string;
};

type sendQueryContractsByCodeRequestParams = {
  value: QueryContractsByCodeRequest;
  fee?: StdFee;
  memo?: string;
};

type sendQueryRawContractStateResponseParams = {
  value: QueryRawContractStateResponse;
  fee?: StdFee;
  memo?: string;
};

type sendQueryContractsByCreatorResponseParams = {
  value: QueryContractsByCreatorResponse;
  fee?: StdFee;
  memo?: string;
};

type sendSudoContractProposalParams = {
  value: SudoContractProposal;
  fee?: StdFee;
  memo?: string;
};

type sendCodeInfoParams = {
  value: CodeInfo;
  fee?: StdFee;
  memo?: string;
};

type sendMsgUpdateParamsResponseParams = {
  value: MsgUpdateParamsResponse;
  fee?: StdFee;
  memo?: string;
};

type sendContractExecutionAuthorizationParams = {
  value: ContractExecutionAuthorization;
  fee?: StdFee;
  memo?: string;
};

type sendQuerySmartContractStateRequestParams = {
  value: QuerySmartContractStateRequest;
  fee?: StdFee;
  memo?: string;
};

type sendClearAdminProposalParams = {
  value: ClearAdminProposal;
  fee?: StdFee;
  memo?: string;
};

type sendSequenceParams = {
  value: Sequence;
  fee?: StdFee;
  memo?: string;
};

type sendCodeParams = {
  value: Code;
  fee?: StdFee;
  memo?: string;
};

type sendMsgUnpinCodesResponseParams = {
  value: MsgUnpinCodesResponse;
  fee?: StdFee;
  memo?: string;
};

type sendQueryBuildAddressResponseParams = {
  value: QueryBuildAddressResponse;
  fee?: StdFee;
  memo?: string;
};

type sendQueryPinnedCodesResponseParams = {
  value: QueryPinnedCodesResponse;
  fee?: StdFee;
  memo?: string;
};

type sendQueryContractsByCreatorRequestParams = {
  value: QueryContractsByCreatorRequest;
  fee?: StdFee;
  memo?: string;
};

type sendStoreAndInstantiateContractProposalParams = {
  value: StoreAndInstantiateContractProposal;
  fee?: StdFee;
  memo?: string;
};

type sendMsgInstantiateContract2Params = {
  value: MsgInstantiateContract2;
  fee?: StdFee;
  memo?: string;
};

type sendContractParams = {
  value: Contract;
  fee?: StdFee;
  memo?: string;
};

type sendParamsParams = {
  value: Params;
  fee?: StdFee;
  memo?: string;
};

type sendModelParams = {
  value: Model;
  fee?: StdFee;
  memo?: string;
};

type sendExecuteContractProposalParams = {
  value: ExecuteContractProposal;
  fee?: StdFee;
  memo?: string;
};

type sendMsgStoreCodeParams = {
  value: MsgStoreCode;
  fee?: StdFee;
  memo?: string;
};

type sendMsgUpdateAdminParams = {
  value: MsgUpdateAdmin;
  fee?: StdFee;
  memo?: string;
};

type sendMsgAddCodeUploadParamsAddressesParams = {
  value: MsgAddCodeUploadParamsAddresses;
  fee?: StdFee;
  memo?: string;
};

type sendMsgInstantiateContract2ResponseParams = {
  value: MsgInstantiateContract2Response;
  fee?: StdFee;
  memo?: string;
};

type sendQuerySmartContractStateResponseParams = {
  value: QuerySmartContractStateResponse;
  fee?: StdFee;
  memo?: string;
};

type sendMsgStoreCodeResponseParams = {
  value: MsgStoreCodeResponse;
  fee?: StdFee;
  memo?: string;
};

type sendQueryPinnedCodesRequestParams = {
  value: QueryPinnedCodesRequest;
  fee?: StdFee;
  memo?: string;
};

type sendMsgExecuteContractParams = {
  value: MsgExecuteContract;
  fee?: StdFee;
  memo?: string;
};

type sendMsgClearAdminParams = {
  value: MsgClearAdmin;
  fee?: StdFee;
  memo?: string;
};

type sendMsgUpdateContractLabelParams = {
  value: MsgUpdateContractLabel;
  fee?: StdFee;
  memo?: string;
};

type sendQueryParamsResponseParams = {
  value: QueryParamsResponse;
  fee?: StdFee;
  memo?: string;
};

type sendUpdateInstantiateConfigProposalParams = {
  value: UpdateInstantiateConfigProposal;
  fee?: StdFee;
  memo?: string;
};

type sendQueryAllContractStateResponseParams = {
  value: QueryAllContractStateResponse;
  fee?: StdFee;
  memo?: string;
};

type sendUpdateAdminProposalParams = {
  value: UpdateAdminProposal;
  fee?: StdFee;
  memo?: string;
};

type sendMsgStoreAndInstantiateContractParams = {
  value: MsgStoreAndInstantiateContract;
  fee?: StdFee;
  memo?: string;
};

type sendContractCodeHistoryEntryParams = {
  value: ContractCodeHistoryEntry;
  fee?: StdFee;
  memo?: string;
};

type sendContractMigrationAuthorizationParams = {
  value: ContractMigrationAuthorization;
  fee?: StdFee;
  memo?: string;
};

type sendAcceptedMessagesFilterParams = {
  value: AcceptedMessagesFilter;
  fee?: StdFee;
  memo?: string;
};

type sendCodeInfoResponseParams = {
  value: CodeInfoResponse;
  fee?: StdFee;
  memo?: string;
};

type sendMigrateContractProposalParams = {
  value: MigrateContractProposal;
  fee?: StdFee;
  memo?: string;
};

type sendAcceptedMessageKeysFilterParams = {
  value: AcceptedMessageKeysFilter;
  fee?: StdFee;
  memo?: string;
};

type sendMaxCallsLimitParams = {
  value: MaxCallsLimit;
  fee?: StdFee;
  memo?: string;
};

type sendMaxFundsLimitParams = {
  value: MaxFundsLimit;
  fee?: StdFee;
  memo?: string;
};

type sendQueryContractInfoResponseParams = {
  value: QueryContractInfoResponse;
  fee?: StdFee;
  memo?: string;
};

type sendQueryContractHistoryRequestParams = {
  value: QueryContractHistoryRequest;
  fee?: StdFee;
  memo?: string;
};

type sendQueryParamsRequestParams = {
  value: QueryParamsRequest;
  fee?: StdFee;
  memo?: string;
};

type msgIbccloseChannelParams = {
  value: MsgIBCCloseChannel;
};

type msgUpdateInstantiateConfigParams = {
  value: MsgUpdateInstantiateConfig;
};

type msgUpdateInstantiateConfigResponseParams = {
  value: MsgUpdateInstantiateConfigResponse;
};

type queryCodeRequestParams = {
  value: QueryCodeRequest;
};

type instantiateContractProposalParams = {
  value: InstantiateContractProposal;
};

type instantiateContract2ProposalParams = {
  value: InstantiateContract2Proposal;
};

type msgPinCodesParams = {
  value: MsgPinCodes;
};

type queryRawContractStateRequestParams = {
  value: QueryRawContractStateRequest;
};

type queryCodesRequestParams = {
  value: QueryCodesRequest;
};

type msgIbcsendResponseParams = {
  value: MsgIBCSendResponse;
};

type storeCodeProposalParams = {
  value: StoreCodeProposal;
};

type accessConfigUpdateParams = {
  value: AccessConfigUpdate;
};

type accessTypeParamParams = {
  value: AccessTypeParam;
};

type storeCodeAuthorizationParams = {
  value: StoreCodeAuthorization;
};

type queryBuildAddressRequestParams = {
  value: QueryBuildAddressRequest;
};

type msgUnpinCodesParams = {
  value: MsgUnpinCodes;
};

type msgMigrateContractParams = {
  value: MsgMigrateContract;
};

type msgSudoContractParams = {
  value: MsgSudoContract;
};

type msgPinCodesResponseParams = {
  value: MsgPinCodesResponse;
};

type msgUpdateContractLabelResponseParams = {
  value: MsgUpdateContractLabelResponse;
};

type unpinCodesProposalParams = {
  value: UnpinCodesProposal;
};

type genesisStateParams = {
  value: GenesisState;
};

type msgMigrateContractResponseParams = {
  value: MsgMigrateContractResponse;
};

type accessConfigParams = {
  value: AccessConfig;
};

type queryContractHistoryResponseParams = {
  value: QueryContractHistoryResponse;
};

type combinedLimitParams = {
  value: CombinedLimit;
};

type msgIbcsendParams = {
  value: MsgIBCSend;
};

type contractInfoParams = {
  value: ContractInfo;
};

type msgRemoveCodeUploadParamsAddressesResponseParams = {
  value: MsgRemoveCodeUploadParamsAddressesResponse;
};

type queryAllContractStateRequestParams = {
  value: QueryAllContractStateRequest;
};

type msgInstantiateContractParams = {
  value: MsgInstantiateContract;
};

type msgStoreAndMigrateContractParams = {
  value: MsgStoreAndMigrateContract;
};

type msgSudoContractResponseParams = {
  value: MsgSudoContractResponse;
};

type msgAddCodeUploadParamsAddressesResponseParams = {
  value: MsgAddCodeUploadParamsAddressesResponse;
};

type absoluteTxPositionParams = {
  value: AbsoluteTxPosition;
};

type msgClearAdminResponseParams = {
  value: MsgClearAdminResponse;
};

type codeGrantParams = {
  value: CodeGrant;
};

type allowAllMessagesFilterParams = {
  value: AllowAllMessagesFilter;
};

type queryContractsByCodeResponseParams = {
  value: QueryContractsByCodeResponse;
};

type pinCodesProposalParams = {
  value: PinCodesProposal;
};

type msgRemoveCodeUploadParamsAddressesParams = {
  value: MsgRemoveCodeUploadParamsAddresses;
};

type msgUpdateAdminResponseParams = {
  value: MsgUpdateAdminResponse;
};

type queryContractInfoRequestParams = {
  value: QueryContractInfoRequest;
};

type queryCodesResponseParams = {
  value: QueryCodesResponse;
};

type msgUpdateParamsParams = {
  value: MsgUpdateParams;
};

type msgExecuteContractResponseParams = {
  value: MsgExecuteContractResponse;
};

type contractGrantParams = {
  value: ContractGrant;
};

type queryCodeResponseParams = {
  value: QueryCodeResponse;
};

type msgInstantiateContractResponseParams = {
  value: MsgInstantiateContractResponse;
};

type msgStoreAndInstantiateContractResponseParams = {
  value: MsgStoreAndInstantiateContractResponse;
};

type msgStoreAndMigrateContractResponseParams = {
  value: MsgStoreAndMigrateContractResponse;
};

type queryContractsByCodeRequestParams = {
  value: QueryContractsByCodeRequest;
};

type queryRawContractStateResponseParams = {
  value: QueryRawContractStateResponse;
};

type queryContractsByCreatorResponseParams = {
  value: QueryContractsByCreatorResponse;
};

type sudoContractProposalParams = {
  value: SudoContractProposal;
};

type codeInfoParams = {
  value: CodeInfo;
};

type msgUpdateParamsResponseParams = {
  value: MsgUpdateParamsResponse;
};

type contractExecutionAuthorizationParams = {
  value: ContractExecutionAuthorization;
};

type querySmartContractStateRequestParams = {
  value: QuerySmartContractStateRequest;
};

type clearAdminProposalParams = {
  value: ClearAdminProposal;
};

type sequenceParams = {
  value: Sequence;
};

type codeParams = {
  value: Code;
};

type msgUnpinCodesResponseParams = {
  value: MsgUnpinCodesResponse;
};

type queryBuildAddressResponseParams = {
  value: QueryBuildAddressResponse;
};

type queryPinnedCodesResponseParams = {
  value: QueryPinnedCodesResponse;
};

type queryContractsByCreatorRequestParams = {
  value: QueryContractsByCreatorRequest;
};

type storeAndInstantiateContractProposalParams = {
  value: StoreAndInstantiateContractProposal;
};

type msgInstantiateContract2Params = {
  value: MsgInstantiateContract2;
};

type contractParams = {
  value: Contract;
};

type paramsParams = {
  value: Params;
};

type modelParams = {
  value: Model;
};

type executeContractProposalParams = {
  value: ExecuteContractProposal;
};

type msgStoreCodeParams = {
  value: MsgStoreCode;
};

type msgUpdateAdminParams = {
  value: MsgUpdateAdmin;
};

type msgAddCodeUploadParamsAddressesParams = {
  value: MsgAddCodeUploadParamsAddresses;
};

type msgInstantiateContract2ResponseParams = {
  value: MsgInstantiateContract2Response;
};

type querySmartContractStateResponseParams = {
  value: QuerySmartContractStateResponse;
};

type msgStoreCodeResponseParams = {
  value: MsgStoreCodeResponse;
};

type queryPinnedCodesRequestParams = {
  value: QueryPinnedCodesRequest;
};

type msgExecuteContractParams = {
  value: MsgExecuteContract;
};

type msgClearAdminParams = {
  value: MsgClearAdmin;
};

type msgUpdateContractLabelParams = {
  value: MsgUpdateContractLabel;
};

type queryParamsResponseParams = {
  value: QueryParamsResponse;
};

type updateInstantiateConfigProposalParams = {
  value: UpdateInstantiateConfigProposal;
};

type queryAllContractStateResponseParams = {
  value: QueryAllContractStateResponse;
};

type updateAdminProposalParams = {
  value: UpdateAdminProposal;
};

type msgStoreAndInstantiateContractParams = {
  value: MsgStoreAndInstantiateContract;
};

type contractCodeHistoryEntryParams = {
  value: ContractCodeHistoryEntry;
};

type contractMigrationAuthorizationParams = {
  value: ContractMigrationAuthorization;
};

type acceptedMessagesFilterParams = {
  value: AcceptedMessagesFilter;
};

type codeInfoResponseParams = {
  value: CodeInfoResponse;
};

type migrateContractProposalParams = {
  value: MigrateContractProposal;
};

type acceptedMessageKeysFilterParams = {
  value: AcceptedMessageKeysFilter;
};

type maxCallsLimitParams = {
  value: MaxCallsLimit;
};

type maxFundsLimitParams = {
  value: MaxFundsLimit;
};

type queryContractInfoResponseParams = {
  value: QueryContractInfoResponse;
};

type queryContractHistoryRequestParams = {
  value: QueryContractHistoryRequest;
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
    async sendMsgIBCCloseChannel({ value, fee, memo }: sendMsgIBCCloseChannelParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgIBCCloseChannel: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgIbccloseChannel({ value: MsgIBCCloseChannel.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgIBCCloseChannel: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgUpdateInstantiateConfig({
      value,
      fee,
      memo,
    }: sendMsgUpdateInstantiateConfigParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgUpdateInstantiateConfig: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgUpdateInstantiateConfig({ value: MsgUpdateInstantiateConfig.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgUpdateInstantiateConfig: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgUpdateInstantiateConfigResponse({
      value,
      fee,
      memo,
    }: sendMsgUpdateInstantiateConfigResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgUpdateInstantiateConfigResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgUpdateInstantiateConfigResponse({
          value: MsgUpdateInstantiateConfigResponse.fromPartial(value),
        });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgUpdateInstantiateConfigResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryCodeRequest({ value, fee, memo }: sendQueryCodeRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryCodeRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryCodeRequest({ value: QueryCodeRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryCodeRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendInstantiateContractProposal({
      value,
      fee,
      memo,
    }: sendInstantiateContractProposalParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendInstantiateContractProposal: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.instantiateContractProposal({ value: InstantiateContractProposal.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendInstantiateContractProposal: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendInstantiateContract2Proposal({
      value,
      fee,
      memo,
    }: sendInstantiateContract2ProposalParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendInstantiateContract2Proposal: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.instantiateContract2Proposal({ value: InstantiateContract2Proposal.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendInstantiateContract2Proposal: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgPinCodes({ value, fee, memo }: sendMsgPinCodesParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgPinCodes: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgPinCodes({ value: MsgPinCodes.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgPinCodes: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryRawContractStateRequest({
      value,
      fee,
      memo,
    }: sendQueryRawContractStateRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryRawContractStateRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryRawContractStateRequest({ value: QueryRawContractStateRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryRawContractStateRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryCodesRequest({ value, fee, memo }: sendQueryCodesRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryCodesRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryCodesRequest({ value: QueryCodesRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryCodesRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgIBCSendResponse({ value, fee, memo }: sendMsgIBCSendResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgIBCSendResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgIbcsendResponse({ value: MsgIBCSendResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgIBCSendResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendStoreCodeProposal({ value, fee, memo }: sendStoreCodeProposalParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendStoreCodeProposal: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.storeCodeProposal({ value: StoreCodeProposal.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendStoreCodeProposal: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendAccessConfigUpdate({ value, fee, memo }: sendAccessConfigUpdateParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendAccessConfigUpdate: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.accessConfigUpdate({ value: AccessConfigUpdate.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendAccessConfigUpdate: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendAccessTypeParam({ value, fee, memo }: sendAccessTypeParamParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendAccessTypeParam: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.accessTypeParam({ value: AccessTypeParam.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendAccessTypeParam: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendStoreCodeAuthorization({
      value,
      fee,
      memo,
    }: sendStoreCodeAuthorizationParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendStoreCodeAuthorization: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.storeCodeAuthorization({ value: StoreCodeAuthorization.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendStoreCodeAuthorization: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryBuildAddressRequest({
      value,
      fee,
      memo,
    }: sendQueryBuildAddressRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryBuildAddressRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryBuildAddressRequest({ value: QueryBuildAddressRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryBuildAddressRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgUnpinCodes({ value, fee, memo }: sendMsgUnpinCodesParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgUnpinCodes: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgUnpinCodes({ value: MsgUnpinCodes.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgUnpinCodes: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgMigrateContract({ value, fee, memo }: sendMsgMigrateContractParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgMigrateContract: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgMigrateContract({ value: MsgMigrateContract.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgMigrateContract: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgSudoContract({ value, fee, memo }: sendMsgSudoContractParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgSudoContract: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgSudoContract({ value: MsgSudoContract.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgSudoContract: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgPinCodesResponse({ value, fee, memo }: sendMsgPinCodesResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgPinCodesResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgPinCodesResponse({ value: MsgPinCodesResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgPinCodesResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgUpdateContractLabelResponse({
      value,
      fee,
      memo,
    }: sendMsgUpdateContractLabelResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgUpdateContractLabelResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgUpdateContractLabelResponse({ value: MsgUpdateContractLabelResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgUpdateContractLabelResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendUnpinCodesProposal({ value, fee, memo }: sendUnpinCodesProposalParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendUnpinCodesProposal: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.unpinCodesProposal({ value: UnpinCodesProposal.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendUnpinCodesProposal: Could not broadcast Tx: ' + e.message);
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

    async sendMsgMigrateContractResponse({
      value,
      fee,
      memo,
    }: sendMsgMigrateContractResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgMigrateContractResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgMigrateContractResponse({ value: MsgMigrateContractResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgMigrateContractResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendAccessConfig({ value, fee, memo }: sendAccessConfigParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendAccessConfig: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.accessConfig({ value: AccessConfig.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendAccessConfig: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryContractHistoryResponse({
      value,
      fee,
      memo,
    }: sendQueryContractHistoryResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryContractHistoryResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryContractHistoryResponse({ value: QueryContractHistoryResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryContractHistoryResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendCombinedLimit({ value, fee, memo }: sendCombinedLimitParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendCombinedLimit: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.combinedLimit({ value: CombinedLimit.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendCombinedLimit: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgIBCSend({ value, fee, memo }: sendMsgIBCSendParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgIBCSend: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgIbcsend({ value: MsgIBCSend.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgIBCSend: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendContractInfo({ value, fee, memo }: sendContractInfoParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendContractInfo: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.contractInfo({ value: ContractInfo.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendContractInfo: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgRemoveCodeUploadParamsAddressesResponse({
      value,
      fee,
      memo,
    }: sendMsgRemoveCodeUploadParamsAddressesResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error(
          'TxClient:sendMsgRemoveCodeUploadParamsAddressesResponse: Unable to sign Tx. Signer is not present.'
        );
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgRemoveCodeUploadParamsAddressesResponse({
          value: MsgRemoveCodeUploadParamsAddressesResponse.fromPartial(value),
        });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error(
          'TxClient:sendMsgRemoveCodeUploadParamsAddressesResponse: Could not broadcast Tx: ' + e.message
        );
      }
    },

    async sendQueryAllContractStateRequest({
      value,
      fee,
      memo,
    }: sendQueryAllContractStateRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryAllContractStateRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryAllContractStateRequest({ value: QueryAllContractStateRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryAllContractStateRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgInstantiateContract({
      value,
      fee,
      memo,
    }: sendMsgInstantiateContractParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgInstantiateContract: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgInstantiateContract({ value: MsgInstantiateContract.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgInstantiateContract: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgStoreAndMigrateContract({
      value,
      fee,
      memo,
    }: sendMsgStoreAndMigrateContractParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgStoreAndMigrateContract: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgStoreAndMigrateContract({ value: MsgStoreAndMigrateContract.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgStoreAndMigrateContract: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgSudoContractResponse({
      value,
      fee,
      memo,
    }: sendMsgSudoContractResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgSudoContractResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgSudoContractResponse({ value: MsgSudoContractResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgSudoContractResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgAddCodeUploadParamsAddressesResponse({
      value,
      fee,
      memo,
    }: sendMsgAddCodeUploadParamsAddressesResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error(
          'TxClient:sendMsgAddCodeUploadParamsAddressesResponse: Unable to sign Tx. Signer is not present.'
        );
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgAddCodeUploadParamsAddressesResponse({
          value: MsgAddCodeUploadParamsAddressesResponse.fromPartial(value),
        });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgAddCodeUploadParamsAddressesResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendAbsoluteTxPosition({ value, fee, memo }: sendAbsoluteTxPositionParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendAbsoluteTxPosition: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.absoluteTxPosition({ value: AbsoluteTxPosition.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendAbsoluteTxPosition: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgClearAdminResponse({ value, fee, memo }: sendMsgClearAdminResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgClearAdminResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgClearAdminResponse({ value: MsgClearAdminResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgClearAdminResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendCodeGrant({ value, fee, memo }: sendCodeGrantParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendCodeGrant: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.codeGrant({ value: CodeGrant.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendCodeGrant: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendAllowAllMessagesFilter({
      value,
      fee,
      memo,
    }: sendAllowAllMessagesFilterParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendAllowAllMessagesFilter: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.allowAllMessagesFilter({ value: AllowAllMessagesFilter.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendAllowAllMessagesFilter: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryContractsByCodeResponse({
      value,
      fee,
      memo,
    }: sendQueryContractsByCodeResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryContractsByCodeResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryContractsByCodeResponse({ value: QueryContractsByCodeResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryContractsByCodeResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendPinCodesProposal({ value, fee, memo }: sendPinCodesProposalParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendPinCodesProposal: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.pinCodesProposal({ value: PinCodesProposal.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendPinCodesProposal: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgRemoveCodeUploadParamsAddresses({
      value,
      fee,
      memo,
    }: sendMsgRemoveCodeUploadParamsAddressesParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgRemoveCodeUploadParamsAddresses: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgRemoveCodeUploadParamsAddresses({
          value: MsgRemoveCodeUploadParamsAddresses.fromPartial(value),
        });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgRemoveCodeUploadParamsAddresses: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgUpdateAdminResponse({
      value,
      fee,
      memo,
    }: sendMsgUpdateAdminResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgUpdateAdminResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgUpdateAdminResponse({ value: MsgUpdateAdminResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgUpdateAdminResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryContractInfoRequest({
      value,
      fee,
      memo,
    }: sendQueryContractInfoRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryContractInfoRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryContractInfoRequest({ value: QueryContractInfoRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryContractInfoRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryCodesResponse({ value, fee, memo }: sendQueryCodesResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryCodesResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryCodesResponse({ value: QueryCodesResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryCodesResponse: Could not broadcast Tx: ' + e.message);
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

    async sendMsgExecuteContractResponse({
      value,
      fee,
      memo,
    }: sendMsgExecuteContractResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgExecuteContractResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgExecuteContractResponse({ value: MsgExecuteContractResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgExecuteContractResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendContractGrant({ value, fee, memo }: sendContractGrantParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendContractGrant: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.contractGrant({ value: ContractGrant.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendContractGrant: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryCodeResponse({ value, fee, memo }: sendQueryCodeResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryCodeResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryCodeResponse({ value: QueryCodeResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryCodeResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgInstantiateContractResponse({
      value,
      fee,
      memo,
    }: sendMsgInstantiateContractResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgInstantiateContractResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgInstantiateContractResponse({ value: MsgInstantiateContractResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgInstantiateContractResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgStoreAndInstantiateContractResponse({
      value,
      fee,
      memo,
    }: sendMsgStoreAndInstantiateContractResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error(
          'TxClient:sendMsgStoreAndInstantiateContractResponse: Unable to sign Tx. Signer is not present.'
        );
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgStoreAndInstantiateContractResponse({
          value: MsgStoreAndInstantiateContractResponse.fromPartial(value),
        });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgStoreAndInstantiateContractResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgStoreAndMigrateContractResponse({
      value,
      fee,
      memo,
    }: sendMsgStoreAndMigrateContractResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgStoreAndMigrateContractResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgStoreAndMigrateContractResponse({
          value: MsgStoreAndMigrateContractResponse.fromPartial(value),
        });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgStoreAndMigrateContractResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryContractsByCodeRequest({
      value,
      fee,
      memo,
    }: sendQueryContractsByCodeRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryContractsByCodeRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryContractsByCodeRequest({ value: QueryContractsByCodeRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryContractsByCodeRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryRawContractStateResponse({
      value,
      fee,
      memo,
    }: sendQueryRawContractStateResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryRawContractStateResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryRawContractStateResponse({ value: QueryRawContractStateResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryRawContractStateResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryContractsByCreatorResponse({
      value,
      fee,
      memo,
    }: sendQueryContractsByCreatorResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryContractsByCreatorResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryContractsByCreatorResponse({ value: QueryContractsByCreatorResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryContractsByCreatorResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendSudoContractProposal({ value, fee, memo }: sendSudoContractProposalParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendSudoContractProposal: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.sudoContractProposal({ value: SudoContractProposal.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendSudoContractProposal: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendCodeInfo({ value, fee, memo }: sendCodeInfoParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendCodeInfo: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.codeInfo({ value: CodeInfo.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendCodeInfo: Could not broadcast Tx: ' + e.message);
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

    async sendContractExecutionAuthorization({
      value,
      fee,
      memo,
    }: sendContractExecutionAuthorizationParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendContractExecutionAuthorization: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.contractExecutionAuthorization({ value: ContractExecutionAuthorization.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendContractExecutionAuthorization: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQuerySmartContractStateRequest({
      value,
      fee,
      memo,
    }: sendQuerySmartContractStateRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQuerySmartContractStateRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.querySmartContractStateRequest({ value: QuerySmartContractStateRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQuerySmartContractStateRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendClearAdminProposal({ value, fee, memo }: sendClearAdminProposalParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendClearAdminProposal: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.clearAdminProposal({ value: ClearAdminProposal.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendClearAdminProposal: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendSequence({ value, fee, memo }: sendSequenceParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendSequence: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.sequence({ value: Sequence.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendSequence: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendCode({ value, fee, memo }: sendCodeParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendCode: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.code({ value: Code.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendCode: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgUnpinCodesResponse({ value, fee, memo }: sendMsgUnpinCodesResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgUnpinCodesResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgUnpinCodesResponse({ value: MsgUnpinCodesResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgUnpinCodesResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryBuildAddressResponse({
      value,
      fee,
      memo,
    }: sendQueryBuildAddressResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryBuildAddressResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryBuildAddressResponse({ value: QueryBuildAddressResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryBuildAddressResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryPinnedCodesResponse({
      value,
      fee,
      memo,
    }: sendQueryPinnedCodesResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryPinnedCodesResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryPinnedCodesResponse({ value: QueryPinnedCodesResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryPinnedCodesResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryContractsByCreatorRequest({
      value,
      fee,
      memo,
    }: sendQueryContractsByCreatorRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryContractsByCreatorRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryContractsByCreatorRequest({ value: QueryContractsByCreatorRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryContractsByCreatorRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendStoreAndInstantiateContractProposal({
      value,
      fee,
      memo,
    }: sendStoreAndInstantiateContractProposalParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendStoreAndInstantiateContractProposal: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.storeAndInstantiateContractProposal({
          value: StoreAndInstantiateContractProposal.fromPartial(value),
        });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendStoreAndInstantiateContractProposal: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgInstantiateContract2({
      value,
      fee,
      memo,
    }: sendMsgInstantiateContract2Params): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgInstantiateContract2: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgInstantiateContract2({ value: MsgInstantiateContract2.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgInstantiateContract2: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendContract({ value, fee, memo }: sendContractParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendContract: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.contract({ value: Contract.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendContract: Could not broadcast Tx: ' + e.message);
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

    async sendModel({ value, fee, memo }: sendModelParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendModel: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.model({ value: Model.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendModel: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendExecuteContractProposal({
      value,
      fee,
      memo,
    }: sendExecuteContractProposalParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendExecuteContractProposal: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.executeContractProposal({ value: ExecuteContractProposal.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendExecuteContractProposal: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgStoreCode({ value, fee, memo }: sendMsgStoreCodeParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgStoreCode: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgStoreCode({ value: MsgStoreCode.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgStoreCode: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgUpdateAdmin({ value, fee, memo }: sendMsgUpdateAdminParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgUpdateAdmin: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgUpdateAdmin({ value: MsgUpdateAdmin.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgUpdateAdmin: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgAddCodeUploadParamsAddresses({
      value,
      fee,
      memo,
    }: sendMsgAddCodeUploadParamsAddressesParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgAddCodeUploadParamsAddresses: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgAddCodeUploadParamsAddresses({ value: MsgAddCodeUploadParamsAddresses.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgAddCodeUploadParamsAddresses: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgInstantiateContract2Response({
      value,
      fee,
      memo,
    }: sendMsgInstantiateContract2ResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgInstantiateContract2Response: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgInstantiateContract2Response({ value: MsgInstantiateContract2Response.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgInstantiateContract2Response: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQuerySmartContractStateResponse({
      value,
      fee,
      memo,
    }: sendQuerySmartContractStateResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQuerySmartContractStateResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.querySmartContractStateResponse({ value: QuerySmartContractStateResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQuerySmartContractStateResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgStoreCodeResponse({ value, fee, memo }: sendMsgStoreCodeResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgStoreCodeResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgStoreCodeResponse({ value: MsgStoreCodeResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgStoreCodeResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryPinnedCodesRequest({
      value,
      fee,
      memo,
    }: sendQueryPinnedCodesRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryPinnedCodesRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryPinnedCodesRequest({ value: QueryPinnedCodesRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryPinnedCodesRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgExecuteContract({ value, fee, memo }: sendMsgExecuteContractParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgExecuteContract: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgExecuteContract({ value: MsgExecuteContract.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgExecuteContract: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgClearAdmin({ value, fee, memo }: sendMsgClearAdminParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgClearAdmin: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgClearAdmin({ value: MsgClearAdmin.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgClearAdmin: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgUpdateContractLabel({
      value,
      fee,
      memo,
    }: sendMsgUpdateContractLabelParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgUpdateContractLabel: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgUpdateContractLabel({ value: MsgUpdateContractLabel.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgUpdateContractLabel: Could not broadcast Tx: ' + e.message);
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

    async sendUpdateInstantiateConfigProposal({
      value,
      fee,
      memo,
    }: sendUpdateInstantiateConfigProposalParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendUpdateInstantiateConfigProposal: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.updateInstantiateConfigProposal({ value: UpdateInstantiateConfigProposal.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendUpdateInstantiateConfigProposal: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryAllContractStateResponse({
      value,
      fee,
      memo,
    }: sendQueryAllContractStateResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryAllContractStateResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryAllContractStateResponse({ value: QueryAllContractStateResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryAllContractStateResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendUpdateAdminProposal({ value, fee, memo }: sendUpdateAdminProposalParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendUpdateAdminProposal: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.updateAdminProposal({ value: UpdateAdminProposal.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendUpdateAdminProposal: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgStoreAndInstantiateContract({
      value,
      fee,
      memo,
    }: sendMsgStoreAndInstantiateContractParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgStoreAndInstantiateContract: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgStoreAndInstantiateContract({ value: MsgStoreAndInstantiateContract.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgStoreAndInstantiateContract: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendContractCodeHistoryEntry({
      value,
      fee,
      memo,
    }: sendContractCodeHistoryEntryParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendContractCodeHistoryEntry: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.contractCodeHistoryEntry({ value: ContractCodeHistoryEntry.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendContractCodeHistoryEntry: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendContractMigrationAuthorization({
      value,
      fee,
      memo,
    }: sendContractMigrationAuthorizationParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendContractMigrationAuthorization: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.contractMigrationAuthorization({ value: ContractMigrationAuthorization.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendContractMigrationAuthorization: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendAcceptedMessagesFilter({
      value,
      fee,
      memo,
    }: sendAcceptedMessagesFilterParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendAcceptedMessagesFilter: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.acceptedMessagesFilter({ value: AcceptedMessagesFilter.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendAcceptedMessagesFilter: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendCodeInfoResponse({ value, fee, memo }: sendCodeInfoResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendCodeInfoResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.codeInfoResponse({ value: CodeInfoResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendCodeInfoResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMigrateContractProposal({
      value,
      fee,
      memo,
    }: sendMigrateContractProposalParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMigrateContractProposal: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.migrateContractProposal({ value: MigrateContractProposal.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMigrateContractProposal: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendAcceptedMessageKeysFilter({
      value,
      fee,
      memo,
    }: sendAcceptedMessageKeysFilterParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendAcceptedMessageKeysFilter: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.acceptedMessageKeysFilter({ value: AcceptedMessageKeysFilter.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendAcceptedMessageKeysFilter: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMaxCallsLimit({ value, fee, memo }: sendMaxCallsLimitParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMaxCallsLimit: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.maxCallsLimit({ value: MaxCallsLimit.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMaxCallsLimit: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMaxFundsLimit({ value, fee, memo }: sendMaxFundsLimitParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMaxFundsLimit: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.maxFundsLimit({ value: MaxFundsLimit.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMaxFundsLimit: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryContractInfoResponse({
      value,
      fee,
      memo,
    }: sendQueryContractInfoResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryContractInfoResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryContractInfoResponse({ value: QueryContractInfoResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryContractInfoResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryContractHistoryRequest({
      value,
      fee,
      memo,
    }: sendQueryContractHistoryRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryContractHistoryRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryContractHistoryRequest({ value: QueryContractHistoryRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryContractHistoryRequest: Could not broadcast Tx: ' + e.message);
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

    msgIbccloseChannel({ value }: msgIbccloseChannelParams): EncodeObject {
      try {
        return { typeUrl: '/cosmwasm.wasm.v1.MsgIBCCloseChannel', value: MsgIBCCloseChannel.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:MsgIBCCloseChannel: Could not create message: ' + e.message);
      }
    },

    msgUpdateInstantiateConfig({ value }: msgUpdateInstantiateConfigParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmwasm.wasm.v1.MsgUpdateInstantiateConfig',
          value: MsgUpdateInstantiateConfig.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgUpdateInstantiateConfig: Could not create message: ' + e.message);
      }
    },

    msgUpdateInstantiateConfigResponse({ value }: msgUpdateInstantiateConfigResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmwasm.wasm.v1.MsgUpdateInstantiateConfigResponse',
          value: MsgUpdateInstantiateConfigResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgUpdateInstantiateConfigResponse: Could not create message: ' + e.message);
      }
    },

    queryCodeRequest({ value }: queryCodeRequestParams): EncodeObject {
      try {
        return { typeUrl: '/cosmwasm.wasm.v1.QueryCodeRequest', value: QueryCodeRequest.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:QueryCodeRequest: Could not create message: ' + e.message);
      }
    },

    instantiateContractProposal({ value }: instantiateContractProposalParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmwasm.wasm.v1.InstantiateContractProposal',
          value: InstantiateContractProposal.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:InstantiateContractProposal: Could not create message: ' + e.message);
      }
    },

    instantiateContract2Proposal({ value }: instantiateContract2ProposalParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmwasm.wasm.v1.InstantiateContract2Proposal',
          value: InstantiateContract2Proposal.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:InstantiateContract2Proposal: Could not create message: ' + e.message);
      }
    },

    msgPinCodes({ value }: msgPinCodesParams): EncodeObject {
      try {
        return { typeUrl: '/cosmwasm.wasm.v1.MsgPinCodes', value: MsgPinCodes.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:MsgPinCodes: Could not create message: ' + e.message);
      }
    },

    queryRawContractStateRequest({ value }: queryRawContractStateRequestParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmwasm.wasm.v1.QueryRawContractStateRequest',
          value: QueryRawContractStateRequest.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryRawContractStateRequest: Could not create message: ' + e.message);
      }
    },

    queryCodesRequest({ value }: queryCodesRequestParams): EncodeObject {
      try {
        return { typeUrl: '/cosmwasm.wasm.v1.QueryCodesRequest', value: QueryCodesRequest.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:QueryCodesRequest: Could not create message: ' + e.message);
      }
    },

    msgIbcsendResponse({ value }: msgIbcsendResponseParams): EncodeObject {
      try {
        return { typeUrl: '/cosmwasm.wasm.v1.MsgIBCSendResponse', value: MsgIBCSendResponse.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:MsgIBCSendResponse: Could not create message: ' + e.message);
      }
    },

    storeCodeProposal({ value }: storeCodeProposalParams): EncodeObject {
      try {
        return { typeUrl: '/cosmwasm.wasm.v1.StoreCodeProposal', value: StoreCodeProposal.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:StoreCodeProposal: Could not create message: ' + e.message);
      }
    },

    accessConfigUpdate({ value }: accessConfigUpdateParams): EncodeObject {
      try {
        return { typeUrl: '/cosmwasm.wasm.v1.AccessConfigUpdate', value: AccessConfigUpdate.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:AccessConfigUpdate: Could not create message: ' + e.message);
      }
    },

    accessTypeParam({ value }: accessTypeParamParams): EncodeObject {
      try {
        return { typeUrl: '/cosmwasm.wasm.v1.AccessTypeParam', value: AccessTypeParam.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:AccessTypeParam: Could not create message: ' + e.message);
      }
    },

    storeCodeAuthorization({ value }: storeCodeAuthorizationParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmwasm.wasm.v1.StoreCodeAuthorization',
          value: StoreCodeAuthorization.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:StoreCodeAuthorization: Could not create message: ' + e.message);
      }
    },

    queryBuildAddressRequest({ value }: queryBuildAddressRequestParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmwasm.wasm.v1.QueryBuildAddressRequest',
          value: QueryBuildAddressRequest.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryBuildAddressRequest: Could not create message: ' + e.message);
      }
    },

    msgUnpinCodes({ value }: msgUnpinCodesParams): EncodeObject {
      try {
        return { typeUrl: '/cosmwasm.wasm.v1.MsgUnpinCodes', value: MsgUnpinCodes.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:MsgUnpinCodes: Could not create message: ' + e.message);
      }
    },

    msgMigrateContract({ value }: msgMigrateContractParams): EncodeObject {
      try {
        return { typeUrl: '/cosmwasm.wasm.v1.MsgMigrateContract', value: MsgMigrateContract.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:MsgMigrateContract: Could not create message: ' + e.message);
      }
    },

    msgSudoContract({ value }: msgSudoContractParams): EncodeObject {
      try {
        return { typeUrl: '/cosmwasm.wasm.v1.MsgSudoContract', value: MsgSudoContract.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:MsgSudoContract: Could not create message: ' + e.message);
      }
    },

    msgPinCodesResponse({ value }: msgPinCodesResponseParams): EncodeObject {
      try {
        return { typeUrl: '/cosmwasm.wasm.v1.MsgPinCodesResponse', value: MsgPinCodesResponse.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:MsgPinCodesResponse: Could not create message: ' + e.message);
      }
    },

    msgUpdateContractLabelResponse({ value }: msgUpdateContractLabelResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmwasm.wasm.v1.MsgUpdateContractLabelResponse',
          value: MsgUpdateContractLabelResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgUpdateContractLabelResponse: Could not create message: ' + e.message);
      }
    },

    unpinCodesProposal({ value }: unpinCodesProposalParams): EncodeObject {
      try {
        return { typeUrl: '/cosmwasm.wasm.v1.UnpinCodesProposal', value: UnpinCodesProposal.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:UnpinCodesProposal: Could not create message: ' + e.message);
      }
    },

    genesisState({ value }: genesisStateParams): EncodeObject {
      try {
        return { typeUrl: '/cosmwasm.wasm.v1.GenesisState', value: GenesisState.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:GenesisState: Could not create message: ' + e.message);
      }
    },

    msgMigrateContractResponse({ value }: msgMigrateContractResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmwasm.wasm.v1.MsgMigrateContractResponse',
          value: MsgMigrateContractResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgMigrateContractResponse: Could not create message: ' + e.message);
      }
    },

    accessConfig({ value }: accessConfigParams): EncodeObject {
      try {
        return { typeUrl: '/cosmwasm.wasm.v1.AccessConfig', value: AccessConfig.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:AccessConfig: Could not create message: ' + e.message);
      }
    },

    queryContractHistoryResponse({ value }: queryContractHistoryResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmwasm.wasm.v1.QueryContractHistoryResponse',
          value: QueryContractHistoryResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryContractHistoryResponse: Could not create message: ' + e.message);
      }
    },

    combinedLimit({ value }: combinedLimitParams): EncodeObject {
      try {
        return { typeUrl: '/cosmwasm.wasm.v1.CombinedLimit', value: CombinedLimit.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:CombinedLimit: Could not create message: ' + e.message);
      }
    },

    msgIbcsend({ value }: msgIbcsendParams): EncodeObject {
      try {
        return { typeUrl: '/cosmwasm.wasm.v1.MsgIBCSend', value: MsgIBCSend.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:MsgIBCSend: Could not create message: ' + e.message);
      }
    },

    contractInfo({ value }: contractInfoParams): EncodeObject {
      try {
        return { typeUrl: '/cosmwasm.wasm.v1.ContractInfo', value: ContractInfo.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:ContractInfo: Could not create message: ' + e.message);
      }
    },

    msgRemoveCodeUploadParamsAddressesResponse({
      value,
    }: msgRemoveCodeUploadParamsAddressesResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmwasm.wasm.v1.MsgRemoveCodeUploadParamsAddressesResponse',
          value: MsgRemoveCodeUploadParamsAddressesResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgRemoveCodeUploadParamsAddressesResponse: Could not create message: ' + e.message);
      }
    },

    queryAllContractStateRequest({ value }: queryAllContractStateRequestParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmwasm.wasm.v1.QueryAllContractStateRequest',
          value: QueryAllContractStateRequest.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryAllContractStateRequest: Could not create message: ' + e.message);
      }
    },

    msgInstantiateContract({ value }: msgInstantiateContractParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmwasm.wasm.v1.MsgInstantiateContract',
          value: MsgInstantiateContract.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgInstantiateContract: Could not create message: ' + e.message);
      }
    },

    msgStoreAndMigrateContract({ value }: msgStoreAndMigrateContractParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmwasm.wasm.v1.MsgStoreAndMigrateContract',
          value: MsgStoreAndMigrateContract.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgStoreAndMigrateContract: Could not create message: ' + e.message);
      }
    },

    msgSudoContractResponse({ value }: msgSudoContractResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmwasm.wasm.v1.MsgSudoContractResponse',
          value: MsgSudoContractResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgSudoContractResponse: Could not create message: ' + e.message);
      }
    },

    msgAddCodeUploadParamsAddressesResponse({ value }: msgAddCodeUploadParamsAddressesResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmwasm.wasm.v1.MsgAddCodeUploadParamsAddressesResponse',
          value: MsgAddCodeUploadParamsAddressesResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgAddCodeUploadParamsAddressesResponse: Could not create message: ' + e.message);
      }
    },

    absoluteTxPosition({ value }: absoluteTxPositionParams): EncodeObject {
      try {
        return { typeUrl: '/cosmwasm.wasm.v1.AbsoluteTxPosition', value: AbsoluteTxPosition.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:AbsoluteTxPosition: Could not create message: ' + e.message);
      }
    },

    msgClearAdminResponse({ value }: msgClearAdminResponseParams): EncodeObject {
      try {
        return { typeUrl: '/cosmwasm.wasm.v1.MsgClearAdminResponse', value: MsgClearAdminResponse.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:MsgClearAdminResponse: Could not create message: ' + e.message);
      }
    },

    codeGrant({ value }: codeGrantParams): EncodeObject {
      try {
        return { typeUrl: '/cosmwasm.wasm.v1.CodeGrant', value: CodeGrant.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:CodeGrant: Could not create message: ' + e.message);
      }
    },

    allowAllMessagesFilter({ value }: allowAllMessagesFilterParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmwasm.wasm.v1.AllowAllMessagesFilter',
          value: AllowAllMessagesFilter.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:AllowAllMessagesFilter: Could not create message: ' + e.message);
      }
    },

    queryContractsByCodeResponse({ value }: queryContractsByCodeResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmwasm.wasm.v1.QueryContractsByCodeResponse',
          value: QueryContractsByCodeResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryContractsByCodeResponse: Could not create message: ' + e.message);
      }
    },

    pinCodesProposal({ value }: pinCodesProposalParams): EncodeObject {
      try {
        return { typeUrl: '/cosmwasm.wasm.v1.PinCodesProposal', value: PinCodesProposal.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:PinCodesProposal: Could not create message: ' + e.message);
      }
    },

    msgRemoveCodeUploadParamsAddresses({ value }: msgRemoveCodeUploadParamsAddressesParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmwasm.wasm.v1.MsgRemoveCodeUploadParamsAddresses',
          value: MsgRemoveCodeUploadParamsAddresses.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgRemoveCodeUploadParamsAddresses: Could not create message: ' + e.message);
      }
    },

    msgUpdateAdminResponse({ value }: msgUpdateAdminResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmwasm.wasm.v1.MsgUpdateAdminResponse',
          value: MsgUpdateAdminResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgUpdateAdminResponse: Could not create message: ' + e.message);
      }
    },

    queryContractInfoRequest({ value }: queryContractInfoRequestParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmwasm.wasm.v1.QueryContractInfoRequest',
          value: QueryContractInfoRequest.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryContractInfoRequest: Could not create message: ' + e.message);
      }
    },

    queryCodesResponse({ value }: queryCodesResponseParams): EncodeObject {
      try {
        return { typeUrl: '/cosmwasm.wasm.v1.QueryCodesResponse', value: QueryCodesResponse.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:QueryCodesResponse: Could not create message: ' + e.message);
      }
    },

    msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject {
      try {
        return { typeUrl: '/cosmwasm.wasm.v1.MsgUpdateParams', value: MsgUpdateParams.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:MsgUpdateParams: Could not create message: ' + e.message);
      }
    },

    msgExecuteContractResponse({ value }: msgExecuteContractResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmwasm.wasm.v1.MsgExecuteContractResponse',
          value: MsgExecuteContractResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgExecuteContractResponse: Could not create message: ' + e.message);
      }
    },

    contractGrant({ value }: contractGrantParams): EncodeObject {
      try {
        return { typeUrl: '/cosmwasm.wasm.v1.ContractGrant', value: ContractGrant.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:ContractGrant: Could not create message: ' + e.message);
      }
    },

    queryCodeResponse({ value }: queryCodeResponseParams): EncodeObject {
      try {
        return { typeUrl: '/cosmwasm.wasm.v1.QueryCodeResponse', value: QueryCodeResponse.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:QueryCodeResponse: Could not create message: ' + e.message);
      }
    },

    msgInstantiateContractResponse({ value }: msgInstantiateContractResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmwasm.wasm.v1.MsgInstantiateContractResponse',
          value: MsgInstantiateContractResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgInstantiateContractResponse: Could not create message: ' + e.message);
      }
    },

    msgStoreAndInstantiateContractResponse({ value }: msgStoreAndInstantiateContractResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmwasm.wasm.v1.MsgStoreAndInstantiateContractResponse',
          value: MsgStoreAndInstantiateContractResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgStoreAndInstantiateContractResponse: Could not create message: ' + e.message);
      }
    },

    msgStoreAndMigrateContractResponse({ value }: msgStoreAndMigrateContractResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmwasm.wasm.v1.MsgStoreAndMigrateContractResponse',
          value: MsgStoreAndMigrateContractResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgStoreAndMigrateContractResponse: Could not create message: ' + e.message);
      }
    },

    queryContractsByCodeRequest({ value }: queryContractsByCodeRequestParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmwasm.wasm.v1.QueryContractsByCodeRequest',
          value: QueryContractsByCodeRequest.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryContractsByCodeRequest: Could not create message: ' + e.message);
      }
    },

    queryRawContractStateResponse({ value }: queryRawContractStateResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmwasm.wasm.v1.QueryRawContractStateResponse',
          value: QueryRawContractStateResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryRawContractStateResponse: Could not create message: ' + e.message);
      }
    },

    queryContractsByCreatorResponse({ value }: queryContractsByCreatorResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmwasm.wasm.v1.QueryContractsByCreatorResponse',
          value: QueryContractsByCreatorResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryContractsByCreatorResponse: Could not create message: ' + e.message);
      }
    },

    sudoContractProposal({ value }: sudoContractProposalParams): EncodeObject {
      try {
        return { typeUrl: '/cosmwasm.wasm.v1.SudoContractProposal', value: SudoContractProposal.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:SudoContractProposal: Could not create message: ' + e.message);
      }
    },

    codeInfo({ value }: codeInfoParams): EncodeObject {
      try {
        return { typeUrl: '/cosmwasm.wasm.v1.CodeInfo', value: CodeInfo.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:CodeInfo: Could not create message: ' + e.message);
      }
    },

    msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmwasm.wasm.v1.MsgUpdateParamsResponse',
          value: MsgUpdateParamsResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgUpdateParamsResponse: Could not create message: ' + e.message);
      }
    },

    contractExecutionAuthorization({ value }: contractExecutionAuthorizationParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmwasm.wasm.v1.ContractExecutionAuthorization',
          value: ContractExecutionAuthorization.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:ContractExecutionAuthorization: Could not create message: ' + e.message);
      }
    },

    querySmartContractStateRequest({ value }: querySmartContractStateRequestParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmwasm.wasm.v1.QuerySmartContractStateRequest',
          value: QuerySmartContractStateRequest.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QuerySmartContractStateRequest: Could not create message: ' + e.message);
      }
    },

    clearAdminProposal({ value }: clearAdminProposalParams): EncodeObject {
      try {
        return { typeUrl: '/cosmwasm.wasm.v1.ClearAdminProposal', value: ClearAdminProposal.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:ClearAdminProposal: Could not create message: ' + e.message);
      }
    },

    sequence({ value }: sequenceParams): EncodeObject {
      try {
        return { typeUrl: '/cosmwasm.wasm.v1.Sequence', value: Sequence.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:Sequence: Could not create message: ' + e.message);
      }
    },

    code({ value }: codeParams): EncodeObject {
      try {
        return { typeUrl: '/cosmwasm.wasm.v1.Code', value: Code.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:Code: Could not create message: ' + e.message);
      }
    },

    msgUnpinCodesResponse({ value }: msgUnpinCodesResponseParams): EncodeObject {
      try {
        return { typeUrl: '/cosmwasm.wasm.v1.MsgUnpinCodesResponse', value: MsgUnpinCodesResponse.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:MsgUnpinCodesResponse: Could not create message: ' + e.message);
      }
    },

    queryBuildAddressResponse({ value }: queryBuildAddressResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmwasm.wasm.v1.QueryBuildAddressResponse',
          value: QueryBuildAddressResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryBuildAddressResponse: Could not create message: ' + e.message);
      }
    },

    queryPinnedCodesResponse({ value }: queryPinnedCodesResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmwasm.wasm.v1.QueryPinnedCodesResponse',
          value: QueryPinnedCodesResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryPinnedCodesResponse: Could not create message: ' + e.message);
      }
    },

    queryContractsByCreatorRequest({ value }: queryContractsByCreatorRequestParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmwasm.wasm.v1.QueryContractsByCreatorRequest',
          value: QueryContractsByCreatorRequest.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryContractsByCreatorRequest: Could not create message: ' + e.message);
      }
    },

    storeAndInstantiateContractProposal({ value }: storeAndInstantiateContractProposalParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmwasm.wasm.v1.StoreAndInstantiateContractProposal',
          value: StoreAndInstantiateContractProposal.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:StoreAndInstantiateContractProposal: Could not create message: ' + e.message);
      }
    },

    msgInstantiateContract2({ value }: msgInstantiateContract2Params): EncodeObject {
      try {
        return {
          typeUrl: '/cosmwasm.wasm.v1.MsgInstantiateContract2',
          value: MsgInstantiateContract2.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgInstantiateContract2: Could not create message: ' + e.message);
      }
    },

    contract({ value }: contractParams): EncodeObject {
      try {
        return { typeUrl: '/cosmwasm.wasm.v1.Contract', value: Contract.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:Contract: Could not create message: ' + e.message);
      }
    },

    params({ value }: paramsParams): EncodeObject {
      try {
        return { typeUrl: '/cosmwasm.wasm.v1.Params', value: Params.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:Params: Could not create message: ' + e.message);
      }
    },

    model({ value }: modelParams): EncodeObject {
      try {
        return { typeUrl: '/cosmwasm.wasm.v1.Model', value: Model.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:Model: Could not create message: ' + e.message);
      }
    },

    executeContractProposal({ value }: executeContractProposalParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmwasm.wasm.v1.ExecuteContractProposal',
          value: ExecuteContractProposal.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:ExecuteContractProposal: Could not create message: ' + e.message);
      }
    },

    msgStoreCode({ value }: msgStoreCodeParams): EncodeObject {
      try {
        return { typeUrl: '/cosmwasm.wasm.v1.MsgStoreCode', value: MsgStoreCode.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:MsgStoreCode: Could not create message: ' + e.message);
      }
    },

    msgUpdateAdmin({ value }: msgUpdateAdminParams): EncodeObject {
      try {
        return { typeUrl: '/cosmwasm.wasm.v1.MsgUpdateAdmin', value: MsgUpdateAdmin.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:MsgUpdateAdmin: Could not create message: ' + e.message);
      }
    },

    msgAddCodeUploadParamsAddresses({ value }: msgAddCodeUploadParamsAddressesParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmwasm.wasm.v1.MsgAddCodeUploadParamsAddresses',
          value: MsgAddCodeUploadParamsAddresses.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgAddCodeUploadParamsAddresses: Could not create message: ' + e.message);
      }
    },

    msgInstantiateContract2Response({ value }: msgInstantiateContract2ResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmwasm.wasm.v1.MsgInstantiateContract2Response',
          value: MsgInstantiateContract2Response.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgInstantiateContract2Response: Could not create message: ' + e.message);
      }
    },

    querySmartContractStateResponse({ value }: querySmartContractStateResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmwasm.wasm.v1.QuerySmartContractStateResponse',
          value: QuerySmartContractStateResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QuerySmartContractStateResponse: Could not create message: ' + e.message);
      }
    },

    msgStoreCodeResponse({ value }: msgStoreCodeResponseParams): EncodeObject {
      try {
        return { typeUrl: '/cosmwasm.wasm.v1.MsgStoreCodeResponse', value: MsgStoreCodeResponse.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:MsgStoreCodeResponse: Could not create message: ' + e.message);
      }
    },

    queryPinnedCodesRequest({ value }: queryPinnedCodesRequestParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmwasm.wasm.v1.QueryPinnedCodesRequest',
          value: QueryPinnedCodesRequest.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryPinnedCodesRequest: Could not create message: ' + e.message);
      }
    },

    msgExecuteContract({ value }: msgExecuteContractParams): EncodeObject {
      try {
        return { typeUrl: '/cosmwasm.wasm.v1.MsgExecuteContract', value: MsgExecuteContract.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:MsgExecuteContract: Could not create message: ' + e.message);
      }
    },

    msgClearAdmin({ value }: msgClearAdminParams): EncodeObject {
      try {
        return { typeUrl: '/cosmwasm.wasm.v1.MsgClearAdmin', value: MsgClearAdmin.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:MsgClearAdmin: Could not create message: ' + e.message);
      }
    },

    msgUpdateContractLabel({ value }: msgUpdateContractLabelParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmwasm.wasm.v1.MsgUpdateContractLabel',
          value: MsgUpdateContractLabel.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgUpdateContractLabel: Could not create message: ' + e.message);
      }
    },

    queryParamsResponse({ value }: queryParamsResponseParams): EncodeObject {
      try {
        return { typeUrl: '/cosmwasm.wasm.v1.QueryParamsResponse', value: QueryParamsResponse.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:QueryParamsResponse: Could not create message: ' + e.message);
      }
    },

    updateInstantiateConfigProposal({ value }: updateInstantiateConfigProposalParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmwasm.wasm.v1.UpdateInstantiateConfigProposal',
          value: UpdateInstantiateConfigProposal.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:UpdateInstantiateConfigProposal: Could not create message: ' + e.message);
      }
    },

    queryAllContractStateResponse({ value }: queryAllContractStateResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmwasm.wasm.v1.QueryAllContractStateResponse',
          value: QueryAllContractStateResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryAllContractStateResponse: Could not create message: ' + e.message);
      }
    },

    updateAdminProposal({ value }: updateAdminProposalParams): EncodeObject {
      try {
        return { typeUrl: '/cosmwasm.wasm.v1.UpdateAdminProposal', value: UpdateAdminProposal.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:UpdateAdminProposal: Could not create message: ' + e.message);
      }
    },

    msgStoreAndInstantiateContract({ value }: msgStoreAndInstantiateContractParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmwasm.wasm.v1.MsgStoreAndInstantiateContract',
          value: MsgStoreAndInstantiateContract.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgStoreAndInstantiateContract: Could not create message: ' + e.message);
      }
    },

    contractCodeHistoryEntry({ value }: contractCodeHistoryEntryParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmwasm.wasm.v1.ContractCodeHistoryEntry',
          value: ContractCodeHistoryEntry.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:ContractCodeHistoryEntry: Could not create message: ' + e.message);
      }
    },

    contractMigrationAuthorization({ value }: contractMigrationAuthorizationParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmwasm.wasm.v1.ContractMigrationAuthorization',
          value: ContractMigrationAuthorization.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:ContractMigrationAuthorization: Could not create message: ' + e.message);
      }
    },

    acceptedMessagesFilter({ value }: acceptedMessagesFilterParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmwasm.wasm.v1.AcceptedMessagesFilter',
          value: AcceptedMessagesFilter.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:AcceptedMessagesFilter: Could not create message: ' + e.message);
      }
    },

    codeInfoResponse({ value }: codeInfoResponseParams): EncodeObject {
      try {
        return { typeUrl: '/cosmwasm.wasm.v1.CodeInfoResponse', value: CodeInfoResponse.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:CodeInfoResponse: Could not create message: ' + e.message);
      }
    },

    migrateContractProposal({ value }: migrateContractProposalParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmwasm.wasm.v1.MigrateContractProposal',
          value: MigrateContractProposal.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MigrateContractProposal: Could not create message: ' + e.message);
      }
    },

    acceptedMessageKeysFilter({ value }: acceptedMessageKeysFilterParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmwasm.wasm.v1.AcceptedMessageKeysFilter',
          value: AcceptedMessageKeysFilter.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:AcceptedMessageKeysFilter: Could not create message: ' + e.message);
      }
    },

    maxCallsLimit({ value }: maxCallsLimitParams): EncodeObject {
      try {
        return { typeUrl: '/cosmwasm.wasm.v1.MaxCallsLimit', value: MaxCallsLimit.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:MaxCallsLimit: Could not create message: ' + e.message);
      }
    },

    maxFundsLimit({ value }: maxFundsLimitParams): EncodeObject {
      try {
        return { typeUrl: '/cosmwasm.wasm.v1.MaxFundsLimit', value: MaxFundsLimit.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:MaxFundsLimit: Could not create message: ' + e.message);
      }
    },

    queryContractInfoResponse({ value }: queryContractInfoResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmwasm.wasm.v1.QueryContractInfoResponse',
          value: QueryContractInfoResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryContractInfoResponse: Could not create message: ' + e.message);
      }
    },

    queryContractHistoryRequest({ value }: queryContractHistoryRequestParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmwasm.wasm.v1.QueryContractHistoryRequest',
          value: QueryContractHistoryRequest.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryContractHistoryRequest: Could not create message: ' + e.message);
      }
    },

    queryParamsRequest({ value }: queryParamsRequestParams): EncodeObject {
      try {
        return { typeUrl: '/cosmwasm.wasm.v1.QueryParamsRequest', value: QueryParamsRequest.fromPartial(value) };
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
      CosmwasmWasmV1: new SDKModule(test),
    },
    registry: msgTypes,
  };
};
export default IgntModule;
