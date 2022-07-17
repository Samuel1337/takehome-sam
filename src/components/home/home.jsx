import React from "react";
import SolanaList from "../solanaList/solanaList";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            devnet: true,
            mainnet: true,
            testnet: true
        }
    }

    componentDidMount() {
        this.props.getTopDevnetAccounts()
        console.log(this.props)
    }

    render() {
        let { devnet, mainnet, testnet } = this.props;
        // let allAccounts = devnet.concat(mainnet).concat(testnet);

        // if (allAccounts.length < 1) { return <h1>Loading...</h1> }

        return (
            <div className="home-page">
                <div className="home-container">
                    <div className="list-container">
                        <SolanaList
                            getTopDevnetAccounts={this.props.getTopDevnetAccounts}
                            devnet={devnet}
                            mainnet={mainnet}
                            testnet={testnet}
                        />
                    </div>
                    <div className="chart-container">
                        {/* <SolanaChart /> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;