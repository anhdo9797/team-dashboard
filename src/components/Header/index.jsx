import React, { Component } from 'react';
import style from './style.scss';

import Search from '../InputSearch/Search';
import { Tooltip } from 'antd';

const IconButton = ({ onClick, icon, title }) => (
    <button onClick={onClick}>
        <Tooltip trigger="click" title={title}>
            <ion-icon name={icon} />
        </Tooltip>
    </button>
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
                        <IconButton icon="add-circle-outline" title="Add Funds" />
                        <h3>ADD FUNDS</h3>
                        <Search />
                        <IconButton icon="settings-outline" title="Setting" />
                    </div>
                    <div className="showInMobile">
                        <button onClick={() => this.setState({ showMenu: !this.state.showMenu })}>
                            {this.state.showMenu ? (
                                <ion-icon name="chevron-up-outline" />
                            ) : (
                                <ion-icon name="chevron-down-outline" />
                            )}
                        </button>
                        {this.state.showMenu ? (
                            <div className="menu">
                                <button
                                    className="item"
                                    onClick={() => this.setState({ showMenu: false })}
                                >
                                    ADD FUNDS <ion-icon name="add-circle-outline" />
                                </button>
                                <button
                                    className="item"
                                    onClick={() => this.setState({ showMenu: false })}
                                >
                                    Setting <ion-icon name="settings-outline" />
                                </button>
                                <Search />
                            </div>
                        ) : null}
                    </div>
                </header>
            </div>
        );
    }
}
