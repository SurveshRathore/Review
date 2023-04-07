import { Box, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getDoctorAPI } from './doctorServices';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const useStyles = makeStyles({
    mainPage: {
        height: '100vh',
        width: '100wh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    mainContent: {
        height: '80%',
        width: '70%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid gray',
        background: '#f2f2f2',
    },

    doctorContent: {
        height: '90%',
        width: '90%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',

    },

    doctorhead: {
        height: '20%',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        fontWeight: 'bold',
        marginTop: '10px',
        marginLeft: '10px',
    },

    doctorbody: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100%',

    },

    tableBox: {

        height: '100%',
        width: '95%',
        display: 'flex',
        flexDirection: 'column',

    },

    tableheading: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '90%',
        width: '100%',
        border: '1px solid #ddd',


    },

    tableRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        border: '1px solid #0883ad',
    },

    tablecontentId: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '10%',
        width: '10%',

    },

    tablecontentName: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '10%',
        width: '20%',

    },

    tablecontentProf: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '10%',
        width: '20%',

    },

    tablecontentServ: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '10%',
        width: '25%',

    },

    tablecontentTime: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '10%',
        width: '20%',

    },

})

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function DoctorList() {

    const classes = useStyles();

    const [doctorList, setDoctorList] = useState([])

    let navigate = useNavigate();

    const navigateToAdd = () => {
        navigate("/addDoctor")
    }

    useEffect(() => {
        getDoctorAPI()
            .then((response) => {
                console.log(response)
                setDoctorList(response.data.response)
            })
            .catch((error) => {
                console.log(error)

            })
    }, [])

    console.log(doctorList)
    return (

        <Box className={classes.mainPage}>
            <Box className={classes.mainContent}>
                <Box className={classes.doctorContent}>
                    <Box className={classes.doctorhead}>
                        <Box>Doctors Details</Box>
                        <Box>
                            <Button onClick={navigateToAdd} variant="contained">Add New Doctor</Button>
                        </Box>
                    </Box>

                    <Box className={classes.doctorbody}>

                        <Box className={classes.tableBox}>
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                    <TableHead>
                                        <TableRow>
                                            <StyledTableCell align="center" className={classes.tablecontentId}>Id</StyledTableCell>
                                            <StyledTableCell align="center" className={classes.tablecontentName}>Doctor Name</StyledTableCell>
                                            <StyledTableCell align="center" className={classes.tablecontentProf}>Doctor Profession</StyledTableCell>
                                            <StyledTableCell align="center" className={classes.tablecontentServ}>Doctor service Charge</StyledTableCell>
                                            <StyledTableCell align="center" className={classes.tablecontentTime}>Doctor Time</StyledTableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {
                                            doctorList.map((doctor) => (
                                                <StyledTableRow key={doctor.doctorId}>

                                                    <StyledTableCell align="center" className={classes.tablecontentId}>{doctor.doctorId}</StyledTableCell>
                                                    <StyledTableCell align="center" className={classes.tablecontentName}>{doctor.doctorName}</StyledTableCell>
                                                    <StyledTableCell align="center" className={classes.tablecontentProf}>{doctor.doctorProfession}</StyledTableCell>
                                                    <StyledTableCell align="center" className={classes.tablecontentServ}>{doctor.doctorTime}</StyledTableCell>
                                                    <StyledTableCell align="center" className={classes.tablecontentTime}>{doctor.serviceCharge}</StyledTableCell>
                                                </StyledTableRow>
                                            ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>

                        </Box>


                    </Box>
                </Box>
            </Box>
        </Box>
    )

}

export default DoctorList