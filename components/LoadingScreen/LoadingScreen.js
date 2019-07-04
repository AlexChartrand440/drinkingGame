import React from "react";
import Colors from "../../constants/Colors";
import Styles from "../../constants/Styles";
import { View, Image } from "react-native";

export default class LoadingScreen extends React.Component {
  componentDidMount() {
    this.props.startAsync().then(() => this.props.onFinish());
  }
  render() {
    return (
      <View
        style={{
          ...Styles.container,
          backgroundColor: Colors.primaryColor,
          flexDirection: "row",
          alignItems: "center",
          padding: 20
        }}
      >
        <Image
          style={{ width: "100%", resizeMode: "contain" }}
          source={require("./../../assets/images/titleImage.png")}
        />
      </View>
    );
  }
}
