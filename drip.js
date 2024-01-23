// const Web3 = require('web3');
const { Web3 } = require('web3');

const web3 = new Web3('https://artio.rpc.berachain.com/'); // Replace with your Ethereum node URL

const contractABI = [
    {
        "inputs": [
            {
                "internalType": "contract EIP20NonStandardInterface",
                "name": "token",
                "type": "address"
            }
        ],
        "name": "drip",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];
const contractAddress = '0xd9CD8f5d09261c234476cb76A296ff6138EfcAD6'; // Fauceteer contract address

const contract = new web3.eth.Contract(contractABI, contractAddress);

// Assuming 'drip' is a transaction method
contract.methods.drip().send({ from: '0x95aBe774843c98592c48410cD41429446F9C40b5' })
    .then(receipt => console.log(receipt))
    .catch(err => console.error(err));


