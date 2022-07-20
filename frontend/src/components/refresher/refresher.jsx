import "./refresher.scss";

function Refresher(props) {

    function status(cluster) {
        let currentCluser;

        if (cluster === "Devnet") {
            currentCluser = props.devnet;
        } else if (cluster === "Mainnet") {
            currentCluser = props.mainnet;
        } else {
            currentCluser = props.testnet;
        }

        if (currentCluser.length === 0) {
            return <div className="loading-status">{cluster}</div>
        
        } else if (props.errors.length > 1 && props.errors.join().include(cluster)) {
            return <div className="failed-status">{cluster}</div>
        
        } else {
            return <div className="ready-status">{cluster}</div>
        }
    }

    function refresh() {
        props.clearErrors();
        if (props.devnet.length === 0) { props.getTopDevnetAccounts() }
        if (props.mainnet.length === 0) { props.getTopMainnetAccounts() }
        if (props.testnet.length === 0) { props.getTopTestnetAccounts() }
    }

    return (
        <div className="refresher-section">
            <div className="refresher-container">
                <div className="refresher-devnet">
                    {status("Devnet")}
                </div>
                <div className="refresher-mainnet">
                    {status("Mainnet")}
                </div>
                <div className="refresher-testnet">
                    {status("Testnet")}
                </div>

                <button onClick={refresh}>Refresh</button>
            </div>
        </div>
    )

}

export default Refresher;