<div align="center">
	<img src="media/logo.png" width="125" height="125">
	<h1>One-Time Address</h1>
	<p>
		<b>A better way to share your Bitcoin address</b>
	</p>
	<br>
</div>

One-Time Address is a self-hosted, open-source service which turns your Bitcoin wallets into webpages and embeddable widgets that instantly provide an address with a QR code whenever someone wants to send you Bitcoin.

One-Time Address never shows the same address twice and thus helps to prevent address reuse. You should not reuse addresses because it abuses the privacy and security of the participants of the transactions as well as future holders of their value.

Note #1: If the same visitor requests an address multiple times within a short period, he might see an address generated for him last time instead of a new one. This prevents wallets from bloating with repetitive requests.

Note #2: It is not intended for use in e-commerce or when it's needed to trigger execution of other processes after the payment is done. One-Time Address provides the instant access to a one-time Bitcoin address and nothing else. If you need more features, then consider using [BTCPay Server](https://github.com/btcpayserver/btcpayserver).

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

## Address Cache

One-Time Address keeps generated addresses and visitor IPs in the cache for up to N minutes (5 by default). If the same visitor refreshes the same wallet page within the interval, an address will be returned from the cache instead of generating a new one. This prevents wallets from being bloated with repetitive or automated requests. The interval can be edited with ```addrIPCacheMins``` in ```wallets.js``` file. Set ```0``` to disable the cache.

## Gap Limit Issue

Since One-Time Address provides every visitor with a new Bitcoin address, you might find yourself in a situation where more than 20 addresses in a row will have zero transactions. This will cause an [Account Discovery](https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki#account-discovery) issue when received funds don't appear in your Bitcoin wallet. Available workarounds:

### Using HD Wallet Scanner

[HD Wallet Scanner](https://github.com/alexk111/HD-Wallet-Scanner) finds all used addresses in your Bitcoin HD wallets bypassing gap limits. Then you might use Bitcoin Core + HWI (if you use a hardware wallet) to import child keys derived with their indexes.

### Using Electrum wallet

[Electrum wallet](https://www.electrum.org/) allows increasing Gap Limit. Open the ```Console tab``` and use the following commands at prompt: ```wallet.change_gap_limit(200)``` and press enter at your keyboard, ```wallet.storage.write()``` and press enter again. Then restart the client. To view/verify the current gap limit, type the following in the console: ```wallet.gap_limit```.

### Using Wasabi wallet

If you are showing bech32 addresses, then you might use [Wasabi wallet](https://wasabiwallet.io/). It also allows increasing Gap Limit. The wallet file can be modified from File/Open/Wallet Folder. To change the gap limit, update ```MinGapLimit``` json property in the wallet file.

## Backers 💝

[![Backer](https://mynode.alexkaul.com/gh-backer/top/0/avatar/60)](https://mynode.alexkaul.com/gh-backer/top/0/profile)
[![Backer](https://mynode.alexkaul.com/gh-backer/top/1/avatar/60)](https://mynode.alexkaul.com/gh-backer/top/1/profile)
[![Backer](https://mynode.alexkaul.com/gh-backer/top/2/avatar/60)](https://mynode.alexkaul.com/gh-backer/top/2/profile)
[![Backer](https://mynode.alexkaul.com/gh-backer/top/3/avatar/60)](https://mynode.alexkaul.com/gh-backer/top/3/profile)
[![Backer](https://mynode.alexkaul.com/gh-backer/top/4/avatar/60)](https://mynode.alexkaul.com/gh-backer/top/4/profile)
[![Backer](https://mynode.alexkaul.com/gh-backer/top/5/avatar/60)](https://mynode.alexkaul.com/gh-backer/top/5/profile)
[![Backer](https://mynode.alexkaul.com/gh-backer/top/6/avatar/60)](https://mynode.alexkaul.com/gh-backer/top/6/profile)
[![Backer](https://mynode.alexkaul.com/gh-backer/top/7/avatar/60)](https://mynode.alexkaul.com/gh-backer/top/7/profile)
[![Backer](https://mynode.alexkaul.com/gh-backer/top/8/avatar/60)](https://mynode.alexkaul.com/gh-backer/top/8/profile)
[![Backer](https://mynode.alexkaul.com/gh-backer/top/9/avatar/60)](https://mynode.alexkaul.com/gh-backer/top/9/profile)

Thank you for your support! 🙌 [[Donate](https://mynode.alexkaul.com/gh-donate)]

## License

MIT © Alex Kaul
