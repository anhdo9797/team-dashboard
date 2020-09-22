import React from 'react';
import PropTypes from 'prop-types';
import ColumnCharts from '../ColumnChart';
import LineCharts from '../LineChart';
import { Col, Row } from 'antd';

const TaskMan = () => {
    return (
        <div className="container">
            <Row justify="space-between" style={{ width: '100%', alignItems: 'flex-end' }}>
                <Col xs={24} sm={24} lg={14} xxl={14}>
                    <LineCharts />
                </Col>

                <Col xs={24} sm={24} lg={9} xxl={8}>
                    <ColumnCharts />
                </Col>
            </Row>
        </div>
    );
};

TaskMan.propTypes = {};

export default TaskMan;
