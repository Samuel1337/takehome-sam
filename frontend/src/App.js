import './App.css';
import './reset.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import HomeContainer from './components/home/homeContainer';

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <Header />
        <HomeContainer />
        <Footer />
      </header>
    </div>
  );
}

export default App;
