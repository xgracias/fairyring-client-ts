# FairyRing Client

TypeScript client for the [FairyRing blockchain](https://www.fairblock.network/).

### Browser Support

| ![Chrome](https://raw.githubusercontent.com/alrra/browser-logos/main/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.githubusercontent.com/alrra/browser-logos/main/src/firefox/firefox_48x48.png) | ![Safari](https://raw.githubusercontent.com/alrra/browser-logos/main/src/safari/safari_48x48.png) | ![Opera](https://raw.githubusercontent.com/alrra/browser-logos/main/src/opera/opera_48x48.png) | ![Edge](https://raw.githubusercontent.com/alrra/browser-logos/main/src/edge/edge_48x48.png) | ![IE](https://raw.githubusercontent.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) |
| ------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| Latest ✔                                                                                          | Latest ✔                                                                                             | Latest ✔                                                                                          | Latest ✔                                                                                       | Latest ✔                                                                                    | 11 ✔                                                                                                                                    |

<br />

## Install

Using `npm`:

```bash
$ npm install fairyring-client-ts
```

Using `yarn`:

```bash
$ yarn add fairyring-client-ts
```

Using `pnpm`:

```bash
$ pnpm add fairyring-client-ts
```

## How to use

useClient() hook:

```typescript
import { Client } from "fairyring-client-ts";
import { env } from "../env";

const useClientInstance = () => {
  const client = new Client(env);
  return client;
};
let clientInstance: ReturnType<typeof useClientInstance>;

export const useClient = () => {
  if (!clientInstance) {
    clientInstance = useClientInstance();
  }
  return clientInstance;
};
```

Get the latest block height from `PEP` module:

```typescript
const client = useClient();
const latestHeight = await client.FairyringPep.query.queryLatestHeight();
```

Get nonce:

```typescript
const client = useClient();
await client.FairyringPep.query.queryPepNonce(address);
```

```typescript
const client = useClient();
const txResult = await client.FairyringPep.tx.sendMsgSubmitEncryptedTx({
  value: {
    creator: address,
    data: encryptedHex,
    targetBlockHeight: state.targetHeight,
  },
  fee: {
    amount: [
      {
        denom: "ufairy",
        amount: ENCRYPTION_PAY.toString(),
      },
    ],
    gas: "500000",
  },
});
```
