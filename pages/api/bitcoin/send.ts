import { Transaction, PrivateKey, Address } from 'bitcore-lib';
const fetch = require('node-fetch');

const handler = async (req: any, res: any) => {
  try {
    const { query } = req;
    const { privateKey, senderAddress, amount, network, recipientAddress } = query;

    if (!privateKey || !senderAddress || !amount || !network || !recipientAddress) {
      throw new Error('Missing required parameters');
    }

    if (network === 'testnet') {
      const apiUrl = `https://blockstream.info/testnet/api/address/${senderAddress}/utxo`;

      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Failed to fetch UTXOs');
      }

      const utxos = await response.json();
      if (utxos.length === 0) {
        throw new Error('No UTXOs found for senderAddress');
      }

      // const privateKeyObj = PrivateKey.fromString(privateKey);
      // const senderAddressObj = Address.fromString(senderAddress);

      const previousTxids = utxos.map(utxo => utxo.txid);

      const transaction = new Transaction()
        .from({
          address: senderAddress,
          utxos: [{
            txId: previousTxids[previousTxids.length - 1],
            outputIndex: 0,
            satoshis: 1000000000,
            script: senderAddress
          }],
          script: senderAddress
        })
        .to(Address.fromString(recipientAddress), 1000000) /
        .change(senderAddress)
        .sign(privateKey);

      console.log('Transaction:', transaction.serialize());

      return res.status(200).json({ success: true });
    } else {
      throw new Error('Invalid network');
    }
  } catch (error: any) {
    console.error('Error:', error);
    return res.status(500).json({ error: error.message });
  }
};

export default handler;