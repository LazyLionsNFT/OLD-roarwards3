import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import RoutesTree from './components/RoutesTree';
import TopSection from './components/TopSection';
import Footer from './components/Footer';

function App() {

  return (
    <div className="App">
      <header className="App-header">
          {/* <NavBar/> */}
          <TopSection/>
        <RoutesTree/>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
