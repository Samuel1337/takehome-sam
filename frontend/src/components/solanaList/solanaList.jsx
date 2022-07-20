import {clusterApiUrl, Connection, PublicKey, Keypair, LAMPORTS_PER_SOL} from '@solana/web3.js';
import { useState } from 'react';
import RefresherContainer from '../refresher/refresherContainer';
import "./solanaList.scss";

window.Buffer = window.Buffer || require("buffer").Buffer;

function SolanaList(props) {

    const emptyState = 
        <tr className='empty-item'>
            <td className='address'>No cluster selected</td>
            <td className='amount'></td>
            <td className='item-cluster'></td>
        </tr>

    const [list, setList] = useState(emptyState);

    function getAccounts(e) {
        e.preventDefault();

    }
   
    function itemize(response) {
        if (!response) { return <li>Nothing to show</li>}
        
        let accounts = [];
        accounts = response.data.result.value;
        
        // let accounts = response;

        let newList = accounts.map((account, i) => {            
            return (
                <tr key={`acc-${i}`} className='list-item'>
                    <td className='address'>{account.address}</td>
                    <td className='amount'>◎{(account.lamports / LAMPORTS_PER_SOL).toFixed(1)} SOL</td>
                    <td className='item-cluster'>devnet</td>
                </tr>
            )
        });

        setList(newList); 
    }

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
                            <th>Amount</th>
                            <th>Cluster</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default SolanaList;


    // const devnet = new Connection(clusterApiUrl('devnet'), 'confirmed');
    // response = {
    //     "jsonrpc":"2.0",
    //     "result":{
    //         "context":
    //             {"apiVersion":"1.10.25","slot":148251662},
    //             "value":[
    //                 {"address":"mvines9iiHiQTysrwkJjGf2gb9Ex9jXJX8ns3qwf2kN","lamports":197841527831477321},
    //                 {"address":"APnSR52EC1eH676m7qTBHUJ1nrGpHYpV7XKPxgRDD8gX","lamports":164011035098290000},
    //                 {"address":"13LeFbG6m2EP1fqCj9k66fcXsoTHMMtgr7c78AivUrYD","lamports":153333649481168236},
    //                 {"address":"GXCgKcM3i1w1cGwxvXhQBpikDZoAVMvwSe2nHCjUrPnK","lamports":97848774994686086},
    //                 {"address":"GK2zqSsXLA2rwVZk347RYhh6jJpRsCA69FjLW93ZGi3B","lamports":57499999036109120},
    //                 {"address":"8HVqyX9jebh31Q9Hp8t5sMVJs665979ZeEr3eCfzitUe","lamports":30301039071168236},
    //                 {"address":"9B5XszUGdMaxCZ7uSQhPzdks5ZQSmWxrmzCSvtJ6Ns6g","lamports":27922483307558237},
    //                 {"address":"5CSTrn37yJEpwhVkEuHMrzY4JuFkDjwSgTQNDXzNHKmk","lamports":25000001000000000},
    //                 {"address":"GaQFqkCWNUz1wvVasZviu4Qy7Zsc16op1G9UuqXicm61","lamports":25000000000000000},
    //                 {"address":"6v2RcyyqG3NTusX4PEQESHB8t7SVM4Nw2bMvkqBtkA3t","lamports":25000000000000000},
    //                 {"address":"5eByrnghYEpMLrGagSHi7DLoHVhtPGhBoeDRFoSr3hpp","lamports":25000000000000000},
    //                 {"address":"HbZ5FfmKWNHC7uwk6TF1hVi6TCs7dtYfdjEcuPGgzFAg","lamports":14999999036109120},
    //                 {"address":"35akt5uJn73ZN9FkGgBKpRwbW5scoqV7M1N59cwb4TKV","lamports":11109338020858915},
    //                 {"address":"ETSKPSzESbVdmtUn67LA2p9J1gPCSEgYvmJS9pNNWQqR","lamports":10149498488487857},
    //                 {"address":"H7sMjTQfvJRti79z3wM5ZxrDZ8FdX9maaWqwewLYPPLL","lamports":10000000000000000},
    //                 {"address":"FqNVFwZBxLvYi53CmgGvhequSQ38sLYTEnAyXFHo9HDw","lamports":10000000000000000},
    //                 {"address":"36y1bqYP5Lp1uGCdTyAD5pxm29K5ZHipMCpzg4Q8WACx","lamports":10000000000000000},
    //                 {"address":"13QsXgjy53n2z4JzAdz7tUP4JSkTfrr4xuoeL4XgVFNG","lamports":10000000000000000},
    //                 {"address":"EkDnqBwNMa2NsXCCQZJTEoGeLsrgWscRJqsWnMwJTmH4","lamports":9013981878559569},
    //                 {"address":"somzFqLA6JhUW2HuiaJd6Ps7D5JEN9LkRDxbaPzzifT","lamports":8000004000000000}
    //             ]
    //     },
    //     "id":"8b4e9b73-faff-4963-9fa3-93d64f1653ea"
    // }

    
        // let cluster = [
        //     {"address":"mvines9iiHiQTysrwkJjGf2gb9Ex9jXJX8ns3qwf2kN","lamports":197841527831477321, "cluster": "devnet", "id":1},
        //     {"address":"APnSR52EC1eH676m7qTBHUJ1nrGpHYpV7XKPxgRDD8gX","lamports":164011035098290000, "cluster": "devnet", "id":2},
        //     {"address":"13LeFbG6m2EP1fqCj9k66fcXsoTHMMtgr7c78AivUrYD","lamports":153333649481168236, "cluster": "devnet", "id":3},
        //     {"address":"GXCgKcM3i1w1cGwxvXhQBpikDZoAVMvwSe2nHCjUrPnK","lamports":97848774994686086, "cluster": "devnet", "id":4},
        //     {"address":"GK2zqSsXLA2rwVZk347RYhh6jJpRsCA69FjLW93ZGi3B","lamports":57499999036109120, "cluster": "devnet", "id":5},
        //     {"address":"8HVqyX9jebh31Q9Hp8t5sMVJs665979ZeEr3eCfzitUe","lamports":30301039071168236, "cluster": "devnet", "id":6},
        //     {"address":"9B5XszUGdMaxCZ7uSQhPzdks5ZQSmWxrmzCSvtJ6Ns6g","lamports":27922483307558237, "cluster": "devnet", "id":7},
        //     {"address":"5CSTrn37yJEpwhVkEuHMrzY4JuFkDjwSgTQNDXzNHKmk","lamports":25000001000000000, "cluster": "devnet", "id":8},
        //     {"address":"GaQFqkCWNUz1wvVasZviu4Qy7Zsc16op1G9UuqXicm61","lamports":25000000000000000, "cluster": "devnet", "id":9},
        //     {"address":"6v2RcyyqG3NTusX4PEQESHB8t7SVM4Nw2bMvkqBtkA3t","lamports":25000000000000000, "cluster": "devnet", "id":10},
        //     {"address":"5eByrnghYEpMLrGagSHi7DLoHVhtPGhBoeDRFoSr3hpp","lamports":25000000000000000, "cluster": "devnet", "id":11},
        //     {"address":"HbZ5FfmKWNHC7uwk6TF1hVi6TCs7dtYfdjEcuPGgzFAg","lamports":14999999036109120, "cluster": "devnet", "id":12},
        //     {"address":"35akt5uJn73ZN9FkGgBKpRwbW5scoqV7M1N59cwb4TKV","lamports":11109338020858915, "cluster": "devnet", "id":13},
        //     {"address":"ETSKPSzESbVdmtUn67LA2p9J1gPCSEgYvmJS9pNNWQqR","lamports":10149498488487857, "cluster": "devnet", "id":14},
        //     {"address":"H7sMjTQfvJRti79z3wM5ZxrDZ8FdX9maaWqwewLYPPLL","lamports":10000000000000000, "cluster": "devnet", "id":15},
        //     {"address":"FqNVFwZBxLvYi53CmgGvhequSQ38sLYTEnAyXFHo9HDw","lamports":10000000000000000, "cluster": "devnet", "id":16},
        //     {"address":"36y1bqYP5Lp1uGCdTyAD5pxm29K5ZHipMCpzg4Q8WACx","lamports":10000000000000000, "cluster": "devnet", "id":17},
        //     {"address":"13QsXgjy53n2z4JzAdz7tUP4JSkTfrr4xuoeL4XgVFNG","lamports":10000000000000000, "cluster": "devnet", "id":18},
        //     {"address":"EkDnqBwNMa2NsXCCQZJTEoGeLsrgWscRJqsWnMwJTmH4","lamports":9013981878559569, "cluster": "devnet", "id":19},
        //     {"address":"somzFqLA6JhUW2HuiaJd6Ps7D5JEN9LkRDxbaPzzifT","lamports":8000004000000000, "cluster": "devnet", "id":20}
        // ]
        // itemize(cluster);
