import React, { Component } from 'react';
import './style.scss';
import { Menu, Button, Avatar, Badge, Divider } from 'antd';
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
            <div className="menu" style={{ marginLeft: showMenu ? 0 : -100 }}>
                <img src={lineAvatar} className="lineAvatar" />
                <Badge dot style={{ left: 40 }}>
                    <Avatar src={girl} shape="square" icon={<UserOutlined />} />
                </Badge>
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                    inlineCollapsed={this.state.collapsed}
                >
                    <Menu.Item
                        key="1"
                        icon={<BarChartOutlined style={{ fontSize: 20 }} />}
                    ></Menu.Item>
                    <Menu.Item
                        key="2"
                        icon={<DesktopOutlined style={{ fontSize: 20 }} />}
                    ></Menu.Item>
                    <Menu.Item key="3" icon={<ShopOutlined style={{ fontSize: 20 }} />}></Menu.Item>
                    <Menu.Item
                        key="4"
                        icon={<InboxOutlined style={{ fontSize: 20 }} />}
                    ></Menu.Item>
                    <Menu.Item
                        key="5"
                        icon={<ContainerOutlined style={{ fontSize: 20 }} />}
                    ></Menu.Item>
                </Menu>
                <Button type="primary" onClick={this.toggleCollapsed}>
                    <img src={iconPlus} alt="icon" />
                </Button>
            </div>
        );
    }
}
