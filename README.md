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

## 💝 Donations are always appreciated!

Donate Bitcoin: https://donate.alexkaul.com/one-time-address

## License

MIT © Alex Kaul
