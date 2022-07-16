import { getTopAccounts, getTopDevnetAccounts, getTopMainnetAccounts, getTopTestnetAccounts } from './actions/accountsActions';
import './App.css';
import SolanaListContainer from './components/solanaListContainer';

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <SolanaListContainer />
      </header>
    </div>
  );
}

export default App;
