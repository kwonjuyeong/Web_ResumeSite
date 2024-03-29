import './App.css';
import React from 'react'
import Header from './Components/Header/Header'
import Home from './pages/Home/Home'

function App() {
  return (
    <div className="App">
      <header className="App-header">
         <Header/>
      </header>
      <main>
        <Home/>
      </main>
    </div>
  );
}

export default App;