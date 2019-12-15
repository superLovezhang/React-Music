import React from 'react';
import { withRouter } from 'react-router-dom';

import './style.scss';

class HomeHeader extends React.Component {
    handleClickMenu() {

    }

    handleClickSearch() {
        this.props.history.push('/search');
    }
    
    render() {
        return (
            <div className="home-header">
                <div className="home-menu" onClick={() => {this.handleClickMenu()}}></div>
                <div className="home-logo"></div>
                <div className="home-search" onClick={() => {this.handleClickSearch()}}></div>
            </div>
        )
    }
}

export default withRouter(HomeHeader);