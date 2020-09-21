import React, { Component } from 'react';
import 'antd/dist/antd.less';
import './App.css';
import Dashboard from './pages/Dashboard';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Dashboard />
            </div>
        );
    }
}

export default App;
