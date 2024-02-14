
const handler = async (req: any, res: any) => {
  try {
    const { query } = req;
    const {privateKey, senderAddress, amount, network, recipientAddress } = query

    if(!privateKey || !amount || !network || !recipientAddress || !senderAddress ){
      throw new Error('Invalid network parameter');
    }

    if(network === "testnet"){
      const apiUrl = `https://blockstream.info/testnet/api/address/${senderAddress}/utxo`;
      
      fetch(apiUrl)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
            return response.json();
        })
        .then(data => {
          const utxos = data;
          
          if(utxos.length===0){
            throw new Error('Top up your address');
          }

          const previousTxids = utxos.map(utxo => utxo.txid);
          console.log('Previous Txids:', previousTxids);

          /*const transaction = new Transaction()
          .from({
            address: senderAddress,
            utxos: [{
              txId: previousTxids,
              outputIndex: 0,
              satoshis: 10000, 
              script: senderAddress.toScript()
            }],
            script: senderAddress.toScript()
          })
          .to(recipientAddress, 5000) 
          .change(senderAddress)
          .sign(privateKey); 
          */

          return res.status(200).json({});
        })
        .catch(error => {
          throw new Error(error.message);
        });
    }

    // throw new Error('Network response was not ok');
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

export default handler;