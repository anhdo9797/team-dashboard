import React, { Component } from 'react';
import './style.scss';
import { Menu, Button, Avatar, Badge, Divider, Tooltip } from 'antd';
import { lineAvatar } from '../../assets/images/index';

import {
    DesktopOutlined,
    ContainerOutlined,
    ShopOutlined,
    UserOutlined,
    BarChartOutlined,
    InboxOutlined,
    PlusOutlined,
} from '@ant-design/icons';

import { girl } from '../../assets/avatar';
import { iconPlus } from '../../assets/icon';

const { SubMenu } = Menu;

export default class MenuProject extends Component {
    state = {
        collapsed: false,
        showMenu: false,
        width: 0,
    };

    componentDidMount() {
        let width = window.innerWidth;
        if (this.state.width != width) {
            this.setState({ width });
            if (width >= 992) {
                this.setState({ showMenu: true });
            }
        }
    }

    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        const { showMenu } = this.state;
        return (
            <div className="menu">
                <img src={lineAvatar} className="lineAvatar" />
                <Badge dot style={{ left: 45, backgroundColor: '#6D46FF' }}>
                    <Avatar src={girl} shape="square" icon={<UserOutlined />} />
                </Badge>
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                >
                    <Menu.Item
                        key="1"
                        title={'Chart'}
                        icon={<BarChartOutlined style={{ fontSize: 20 }} />}
                    ></Menu.Item>
                    <Menu.Item
                        key="2"
                        title={'Desktop'}
                        icon={<DesktopOutlined style={{ fontSize: 20 }} />}
                    ></Menu.Item>
                    <Menu.Item key="3" icon={<ShopOutlined style={{ fontSize: 20 }} />}></Menu.Item>
                    <Menu.Item
                        key="4"
                        title={'Contact'}
                        icon={<InboxOutlined style={{ fontSize: 20 }} />}
                    ></Menu.Item>
                    <Menu.Item
                        key="5"
                        title={'Container'}
                        icon={<ContainerOutlined style={{ fontSize: 20 }} />}
                    ></Menu.Item>
                </Menu>
                <Button type="primary">
                    <img src={iconPlus} alt="icon" />
                </Button>
            </div>
        );
    }
}
