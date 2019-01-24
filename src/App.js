import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TopBar from './TopBar.js';
import CompleteTable from './CompleteTable.js';
import SampleTable from './SampleTable.js';

class App extends React.Component {
    render() {
        return(
            <div className="theme-black">
                <CompleteTable />
            </div>
        );
    }
}

export default App;
