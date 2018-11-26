import { StyleSheet, Dimensions } from "react-native";

var ht = Dimensions.get("window").height;
var wd = Dimensions.get("window").width;

var app_font_color = "#57FEFF";
/**
 * login styles.
 */
const LoginComponentStyle = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    flexDirection: "column",
    width: wd,
    height: ht * 0.67,
    padding: 15
  },
  username_input: {
    color: "black",
    padding: 5,
    height: 30,
    margin: 5
  },
  password_input: {
    color: "black",
    padding: 5,
    height: 30,
    margin: 5
  },
  login_response_style: {
    color: "black",
    backgroundColor: "transparent",
    marginTop: 40,
    padding: 10
  },
  signup_here: {
    color: app_font_color,
    backgroundColor: "white",
    marginTop: 10,
    alignSelf: "center",
    padding: 10
  },

  login_button: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    paddingTop: 10,
    backgroundColor: "#283593",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    marginLeft: 5,
    marginRight: 5,
    alignSelf: "center",
    color: "white"
  },
  forgot_password: {
    color: app_font_color,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginTop: 20
  },
  login_parent: {
    backgroundColor: "#dbDCDC",
    alignItems: "center",
    justifyContent: "center",
    height: ht,
    width: wd
  },
  view_container: {
    paddingBottom: 10,
    paddingTop: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    alignSelf: "center",

    borderRadius: 15,
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    // backgroundColor: AppColors.BUTTON_GREEN,
    width: 130
  },
  textStyle: {
    fontSize: 16,
    color: "#57FEFF",
    textAlign: "center"
  },

  buttonStyle: {
    borderColor: "#57FEFF",
    borderWidth: 1,
    borderRadius: 15,
    // borderColor: '#fff'
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    justifyContent: "center"
  }
});

export default LoginComponentStyle;
