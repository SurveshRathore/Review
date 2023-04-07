import { Box, Button, Input, InputBase, InputLabel, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addDoctorAPI } from './doctorServices';

const useStyles = makeStyles({
    mainPage: {
        height: '100vh',
        width: '100wh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#e9f5f9',
    },

    mainContent1: {
        height: '80%',
        width: '40%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid gray',
        background: '#d3eaf2',
        
    },

    doctorContent: {
        height: '90%',
        width: '70%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
       
    },

    doctorhead: {
        height: '10%',
        width: '90%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        fontWeight: 'bold',
        marginTop: '10px',
        marginLeft: '10px',
    },

    mainContentBody: {
        height: '80%',
        width: '90%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },

    doctorname: {
        height: '25%',
        width: '90%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',

    },

    text: {
        font: 'normal normal normal 12px/16px Roboto',
        color: '#0A0102',
    },

    

    submitBox: {
        height: '10%',
        width: '90%',
        display: 'flex',
        flexDirection: 'row',
        marginTop: '20px',
    },

    listButton: {
        height: '80%',
        width: '60%',
        display: 'flex',
        flexDirection: 'row',
    },

    submitButton: {
        height: '20%',
        width: '90%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: '10px',
    },

})

function AddDoctor() {
    const classes = useStyles();

    const [doctorList, setDoctorList] = useState({ doctorName: '', doctorProfession: '', serviceCharge: '', doctorTime: '' })

    let navigate = useNavigate();

    const navigateToList = () => {
        navigate("/doctorList")
    }

    const takeName = (e) => {
        setDoctorList((prevState) => ({
            ...prevState,
            doctorName: e.target.value
        }))
    }

    const takeProfession = (e) => {
        setDoctorList((prevState) => ({
            ...prevState,
            doctorProfession: e.target.value
        }))
    }
    const takeCharges = (e) => {
        setDoctorList((prevState) => ({
            ...prevState,
            serviceCharge: e.target.value
        }))
    }
    const takeTime = (e) => {
        setDoctorList((prevState) => ({
            ...prevState,
            doctorTime: e.target.value
        }))
    }

    console.log(doctorList)

    const sendData = () => {
        addDoctorAPI(doctorList)
            .then((response) => {
                console.log(response)

            })
            .catch((error) => {
                console.log(error)

            })
    }


    return (

        <Box className={classes.mainPage}>
            <Box className={classes.mainContent1}>

                <Box className={classes.doctorContent}>
                    <Box className={classes.doctorhead}>
                        <Box >Add New Doctor</Box>


                    </Box>
                    <Box className={classes.mainContentBody}>
                        <Box className={classes.doctorname}>
                            <InputLabel className={classes.text}>Doctor Name:</InputLabel>
                            <TextField onChange={takeName} size='small' />
                        </Box>
                        <Box className={classes.doctorname}>
                            <InputLabel className={classes.text}>Doctor Profession:</InputLabel>
                            <TextField onChange={takeProfession} size='small' />
                        </Box>
                        <Box className={classes.doctorname}>
                            <InputLabel className={classes.text}>Doctor Service Charges:</InputLabel>
                            <TextField onChange={takeCharges} size='small' />
                        </Box>
                        <Box className={classes.doctorname}>
                            <InputLabel className={classes.text}>Doctor Time:</InputLabel>
                            <TextField onChange={takeTime} size='small' />
                        </Box>

                    </Box>
                    <Box className={classes.submitBox}>
                        <Box className={classes.listButton}>
                            <Button onClick={navigateToList} variant='contained'>Doctor List</Button>
                        </Box>
                        <Box className={classes.submitButton}>
                            <Button onClick={sendData} variant='contained'>Submit</Button>
                        </Box>
                    </Box>


                </Box>

            </Box>
        </Box>
    )
}

export default AddDoctor