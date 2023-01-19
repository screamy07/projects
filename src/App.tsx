import React from 'react';
import './App.scss';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Mainlayout from "./mainlayout";
import Detail from "./detail/Detail";


function App() {
    return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Mainlayout/>}/>
                <Route path={'/details/:id'} element={<Detail/>} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
