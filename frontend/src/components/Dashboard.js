import React, { Component } from 'react';
import { getDashboard } from '../helpers/network';
import Layout from './Layout';

class Dashboard extends Component {
  state = {
    dashboardData: []
  }
  async componentDidMount(){
    const dashboardData = await getDashboard();
    console.log(dashboardData);
    this.setState({
      dashboardData: dashboardData.data
    })
  }
  render(){
    return <Layout>
    <h1>Classes Nearby</h1>
    {this.state.dashboardData && <Table data={this.state.dashboardData} />}
    </Layout>
  }
}

const Row = (props) => {
  return <tr>
    <th scope="row">{props.row.subject}</th>
    <td>{props.row.time}</td>
    <td>{props.row.location}</td>
    <td>{props.row.count}</td>
    <button type="submit" className="btn btn-lg btn-primary">Join</button>
  </tr>
}
const Table = (props) => {
  return <div>
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Subject</th>
          <th scope="col">Time</th>
          <th scope="col">Location</th>
          <th scope="col">Number of Participants</th>
          <th scope="col">Join</th>
        </tr>
      </thead>
      <tbody>
        {props.data ? props.data.map(row => <Row key={row.name} row={row} />) : null}
      </tbody>
    </table>
  </div>
}

export default Dashboard;
