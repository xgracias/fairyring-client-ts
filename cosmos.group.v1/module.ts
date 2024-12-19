import { SigningStargateClient, DeliverTxResponse, StdFee } from '@cosmjs/stargate';
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from '@cosmjs/proto-signing';
import { msgTypes } from './registry';
import { IgniteClient } from '../client';
import { MissingWalletError } from '../helpers';
import { Api } from './rest';
import { MsgUpdateGroupPolicyAdmin } from './types/cosmos/group/v1/tx';
import { QueryGroupInfoRequest } from './types/cosmos/group/v1/query';
import { QueryGroupsResponse } from './types/cosmos/group/v1/query';
import { QueryGroupPoliciesByGroupRequest } from './types/cosmos/group/v1/query';
import { QueryTallyResultResponse } from './types/cosmos/group/v1/query';
import { EventUpdateGroupPolicy } from './types/cosmos/group/v1/events';
import { MsgUpdateGroupPolicyMetadataResponse } from './types/cosmos/group/v1/tx';
import { GroupPolicyInfo } from './types/cosmos/group/v1/types';
import { EventCreateGroup } from './types/cosmos/group/v1/events';
import { MsgCreateGroupPolicy } from './types/cosmos/group/v1/tx';
import { QueryTallyResultRequest } from './types/cosmos/group/v1/query';
import { EventVote } from './types/cosmos/group/v1/events';
import { MsgUpdateGroupMembers } from './types/cosmos/group/v1/tx';
import { MsgVoteResponse } from './types/cosmos/group/v1/tx';
import { MsgLeaveGroup } from './types/cosmos/group/v1/tx';
import { TallyResult } from './types/cosmos/group/v1/types';
import { QueryVoteByProposalVoterRequest } from './types/cosmos/group/v1/query';
import { QueryVotesByVoterResponse } from './types/cosmos/group/v1/query';
import { MsgSubmitProposalResponse } from './types/cosmos/group/v1/tx';
import { MsgExecResponse } from './types/cosmos/group/v1/tx';
import { QueryGroupsByAdminRequest } from './types/cosmos/group/v1/query';
import { QueryVotesByProposalRequest } from './types/cosmos/group/v1/query';
import { EventUpdateGroup } from './types/cosmos/group/v1/events';
import { EventCreateGroupPolicy } from './types/cosmos/group/v1/events';
import { GroupMember } from './types/cosmos/group/v1/types';
import { QueryGroupPoliciesByAdminResponse } from './types/cosmos/group/v1/query';
import { QueryVotesByVoterRequest } from './types/cosmos/group/v1/query';
import { QueryGroupPoliciesByGroupResponse } from './types/cosmos/group/v1/query';
import { QueryGroupPoliciesByAdminRequest } from './types/cosmos/group/v1/query';
import { MsgUpdateGroupPolicyDecisionPolicyResponse } from './types/cosmos/group/v1/tx';
import { MsgLeaveGroupResponse } from './types/cosmos/group/v1/tx';
import { QueryGroupsByAdminResponse } from './types/cosmos/group/v1/query';
import { MsgSubmitProposal } from './types/cosmos/group/v1/tx';
import { MsgUpdateGroupMembersResponse } from './types/cosmos/group/v1/tx';
import { QueryGroupInfoResponse } from './types/cosmos/group/v1/query';
import { QueryGroupPolicyInfoResponse } from './types/cosmos/group/v1/query';
import { QueryProposalsByGroupPolicyRequest } from './types/cosmos/group/v1/query';
import { QueryGroupsByMemberRequest } from './types/cosmos/group/v1/query';
import { GenesisState } from './types/cosmos/group/v1/genesis';
import { Member } from './types/cosmos/group/v1/types';
import { PercentageDecisionPolicy } from './types/cosmos/group/v1/types';
import { DecisionPolicyWindows } from './types/cosmos/group/v1/types';
import { MsgExec } from './types/cosmos/group/v1/tx';
import { MsgUpdateGroupAdmin } from './types/cosmos/group/v1/tx';
import { MsgUpdateGroupPolicyMetadata } from './types/cosmos/group/v1/tx';
import { MsgWithdrawProposal } from './types/cosmos/group/v1/tx';
import { EventLeaveGroup } from './types/cosmos/group/v1/events';
import { MsgUpdateGroupPolicyDecisionPolicy } from './types/cosmos/group/v1/tx';
import { MsgCreateGroupWithPolicyResponse } from './types/cosmos/group/v1/tx';
import { Vote } from './types/cosmos/group/v1/types';
import { QueryVotesByProposalResponse } from './types/cosmos/group/v1/query';
import { QueryProposalRequest } from './types/cosmos/group/v1/query';
import { QueryGroupsByMemberResponse } from './types/cosmos/group/v1/query';
import { MemberRequest } from './types/cosmos/group/v1/types';
import { GroupInfo } from './types/cosmos/group/v1/types';
import { Proposal } from './types/cosmos/group/v1/types';
import { MsgWithdrawProposalResponse } from './types/cosmos/group/v1/tx';
import { QueryVoteByProposalVoterResponse } from './types/cosmos/group/v1/query';
import { QueryGroupsRequest } from './types/cosmos/group/v1/query';
import { MsgCreateGroup } from './types/cosmos/group/v1/tx';
import { MsgCreateGroupResponse } from './types/cosmos/group/v1/tx';
import { MsgUpdateGroupAdminResponse } from './types/cosmos/group/v1/tx';
import { MsgUpdateGroupMetadataResponse } from './types/cosmos/group/v1/tx';
import { MsgUpdateGroupPolicyAdminResponse } from './types/cosmos/group/v1/tx';
import { ThresholdDecisionPolicy } from './types/cosmos/group/v1/types';
import { QueryGroupMembersResponse } from './types/cosmos/group/v1/query';
import { MsgUpdateGroupMetadata } from './types/cosmos/group/v1/tx';
import { EventExec } from './types/cosmos/group/v1/events';
import { MsgCreateGroupWithPolicy } from './types/cosmos/group/v1/tx';
import { MsgCreateGroupPolicyResponse } from './types/cosmos/group/v1/tx';
import { QueryGroupPolicyInfoRequest } from './types/cosmos/group/v1/query';
import { QueryProposalsByGroupPolicyResponse } from './types/cosmos/group/v1/query';
import { EventWithdrawProposal } from './types/cosmos/group/v1/events';
import { EventProposalPruned } from './types/cosmos/group/v1/events';
import { MsgVote } from './types/cosmos/group/v1/tx';
import { QueryGroupMembersRequest } from './types/cosmos/group/v1/query';
import { QueryProposalResponse } from './types/cosmos/group/v1/query';
import { EventSubmitProposal } from './types/cosmos/group/v1/events';

export {
  MsgUpdateGroupPolicyAdmin,
  QueryGroupInfoRequest,
  QueryGroupsResponse,
  QueryGroupPoliciesByGroupRequest,
  QueryTallyResultResponse,
  EventUpdateGroupPolicy,
  MsgUpdateGroupPolicyMetadataResponse,
  GroupPolicyInfo,
  EventCreateGroup,
  MsgCreateGroupPolicy,
  QueryTallyResultRequest,
  EventVote,
  MsgUpdateGroupMembers,
  MsgVoteResponse,
  MsgLeaveGroup,
  TallyResult,
  QueryVoteByProposalVoterRequest,
  QueryVotesByVoterResponse,
  MsgSubmitProposalResponse,
  MsgExecResponse,
  QueryGroupsByAdminRequest,
  QueryVotesByProposalRequest,
  EventUpdateGroup,
  EventCreateGroupPolicy,
  GroupMember,
  QueryGroupPoliciesByAdminResponse,
  QueryVotesByVoterRequest,
  QueryGroupPoliciesByGroupResponse,
  QueryGroupPoliciesByAdminRequest,
  MsgUpdateGroupPolicyDecisionPolicyResponse,
  MsgLeaveGroupResponse,
  QueryGroupsByAdminResponse,
  MsgSubmitProposal,
  MsgUpdateGroupMembersResponse,
  QueryGroupInfoResponse,
  QueryGroupPolicyInfoResponse,
  QueryProposalsByGroupPolicyRequest,
  QueryGroupsByMemberRequest,
  GenesisState,
  Member,
  PercentageDecisionPolicy,
  DecisionPolicyWindows,
  MsgExec,
  MsgUpdateGroupAdmin,
  MsgUpdateGroupPolicyMetadata,
  MsgWithdrawProposal,
  EventLeaveGroup,
  MsgUpdateGroupPolicyDecisionPolicy,
  MsgCreateGroupWithPolicyResponse,
  Vote,
  QueryVotesByProposalResponse,
  QueryProposalRequest,
  QueryGroupsByMemberResponse,
  MemberRequest,
  GroupInfo,
  Proposal,
  MsgWithdrawProposalResponse,
  QueryVoteByProposalVoterResponse,
  QueryGroupsRequest,
  MsgCreateGroup,
  MsgCreateGroupResponse,
  MsgUpdateGroupAdminResponse,
  MsgUpdateGroupMetadataResponse,
  MsgUpdateGroupPolicyAdminResponse,
  ThresholdDecisionPolicy,
  QueryGroupMembersResponse,
  MsgUpdateGroupMetadata,
  EventExec,
  MsgCreateGroupWithPolicy,
  MsgCreateGroupPolicyResponse,
  QueryGroupPolicyInfoRequest,
  QueryProposalsByGroupPolicyResponse,
  EventWithdrawProposal,
  EventProposalPruned,
  MsgVote,
  QueryGroupMembersRequest,
  QueryProposalResponse,
  EventSubmitProposal,
};

type sendMsgUpdateGroupPolicyAdminParams = {
  value: MsgUpdateGroupPolicyAdmin;
  fee?: StdFee;
  memo?: string;
};

type sendQueryGroupInfoRequestParams = {
  value: QueryGroupInfoRequest;
  fee?: StdFee;
  memo?: string;
};

type sendQueryGroupsResponseParams = {
  value: QueryGroupsResponse;
  fee?: StdFee;
  memo?: string;
};

type sendQueryGroupPoliciesByGroupRequestParams = {
  value: QueryGroupPoliciesByGroupRequest;
  fee?: StdFee;
  memo?: string;
};

type sendQueryTallyResultResponseParams = {
  value: QueryTallyResultResponse;
  fee?: StdFee;
  memo?: string;
};

type sendEventUpdateGroupPolicyParams = {
  value: EventUpdateGroupPolicy;
  fee?: StdFee;
  memo?: string;
};

type sendMsgUpdateGroupPolicyMetadataResponseParams = {
  value: MsgUpdateGroupPolicyMetadataResponse;
  fee?: StdFee;
  memo?: string;
};

type sendGroupPolicyInfoParams = {
  value: GroupPolicyInfo;
  fee?: StdFee;
  memo?: string;
};

type sendEventCreateGroupParams = {
  value: EventCreateGroup;
  fee?: StdFee;
  memo?: string;
};

type sendMsgCreateGroupPolicyParams = {
  value: MsgCreateGroupPolicy;
  fee?: StdFee;
  memo?: string;
};

type sendQueryTallyResultRequestParams = {
  value: QueryTallyResultRequest;
  fee?: StdFee;
  memo?: string;
};

type sendEventVoteParams = {
  value: EventVote;
  fee?: StdFee;
  memo?: string;
};

type sendMsgUpdateGroupMembersParams = {
  value: MsgUpdateGroupMembers;
  fee?: StdFee;
  memo?: string;
};

type sendMsgVoteResponseParams = {
  value: MsgVoteResponse;
  fee?: StdFee;
  memo?: string;
};

type sendMsgLeaveGroupParams = {
  value: MsgLeaveGroup;
  fee?: StdFee;
  memo?: string;
};

type sendTallyResultParams = {
  value: TallyResult;
  fee?: StdFee;
  memo?: string;
};

type sendQueryVoteByProposalVoterRequestParams = {
  value: QueryVoteByProposalVoterRequest;
  fee?: StdFee;
  memo?: string;
};

type sendQueryVotesByVoterResponseParams = {
  value: QueryVotesByVoterResponse;
  fee?: StdFee;
  memo?: string;
};

type sendMsgSubmitProposalResponseParams = {
  value: MsgSubmitProposalResponse;
  fee?: StdFee;
  memo?: string;
};

type sendMsgExecResponseParams = {
  value: MsgExecResponse;
  fee?: StdFee;
  memo?: string;
};

type sendQueryGroupsByAdminRequestParams = {
  value: QueryGroupsByAdminRequest;
  fee?: StdFee;
  memo?: string;
};

type sendQueryVotesByProposalRequestParams = {
  value: QueryVotesByProposalRequest;
  fee?: StdFee;
  memo?: string;
};

type sendEventUpdateGroupParams = {
  value: EventUpdateGroup;
  fee?: StdFee;
  memo?: string;
};

type sendEventCreateGroupPolicyParams = {
  value: EventCreateGroupPolicy;
  fee?: StdFee;
  memo?: string;
};

type sendGroupMemberParams = {
  value: GroupMember;
  fee?: StdFee;
  memo?: string;
};

type sendQueryGroupPoliciesByAdminResponseParams = {
  value: QueryGroupPoliciesByAdminResponse;
  fee?: StdFee;
  memo?: string;
};

type sendQueryVotesByVoterRequestParams = {
  value: QueryVotesByVoterRequest;
  fee?: StdFee;
  memo?: string;
};

type sendQueryGroupPoliciesByGroupResponseParams = {
  value: QueryGroupPoliciesByGroupResponse;
  fee?: StdFee;
  memo?: string;
};

type sendQueryGroupPoliciesByAdminRequestParams = {
  value: QueryGroupPoliciesByAdminRequest;
  fee?: StdFee;
  memo?: string;
};

type sendMsgUpdateGroupPolicyDecisionPolicyResponseParams = {
  value: MsgUpdateGroupPolicyDecisionPolicyResponse;
  fee?: StdFee;
  memo?: string;
};

type sendMsgLeaveGroupResponseParams = {
  value: MsgLeaveGroupResponse;
  fee?: StdFee;
  memo?: string;
};

type sendQueryGroupsByAdminResponseParams = {
  value: QueryGroupsByAdminResponse;
  fee?: StdFee;
  memo?: string;
};

type sendMsgSubmitProposalParams = {
  value: MsgSubmitProposal;
  fee?: StdFee;
  memo?: string;
};

type sendMsgUpdateGroupMembersResponseParams = {
  value: MsgUpdateGroupMembersResponse;
  fee?: StdFee;
  memo?: string;
};

type sendQueryGroupInfoResponseParams = {
  value: QueryGroupInfoResponse;
  fee?: StdFee;
  memo?: string;
};

type sendQueryGroupPolicyInfoResponseParams = {
  value: QueryGroupPolicyInfoResponse;
  fee?: StdFee;
  memo?: string;
};

type sendQueryProposalsByGroupPolicyRequestParams = {
  value: QueryProposalsByGroupPolicyRequest;
  fee?: StdFee;
  memo?: string;
};

type sendQueryGroupsByMemberRequestParams = {
  value: QueryGroupsByMemberRequest;
  fee?: StdFee;
  memo?: string;
};

type sendGenesisStateParams = {
  value: GenesisState;
  fee?: StdFee;
  memo?: string;
};

type sendMemberParams = {
  value: Member;
  fee?: StdFee;
  memo?: string;
};

type sendPercentageDecisionPolicyParams = {
  value: PercentageDecisionPolicy;
  fee?: StdFee;
  memo?: string;
};

type sendDecisionPolicyWindowsParams = {
  value: DecisionPolicyWindows;
  fee?: StdFee;
  memo?: string;
};

type sendMsgExecParams = {
  value: MsgExec;
  fee?: StdFee;
  memo?: string;
};

type sendMsgUpdateGroupAdminParams = {
  value: MsgUpdateGroupAdmin;
  fee?: StdFee;
  memo?: string;
};

type sendMsgUpdateGroupPolicyMetadataParams = {
  value: MsgUpdateGroupPolicyMetadata;
  fee?: StdFee;
  memo?: string;
};

type sendMsgWithdrawProposalParams = {
  value: MsgWithdrawProposal;
  fee?: StdFee;
  memo?: string;
};

type sendEventLeaveGroupParams = {
  value: EventLeaveGroup;
  fee?: StdFee;
  memo?: string;
};

type sendMsgUpdateGroupPolicyDecisionPolicyParams = {
  value: MsgUpdateGroupPolicyDecisionPolicy;
  fee?: StdFee;
  memo?: string;
};

type sendMsgCreateGroupWithPolicyResponseParams = {
  value: MsgCreateGroupWithPolicyResponse;
  fee?: StdFee;
  memo?: string;
};

type sendVoteParams = {
  value: Vote;
  fee?: StdFee;
  memo?: string;
};

type sendQueryVotesByProposalResponseParams = {
  value: QueryVotesByProposalResponse;
  fee?: StdFee;
  memo?: string;
};

type sendQueryProposalRequestParams = {
  value: QueryProposalRequest;
  fee?: StdFee;
  memo?: string;
};

type sendQueryGroupsByMemberResponseParams = {
  value: QueryGroupsByMemberResponse;
  fee?: StdFee;
  memo?: string;
};

type sendMemberRequestParams = {
  value: MemberRequest;
  fee?: StdFee;
  memo?: string;
};

type sendGroupInfoParams = {
  value: GroupInfo;
  fee?: StdFee;
  memo?: string;
};

type sendProposalParams = {
  value: Proposal;
  fee?: StdFee;
  memo?: string;
};

type sendMsgWithdrawProposalResponseParams = {
  value: MsgWithdrawProposalResponse;
  fee?: StdFee;
  memo?: string;
};

type sendQueryVoteByProposalVoterResponseParams = {
  value: QueryVoteByProposalVoterResponse;
  fee?: StdFee;
  memo?: string;
};

type sendQueryGroupsRequestParams = {
  value: QueryGroupsRequest;
  fee?: StdFee;
  memo?: string;
};

type sendMsgCreateGroupParams = {
  value: MsgCreateGroup;
  fee?: StdFee;
  memo?: string;
};

type sendMsgCreateGroupResponseParams = {
  value: MsgCreateGroupResponse;
  fee?: StdFee;
  memo?: string;
};

type sendMsgUpdateGroupAdminResponseParams = {
  value: MsgUpdateGroupAdminResponse;
  fee?: StdFee;
  memo?: string;
};

type sendMsgUpdateGroupMetadataResponseParams = {
  value: MsgUpdateGroupMetadataResponse;
  fee?: StdFee;
  memo?: string;
};

type sendMsgUpdateGroupPolicyAdminResponseParams = {
  value: MsgUpdateGroupPolicyAdminResponse;
  fee?: StdFee;
  memo?: string;
};

type sendThresholdDecisionPolicyParams = {
  value: ThresholdDecisionPolicy;
  fee?: StdFee;
  memo?: string;
};

type sendQueryGroupMembersResponseParams = {
  value: QueryGroupMembersResponse;
  fee?: StdFee;
  memo?: string;
};

type sendMsgUpdateGroupMetadataParams = {
  value: MsgUpdateGroupMetadata;
  fee?: StdFee;
  memo?: string;
};

type sendEventExecParams = {
  value: EventExec;
  fee?: StdFee;
  memo?: string;
};

type sendMsgCreateGroupWithPolicyParams = {
  value: MsgCreateGroupWithPolicy;
  fee?: StdFee;
  memo?: string;
};

type sendMsgCreateGroupPolicyResponseParams = {
  value: MsgCreateGroupPolicyResponse;
  fee?: StdFee;
  memo?: string;
};

type sendQueryGroupPolicyInfoRequestParams = {
  value: QueryGroupPolicyInfoRequest;
  fee?: StdFee;
  memo?: string;
};

type sendQueryProposalsByGroupPolicyResponseParams = {
  value: QueryProposalsByGroupPolicyResponse;
  fee?: StdFee;
  memo?: string;
};

type sendEventWithdrawProposalParams = {
  value: EventWithdrawProposal;
  fee?: StdFee;
  memo?: string;
};

type sendEventProposalPrunedParams = {
  value: EventProposalPruned;
  fee?: StdFee;
  memo?: string;
};

type sendMsgVoteParams = {
  value: MsgVote;
  fee?: StdFee;
  memo?: string;
};

type sendQueryGroupMembersRequestParams = {
  value: QueryGroupMembersRequest;
  fee?: StdFee;
  memo?: string;
};

type sendQueryProposalResponseParams = {
  value: QueryProposalResponse;
  fee?: StdFee;
  memo?: string;
};

type sendEventSubmitProposalParams = {
  value: EventSubmitProposal;
  fee?: StdFee;
  memo?: string;
};

type msgUpdateGroupPolicyAdminParams = {
  value: MsgUpdateGroupPolicyAdmin;
};

type queryGroupInfoRequestParams = {
  value: QueryGroupInfoRequest;
};

type queryGroupsResponseParams = {
  value: QueryGroupsResponse;
};

type queryGroupPoliciesByGroupRequestParams = {
  value: QueryGroupPoliciesByGroupRequest;
};

type queryTallyResultResponseParams = {
  value: QueryTallyResultResponse;
};

type eventUpdateGroupPolicyParams = {
  value: EventUpdateGroupPolicy;
};

type msgUpdateGroupPolicyMetadataResponseParams = {
  value: MsgUpdateGroupPolicyMetadataResponse;
};

type groupPolicyInfoParams = {
  value: GroupPolicyInfo;
};

type eventCreateGroupParams = {
  value: EventCreateGroup;
};

type msgCreateGroupPolicyParams = {
  value: MsgCreateGroupPolicy;
};

type queryTallyResultRequestParams = {
  value: QueryTallyResultRequest;
};

type eventVoteParams = {
  value: EventVote;
};

type msgUpdateGroupMembersParams = {
  value: MsgUpdateGroupMembers;
};

type msgVoteResponseParams = {
  value: MsgVoteResponse;
};

type msgLeaveGroupParams = {
  value: MsgLeaveGroup;
};

type tallyResultParams = {
  value: TallyResult;
};

type queryVoteByProposalVoterRequestParams = {
  value: QueryVoteByProposalVoterRequest;
};

type queryVotesByVoterResponseParams = {
  value: QueryVotesByVoterResponse;
};

type msgSubmitProposalResponseParams = {
  value: MsgSubmitProposalResponse;
};

type msgExecResponseParams = {
  value: MsgExecResponse;
};

type queryGroupsByAdminRequestParams = {
  value: QueryGroupsByAdminRequest;
};

type queryVotesByProposalRequestParams = {
  value: QueryVotesByProposalRequest;
};

type eventUpdateGroupParams = {
  value: EventUpdateGroup;
};

type eventCreateGroupPolicyParams = {
  value: EventCreateGroupPolicy;
};

type groupMemberParams = {
  value: GroupMember;
};

type queryGroupPoliciesByAdminResponseParams = {
  value: QueryGroupPoliciesByAdminResponse;
};

type queryVotesByVoterRequestParams = {
  value: QueryVotesByVoterRequest;
};

type queryGroupPoliciesByGroupResponseParams = {
  value: QueryGroupPoliciesByGroupResponse;
};

type queryGroupPoliciesByAdminRequestParams = {
  value: QueryGroupPoliciesByAdminRequest;
};

type msgUpdateGroupPolicyDecisionPolicyResponseParams = {
  value: MsgUpdateGroupPolicyDecisionPolicyResponse;
};

type msgLeaveGroupResponseParams = {
  value: MsgLeaveGroupResponse;
};

type queryGroupsByAdminResponseParams = {
  value: QueryGroupsByAdminResponse;
};

type msgSubmitProposalParams = {
  value: MsgSubmitProposal;
};

type msgUpdateGroupMembersResponseParams = {
  value: MsgUpdateGroupMembersResponse;
};

type queryGroupInfoResponseParams = {
  value: QueryGroupInfoResponse;
};

type queryGroupPolicyInfoResponseParams = {
  value: QueryGroupPolicyInfoResponse;
};

type queryProposalsByGroupPolicyRequestParams = {
  value: QueryProposalsByGroupPolicyRequest;
};

type queryGroupsByMemberRequestParams = {
  value: QueryGroupsByMemberRequest;
};

type genesisStateParams = {
  value: GenesisState;
};

type memberParams = {
  value: Member;
};

type percentageDecisionPolicyParams = {
  value: PercentageDecisionPolicy;
};

type decisionPolicyWindowsParams = {
  value: DecisionPolicyWindows;
};

type msgExecParams = {
  value: MsgExec;
};

type msgUpdateGroupAdminParams = {
  value: MsgUpdateGroupAdmin;
};

type msgUpdateGroupPolicyMetadataParams = {
  value: MsgUpdateGroupPolicyMetadata;
};

type msgWithdrawProposalParams = {
  value: MsgWithdrawProposal;
};

type eventLeaveGroupParams = {
  value: EventLeaveGroup;
};

type msgUpdateGroupPolicyDecisionPolicyParams = {
  value: MsgUpdateGroupPolicyDecisionPolicy;
};

type msgCreateGroupWithPolicyResponseParams = {
  value: MsgCreateGroupWithPolicyResponse;
};

type voteParams = {
  value: Vote;
};

type queryVotesByProposalResponseParams = {
  value: QueryVotesByProposalResponse;
};

type queryProposalRequestParams = {
  value: QueryProposalRequest;
};

type queryGroupsByMemberResponseParams = {
  value: QueryGroupsByMemberResponse;
};

type memberRequestParams = {
  value: MemberRequest;
};

type groupInfoParams = {
  value: GroupInfo;
};

type proposalParams = {
  value: Proposal;
};

type msgWithdrawProposalResponseParams = {
  value: MsgWithdrawProposalResponse;
};

type queryVoteByProposalVoterResponseParams = {
  value: QueryVoteByProposalVoterResponse;
};

type queryGroupsRequestParams = {
  value: QueryGroupsRequest;
};

type msgCreateGroupParams = {
  value: MsgCreateGroup;
};

type msgCreateGroupResponseParams = {
  value: MsgCreateGroupResponse;
};

type msgUpdateGroupAdminResponseParams = {
  value: MsgUpdateGroupAdminResponse;
};

type msgUpdateGroupMetadataResponseParams = {
  value: MsgUpdateGroupMetadataResponse;
};

type msgUpdateGroupPolicyAdminResponseParams = {
  value: MsgUpdateGroupPolicyAdminResponse;
};

type thresholdDecisionPolicyParams = {
  value: ThresholdDecisionPolicy;
};

type queryGroupMembersResponseParams = {
  value: QueryGroupMembersResponse;
};

type msgUpdateGroupMetadataParams = {
  value: MsgUpdateGroupMetadata;
};

type eventExecParams = {
  value: EventExec;
};

type msgCreateGroupWithPolicyParams = {
  value: MsgCreateGroupWithPolicy;
};

type msgCreateGroupPolicyResponseParams = {
  value: MsgCreateGroupPolicyResponse;
};

type queryGroupPolicyInfoRequestParams = {
  value: QueryGroupPolicyInfoRequest;
};

type queryProposalsByGroupPolicyResponseParams = {
  value: QueryProposalsByGroupPolicyResponse;
};

type eventWithdrawProposalParams = {
  value: EventWithdrawProposal;
};

type eventProposalPrunedParams = {
  value: EventProposalPruned;
};

type msgVoteParams = {
  value: MsgVote;
};

type queryGroupMembersRequestParams = {
  value: QueryGroupMembersRequest;
};

type queryProposalResponseParams = {
  value: QueryProposalResponse;
};

type eventSubmitProposalParams = {
  value: EventSubmitProposal;
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
    async sendMsgUpdateGroupPolicyAdmin({
      value,
      fee,
      memo,
    }: sendMsgUpdateGroupPolicyAdminParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgUpdateGroupPolicyAdmin: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgUpdateGroupPolicyAdmin({ value: MsgUpdateGroupPolicyAdmin.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgUpdateGroupPolicyAdmin: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryGroupInfoRequest({ value, fee, memo }: sendQueryGroupInfoRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryGroupInfoRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryGroupInfoRequest({ value: QueryGroupInfoRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryGroupInfoRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryGroupsResponse({ value, fee, memo }: sendQueryGroupsResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryGroupsResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryGroupsResponse({ value: QueryGroupsResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryGroupsResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryGroupPoliciesByGroupRequest({
      value,
      fee,
      memo,
    }: sendQueryGroupPoliciesByGroupRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryGroupPoliciesByGroupRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryGroupPoliciesByGroupRequest({ value: QueryGroupPoliciesByGroupRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryGroupPoliciesByGroupRequest: Could not broadcast Tx: ' + e.message);
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

    async sendEventUpdateGroupPolicy({
      value,
      fee,
      memo,
    }: sendEventUpdateGroupPolicyParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendEventUpdateGroupPolicy: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.eventUpdateGroupPolicy({ value: EventUpdateGroupPolicy.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendEventUpdateGroupPolicy: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgUpdateGroupPolicyMetadataResponse({
      value,
      fee,
      memo,
    }: sendMsgUpdateGroupPolicyMetadataResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgUpdateGroupPolicyMetadataResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgUpdateGroupPolicyMetadataResponse({
          value: MsgUpdateGroupPolicyMetadataResponse.fromPartial(value),
        });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgUpdateGroupPolicyMetadataResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendGroupPolicyInfo({ value, fee, memo }: sendGroupPolicyInfoParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendGroupPolicyInfo: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.groupPolicyInfo({ value: GroupPolicyInfo.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendGroupPolicyInfo: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendEventCreateGroup({ value, fee, memo }: sendEventCreateGroupParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendEventCreateGroup: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.eventCreateGroup({ value: EventCreateGroup.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendEventCreateGroup: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgCreateGroupPolicy({ value, fee, memo }: sendMsgCreateGroupPolicyParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgCreateGroupPolicy: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgCreateGroupPolicy({ value: MsgCreateGroupPolicy.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgCreateGroupPolicy: Could not broadcast Tx: ' + e.message);
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

    async sendEventVote({ value, fee, memo }: sendEventVoteParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendEventVote: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.eventVote({ value: EventVote.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendEventVote: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgUpdateGroupMembers({ value, fee, memo }: sendMsgUpdateGroupMembersParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgUpdateGroupMembers: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgUpdateGroupMembers({ value: MsgUpdateGroupMembers.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgUpdateGroupMembers: Could not broadcast Tx: ' + e.message);
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

    async sendMsgLeaveGroup({ value, fee, memo }: sendMsgLeaveGroupParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgLeaveGroup: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgLeaveGroup({ value: MsgLeaveGroup.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgLeaveGroup: Could not broadcast Tx: ' + e.message);
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

    async sendQueryVoteByProposalVoterRequest({
      value,
      fee,
      memo,
    }: sendQueryVoteByProposalVoterRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryVoteByProposalVoterRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryVoteByProposalVoterRequest({ value: QueryVoteByProposalVoterRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryVoteByProposalVoterRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryVotesByVoterResponse({
      value,
      fee,
      memo,
    }: sendQueryVotesByVoterResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryVotesByVoterResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryVotesByVoterResponse({ value: QueryVotesByVoterResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryVotesByVoterResponse: Could not broadcast Tx: ' + e.message);
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

    async sendMsgExecResponse({ value, fee, memo }: sendMsgExecResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgExecResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgExecResponse({ value: MsgExecResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgExecResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryGroupsByAdminRequest({
      value,
      fee,
      memo,
    }: sendQueryGroupsByAdminRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryGroupsByAdminRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryGroupsByAdminRequest({ value: QueryGroupsByAdminRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryGroupsByAdminRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryVotesByProposalRequest({
      value,
      fee,
      memo,
    }: sendQueryVotesByProposalRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryVotesByProposalRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryVotesByProposalRequest({ value: QueryVotesByProposalRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryVotesByProposalRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendEventUpdateGroup({ value, fee, memo }: sendEventUpdateGroupParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendEventUpdateGroup: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.eventUpdateGroup({ value: EventUpdateGroup.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendEventUpdateGroup: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendEventCreateGroupPolicy({
      value,
      fee,
      memo,
    }: sendEventCreateGroupPolicyParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendEventCreateGroupPolicy: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.eventCreateGroupPolicy({ value: EventCreateGroupPolicy.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendEventCreateGroupPolicy: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendGroupMember({ value, fee, memo }: sendGroupMemberParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendGroupMember: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.groupMember({ value: GroupMember.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendGroupMember: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryGroupPoliciesByAdminResponse({
      value,
      fee,
      memo,
    }: sendQueryGroupPoliciesByAdminResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryGroupPoliciesByAdminResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryGroupPoliciesByAdminResponse({
          value: QueryGroupPoliciesByAdminResponse.fromPartial(value),
        });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryGroupPoliciesByAdminResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryVotesByVoterRequest({
      value,
      fee,
      memo,
    }: sendQueryVotesByVoterRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryVotesByVoterRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryVotesByVoterRequest({ value: QueryVotesByVoterRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryVotesByVoterRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryGroupPoliciesByGroupResponse({
      value,
      fee,
      memo,
    }: sendQueryGroupPoliciesByGroupResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryGroupPoliciesByGroupResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryGroupPoliciesByGroupResponse({
          value: QueryGroupPoliciesByGroupResponse.fromPartial(value),
        });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryGroupPoliciesByGroupResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryGroupPoliciesByAdminRequest({
      value,
      fee,
      memo,
    }: sendQueryGroupPoliciesByAdminRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryGroupPoliciesByAdminRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryGroupPoliciesByAdminRequest({ value: QueryGroupPoliciesByAdminRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryGroupPoliciesByAdminRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgUpdateGroupPolicyDecisionPolicyResponse({
      value,
      fee,
      memo,
    }: sendMsgUpdateGroupPolicyDecisionPolicyResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error(
          'TxClient:sendMsgUpdateGroupPolicyDecisionPolicyResponse: Unable to sign Tx. Signer is not present.'
        );
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgUpdateGroupPolicyDecisionPolicyResponse({
          value: MsgUpdateGroupPolicyDecisionPolicyResponse.fromPartial(value),
        });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error(
          'TxClient:sendMsgUpdateGroupPolicyDecisionPolicyResponse: Could not broadcast Tx: ' + e.message
        );
      }
    },

    async sendMsgLeaveGroupResponse({ value, fee, memo }: sendMsgLeaveGroupResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgLeaveGroupResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgLeaveGroupResponse({ value: MsgLeaveGroupResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgLeaveGroupResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryGroupsByAdminResponse({
      value,
      fee,
      memo,
    }: sendQueryGroupsByAdminResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryGroupsByAdminResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryGroupsByAdminResponse({ value: QueryGroupsByAdminResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryGroupsByAdminResponse: Could not broadcast Tx: ' + e.message);
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

    async sendMsgUpdateGroupMembersResponse({
      value,
      fee,
      memo,
    }: sendMsgUpdateGroupMembersResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgUpdateGroupMembersResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgUpdateGroupMembersResponse({ value: MsgUpdateGroupMembersResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgUpdateGroupMembersResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryGroupInfoResponse({
      value,
      fee,
      memo,
    }: sendQueryGroupInfoResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryGroupInfoResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryGroupInfoResponse({ value: QueryGroupInfoResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryGroupInfoResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryGroupPolicyInfoResponse({
      value,
      fee,
      memo,
    }: sendQueryGroupPolicyInfoResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryGroupPolicyInfoResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryGroupPolicyInfoResponse({ value: QueryGroupPolicyInfoResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryGroupPolicyInfoResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryProposalsByGroupPolicyRequest({
      value,
      fee,
      memo,
    }: sendQueryProposalsByGroupPolicyRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryProposalsByGroupPolicyRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryProposalsByGroupPolicyRequest({
          value: QueryProposalsByGroupPolicyRequest.fromPartial(value),
        });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryProposalsByGroupPolicyRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryGroupsByMemberRequest({
      value,
      fee,
      memo,
    }: sendQueryGroupsByMemberRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryGroupsByMemberRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryGroupsByMemberRequest({ value: QueryGroupsByMemberRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryGroupsByMemberRequest: Could not broadcast Tx: ' + e.message);
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

    async sendMember({ value, fee, memo }: sendMemberParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMember: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.member({ value: Member.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMember: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendPercentageDecisionPolicy({
      value,
      fee,
      memo,
    }: sendPercentageDecisionPolicyParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendPercentageDecisionPolicy: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.percentageDecisionPolicy({ value: PercentageDecisionPolicy.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendPercentageDecisionPolicy: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendDecisionPolicyWindows({ value, fee, memo }: sendDecisionPolicyWindowsParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendDecisionPolicyWindows: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.decisionPolicyWindows({ value: DecisionPolicyWindows.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendDecisionPolicyWindows: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgExec({ value, fee, memo }: sendMsgExecParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgExec: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgExec({ value: MsgExec.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgExec: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgUpdateGroupAdmin({ value, fee, memo }: sendMsgUpdateGroupAdminParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgUpdateGroupAdmin: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgUpdateGroupAdmin({ value: MsgUpdateGroupAdmin.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgUpdateGroupAdmin: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgUpdateGroupPolicyMetadata({
      value,
      fee,
      memo,
    }: sendMsgUpdateGroupPolicyMetadataParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgUpdateGroupPolicyMetadata: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgUpdateGroupPolicyMetadata({ value: MsgUpdateGroupPolicyMetadata.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgUpdateGroupPolicyMetadata: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgWithdrawProposal({ value, fee, memo }: sendMsgWithdrawProposalParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgWithdrawProposal: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgWithdrawProposal({ value: MsgWithdrawProposal.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgWithdrawProposal: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendEventLeaveGroup({ value, fee, memo }: sendEventLeaveGroupParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendEventLeaveGroup: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.eventLeaveGroup({ value: EventLeaveGroup.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendEventLeaveGroup: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgUpdateGroupPolicyDecisionPolicy({
      value,
      fee,
      memo,
    }: sendMsgUpdateGroupPolicyDecisionPolicyParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgUpdateGroupPolicyDecisionPolicy: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgUpdateGroupPolicyDecisionPolicy({
          value: MsgUpdateGroupPolicyDecisionPolicy.fromPartial(value),
        });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgUpdateGroupPolicyDecisionPolicy: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgCreateGroupWithPolicyResponse({
      value,
      fee,
      memo,
    }: sendMsgCreateGroupWithPolicyResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgCreateGroupWithPolicyResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgCreateGroupWithPolicyResponse({ value: MsgCreateGroupWithPolicyResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgCreateGroupWithPolicyResponse: Could not broadcast Tx: ' + e.message);
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

    async sendQueryVotesByProposalResponse({
      value,
      fee,
      memo,
    }: sendQueryVotesByProposalResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryVotesByProposalResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryVotesByProposalResponse({ value: QueryVotesByProposalResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryVotesByProposalResponse: Could not broadcast Tx: ' + e.message);
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

    async sendQueryGroupsByMemberResponse({
      value,
      fee,
      memo,
    }: sendQueryGroupsByMemberResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryGroupsByMemberResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryGroupsByMemberResponse({ value: QueryGroupsByMemberResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryGroupsByMemberResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMemberRequest({ value, fee, memo }: sendMemberRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMemberRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.memberRequest({ value: MemberRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMemberRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendGroupInfo({ value, fee, memo }: sendGroupInfoParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendGroupInfo: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.groupInfo({ value: GroupInfo.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendGroupInfo: Could not broadcast Tx: ' + e.message);
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

    async sendMsgWithdrawProposalResponse({
      value,
      fee,
      memo,
    }: sendMsgWithdrawProposalResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgWithdrawProposalResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgWithdrawProposalResponse({ value: MsgWithdrawProposalResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgWithdrawProposalResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryVoteByProposalVoterResponse({
      value,
      fee,
      memo,
    }: sendQueryVoteByProposalVoterResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryVoteByProposalVoterResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryVoteByProposalVoterResponse({ value: QueryVoteByProposalVoterResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryVoteByProposalVoterResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryGroupsRequest({ value, fee, memo }: sendQueryGroupsRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryGroupsRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryGroupsRequest({ value: QueryGroupsRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryGroupsRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgCreateGroup({ value, fee, memo }: sendMsgCreateGroupParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgCreateGroup: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgCreateGroup({ value: MsgCreateGroup.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgCreateGroup: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgCreateGroupResponse({
      value,
      fee,
      memo,
    }: sendMsgCreateGroupResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgCreateGroupResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgCreateGroupResponse({ value: MsgCreateGroupResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgCreateGroupResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgUpdateGroupAdminResponse({
      value,
      fee,
      memo,
    }: sendMsgUpdateGroupAdminResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgUpdateGroupAdminResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgUpdateGroupAdminResponse({ value: MsgUpdateGroupAdminResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgUpdateGroupAdminResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgUpdateGroupMetadataResponse({
      value,
      fee,
      memo,
    }: sendMsgUpdateGroupMetadataResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgUpdateGroupMetadataResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgUpdateGroupMetadataResponse({ value: MsgUpdateGroupMetadataResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgUpdateGroupMetadataResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgUpdateGroupPolicyAdminResponse({
      value,
      fee,
      memo,
    }: sendMsgUpdateGroupPolicyAdminResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgUpdateGroupPolicyAdminResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgUpdateGroupPolicyAdminResponse({
          value: MsgUpdateGroupPolicyAdminResponse.fromPartial(value),
        });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgUpdateGroupPolicyAdminResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendThresholdDecisionPolicy({
      value,
      fee,
      memo,
    }: sendThresholdDecisionPolicyParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendThresholdDecisionPolicy: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.thresholdDecisionPolicy({ value: ThresholdDecisionPolicy.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendThresholdDecisionPolicy: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryGroupMembersResponse({
      value,
      fee,
      memo,
    }: sendQueryGroupMembersResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryGroupMembersResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryGroupMembersResponse({ value: QueryGroupMembersResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryGroupMembersResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgUpdateGroupMetadata({
      value,
      fee,
      memo,
    }: sendMsgUpdateGroupMetadataParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgUpdateGroupMetadata: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgUpdateGroupMetadata({ value: MsgUpdateGroupMetadata.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgUpdateGroupMetadata: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendEventExec({ value, fee, memo }: sendEventExecParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendEventExec: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.eventExec({ value: EventExec.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendEventExec: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgCreateGroupWithPolicy({
      value,
      fee,
      memo,
    }: sendMsgCreateGroupWithPolicyParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgCreateGroupWithPolicy: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgCreateGroupWithPolicy({ value: MsgCreateGroupWithPolicy.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgCreateGroupWithPolicy: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendMsgCreateGroupPolicyResponse({
      value,
      fee,
      memo,
    }: sendMsgCreateGroupPolicyResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendMsgCreateGroupPolicyResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.msgCreateGroupPolicyResponse({ value: MsgCreateGroupPolicyResponse.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendMsgCreateGroupPolicyResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryGroupPolicyInfoRequest({
      value,
      fee,
      memo,
    }: sendQueryGroupPolicyInfoRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryGroupPolicyInfoRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryGroupPolicyInfoRequest({ value: QueryGroupPolicyInfoRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryGroupPolicyInfoRequest: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendQueryProposalsByGroupPolicyResponse({
      value,
      fee,
      memo,
    }: sendQueryProposalsByGroupPolicyResponseParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryProposalsByGroupPolicyResponse: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryProposalsByGroupPolicyResponse({
          value: QueryProposalsByGroupPolicyResponse.fromPartial(value),
        });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryProposalsByGroupPolicyResponse: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendEventWithdrawProposal({ value, fee, memo }: sendEventWithdrawProposalParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendEventWithdrawProposal: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.eventWithdrawProposal({ value: EventWithdrawProposal.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendEventWithdrawProposal: Could not broadcast Tx: ' + e.message);
      }
    },

    async sendEventProposalPruned({ value, fee, memo }: sendEventProposalPrunedParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendEventProposalPruned: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.eventProposalPruned({ value: EventProposalPruned.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendEventProposalPruned: Could not broadcast Tx: ' + e.message);
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

    async sendQueryGroupMembersRequest({
      value,
      fee,
      memo,
    }: sendQueryGroupMembersRequestParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendQueryGroupMembersRequest: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.queryGroupMembersRequest({ value: QueryGroupMembersRequest.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendQueryGroupMembersRequest: Could not broadcast Tx: ' + e.message);
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

    async sendEventSubmitProposal({ value, fee, memo }: sendEventSubmitProposalParams): Promise<DeliverTxResponse> {
      if (!signer) {
        throw new Error('TxClient:sendEventSubmitProposal: Unable to sign Tx. Signer is not present.');
      }
      try {
        const { address } = (await signer.getAccounts())[0];
        const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
        let msg = this.eventSubmitProposal({ value: EventSubmitProposal.fromPartial(value) });
        return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
      } catch (e: any) {
        throw new Error('TxClient:sendEventSubmitProposal: Could not broadcast Tx: ' + e.message);
      }
    },

    msgUpdateGroupPolicyAdmin({ value }: msgUpdateGroupPolicyAdminParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.group.v1.MsgUpdateGroupPolicyAdmin',
          value: MsgUpdateGroupPolicyAdmin.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgUpdateGroupPolicyAdmin: Could not create message: ' + e.message);
      }
    },

    queryGroupInfoRequest({ value }: queryGroupInfoRequestParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.group.v1.QueryGroupInfoRequest', value: QueryGroupInfoRequest.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:QueryGroupInfoRequest: Could not create message: ' + e.message);
      }
    },

    queryGroupsResponse({ value }: queryGroupsResponseParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.group.v1.QueryGroupsResponse', value: QueryGroupsResponse.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:QueryGroupsResponse: Could not create message: ' + e.message);
      }
    },

    queryGroupPoliciesByGroupRequest({ value }: queryGroupPoliciesByGroupRequestParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.group.v1.QueryGroupPoliciesByGroupRequest',
          value: QueryGroupPoliciesByGroupRequest.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryGroupPoliciesByGroupRequest: Could not create message: ' + e.message);
      }
    },

    queryTallyResultResponse({ value }: queryTallyResultResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.group.v1.QueryTallyResultResponse',
          value: QueryTallyResultResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryTallyResultResponse: Could not create message: ' + e.message);
      }
    },

    eventUpdateGroupPolicy({ value }: eventUpdateGroupPolicyParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.group.v1.EventUpdateGroupPolicy', value: EventUpdateGroupPolicy.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:EventUpdateGroupPolicy: Could not create message: ' + e.message);
      }
    },

    msgUpdateGroupPolicyMetadataResponse({ value }: msgUpdateGroupPolicyMetadataResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.group.v1.MsgUpdateGroupPolicyMetadataResponse',
          value: MsgUpdateGroupPolicyMetadataResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgUpdateGroupPolicyMetadataResponse: Could not create message: ' + e.message);
      }
    },

    groupPolicyInfo({ value }: groupPolicyInfoParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.group.v1.GroupPolicyInfo', value: GroupPolicyInfo.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:GroupPolicyInfo: Could not create message: ' + e.message);
      }
    },

    eventCreateGroup({ value }: eventCreateGroupParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.group.v1.EventCreateGroup', value: EventCreateGroup.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:EventCreateGroup: Could not create message: ' + e.message);
      }
    },

    msgCreateGroupPolicy({ value }: msgCreateGroupPolicyParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.group.v1.MsgCreateGroupPolicy', value: MsgCreateGroupPolicy.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:MsgCreateGroupPolicy: Could not create message: ' + e.message);
      }
    },

    queryTallyResultRequest({ value }: queryTallyResultRequestParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.group.v1.QueryTallyResultRequest',
          value: QueryTallyResultRequest.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryTallyResultRequest: Could not create message: ' + e.message);
      }
    },

    eventVote({ value }: eventVoteParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.group.v1.EventVote', value: EventVote.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:EventVote: Could not create message: ' + e.message);
      }
    },

    msgUpdateGroupMembers({ value }: msgUpdateGroupMembersParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.group.v1.MsgUpdateGroupMembers', value: MsgUpdateGroupMembers.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:MsgUpdateGroupMembers: Could not create message: ' + e.message);
      }
    },

    msgVoteResponse({ value }: msgVoteResponseParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.group.v1.MsgVoteResponse', value: MsgVoteResponse.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:MsgVoteResponse: Could not create message: ' + e.message);
      }
    },

    msgLeaveGroup({ value }: msgLeaveGroupParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.group.v1.MsgLeaveGroup', value: MsgLeaveGroup.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:MsgLeaveGroup: Could not create message: ' + e.message);
      }
    },

    tallyResult({ value }: tallyResultParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.group.v1.TallyResult', value: TallyResult.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:TallyResult: Could not create message: ' + e.message);
      }
    },

    queryVoteByProposalVoterRequest({ value }: queryVoteByProposalVoterRequestParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.group.v1.QueryVoteByProposalVoterRequest',
          value: QueryVoteByProposalVoterRequest.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryVoteByProposalVoterRequest: Could not create message: ' + e.message);
      }
    },

    queryVotesByVoterResponse({ value }: queryVotesByVoterResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.group.v1.QueryVotesByVoterResponse',
          value: QueryVotesByVoterResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryVotesByVoterResponse: Could not create message: ' + e.message);
      }
    },

    msgSubmitProposalResponse({ value }: msgSubmitProposalResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.group.v1.MsgSubmitProposalResponse',
          value: MsgSubmitProposalResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgSubmitProposalResponse: Could not create message: ' + e.message);
      }
    },

    msgExecResponse({ value }: msgExecResponseParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.group.v1.MsgExecResponse', value: MsgExecResponse.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:MsgExecResponse: Could not create message: ' + e.message);
      }
    },

    queryGroupsByAdminRequest({ value }: queryGroupsByAdminRequestParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.group.v1.QueryGroupsByAdminRequest',
          value: QueryGroupsByAdminRequest.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryGroupsByAdminRequest: Could not create message: ' + e.message);
      }
    },

    queryVotesByProposalRequest({ value }: queryVotesByProposalRequestParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.group.v1.QueryVotesByProposalRequest',
          value: QueryVotesByProposalRequest.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryVotesByProposalRequest: Could not create message: ' + e.message);
      }
    },

    eventUpdateGroup({ value }: eventUpdateGroupParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.group.v1.EventUpdateGroup', value: EventUpdateGroup.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:EventUpdateGroup: Could not create message: ' + e.message);
      }
    },

    eventCreateGroupPolicy({ value }: eventCreateGroupPolicyParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.group.v1.EventCreateGroupPolicy', value: EventCreateGroupPolicy.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:EventCreateGroupPolicy: Could not create message: ' + e.message);
      }
    },

    groupMember({ value }: groupMemberParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.group.v1.GroupMember', value: GroupMember.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:GroupMember: Could not create message: ' + e.message);
      }
    },

    queryGroupPoliciesByAdminResponse({ value }: queryGroupPoliciesByAdminResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.group.v1.QueryGroupPoliciesByAdminResponse',
          value: QueryGroupPoliciesByAdminResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryGroupPoliciesByAdminResponse: Could not create message: ' + e.message);
      }
    },

    queryVotesByVoterRequest({ value }: queryVotesByVoterRequestParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.group.v1.QueryVotesByVoterRequest',
          value: QueryVotesByVoterRequest.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryVotesByVoterRequest: Could not create message: ' + e.message);
      }
    },

    queryGroupPoliciesByGroupResponse({ value }: queryGroupPoliciesByGroupResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.group.v1.QueryGroupPoliciesByGroupResponse',
          value: QueryGroupPoliciesByGroupResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryGroupPoliciesByGroupResponse: Could not create message: ' + e.message);
      }
    },

    queryGroupPoliciesByAdminRequest({ value }: queryGroupPoliciesByAdminRequestParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.group.v1.QueryGroupPoliciesByAdminRequest',
          value: QueryGroupPoliciesByAdminRequest.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryGroupPoliciesByAdminRequest: Could not create message: ' + e.message);
      }
    },

    msgUpdateGroupPolicyDecisionPolicyResponse({
      value,
    }: msgUpdateGroupPolicyDecisionPolicyResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicyResponse',
          value: MsgUpdateGroupPolicyDecisionPolicyResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgUpdateGroupPolicyDecisionPolicyResponse: Could not create message: ' + e.message);
      }
    },

    msgLeaveGroupResponse({ value }: msgLeaveGroupResponseParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.group.v1.MsgLeaveGroupResponse', value: MsgLeaveGroupResponse.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:MsgLeaveGroupResponse: Could not create message: ' + e.message);
      }
    },

    queryGroupsByAdminResponse({ value }: queryGroupsByAdminResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.group.v1.QueryGroupsByAdminResponse',
          value: QueryGroupsByAdminResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryGroupsByAdminResponse: Could not create message: ' + e.message);
      }
    },

    msgSubmitProposal({ value }: msgSubmitProposalParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.group.v1.MsgSubmitProposal', value: MsgSubmitProposal.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:MsgSubmitProposal: Could not create message: ' + e.message);
      }
    },

    msgUpdateGroupMembersResponse({ value }: msgUpdateGroupMembersResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.group.v1.MsgUpdateGroupMembersResponse',
          value: MsgUpdateGroupMembersResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgUpdateGroupMembersResponse: Could not create message: ' + e.message);
      }
    },

    queryGroupInfoResponse({ value }: queryGroupInfoResponseParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.group.v1.QueryGroupInfoResponse', value: QueryGroupInfoResponse.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:QueryGroupInfoResponse: Could not create message: ' + e.message);
      }
    },

    queryGroupPolicyInfoResponse({ value }: queryGroupPolicyInfoResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.group.v1.QueryGroupPolicyInfoResponse',
          value: QueryGroupPolicyInfoResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryGroupPolicyInfoResponse: Could not create message: ' + e.message);
      }
    },

    queryProposalsByGroupPolicyRequest({ value }: queryProposalsByGroupPolicyRequestParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.group.v1.QueryProposalsByGroupPolicyRequest',
          value: QueryProposalsByGroupPolicyRequest.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryProposalsByGroupPolicyRequest: Could not create message: ' + e.message);
      }
    },

    queryGroupsByMemberRequest({ value }: queryGroupsByMemberRequestParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.group.v1.QueryGroupsByMemberRequest',
          value: QueryGroupsByMemberRequest.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryGroupsByMemberRequest: Could not create message: ' + e.message);
      }
    },

    genesisState({ value }: genesisStateParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.group.v1.GenesisState', value: GenesisState.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:GenesisState: Could not create message: ' + e.message);
      }
    },

    member({ value }: memberParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.group.v1.Member', value: Member.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:Member: Could not create message: ' + e.message);
      }
    },

    percentageDecisionPolicy({ value }: percentageDecisionPolicyParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.group.v1.PercentageDecisionPolicy',
          value: PercentageDecisionPolicy.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:PercentageDecisionPolicy: Could not create message: ' + e.message);
      }
    },

    decisionPolicyWindows({ value }: decisionPolicyWindowsParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.group.v1.DecisionPolicyWindows', value: DecisionPolicyWindows.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:DecisionPolicyWindows: Could not create message: ' + e.message);
      }
    },

    msgExec({ value }: msgExecParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.group.v1.MsgExec', value: MsgExec.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:MsgExec: Could not create message: ' + e.message);
      }
    },

    msgUpdateGroupAdmin({ value }: msgUpdateGroupAdminParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.group.v1.MsgUpdateGroupAdmin', value: MsgUpdateGroupAdmin.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:MsgUpdateGroupAdmin: Could not create message: ' + e.message);
      }
    },

    msgUpdateGroupPolicyMetadata({ value }: msgUpdateGroupPolicyMetadataParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.group.v1.MsgUpdateGroupPolicyMetadata',
          value: MsgUpdateGroupPolicyMetadata.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgUpdateGroupPolicyMetadata: Could not create message: ' + e.message);
      }
    },

    msgWithdrawProposal({ value }: msgWithdrawProposalParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.group.v1.MsgWithdrawProposal', value: MsgWithdrawProposal.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:MsgWithdrawProposal: Could not create message: ' + e.message);
      }
    },

    eventLeaveGroup({ value }: eventLeaveGroupParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.group.v1.EventLeaveGroup', value: EventLeaveGroup.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:EventLeaveGroup: Could not create message: ' + e.message);
      }
    },

    msgUpdateGroupPolicyDecisionPolicy({ value }: msgUpdateGroupPolicyDecisionPolicyParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy',
          value: MsgUpdateGroupPolicyDecisionPolicy.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgUpdateGroupPolicyDecisionPolicy: Could not create message: ' + e.message);
      }
    },

    msgCreateGroupWithPolicyResponse({ value }: msgCreateGroupWithPolicyResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.group.v1.MsgCreateGroupWithPolicyResponse',
          value: MsgCreateGroupWithPolicyResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgCreateGroupWithPolicyResponse: Could not create message: ' + e.message);
      }
    },

    vote({ value }: voteParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.group.v1.Vote', value: Vote.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:Vote: Could not create message: ' + e.message);
      }
    },

    queryVotesByProposalResponse({ value }: queryVotesByProposalResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.group.v1.QueryVotesByProposalResponse',
          value: QueryVotesByProposalResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryVotesByProposalResponse: Could not create message: ' + e.message);
      }
    },

    queryProposalRequest({ value }: queryProposalRequestParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.group.v1.QueryProposalRequest', value: QueryProposalRequest.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:QueryProposalRequest: Could not create message: ' + e.message);
      }
    },

    queryGroupsByMemberResponse({ value }: queryGroupsByMemberResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.group.v1.QueryGroupsByMemberResponse',
          value: QueryGroupsByMemberResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryGroupsByMemberResponse: Could not create message: ' + e.message);
      }
    },

    memberRequest({ value }: memberRequestParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.group.v1.MemberRequest', value: MemberRequest.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:MemberRequest: Could not create message: ' + e.message);
      }
    },

    groupInfo({ value }: groupInfoParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.group.v1.GroupInfo', value: GroupInfo.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:GroupInfo: Could not create message: ' + e.message);
      }
    },

    proposal({ value }: proposalParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.group.v1.Proposal', value: Proposal.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:Proposal: Could not create message: ' + e.message);
      }
    },

    msgWithdrawProposalResponse({ value }: msgWithdrawProposalResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.group.v1.MsgWithdrawProposalResponse',
          value: MsgWithdrawProposalResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgWithdrawProposalResponse: Could not create message: ' + e.message);
      }
    },

    queryVoteByProposalVoterResponse({ value }: queryVoteByProposalVoterResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.group.v1.QueryVoteByProposalVoterResponse',
          value: QueryVoteByProposalVoterResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryVoteByProposalVoterResponse: Could not create message: ' + e.message);
      }
    },

    queryGroupsRequest({ value }: queryGroupsRequestParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.group.v1.QueryGroupsRequest', value: QueryGroupsRequest.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:QueryGroupsRequest: Could not create message: ' + e.message);
      }
    },

    msgCreateGroup({ value }: msgCreateGroupParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.group.v1.MsgCreateGroup', value: MsgCreateGroup.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:MsgCreateGroup: Could not create message: ' + e.message);
      }
    },

    msgCreateGroupResponse({ value }: msgCreateGroupResponseParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.group.v1.MsgCreateGroupResponse', value: MsgCreateGroupResponse.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:MsgCreateGroupResponse: Could not create message: ' + e.message);
      }
    },

    msgUpdateGroupAdminResponse({ value }: msgUpdateGroupAdminResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.group.v1.MsgUpdateGroupAdminResponse',
          value: MsgUpdateGroupAdminResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgUpdateGroupAdminResponse: Could not create message: ' + e.message);
      }
    },

    msgUpdateGroupMetadataResponse({ value }: msgUpdateGroupMetadataResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.group.v1.MsgUpdateGroupMetadataResponse',
          value: MsgUpdateGroupMetadataResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgUpdateGroupMetadataResponse: Could not create message: ' + e.message);
      }
    },

    msgUpdateGroupPolicyAdminResponse({ value }: msgUpdateGroupPolicyAdminResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.group.v1.MsgUpdateGroupPolicyAdminResponse',
          value: MsgUpdateGroupPolicyAdminResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgUpdateGroupPolicyAdminResponse: Could not create message: ' + e.message);
      }
    },

    thresholdDecisionPolicy({ value }: thresholdDecisionPolicyParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.group.v1.ThresholdDecisionPolicy',
          value: ThresholdDecisionPolicy.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:ThresholdDecisionPolicy: Could not create message: ' + e.message);
      }
    },

    queryGroupMembersResponse({ value }: queryGroupMembersResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.group.v1.QueryGroupMembersResponse',
          value: QueryGroupMembersResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryGroupMembersResponse: Could not create message: ' + e.message);
      }
    },

    msgUpdateGroupMetadata({ value }: msgUpdateGroupMetadataParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.group.v1.MsgUpdateGroupMetadata', value: MsgUpdateGroupMetadata.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:MsgUpdateGroupMetadata: Could not create message: ' + e.message);
      }
    },

    eventExec({ value }: eventExecParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.group.v1.EventExec', value: EventExec.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:EventExec: Could not create message: ' + e.message);
      }
    },

    msgCreateGroupWithPolicy({ value }: msgCreateGroupWithPolicyParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.group.v1.MsgCreateGroupWithPolicy',
          value: MsgCreateGroupWithPolicy.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgCreateGroupWithPolicy: Could not create message: ' + e.message);
      }
    },

    msgCreateGroupPolicyResponse({ value }: msgCreateGroupPolicyResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.group.v1.MsgCreateGroupPolicyResponse',
          value: MsgCreateGroupPolicyResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:MsgCreateGroupPolicyResponse: Could not create message: ' + e.message);
      }
    },

    queryGroupPolicyInfoRequest({ value }: queryGroupPolicyInfoRequestParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.group.v1.QueryGroupPolicyInfoRequest',
          value: QueryGroupPolicyInfoRequest.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryGroupPolicyInfoRequest: Could not create message: ' + e.message);
      }
    },

    queryProposalsByGroupPolicyResponse({ value }: queryProposalsByGroupPolicyResponseParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.group.v1.QueryProposalsByGroupPolicyResponse',
          value: QueryProposalsByGroupPolicyResponse.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryProposalsByGroupPolicyResponse: Could not create message: ' + e.message);
      }
    },

    eventWithdrawProposal({ value }: eventWithdrawProposalParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.group.v1.EventWithdrawProposal', value: EventWithdrawProposal.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:EventWithdrawProposal: Could not create message: ' + e.message);
      }
    },

    eventProposalPruned({ value }: eventProposalPrunedParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.group.v1.EventProposalPruned', value: EventProposalPruned.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:EventProposalPruned: Could not create message: ' + e.message);
      }
    },

    msgVote({ value }: msgVoteParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.group.v1.MsgVote', value: MsgVote.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:MsgVote: Could not create message: ' + e.message);
      }
    },

    queryGroupMembersRequest({ value }: queryGroupMembersRequestParams): EncodeObject {
      try {
        return {
          typeUrl: '/cosmos.group.v1.QueryGroupMembersRequest',
          value: QueryGroupMembersRequest.fromPartial(value),
        };
      } catch (e: any) {
        throw new Error('TxClient:QueryGroupMembersRequest: Could not create message: ' + e.message);
      }
    },

    queryProposalResponse({ value }: queryProposalResponseParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.group.v1.QueryProposalResponse', value: QueryProposalResponse.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:QueryProposalResponse: Could not create message: ' + e.message);
      }
    },

    eventSubmitProposal({ value }: eventSubmitProposalParams): EncodeObject {
      try {
        return { typeUrl: '/cosmos.group.v1.EventSubmitProposal', value: EventSubmitProposal.fromPartial(value) };
      } catch (e: any) {
        throw new Error('TxClient:EventSubmitProposal: Could not create message: ' + e.message);
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
      CosmosGroupV1: new SDKModule(test),
    },
    registry: msgTypes,
  };
};
export default IgntModule;
