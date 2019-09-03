# One-Time Address

A better way to share your Bitcoin address. One-Time Address is a self-hosted, open-source service which turns your Bitcoin wallets into webpages and embeddable widgets that instantly provide an address with a QR code whenever someone wants to send you Bitcoin.

One-Time Address never shows the same address twice and thus helps to prevent address reuse. You should not reuse addresses because it abuses the privacy and security of the participants of the transactions as well as future holders of their value.

Note: It is not intended for use in e-commerce. One-Time Address is for accepting donations in Bitcoin and other cases when you don't need invoices, pre-defined amounts, email inputs, fiat calculations, countdowns, etc. Just instant access to a one-time Bitcoin address for sending a custom amount and nothing else. If you need an invoicing system, then consider using [BTCPay Server](https://github.com/btcpayserver/btcpayserver).

## Live Demo

Demo webpage: https://donate.alexkaul.com/one-time-address

## Installing

```
# clone repo
git clone https://github.com/alexk111/One-Time-Address

# navigate to it
cd One-Time-Address

# install dependencies
yarn install

# add env variables
cp .env.prod .env

# add wallets config
cp wallets.js.sample wallets.js
```

Edit ```.env```:

- Update SERVER_HOST and SERVER_PORT if needed

Edit ```wallets.js```:

- Enter info for your wallets

## Checking wallets

```
# check if your BTC wallet is generating the same addresses
yarn run check my-wallet
```

## Running

```
# running http server
yarn start
```

## Getting stats

```
# get stats on how many addresses have been already used
yarn run stats my-wallet
```

## Gap Limit Issue

Since One-Time Address always shows a new address, you will likely find yourself in a situation where more than 20 addresses in a row will have zero transactions. This will cause an [Account Discovery](https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki#account-discovery) issue when received funds don't appear in your Bitcoin wallet. Available workarounds:

### Using Electrum wallet

[Electrum wallet](https://www.electrum.org/) allows increasing Gap Limit. Open the ```Console tab``` and use the following commands at prompt: ```wallet.change_gap_limit(200)``` and press enter at your keyboard, ```wallet.storage.write()``` and press enter again. Then restart the client. To view/verify the current gap limit, type the following in the console: ```wallet.gap_limit```.

### Using Wasabi wallet

If you are showing bech32 addresses, then you might use [Wasabi wallet](https://wasabiwallet.io/). It also allows increasing Gap Limit. The wallet file can be modified from File/Open/Wallet Folder. To change the gap limit, update ```MinGapLimit``` json property in the wallet file.

### Using Built-in wallet

*(Not available yet)*. In future I'm planning to add a simple built-in wallet which would watch for transactions for generated addresses and enable you to create offline transactions to spend Bitcoin.

## 💝 Donations are always appreciated!

Donate Bitcoin: https://donate.alexkaul.com/one-time-address

## License

MIT © Alex Kaul
