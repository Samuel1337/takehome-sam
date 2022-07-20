const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const axios = require("axios");
const headers = require('./config/keys');
const path = require("path");

app.use( express.json() );

app.get('/api/devnet', (req, res) => {
    axios.post(
        "https://api.devnet.solana.com/",
        {
            "method":"getLargestAccounts",
            "jsonrpc":"2.0",
            "params":[{"commitment":"finalized"}],
            "id":"1"
        }
    )
    .then(payload => res.status(200).send(itemize(payload, "devnet")))
    .catch(() => res.status(404).send({nodevnet: "Can't connect with the Devnet cluster at the moment."}))
})

app.get('/api/mainnet', (req, res) => {
    axios.post(
        "https://api.mainnet-beta.solana.com/",
        {
            "method":"getLargestAccounts",
            "jsonrpc":"2.0",
            "params":[{"commitment":"finalized"}],
            "id":"2"
        }
    )
    .then(payload => res.status(200).send(itemize(payload, "mainnet")))
    .catch(() => res.status(404).send({nodevnet: "Can't connect with the Mainnet cluster at the moment."}))
})
.catch(() => res.status(404).send({nodevnet: "Can't connect with the Mainnet cluster at the moment."}))

app.get('/api/testnet', (req, res) => {
    axios.post(
        "https://api.testnet.solana.com/",
        {
            "method":"getLargestAccounts",
            "jsonrpc":"2.0",
            "params":[{"commitment":"finalized"}],
            "id":"3"
        }
    )
    .then(payload => res.status(200).send(itemize(payload, "testnet")))
    .catch(() => res.status(404).send({nodevnet: "Can't connect with the Testnet cluster at the moment."}))
})

app.get('/api/solusd', (req, res) => {
    const data = {
        currency: "USD",
        code: "SOL",
        meta: true
    }
    axios.post("https://api.livecoinwatch.com/coins/single", data, {headers: headers})
    .then(payload => res.status(200).send(payload.data.rate.toString()))
    .catch(() => res.status(400).send({nousd: "Can't connect with the SOL/USD endpoint at the moment."}))
})


if (process.env.NODE_ENV === "production") {
    app.use(express.static("frontend/build"));
    app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "public", "index.html"));
   });
}

app.listen(
    PORT,
    () => console.log(`App live on https://localhost:${PORT}`)
)
    
const itemize = (response, cluster) => {
    let accounts = [];
    accounts = response.data.result.value;
    
    return accounts.map(account => {
        return ({
                address: account.address,
                lamports: account.lamports,
                SOL: 0,
                USD: 0,
                cluster: cluster
            })
    });   
}