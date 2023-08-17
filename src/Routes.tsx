import * as React from 'react'
import {Routes,Route,Navigate } from 'react-router-dom';
import Home from './Pages/Home/Home'
import PageNotFound from './Pages/PageNotFound/PageNotFound'
import DashBoard from './Pages/DashBoard/DashBoard'
import Protected from './Shared/Guards/AuthGuard';

export default () =>{
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/DashBoard" element={<Protected> <DashBoard /> </Protected>} />
            <Route path="*" element={<PageNotFound />} />
       </Routes>
    );
}