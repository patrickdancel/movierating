import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Add from './components/Add';
import Table from './components/Table';
import Details from './components/Details';
import Edit from './Edit';
import {Router, navigate} from '@reach/router'

function App() {
  return (
    <div className="App">
     <Header />

     <Router>
       <Add path="/new" />
       <Table path="/dashboard" />
       <Details path="/details/:id" />
       <Edit path="/edit/:id" />
     </Router>
    </div>
  );
}

export default App;
