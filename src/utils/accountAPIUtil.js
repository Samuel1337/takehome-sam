import axios from "axios";

export const fetchTopDevnetAccounts = () => {
    debugger
    return (
    axios.get("/api/cluster/devnet")
)}
        // "https://api.devnet.solana.com/",
        // {
        //     "method":"getLargestAccounts",
        //     "jsonrpc":"2.0",
        //     "params":[{"commitment":"finalized"}],
        //     "id":"1"
        // }
    // )

export const fetchTopMainnetAccounts = () => (
    axios.post(
        "https://api.mainnet-beta.solana.com/",
        {
            "method":"getLargestAccounts",
            "jsonrpc":"2.0",
            "params":[{"commitment":"finalized"}],
            "id":"2"
        }
    )
)

export const fetchTopTestnetAccounts = () => (
    axios.post(
        "https://api.testnet.solana.com/",
        {
            "method":"getLargestAccounts",
            "jsonrpc":"2.0",
            "params":[{"commitment":"finalized"}],
            "id":"3"
        }
    )
)
