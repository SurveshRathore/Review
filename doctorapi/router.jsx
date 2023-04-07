import React from "react";
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import AddDoctor from "../component/review/addDoctor";
import DoctorList from "../component/review/doctorList";


function RouterConfig() {
    return (
        <div>
            <Router>
                <Routes>
                   
                     
                     <Route exact path="/addDoctor" element = {<AddDoctor/>} />
                     
                     <Route exact path="/doctorList" element = {<DoctorList/>} />

                </Routes>
            </Router>
        </div>
    )
}
export default RouterConfig
