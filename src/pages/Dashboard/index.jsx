import React, { Component } from 'react';
import { Col, Layout, Row } from 'antd';

import './style.scss';

import Header from '../../components/Header';
import Chart from '../../components/Chart';

import ColumnCharts from '../../components/ColumnChart';
import MenuProject from '../../components/MenuProject';
import LineCharts from '../../components/LineChart';

import TaskMan from '../../components/TaskMan';

class Dashboard extends Component {
    render() {
        return (
            <div style={{ display: 'flex' }} className="container">
                <div className="menuProject">
                    <MenuProject />
                </div>
                <div className="contentPage">
                    <Header />
                    <Chart />
                    <TaskMan />
                </div>
            </div>
        );
    }
}

export default Dashboard;
