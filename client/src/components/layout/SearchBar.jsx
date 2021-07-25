import React from 'react';

const SearchBar = () => {
    return (
        <nav style={{ marginBottom: '30px' }} className='purple lighten-1'>
            <div className='nav-wrapper'>
                <div className=''>
                    <label className='label-icon' htmlFor='search'>
                        <i
                            className='material-icons'
                            style={{ color: 'white', marginLeft: '25px' }}>
                            computer
                        </i>
                    </label>
                </div>
            </div>
        </nav>
    );
};

export default SearchBar;
