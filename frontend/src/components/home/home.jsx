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
            testnet: true
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
        let data = {
            labels: [], //accounts 
            datasets: [{
                label: 'Total SOL',
                data: [], //lamports
                backgroundColor: [],
                borderColor: [],
                borderWidth: 1
            }]
        }
        
        let options = {
            maintainAspectRatio: false,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }

        let accountsArray = [];
        let lamportsArray = [];

        if (this.state.devnet) {
            devnet.forEach(account => {
                accountsArray.push(account.address);
                lamportsArray.push(account.lamports);
            });
        }

        if (this.state.mainnet) {
            mainnet.forEach(account => {
                accountsArray.push(account.address);
                lamportsArray.push(account.lamports);
            });
        }

        if (this.state.testnet) {
            testnet.forEach(account => {
                accountsArray.push(account.address);
                lamportsArray.push(account.lamports);
            });
        }

        data.labels = accountsArray;
        data.datasets.data = lamportsArray;    
    }

    reverseMergeSort(accounts) {
        const half = accounts.length / 2;
        
        if(accounts.length < 2){
          return accounts;
        }
        
        const left = accounts.splice(0, half);
        return this.merge(mergeSort(left),mergeSort(accounts));
      }
    
    merge(left, right) {
        let arr = [];
        while (left.length && right.length) {
            if (left[0] > right[0]) {
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