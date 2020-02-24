import React from 'react';
import './theme.css';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import InputField from "../../components/inputFields";
import history from "../../routes/history";
import { loggedIn } from "../../store/actions/login";
import { toaster } from "../../utils";

const mapStateToProps = state => {
    return {
        loginData: state.loginReducer.loginData
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loggedIn: data => {
            dispatch(loggedIn(data));
        },
    };
};


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
    }
    componentDidMount() {
        let input = document.getElementById("loginForm");
        input.addEventListener("keyup", function (event) {
            if (event.keyCode === 13) {
                event.preventDefault();
                document.getElementById("myLoginBtn").click();
            }
        });
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = () => {
        const uName = this.props.loginData.username;
        const pwd = this.props.loginData.password;
        if (uName === this.state.username && pwd === this.state.password) {
            localStorage.setItem("loggedIn", true);
            this.props.loggedIn(true);
            history.push("/dashboard");
        } else {
            toaster("error", "Invalid Username or Password");
        }
    }



    render() {
        return (
            <div className='login-container' id="loginForm">
                <div className='login-card'>
                    <div className='login-card-caption'>
                        <p>Login</p>
                        <p>to your account</p>
                    </div>
                    <form
                        className="login-form">
                        <InputField
                            type={"email"}
                            label={"Username"}
                            name={"username"}
                            onChange={this.handleChange}
                        />
                        <InputField
                            type={"password"}
                            label={"Password"}
                            name={"password"}
                            onChange={this.handleChange}
                        />
                        <div className="logging-button">
                            <Button
                                id="myLoginBtn"
                                className="login-btn"
                                disabled={!this.state.username || !this.state.password}
                                onClick={this.handleSubmit}
                            >
                                LOGIN
                            </Button>
                        </div>
                    </form>

                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
