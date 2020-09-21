import React, { Component } from 'react';
import Header from '../../components/Header';
import Chart from '../../components/Chart';

class Dashboard extends Component {
    render() {
        return (
            <div className="container">
                <Header />
                <Chart />
            </div>
        );
    }
}

export default Dashboard;
