import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'

function App() {

  const [data, setData] = useState({});

  useEffect(() => {
    fetch('http://localhost:8080/DCI').then(res => {
      return res;
    }).then( res => {
       return res.json();
    }).then((res) => {
      setData(res);
    } )
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://digitalcareerinstitute.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          { data?.msg }
        </a>
      </header>
    </div>
  );
}

export default App;
