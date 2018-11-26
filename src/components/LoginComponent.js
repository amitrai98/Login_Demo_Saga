import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ActivityIndicator,
  ImageBackground
} from "react-native";
import Loader from "../utility/Loader";
import LoginComponentStyle from "../styles/LoginComponentStyle";
import Validator from "../utility/Validator";
import AppMsgConstants from "../utility/AppMsgConstants";
import { TextField } from "react-native-material-textfield";

export default class LoginComponent extends Component {
  constructor(props) {
    super(props);
    console.log("constructor=========>", props);
  }

  /**
   * state to hold user inputs
   */
  state = {
    email: "",
    password: ""
  };

  /**
   * attempts to log on the server
   */
  attemptLogin() {
    if (Validator.getInstance().isEmailValid(this.state.email)) {
      if (Validator.getInstance().isPasswordValid(this.state.password)) {
        this.props.apiLoginRequest({
          username: this.state.email,
          password: this.state.password
        });
        setTimeout(() => {
          this.setState({ loading: false });
        }, 2000);
      } else {
        alert(AppMsgConstants.PASSWORD_STRENGTH_ERROR);
      }
    } else {
      alert(AppMsgConstants.EMAIL_ERROR);
    }
  }

  /**
   * renders view to the user.
   */
  render() {
    const { payload } = this.props;
    return (
      <View style={LoginComponentStyle.container}>
        <Loader loading={payload.isFetching} />
        <ImageBackground
          style={{
            flex: 1,
            width: null,
            height: null,
            justifyContent: "center",
            resizeMode: "cover"
          }}
          source={require("../images/box.png")}
        >
          <View style={{ alignContent: "center", padding: 30, marginTop: 80 }}>
            <TextField
              label={"username"}
              onChangeText={value => this.setState({ email: value })}
              TextInput={"email"}
              value={this.state.email}
              style={LoginComponentStyle.username_input}
            />

            <TextField
              label="password"
              onChangeText={value => this.setState({ password: value })}
              secureTextEntry={true}
              value={this.state.password}
              style={LoginComponentStyle.password_input}
            />

            <TouchableOpacity>
              <Text style={LoginComponentStyle.forgot_password}>
                Forgot Password
              </Text>
            </TouchableOpacity>

            <View style={LoginComponentStyle.view_container}>
              <TouchableOpacity
                style={LoginComponentStyle.buttonStyle}
                onPress={() => this.attemptLogin()}
              >
                <Text style={LoginComponentStyle.textStyle}>Login</Text>
              </TouchableOpacity>
            </View>

            <Text style={LoginComponentStyle.signup_here}>
              New User? Signup Here
            </Text>

            <Text style={LoginComponentStyle.login_response_style}>
              {payload.apiMsg}
            </Text>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
