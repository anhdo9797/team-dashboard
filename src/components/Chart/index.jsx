import React, { Component, createRef } from 'react';
import { Row, Col, Select, Avatar, Slider, Divider, Dropdown, Menu } from 'antd';
import { Line } from '@ant-design/charts';

import { getData } from '../../api/GetData';
import './style.scss';
import { avtOnce, avtTow, avtThree } from '../../assets/avatar';
import Loading from '../Loading/Loading';
import LineCharts from '../LineChart';

const month = [
    { key: '1', label: 'January 2019' },
    { key: '2', label: 'February 2019' },
    { key: '3', label: 'March 2019' },
    { key: '4', label: 'April 2019' },
    { key: '5', label: 'May 2019' },
    { key: '6', label: 'June 2019' },
    { key: '7', label: 'January 2019' },
    { key: '8', label: 'August 2019' },
];

const menuUser = (
    <Menu style={{ backgroundColor: '#9f9bd1', width: 150 }}>
        <Menu.Item key="Follow">Follow</Menu.Item>
        <Menu.Item key="Chat">Chat</Menu.Item>
        <Menu.Item key="Hidden">Hidden</Menu.Item>
    </Menu>
);

const WrapUser = ({ name, avatar, address, level, point, slider }) => (
    <div className="user">
        <Row justify="space-between">
            <Col style={{ display: 'flex', alignItems: 'center' }}>
                <Avatar src={avatar} shape="circle" style={{ width: 40, height: 40 }} />
                <div>
                    <h2 style={{ margin: 'auto 10px' }}>{name} </h2>
                    <h3 style={{ margin: '0 10px' }}>{address}</h3>
                </div>
            </Col>
            <Col>
                <Dropdown.Button
                    trigger="click"
                    overlay={menuUser}
                    icon={<ion-icon name="ellipsis-horizontal-outline" />}
                ></Dropdown.Button>
            </Col>
        </Row>
        <Slider defaultValue={slider} disabled={true} />
        <Row justify="space-between">
            <h4>Professional Level {level}</h4>
            <h4 style={{ fontWeight: 'bold' }}>{point} Points</h4>
        </Row>
        <Divider style={{ borderColor: '#363071', margin: 10 }} />
    </div>
);
export default class ChartX extends Component {
    state = {
        week: [],
        month: [],
        day: [],
        select: '1',
    };
    ref = createRef();

   componentDidMount() {
   getData((dataToday) =>
        this.setState({ week: dataToday.week, day: dataToday.date, month: dataToday.month }),
       );
    }

    clickButton = (button) => this.setState({ select: button });
    buttonComponents = ({ key, label }) => (
        <button
            type="button"
            onClick={() => this.clickButton(key)}
            className={this.state.select == key ? 'focus' : null}
        >
            {label}
        </button>
    );

    config = () => {
        //config change with buttonComponents

        const { day, select, week, month } = this.state;
        if (select === '1') {
            return { data: day, xField: 'time', yField: 'total' };
        }
        if (select === '2') {
            return { data: week, xField: 'date', yField: 'total' };
        }
        return { data: month, xField: 'date', yField: 'total' };
    };

    render() {
        return (
            <div className="container">
                <Row justify="space-between" className="chartContainer">
                    <Col
                        xs={24}
                        sm={24}
                        lg={14}
                        xxl={14}
                        style={{
                            marginTop: '30px',
                        }}
                    >
                        <div className="columnChart">
                            <div className="wrapButton">
                                {this.buttonComponents({ key: '1', label: 'DAY' })}
                                {this.buttonComponents({ key: '2', label: 'WEEK' })}
                                {this.buttonComponents({ key: '3', label: 'MONTH' })}
                                {this.buttonComponents({ key: '4', label: 'YEAR' })}
                                {this.buttonComponents({ key: '5', label: 'ALL' })}
                            </div>
                            <div style={{ height: 30 }} />

                            <Line {...this.config()} />
                        </div>

                        {/* {this.state.day.length > 0 ? <Line {...this.config()} /> : <Loading />} */}
                    </Col>

                    <Col
                        xs={24}
                        sm={24}
                        lg={9}
                        xxl={8}
                        style={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            marginTop: '30px',
                        }}
                    >
                        <div className="activeUser" style={{ margin: '0 auto' }}>
                            <Row justify="space-between" style={{ marginBottom: '30px' }}>
                                <h2>Active Users</h2>
                                <Select
                                    defaultValue="8"
                                    dropdownStyle={{
                                        backgroundColor: '#9f9bd1',
                                    }}
                                >
                                    {month.map((e) => (
                                        <Select.Option key={e.key}>{e.label} </Select.Option>
                                    ))}
                                </Select>
                            </Row>

                            <WrapUser
                                name={'Elliot Møller'}
                                level="15"
                                avatar={avtOnce}
                                address="Copenhagen, Denmark"
                                point={4723}
                                slider={70}
                            />
                            <WrapUser
                                name={'Olivia Pedersen'}
                                level="15"
                                avatar={avtTow}
                                address="Copenhagen, Denmark"
                                point={2723}
                                slider={80}
                            />
                            <WrapUser
                                slider={60}
                                name={'Niklas Döring'}
                                level="15"
                                address="Copenhagen, Denmark"
                                point={1723}
                                avatar={avtThree}
                            />
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}
