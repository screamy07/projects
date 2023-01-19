import React from 'react';

import './App.scss';
import {Flights} from "./flights/flights";
import {Search} from "./search/search";


function Mainlayout() {
    const [count, setCount] = React.useState()
    const [search,setSearch] = React.useState()

    return (
        <div>
            <div className={'home wrap'}>
                <Search setSearch={setSearch} count={count}/>
                <div className="App">
                    <Flights search={search} setCount={setCount}/>
                </div>
            </div>
        </div>

    );
}

export default Mainlayout;