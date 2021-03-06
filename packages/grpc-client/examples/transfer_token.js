/* eslint no-console:"off" */

/**
 * This script demonstrates how to transfer tokens between 2 accounts
 *
 * Run script with: `DEBUG=@arcblock/grpc-client node examples/transfer_token.js`
 */

const moment = require('moment');
const Mcrypto = require('@arcblock/mcrypto');
const GRpcClient = require('@arcblock/grpc-client');
const { fromRandom, WalletType } = require('@arcblock/forge-wallet');
const { fromTokenToUnit } = require('@arcblock/forge-util');

const endpoint = process.env.FORGE_API_HOST || 'http://127.0.0.1:8210'; // testnet
const client = new GRpcClient({ endpoint: 'tcp://127.0.0.1:28210' });
const sleep = timeout => new Promise(resolve => setTimeout(resolve, timeout));

const type = WalletType({
  role: Mcrypto.types.RoleType.ROLE_ACCOUNT,
  pk: Mcrypto.types.KeyType.ED25519,
  hash: Mcrypto.types.HashType.SHA3,
});

(async () => {
  try {
    const sender = fromRandom(type);
    const receiver = fromRandom(type);
    console.log({
      sender: sender.toJSON(),
      receiver: receiver.toJSON(),
    });

    // 1. Declare sender
    let res = await client.sendDeclareTx({
      tx: {
        itx: {
          moniker: 'sender',
        },
      },
      wallet: sender,
    });
    console.log('sender declare tx', `${endpoint}/node/explorer/txs/${res}`);
    console.log('sender account', `${endpoint}/node/explorer/accounts/${sender.toAddress()}`);

    // 2. Declare receiver
    res = await client.sendDeclareTx({
      tx: {
        itx: {
          moniker: 'receiver',
        },
      },
      wallet: receiver,
    });
    console.log('receiver declare tx', `${endpoint}/node/explorer/txs/${res}`);
    console.log('receiver account', `${endpoint}/node/explorer/accounts/${receiver.toAddress()}`);

    await sleep(3000);

    // 3. Poke for sender
    res = await client.sendPokeTx({
      tx: {
        nonce: 0,
        itx: {
          date: moment(new Date().toISOString())
            .utc()
            .format('YYYY-MM-DD'),
          address: 'zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',
        },
      },
      wallet: sender,
    });
    console.log('sender poke tx', `${endpoint}/node/explorer/txs/${res}`);

    // 4. Poke for receiver
    res = await client.sendPokeTx({
      tx: {
        nonce: 0,
        itx: {
          date: moment(new Date().toISOString())
            .utc()
            .format('YYYY-MM-DD'),
          address: 'zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',
        },
      },
      wallet: receiver,
    });
    console.log('receiver poke tx', `${endpoint}/node/explorer/txs/${res}`);

    await sleep(3000);

    // 5. Transfer token
    res = await client.sendTransferTx({
      tx: {
        itx: {
          to: receiver.toAddress(),
          value: {
            value: Buffer.from(fromTokenToUnit(10).toBuffer()),
          },
        },
      },
      wallet: sender,
    });
    console.log('view transfer tx', `${endpoint}/node/explorer/txs/${res}`);
  } catch (err) {
    console.error(err);
    console.log(JSON.stringify(err.errors));
  }
})();
