import RefresherContainer from "../refresher/refresherContainer";
import SolanaChart from "../solanaChart/solanaChart";
import SolanaList from "../solanaList/solanaList";
import React from "react";
import "./home.scss";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

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
        this.display = this.display.bind(this);
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

    display() {
            return (
                <div className="home-container">
                    <RefresherContainer />
                    <SolanaChart config={this.state.config} />
                    <SolanaList  config={this.state.config} />
                </div>
            )
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
        console.log("MAKE LIST!")
        let { devnet, mainnet, testnet } = this.props;
        
        let list = [];

        if (this.state.devnet)  { list = list.concat(devnet);  }
        if (this.state.mainnet) { list = list.concat(mainnet); }
        if (this.state.testnet) { list = list.concat(testnet); }

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
        console.log("list", list);
        list.forEach(account => {
            if (account.SOL === 0) {
                account.SOL = (account.lamports / LAMPORTS_PER_SOL); // converts to SOL
            }
            if (account.USD === 0) {
                account.USD = (account.SOL * this.props.currency) // converts to USD
            }
        })
        return list;
    }  

    dataForChart(list) {

        let addressArray = [];
        let lamportsArray = [];
        let backgroundColorArray = [];

        list.forEach(account => {
            addressArray.push(account.address);
            
            if (this.state.config.usd) {
                lamportsArray.push(account.USD);
            } else {
                lamportsArray.push(account.SOL);
            }

            if (account.cluster === "devnet") {
                backgroundColorArray.push("#1dd79b"); // purple
            } else if (account.cluster === "mainnet") {
                backgroundColorArray.push('#f6c343'); // yellow
            } else {
                backgroundColorArray.push("#b45be1"); // green
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
                    label: `${currency}`, // SOL/USD
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
                    },
                    xAxes: {
                        display: false
                    }
                },
                plugins: {
                    legend: {
                        labels: {}
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
                {this.display()}
            </div>
        )
    }
}

export default Home;