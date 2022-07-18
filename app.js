const express = require('express');
const app = express();
const clusters = require("./routes/api/clusters");
const PORT = process.env.PORT || 4000;
debugger
app.use( express.json() );
// app.use("/api/cluster", clusters);

app.get('/devnet', (req, res) => {
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


app.listen(
    PORT,
    () => console.log(`App live on http:localhost:${PORT}`)
)


