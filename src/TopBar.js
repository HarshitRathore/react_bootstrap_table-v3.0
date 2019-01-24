import React, { Component } from 'react';
import logo from './logo.svg';
import './TopBar.css';
import { test1, test2 } from './fakeData';

class TopBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            table1data : test1,
            table2data : test2,
            open       : false,
            close      : false
        }
        console.log(this.state.table1data);
        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleClickClose = this.handleClickClose.bind(this);
    }
    handleClickOpen() {
        this.setState(state => ({
            open : !state.open
        }));
    }
    handleClickClose() {
        this.setState(state => ({
            close : !state.close
        }));
    }
    render() {
        return(
            <div id="top_bar" className="row mb-2 mt-2">
                <div className="align-self-left col-sm-6">
                  <button type="button" className="btn btn-light" onClick={this.handleClickOpen}>Open Incidents</button>
                  <button type="button" className="btn btn-light" onClick={this.handleClickClose}>Closed Incidents</button>
                </div>
                <div className="input-group sm-3 col-sm-6">
                  <input type="text" className="form-control form-rounded" placeholder="Search Incident box" aria-label="Search" aria-describedby="basic-addon2"/>
                </div>
            </div>
        );
    }
}

export default TopBar;
