import React from "react";
import { connect } from 'react-redux';
import "./theme.css"
import Header from "../../components/header/header";
import history from "../../routes/history";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const mapStateToProps = state => {
    return {
        loginStatus: state.loginReducer.loggedIn,
        dashboardData: state.dashboardReducer.dashboardData
    };
};

const mapDispatchToProps = dispatch => {
    return {};
};

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        const data = localStorage.getItem("loggedIn");
        if (!data) {
            history.push("/");
        }
    }
    render() {
        return (
            <div id="dashboard">
                <Header />
                <div>
                    <h2><strong><p>EMPLOYEE LIST</p></strong></h2>
                </div>
                <TableContainer className="table-style">
                    <Table aria-label="a dense table" >
                        <TableHead>
                            <TableRow>
                                <TableCell>Id</TableCell>
                                <TableCell align="center">Name</TableCell>
                                <TableCell align="center">Age</TableCell>
                                <TableCell align="center">Gender</TableCell>
                                <TableCell align="center">Email</TableCell>
                                <TableCell align="center">Phone No</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.props.dashboardData && this.props.dashboardData.user ?
                                this.props.dashboardData.user.map((userData, index) => (
                                    <TableRow key={index}>
                                        <TableCell component="th" scope="row">
                                            {userData.id}
                                        </TableCell>
                                        <TableCell align="center">{userData.name}</TableCell>
                                        <TableCell align="center">{userData.age}</TableCell>
                                        <TableCell align="center">{userData.gender}</TableCell>
                                        <TableCell align="center">{userData.email}</TableCell>
                                        <TableCell align="center">{userData.phoneNo}</TableCell>
                                    </TableRow>
                                )) : "NO DATA IN TABLE"}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);