import React, { Component } from 'react';
import style from './style.scss';

import Search from '../InputSearch/Search';
import { Drawer, Dropdown, Menu, Tooltip } from 'antd';
import {
    DesktopOutlined,
    ContainerOutlined,
    ShopOutlined,
    SettingOutlined,
    BarChartOutlined,
    InboxOutlined,
    PlusOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons';

const menuDrop = (
    <Menu style={{ backgroundColor: 'rgb(100,152,245)' }}>
        <Menu.Item style={{ color: 'white' }}>Theme</Menu.Item>
        <Menu.Item style={{ color: 'white' }}>Langue</Menu.Item>
    </Menu>
);

const IconButton = ({ onClick, icon, title }) => (
    <Dropdown trigger="click" title={title} overlay={menuDrop}>
        <button onClick={onClick}>
            <ion-icon name={icon} />
        </button>
    </Dropdown>
);

export default class Header extends Component {
    state = {
        showMenu: false,
    };
    render() {
        return (
            <div className="container">
                <header>
                    <h1>DASHBOARD</h1>
                    <div className="wrapMenu">
                        <button type="button" className="buttonPlus">
                            <ion-icon name="add-outline" />
                        </button>
                        <h3>ADD FUNDS</h3>
                        <Search />
                        <IconButton icon="settings-outline" title="Setting" />
                    </div>
                    <div className="showInMobile">
                        <button onClick={() => this.setState({ showMenu: !this.state.showMenu })}>
                            <MenuFoldOutlined style={{ fontSize: 20, color: ' #635e98' }} />
                        </button>

                        <Drawer
                            placement={'right'}
                            closable={true}
                            visible={this.state.showMenu}
                            bodyStyle={{ backgroundColor: '#001529' }}
                            onClose={() => this.setState({ showMenu: false })}
                        >
                            <Menu
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                mode="inline"
                                theme="dark"
                                onClick={() => this.setState({ showMenu: false })}
                            >
                                <Menu.Item
                                    key="1"
                                    icon={<BarChartOutlined style={{ fontSize: 20 }} />}
                                >
                                    Chart
                                </Menu.Item>
                                <Menu.Item
                                    key="2"
                                    icon={<DesktopOutlined style={{ fontSize: 20 }} />}
                                >
                                    Desktop
                                </Menu.Item>
                                <Menu.Item key="3" icon={<ShopOutlined style={{ fontSize: 20 }} />}>
                                    Shop
                                </Menu.Item>
                                <Menu.Item
                                    key="4"
                                    icon={<InboxOutlined style={{ fontSize: 20 }} />}
                                >
                                    Contact
                                </Menu.Item>
                                <Menu.Item
                                    key="5"
                                    icon={<ContainerOutlined style={{ fontSize: 20 }} />}
                                >
                                    Container
                                </Menu.Item>
                                <Menu.Item
                                    key="6"
                                    icon={<SettingOutlined style={{ fontSize: 20 }} />}
                                >
                                    Setting
                                </Menu.Item>
                                <Menu.Item key="7" icon={<PlusOutlined style={{ fontSize: 20 }} />}>
                                    ADD FUNDS
                                </Menu.Item>
                                <Search />
                            </Menu>
                        </Drawer>
                    </div>
                </header>
            </div>
        );
    }
}
