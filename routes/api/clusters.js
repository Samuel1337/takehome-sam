import axios from 'axios';
const router = express.Router();


router.route('/devnet').get((req, res) => {
    console.log("req", req);
    fetch(
        "https://api.devnet.solana.com/",
        {
            "method":"getLargestAccounts",
            "jsonrpc":"2.0",
            "params":[{"commitment":"finalized"}],
            "id":"1"
        }
    )
    .then(res => res.json())
    .then(payload => res.status(200).send(itemize(payload)))
    .catch(() => res.status(404).send({nocontent: "No content found."}))
})


router.get('/mainnet', (req, res) => {
    axios.post(
        "https://api.mainnet-beta.solana.com/",
        {
            "method":"getLargestAccounts",
            "jsonrpc":"2.0",
            "params":[{"commitment":"finalized"}],
            "id":"2"
        }
    )
})

router.get('/testnet', (req, res) => {
    axios.post(
        "https://api.testnet.solana.com/",
        {
            "method":"getLargestAccounts",
            "jsonrpc":"2.0",
            "params":[{"commitment":"finalized"}],
            "id":"3"
        }
    )
})

const itemize = (response, cluster) => {
    let accounts = [];
    accounts = response.data.result.value;
    
    return accounts.map((account, idx) => {
        return ({
                address: account.address,
                lamports: account.lamports,
                cluster: cluster,
                id: idx
            })
    });   
}