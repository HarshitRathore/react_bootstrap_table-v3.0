import React, { Component } from 'react';
import logo from './logo.svg';
import TableRows from './TableRows';
import './CompleteTable.css';

class SampleTable extends React.Component {
    render() {
        const table1data = {
            data:
                [
                    {
                        "serial_no": "1001",
                        "reference_no": "22009",
                        "created_time": "13:05 27/11/2018",
                        "updated_time": "19:12 27/11/2018",
                        "subject": "This is a long paragraph.",
                        "source": "Incident Editor",
                    },
                    {
                        "serial_no": "1002",
                        "reference_no": "22009",
                        "created_time": "13:05 27/11/2018",
                        "updated_time": "19:12 27/11/2018",
                        "subject": "This is a long paragraph.",
                        "source": "Incident Editor",
                    },
                    {
                        "serial_no": "1003",
                        "reference_no": "22009",
                        "created_time": "13:05 27/11/2018",
                        "updated_time": "19:12 27/11/2018",
                        "subject": "This is a long paragraph.",
                        "source": "Incident Editor",
                    },
                ]
        };
        const table2data = {
            data:
                [
                    {
                        "serial_no": "1001",
                        "reference_no": "22009",
                        "created_time": "13:05 27/11/2018",
                        "updated_time": "19:12 27/11/2018",
                        "subject": "This is a long paragraph.",
                        "source": "Incident Editor",
                    },
                    {
                        "serial_no": "1002",
                        "reference_no": "22009",
                        "created_time": "13:05 27/11/2018",
                        "updated_time": "19:12 27/11/2018",
                        "subject": "This is a long paragraph.",
                        "source": "Incident Editor",
                    },
                    {
                        "serial_no": "1003",
                        "reference_no": "22009",
                        "created_time": "13:05 27/11/2018",
                        "updated_time": "19:12 27/11/2018",
                        "subject": "This is a long paragraph.",
                        "source": "Incident Editor",
                    },
                    {
                        "serial_no": "1004",
                        "reference_no": "22009",
                        "created_time": "13:05 27/11/2018",
                        "updated_time": "19:12 27/11/2018",
                        "subject": "This is a long paragraph.",
                        "source": "Incident Editor",
                    },
                ]
        };
        return (
            <div className="table-responsive-sm mt-2 mb-2">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Serial No.</th>
                            <th scope="col">Reference No.</th>
                            <th scope="col">Created Time</th>
                            <th scope="col">Updated Time</th>
                            <th scope="col">Subject</th>
                            <th scope="col">Source</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th colSpan="6">
                                <div className="collapsible-divider col-sm-12">
                                    <button type="button" className="btn btn-outline-light btn-sm">
                                        <i className="fa fa-caret-down" aria-hidden="true"></i> Date: Today
                                            </button>
                                </div>
                            </th>
                        </tr>
                        {table1data.data.map((person, i) => <TableRows key={i} data={person} />)}
                        <tr>
                            <th colSpan="6">
                                <div className="collapsible-divider col-sm-12">
                                    <button type="button" className="btn btn-outline-light btn-sm">
                                        <i className="fa fa-caret-down" aria-hidden="true"></i> Date: Yesterday
                                        </button>
                                </div>
                            </th></tr>
                        {table2data.data.map((person, i) => <TableRows key={i} data={person} />)}
                    </tbody>


                </table>
            </div>
        );
    }
}

export default SampleTable;
