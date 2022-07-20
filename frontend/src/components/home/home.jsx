import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import RefresherContainer from "../refresher/refresherContainer";
import SolanaChart from "../solanaChart/solanaChart";
import SolanaList from "../solanaList/solanaList";
import React from "react";
import "./home.scss";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            devnet: true,
            mainnet: true,
            testnet: true,
            config: {
                usd: false,
                list: [],
                chartConfig: {}
            }
        }
        this.makeList = this.makeList.bind(this);
        this.formatMoney = this.formatMoney.bind(this);
        this.dataForChart = this.dataForChart.bind(this);
        this.reverseMergeSort = this.reverseMergeSort.bind(this);
        this.merge = this.merge.bind(this);
    }

    componentDidMount() {
        this.props.getSOLtoUSD()
        this.props.getTopDevnetAccounts()
        .then(() => this.makeList())
        this.props.getTopMainnetAccounts()
        .then(() => this.makeList())
        this.props.getTopTestnetAccounts()
        .then(() => this.makeList())
    }

    componentDidUpdate(prevProps, prevState) {
        if (
            prevState.devnet !== this.state.devnet || 
            prevState.mainnet !== this.state.mainnet ||
            prevState.testnet !== this.state.testnet ||
            prevState.config.usd !== this.state.config.usd
        )
        {
            this.makeList();
        }
    }

    toggleUSD() {
        let usd = !this.config.usd;
        let config = {
            usd: usd,
            list: this.state.config.list,
            chartConfig: this.state.config.chartConfig,
        }
        this.setState({ config: config })
    }

    makeList() {
        console.log("makeList", this.props);
        let { devnet, mainnet, testnet } = this.props;
        
        let list = [];

        if (this.state.devnet)  { list = list.concat(devnet);  }
        if (this.state.mainnet) { list = list.concat(mainnet); }
        if (this.state.testnet) { list = list.concat(testnet); }
        console.log("state", this.state)
        console.log("list", list)

        if (list.length > 0) {
            list = this.reverseMergeSort(list);
            list = this.formatMoney(list);

            this.setState({ config: {
                list: list,
                chartConfig: this.dataForChart(list)
               }
            })
        }
    }

    formatMoney(list) {
        list.forEach(account => {
            account.lamports = (account.lamports / LAMPORTS_PER_SOL); // converts to SOL
        })
        if (this.state.config.usd) {
            list.forEach(account => {
                account.lamports = (account.lamports * this.props.currency) // converts to USD
            })
        } 
        return list;
    }

    dataForChart(list) {

        let addressArray = [];
        let lamportsArray = [];
        let backgroundColorArray = [];

        list.forEach(account => {
            addressArray.push(account.address);
            lamportsArray.push(account.lamports);
            
            if (account.cluster === "devnet") {
                backgroundColorArray.push("#fa62fc");
            } else if (account.cluster === "mainnet") {
                backgroundColorArray.push('#f6c343');
                
            } else {
                backgroundColorArray.push("#1dd79b");

            }
        })

        let currency = 'SOL'; 
        
        if (this.state.config.usd) {
            currency = 'USD';
        }

        const chartConfig = {
            type: 'bar',
            data: {
                labels: addressArray, //accounts 
                datasets: [{
                    label: `Largest Solana Accounts in ${currency}`, // SOL/USD
                    data: lamportsArray, //lamports
                    backgroundColor: backgroundColorArray,
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

        return chartConfig;
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
        return (
            <div className="home-page">
                <div className="home-container">
                        <RefresherContainer />
                        <SolanaList  config={this.state.config} />
                        <SolanaChart config={this.state.config} />
                </div>
            </div>
        )
    }
}

export default Home;