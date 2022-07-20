import "./refresher.scss";
import { FiRefreshCcw } from "react-icons/fi";

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
            return <div className={`${cluster}-ready-status`}>{cluster}</div>
        }
    }

    function refresh() {
        props.clearErrors();
        if (props.devnet.length === 0) { props.getTopDevnetAccounts() }
        if (props.mainnet.length === 0) { props.getTopMainnetAccounts() }
        if (props.testnet.length === 0) { props.getTopTestnetAccounts() }

        let button = document.getElementById("refresh-button")
        button.classList.add("rotate");
        setTimeout(() => {
            button.classList.remove("rotate");
        }, 2000);
    }

    return (
        <div className="refresher-section">
            <h1>Largest Solana Accounts</h1>
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

                <a id="refresh-button" onClick={refresh}><FiRefreshCcw /></a>
            </div>
        </div>
    )

}

export default Refresher;