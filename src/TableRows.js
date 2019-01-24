import React, { Component } from 'react';
import $ from 'jquery';
import 'bootstrap';

class TableRows extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      themes : ['table-primary', 'table-success', 'table-danger', 'table-info', 'tab;e-warning']
    };
    this.handleRowClick = this.handleRowClick.bind(this);
  }
  handleRowClick(event) {
    var data = "<table class='table table-bordered table-dark'><tbody>"+
    "<tr><td> Serial No    </td><td>" + this.props.data.serial_no    + "</td></tr>" +
    "<tr><td> Reference No </td><td>" + this.props.data.reference_no + "</td></tr>" +
    "<tr><td> Created Time </td><td>" + this.props.data.created_time + "</td></tr>" +
    "<tr><td> Updated Time </td><td>" + this.props.data.updated_time + "</td></tr>" +
    "<tr><td> Subject      </td><td>" + this.props.data.subject      + "</td></tr>" +
    "<tr><td> Source       </td><td>" + this.props.data.source       + "</td></tr>" +
    "</tbody></table>";
    $("#detail-body").html(data);
    $('#detailModal').modal("show");
  }
  render() {
    const myClickStyle = {
      cursor : "pointer"
    }
    console.log(this.props.index)
    return (
      <tr id={this.props.data.serial_no} onClick={this.handleRowClick} style={myClickStyle} className={this.state.themes[this.props.index]}>
        <td>{this.props.data.serial_no}</td>
        <td>{this.props.data.reference_no}</td>
        <td>{this.props.data.created_time}</td>
        <td>{this.props.data.updated_time}</td>
        <td>{this.props.data.subject}</td>
        <td>{this.props.data.source}</td>
      </tr>
    );
  }
}

export default TableRows;
