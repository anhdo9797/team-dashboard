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
        respond: [],
        select: '1',
        item: null,
        listActiveUser: [],
    };
    ref = createRef();

    componentDidMount() {
        getData((dataToday) =>
            this.setState({
                week: dataToday.week,
                day: dataToday.date,
                month: dataToday.month,
                respond: dataToday.data,
                listActiveUser: [dataToday.data[0], dataToday.data[1], dataToday.data[2]],
            }),
        ).then(() => {
            console.log('=============state===========');
            console.log({ ...this.state });
            console.log('====================================');
        });
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

    randomUser = () => {
        const { respond } = this.state;
        let number = Math.floor(Math.random() * Math.floor(respond.length));
        console.log('number', number);
        let newArray = [];

        for (let i = number; i < number + 3; i++) {
            console.log('====================================');
            console.log(respond[i]);
            console.log('====================================');

            newArray.push(respond[i]);
        }

        this.setState({ listActiveUser: newArray });

        console.log('new', newArray);
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
                            {this.state.day.length > 0 ? <Line {...this.config()} /> : <Loading />}
                            {/* <Line {...this.config()} /> */}
                        </div>
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
                                    onChange={this.randomUser}
                                >
                                    {month.map((e) => (
                                        <Select.Option key={e.key}>{e.label} </Select.Option>
                                    ))}
                                </Select>
                            </Row>

                            {this.state.day.length > 0 ? (
                                this.state.listActiveUser.map((e, i) => (
                                    <WrapUser
                                        key={i}
                                        name={e.full_name}
                                        level="15"
                                        avatar={e.avatar}
                                        address={`${e.city}, ${e.country}`}
                                        point={e.deal}
                                        slider={Math.floor(Math.random() * Math.max(100))}
                                    />
                                ))
                            ) : (
                                <Loading />
                            )}
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}
