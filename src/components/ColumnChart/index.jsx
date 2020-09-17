import React, { Component, createRef } from 'react';
import { Col, DatePicker, Space, Row } from 'antd';
import './style.scss';

import { Bar } from '@ant-design/charts';

function onChange(date, dateString) {
    console.log(date, dateString);
}
export default class ColumnCharts extends React.Component {
    ref = createRef();
    // DownloadImage
    downloadImage = () => {
        this.ref.current?.downloadImage();
    };

    // Get data base64
    toDataURL = () => {
        console.log(this.ref.current?.toDataURL());
    };
    render() {
        const data = [
            {
                action: 'Browse website',
                pv: 50000,
            },
            {
                action: 'Add to shopping cart',
                pv: 35000,
            },
            {
                action: 'Generate order',
                pv: 25000,
            },
            {
                action: 'Pay the order',
                pv: 15000,
            },
        ];
        const config = {
            forceFit: true,
            data,
            xField: 'pv',
            yField: 'action',
            conversionTag: { visible: false },
        };
        return (
            <div className="columnChart">
                <div className="column-chart">
                    <Row>
                        <Col xs={24} md={24} lg={24} className="top-city">
                            <div className="top-city-item">
                                <div>Top cities</div>
                                <div>
                                    <Space>
                                        <DatePicker onChange={onChange} picker="month" />
                                    </Space>
                                </div>
                            </div>
                            <div>
                                <Bar {...config} />
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}
