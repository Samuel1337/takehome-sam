import React from 'react';
import "./solanaList.scss";

class SolanaList extends React.Component {
    constructor(props) {
        super(props);
        this.createList = this.createList.bind(this);
        this.formatCurrency = this.formatCurrency.bind(this);
        this.setCluster = this.setCluster.bind(this);
        this.setAmount = this.setAmount.bind(this);
        this.setHeader = this.setHeader.bind(this);
        this.createList(props.config.list);
    }

    createList() {
        let accounts = this.props.config.list;

        if (accounts.length === 0) {
            return (
                <tr className='empty-item'>
                    <td className='address'>Loading...</td>
                    <td className='amount'></td>
                    <td className='item-cluster'></td>
                </tr>
            )
        }
        let newList = accounts.map((account, i) => {            
            return (
                <tr key={`acc-${i}`} className='list-item'>
                    <td className='address'>{account.address}</td>
                    <td className='amount'>{this.setAmount(account)}</td>
                    {this.setCluster(account.cluster)}
                </tr>
            )
        });

        return newList; 
    }

    setAmount(account) {
        if (this.props.config.usd) {
            return this.formatCurrency(account.USD)
        } else {
            return this.formatCurrency(account.SOL)
        }
    }

    setCluster(cluster) {
        if (cluster === "devnet") {
            return <td className='item-cluster devnet'>{cluster}</td>
        } else if (cluster === "mainnet") {
            return <td className='item-cluster mainnet'>{cluster}</td>
        } else {
            return <td className='item-cluster testnet'>{cluster}</td>
        }
    }

    setHeader() {
        if (this.props.config.usd) {
            return "Balance (USD)"
        } else {
            return "Balance (SOL)"
        }
    }

    formatCurrency(number) {
        let array = number.toString().split('.');
        let integer = array[0];
        let decimal = array[1] || '00';

        for (let i = integer.length - 3; i > 0; i -= 3) {
            if (i > 0) {
                let left = integer.slice(0, i);
              	let right = integer.slice(i);
                integer = left + ',' + right;
            }
        }
		number = integer + '.' + decimal.slice(0, 2);

        if (this.props.config.usd) {
            return `$ ${number}`
        } else {
            return `${number.slice(0, -1)} ◎`           
        }
    }

    render() {

        return (
            <div className="solana-list">
                <div className="list-container">
                    <div className='list-title'>
                        <h1>Top Solana Accounts</h1>
                    </div>
                    <table className='list'>
                        <thead>
                            <tr className='list-header'>
                                <th className='address'>Address</th>
                                <th>{this.setHeader()}</th>
                                <th>Cluster</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.createList()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default SolanaList;