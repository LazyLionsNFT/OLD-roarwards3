import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import "@fontsource/barlow-condensed";
import "@fontsource/barlow";
import RoutesTree from './components/RoutesTree';
import TopSection from './components/TopSection';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import MyCollection from './components/MyCollection';

function App() {

  const [query, setQuery] = useState({});

  return (
    <div className="App">
      <header className="App-header">
          {/* <NavBar/> */}
          <TopSection query={query}/>
          <Gallery onQuery={setQuery}/>
          <MyCollection/>
        <RoutesTree/>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
