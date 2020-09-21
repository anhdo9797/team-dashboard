import React, { Component, useState, useEffect } from 'react';
import { DashOutlined } from '@ant-design/icons';
import './style.scss';
import { Donut } from '@ant-design/charts';
import { Slider, Row, Col } from 'antd';

const marks = {
    100: {
        style: {
            color: '#928DC4',
        },
        label: <strong>8653.59</strong>,
    },
    50: {
        style: {
            color: '#928DC4',
        },
        label: <strong style={{ fontWeight: 'unset' }}>PERIOD RANGE</strong>,
    },
    0: {
        style: {
            color: '#928DC4',
        },
        label: <strong>3534.68</strong>,
    },
};

const data = [
    {
        type: 'EUR/USD    $1,3345',
        value: 15,
    },
    {
        type: 'ZEC/EUR     $123,334',
        value: 10,
    },
    {
        type: 'XBT/EUR     $6,5567',
        value: 5,
    },
];
const config = {
    forceFit: true,

    description: {
        visible: true,
    },
    radius: 0.8,
    padding: 'auto',
    margin: '20px',
    data,
    angleField: 'value',
    colorField: 'type',
    statistic: { visible: true },
};
export default class LineCharts extends Component {
    state = {
        reverse: true,
    };

    handleReverseChange = (reverse) => {
        this.setState({ reverse });
    };
    render() {
        const { reverse } = this.state;
        return (
            <Row style={{ width: '100%', margin: '40px 0' }} justify="space-between">
                <Col xs={24} md={12} lg={13}>
                    <div className="select-period">
                        <div className="select-title">
                            <div className="select-title-sub">
                                <h2>Selected Period</h2>
                                <div style={{ cursor: 'pointer' }}>
                                    <DashOutlined style={{ fontSize: 18 }} />
                                </div>
                            </div>
                        </div>
                        <div className="wrap-content">
                            <h2>$6587.56</h2>
                            <h4>STARTING PRICE</h4>
                        </div>

                        <div className="wrap-content">
                            <h2>$2.936,99 (-5%)</h2>
                            <h4>PERIOD CHANGE</h4>
                        </div>
                        <Slider reverse={reverse} range marks={marks} defaultValue={[20, 50]} />
                    </div>
                </Col>
                <Col xs={24} md={10} lg={10} className="total-invertment">
                    <div className="total-title">
                        <h2>Total Investment</h2>
                        <div style={{ cursor: 'pointer' }}>
                            <DashOutlined style={{ fontSize: 18 }} />
                        </div>
                    </div>
                    <Donut {...config} />
                </Col>
            </Row>
        );
    }
}
