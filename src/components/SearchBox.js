import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
    return (
        <div >
            {/* onchange event on search bar */}
            <input className='pa2 ba b--green bg-lightest-blue'
             type='search' 
             placeholder='search robots'
             onChange={searchChange}
            />
        </div>
       
    );
}
export default SearchBox;