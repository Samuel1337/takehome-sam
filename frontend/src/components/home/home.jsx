import React from "react";
import SolanaChart from "../solanaChart/solanaChart";
import SolanaList from "../solanaList/solanaList";
import "./home.scss";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            devnet: true,
            mainnet: true,
            testnet: true,
            usd: false
        }
        this.dataForChart = this.dataForChart.bind(this);
        this.reverseMergeSort = this.reverseMergeSort.bind(this);
        this.merge = this.merge.bind(this);
    }

    componentDidMount() {
        this.props.getTopDevnetAccounts()
        console.log(this.props)
    }

    dataForChart() {
        let { devnet, mainnet, testnet } = this.props;

        let accountsArray = [];
        let lamportsArray = [];

        if (this.state.devnet) {
            devnet.forEach(account => {
                accountsArray.push(account);
            });
        }

        if (this.state.mainnet) {
            mainnet.forEach(account => {
                accountsArray.push(account);
            });
        }

        if (this.state.testnet) {
            testnet.forEach(account => {
                accountsArray.push(account);
            });
        }


        const config = {
            type: 'bar',
            data: {
                labels: accountsArray, //accounts 
                datasets: [{
                    label: 'Total SOL', // SOL/USD
                    data: lamportsArray, //lamports
                    backgroundColor: '#859e8f',
                    borderColor: '#abd0a3',
                    borderWidth: 1
                }]
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                scales: {
                    yAxes: {
                        beginAtZero: true
                    }
                }
            }
        };
    }

    reverseMergeSort(accounts) {
        const half = accounts.length / 2;
        
        if(accounts.length < 2){
          return accounts;
        }
        
        const left = accounts.splice(0, half);
        return this.merge(
            this.reverseMergeSort(left),
            this.reverseMergeSort(accounts)
        );
      }
    
    merge(left, right) {
        let arr = [];
        while (left.length && right.length) {
            if (left[0].lamports > right[0].lamports) {
                arr.push(left.shift()); 
            } else {
                arr.push(right.shift());
            }
        }
        return [ ...arr, ...left, ...right ];
    }

    render() {
        let { devnet, mainnet, testnet } = this.props;
        // let allAccounts = devnet.concat(mainnet).concat(testnet);

        // if (allAccounts.length < 1) { return <h1>Loading...</h1> }

        return (
            <div className="home-page">
                <div className="home-container">
                        <SolanaList
                            getTopDevnetAccounts={this.props.getTopDevnetAccounts}
                            devnet={devnet}
                            mainnet={mainnet}
                            testnet={testnet}
                        />
                        {/* <div className="options-container">
                            <div className='checkboxes'>
                                <input
                                    type='checkbox'
                                    className='checkbox'
                                />
                                    <p>Devnet</p>
                                <input
                                    type='checkbox'
                                    className='checkbox'
                                />
                                    <p>Mainnet</p>
                                <input
                                    type='checkbox'
                                    className='checkbox'
                                />
                                    <p>Testnet</p>
                                <input
                                    type='checkbox'
                                    className='checkbox'
                                />
                                    <p>All</p>
                            </div>
                        </div> */}
                        <SolanaChart
                            devnet={devnet}
                            mainnet={mainnet}
                            testnet={testnet}
                        />
                </div>
            </div>
        )
    }
}

export default Home;