import { PrivateKey, Address, PublicKey, Networks } from 'bitcore-lib';
var Mnemonic = require('bitcore-mnemonic');

const handler = async (req: any, res: any) => {
  try {
    const { query, socket } = req;
    const { network } = query;

    if (!network || !(network in Networks)) {
      throw new Error('Invalid network parameter');
    }

    //@ts-expect-error
    const privateKey = new PrivateKey(Networks[network]);
    //@ts-expect-error
    const publicKey = new PublicKey(privateKey);
    //@ts-expect-error
    const address = privateKey.toAddress(Networks[network]);

    return res.status(200).json({
      nmemonic: null,
      privateKey: privateKey.toString(),
      publicKey: publicKey.toString(),
      address: address.toString(),
      type: "bitcoin",
      network: network 
    });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

export default handler;