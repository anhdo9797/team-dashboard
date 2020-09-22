import React from 'react';
import PropTypes from 'prop-types';
import style from './search.scss';

const Search = ({}) => {
    return (
        <div className="search">
            <input
                style={{ width: '90%', fontSize: 16, fontStyle: 'unset' }}
                placeholder="Search"
            />
            <button onClick={() => alert('button')}>
                <ion-icon name="search-outline"></ion-icon>
            </button>
        </div>
    );
};

Search.propTypes = {};

export default Search;
