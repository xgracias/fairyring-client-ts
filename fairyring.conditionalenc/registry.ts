import { GeneratedType } from '@cosmjs/proto-signing';
import { MsgCreateGeneralKeyShare } from './types/fairyring/conditionalenc/tx';
import { MsgSendKeyshare } from './types/fairyring/conditionalenc/tx';
import { MsgCreateLatestPubKey } from './types/fairyring/conditionalenc/tx';
import { MsgUpdateAuthorizedAddress } from './types/fairyring/conditionalenc/tx';
import { MsgDeleteAuthorizedAddress } from './types/fairyring/conditionalenc/tx';
import { MsgRegisterValidator } from './types/fairyring/conditionalenc/tx';
import { MsgCreateAuthorizedAddress } from './types/fairyring/conditionalenc/tx';

const msgTypes: Array<[string, GeneratedType]> = [
  [
    '/fairyring.conditionalenc.MsgCreateGeneralKeyShare',
    MsgCreateGeneralKeyShare,
  ],
  ['/fairyring.conditionalenc.MsgSendKeyshare', MsgSendKeyshare],
  ['/fairyring.conditionalenc.MsgCreateLatestPubKey', MsgCreateLatestPubKey],
  [
    '/fairyring.conditionalenc.MsgUpdateAuthorizedAddress',
    MsgUpdateAuthorizedAddress,
  ],
  [
    '/fairyring.conditionalenc.MsgDeleteAuthorizedAddress',
    MsgDeleteAuthorizedAddress,
  ],
  ['/fairyring.conditionalenc.MsgRegisterValidator', MsgRegisterValidator],
  [
    '/fairyring.conditionalenc.MsgCreateAuthorizedAddress',
    MsgCreateAuthorizedAddress,
  ],
];

export { msgTypes };
