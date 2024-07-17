import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgSendTxResponse } from "./types/ibc/applications/interchain_accounts/controller/v1/tx";
import { MsgRegisterInterchainAccount } from "./types/ibc/applications/interchain_accounts/controller/v1/tx";
import { QueryParamsRequest } from "./types/ibc/applications/interchain_accounts/controller/v1/query";
import { QueryInterchainAccountRequest } from "./types/ibc/applications/interchain_accounts/controller/v1/query";
import { MsgRegisterInterchainAccountResponse } from "./types/ibc/applications/interchain_accounts/controller/v1/tx";
import { MsgSendTx } from "./types/ibc/applications/interchain_accounts/controller/v1/tx";
import { Params } from "./types/ibc/applications/interchain_accounts/controller/v1/controller";
import { QueryParamsResponse } from "./types/ibc/applications/interchain_accounts/controller/v1/query";
import { QueryInterchainAccountResponse } from "./types/ibc/applications/interchain_accounts/controller/v1/query";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/ibc.applications.interchain_accounts.controller.v1.MsgSendTxResponse", MsgSendTxResponse],
    ["/ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccount", MsgRegisterInterchainAccount],
    ["/ibc.applications.interchain_accounts.controller.v1.QueryParamsRequest", QueryParamsRequest],
    ["/ibc.applications.interchain_accounts.controller.v1.QueryInterchainAccountRequest", QueryInterchainAccountRequest],
    ["/ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccountResponse", MsgRegisterInterchainAccountResponse],
    ["/ibc.applications.interchain_accounts.controller.v1.MsgSendTx", MsgSendTx],
    ["/ibc.applications.interchain_accounts.controller.v1.Params", Params],
    ["/ibc.applications.interchain_accounts.controller.v1.QueryParamsResponse", QueryParamsResponse],
    ["/ibc.applications.interchain_accounts.controller.v1.QueryInterchainAccountResponse", QueryInterchainAccountResponse],
    
];

export { msgTypes }