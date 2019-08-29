# Secret Address

A better way to share your Bitcoin address. Secret Address is an open-source service which turns your Bitcoin wallets into webpages and embeddable widgets that instantly provide a one-time address whenever someone wants to send you Bitcoin.

Secret Address is not a payment processor for ecommerce. It is for those who don't need invoices, pre-defined amounts, email inputs, fiat calculations, countdowns, etc. Just instant access to a one-time Bitcoin address for sending a custom amount and nothing else. If you need an invoicing system, then consider using [BTCPay Server](https://github.com/btcpayserver/btcpayserver).

## Installing

```
# clone repo
git clone https://github.com/alexk111/Secret-Address

# navigate to it
cd Secret-Address

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

## License

MIT © Alex Kaul
