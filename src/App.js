import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';

// import "@fontsource/barlow-condensed";
import "@fontsource/barlow";
import RoutesTree from './components/RoutesTree';
import TopSection from './components/TopSection';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import MyCollection from './components/MyCollection';

function App() {

  const [query, setQuery] = useState({});
  const [roarPoints, setRoarPoints] = useState();

  return (
    <div className="App">
      <header className="App-header">
          {/* <NavBar/> */}
          <TopSection query={query} roarPoints={roarPoints}/>
          <Gallery onQuery={setQuery}/>
          <MyCollection onQuery={setQuery} onQueryPoints={setRoarPoints}/>
        <RoutesTree/>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
