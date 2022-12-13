# ngfunc

### xpub Conversion

An Extended Public (xPub) Key is a part of certain blockchain standards. For example Bitcoin (BTC), Cardano (ADA), and many other chains use extended public keys. An xPub key can be thought of a master view into a wallet.

A ypub is a form of extended public key (xpub) which follows an additional standard defined in BIP 49. Xpubs, ypubs, and zpubs all allow a wallet to generate a deterministic tree of public keys, but each form of extended public key instructs a wallet to derive different address types. Specifically, ypubs instruct a wallet to derive P2SH-wrapped P2WPKH addresses.

P2WPKH addresses are SegWit addresses, but in order to maintain backwards compatibility, SegWit addresses can be wrapped in P2SH addresses in order to allow older wallets to send to SegWit addresses.

```ts
import { xpubConvert } from 'ngfunc';

const ypub = xpubConvert('ypub', '{{xpub-to-convert}}')
```