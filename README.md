# Sam's Hello Moon Exercise 

This an application that fetches the largest Solana accounts from three different clusters (devnet, mainnet and testnet) and displays it in a chart and a table both in SOL and USD.

## Techonologies used

- Express.js
- React / Redux
- JavaScript / Axios
- HTML5 and SCSS

## Code Snippet

Here's a little preview of the code:

```javaScript
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
        .then(payload => {
                res.status(200)
                .send(itemize(payload, "devnet"))
        })
        .catch(() => {
                res.status(404)
                .send({nodevnet: "Can't connect with the Devnet cluster at the moment."})
        })
    })
```

## Features

- ### Chart

![png](https://github.com/Samuel1337/takehome-sam/blob/ba58bd1a30668d08abaedf0dac3c641298acedbd/images/home.png)

The homepage greets you with a chart of the largest Solana accounts based on data that is fetched from the Solana clusters. As more information comes in the chart automatically updates its content in real time.

- ### Table

![png](https://github.com/Samuel1337/takehome-sam/blob/ba58bd1a30668d08abaedf0dac3c641298acedbd/images/table_sol.png)
![png](https://github.com/Samuel1337/takehome-sam/blob/ba58bd1a30668d08abaedf0dac3c641298acedbd/images/table_usd.png)

You can see the largest accounts on the Solana network tagged by cluster of origin, switching between SOL and USD figures.

![png](https://github.com/Samuel1337/takehome-sam/blob/ba58bd1a30668d08abaedf0dac3c641298acedbd/images/currency.png)

- ### Connection Refresh

![png](https://github.com/Samuel1337/takehome-sam/blob/ba58bd1a30668d08abaedf0dac3c641298acedbd/images/refresher.png)

Fetching data from the Solana API is oftentimes slow and unfruitful, so I implemented a feature that allows you to try again without having to refresh the website.

## To be implemented

- ### Toggle view

The user will be able to select whether to see data from devnet, mainnet, testnet or a combination of those.

- ### Production deployment

This application will be available on Heroku ready to be used by the public.