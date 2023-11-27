import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgUpdateAuthorizedAddress } from "./types/fairyring/conditionalenc/tx";
import { MsgCreateAuthorizedAddress } from "./types/fairyring/conditionalenc/tx";
import { MsgSendConditionalenc } from "./types/fairyring/conditionalenc/tx";
import { MsgRegisterValidator } from "./types/fairyring/conditionalenc/tx";
import { MsgCreateLatestPubKey } from "./types/fairyring/conditionalenc/tx";
import { MsgDeleteAuthorizedAddress } from "./types/fairyring/conditionalenc/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/fairyring.conditionalenc.MsgUpdateAuthorizedAddress", MsgUpdateAuthorizedAddress],
    ["/fairyring.conditionalenc.MsgCreateAuthorizedAddress", MsgCreateAuthorizedAddress],
    ["/fairyring.conditionalenc.MsgSendConditionalenc", MsgSendConditionalenc],
    ["/fairyring.conditionalenc.MsgRegisterValidator", MsgRegisterValidator],
    ["/fairyring.conditionalenc.MsgCreateLatestPubKey", MsgCreateLatestPubKey],
    ["/fairyring.conditionalenc.MsgDeleteAuthorizedAddress", MsgDeleteAuthorizedAddress],
    
];

export { msgTypes }