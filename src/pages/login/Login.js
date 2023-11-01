import React, { Component } from "react";
import { connect } from "react-redux";
import { userActions } from "../../_actions";
import { FaLock, FaUserAlt, FaUser } from "react-icons/fa";
import { BiLogIn } from "react-icons/bi";
import "./Login.css";
import khelo from "../../Assets/Images/khelo.png";
import { BiSolidUser } from "react-icons/bi";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaGreaterThan } from "react-icons/fa";

class Login extends Component {
  constructor(props) {
    super(props);
    this.props.dispatch(userActions.logout());
    this.loginSubmit = this.loginSubmit.bind(this);
    this.inputChange = this.inputChange.bind(this);
    this.state = {
      fieldslogin: {},
      errorslogin: {},
      showMe: false,
      passtype: "password",
    };
  }

  inputChange(e) {
    e.preventDefault();
    let { name, value } = e.target;
    let fieldslogin = this.state.fieldslogin;
    let errorslogin = this.state.errorslogin;
    fieldslogin[name] = value;
    errorslogin[name] = "";
    console.log(name, value);
    this.setState({ fieldslogin, errorslogin });
  }

  loginSubmit(e) {
    // alert("sjhdjkshdjs")
    e.preventDefault();
    if (this.handleValidationLogin()) {
      // console.log("After hello validation");
      let data = {
        username: this.state.fieldslogin.username,
        password: this.state.fieldslogin.password,
        isClient: true,
      };
      this.props.dispatch(userActions.login(data, this.props));
    }
  }

  resetForm = (e) => {
    e.preventDefault();
    this.setState({
      fieldslogin: {},
      errorslogin: {},
    });
    this.hideErrorMessage();
  };

  handleValidationLogin = () => {
    console.log("hello validation");

    let fieldslogin = this.state.fieldslogin;
    let errorslogin = {};
    let formIsValid = true;

    //User Name
    if (!fieldslogin["username"]) {
      formIsValid = false;
      errorslogin["username"] = "User Name Cannot Be Blank.";
    }
    //password
    if (!fieldslogin["password"]) {
      formIsValid = false;
      errorslogin["password"] = "Password Cannot Be Blank.";
    }

    console.log("errorsloginerrorsloginerrorsloginerrorslogin:::", errorslogin);

    this.setState({ errorslogin: errorslogin });
    return formIsValid;
  };

  show = () => {
    this.setState({ showMe: true, passtype: "text" });
  };
  hide = () => {
    this.setState({ showMe: false, passtype: "password" });
  };

  render() {
    console.log("this.state.errorslogin::::", this.state.errorslogin);

    return (
      <div className="login-main">
        <div className="login-div">
          <img src={khelo} alt="" className="khelo-logo" />
          <div className="input-div">
            <FaUser style={{ color: "#7875B5", marginRight: "10px", marginTop: "20px" }} />
            <input
              type="text"
              placeholder="Enter User ID....."
              name="username"
              id="username"
              className="email-input"
              value={this.state.fieldslogin.username}
              onChange={this.inputChange}
            />
          </div>
          <div className="input-div">
            <RiLockPasswordFill
              style={{ color: "#7875B5", marginRight: "10px", marginTop: "20px" }}
            />
            <input
              type={this.state.passtype}
              placeholder="password"
              autoComplete="off"
              className="password-input"
              name="password"
              id="password"
              value={this.state.fieldslogin.password}
              onChange={this.inputChange}
            />
          </div>
          <button className="login-btn" onClick={this.loginSubmit}>
            Log in
            <FaGreaterThan style={{ color: "#7875B5", marginLeft: "6rem" }} />
          </button>
          <span className="login-note">
            Note - This Website is not for Indian Territory.
          </span>

        </div>
      </div>

    );
  }
}
function mapStateToProps(state) {
  const { loggingIn, user, otpSent } = state.authentication;
  const { users } = state;
  return {
    loggingIn,
    otpSent,
    user,
    users,
  };
}
export default connect(mapStateToProps)(Login);
