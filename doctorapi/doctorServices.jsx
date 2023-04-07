import axios from "axios";

export const addDoctorAPI = (addObj) => {
    
    let response = axios.post("https://localhost:5001/doctor/addDoctor",addObj)
    return response;
}

export const getDoctorAPI= () => {
    let response = axios.get("https://localhost:5001/doctor/getDoctor")
    return response;
}