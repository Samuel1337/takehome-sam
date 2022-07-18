const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const axios = require("axios");

app.use( express.json() );

// const clusters = require("./routes/api/clusters");
// app.use("/api/cluster", clusters);

app.get('/devnet', (req, res) => {
    console.log("req", req);
    axios.post(
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


app.listen(
    PORT,
    () => console.log(`App live on https://localhost:${PORT}`)
)


