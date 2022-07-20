import React from "react";
import RefresherContainer from "../refresher/refresherContainer";
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
        this.makeList = this.makeList.bind(this);
        this.formatMoney = this.formatMoney.bind(this);
        this.dataForChart = this.dataForChart.bind(this);
        this.reverseMergeSort = this.reverseMergeSort.bind(this);
        this.merge = this.merge.bind(this);
    }

    componentDidMount() {
        this.props.getSOLtoUSD();
        this.props.getTopDevnetAccounts();
        this.props.getTopMainnetAccounts();
        this.props.getTopTestnetAccounts();
    }

    makeList() {
        let { devnet, mainnet, testnet } = this.props;
        
        let list = [];

        if (this.state.devnet)  { list.concat(devnet); }
        if (this.state.mainnet) { list.concat(mainnet); }
        if (this.state.testnet) { list.concat(testnet); }

        list = this.reverseMergeSort(list);
        list = this.formatMoney(list);
    }

    formatMoney(list) {
        
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

        return (
            <div className="home-page">
                <div className="home-container">
                        <RefresherContainer />
                        <SolanaList
                            devnet={devnet}
                            mainnet={mainnet}
                            testnet={testnet}
                        />
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