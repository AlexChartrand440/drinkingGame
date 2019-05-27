import React from "react";

import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import { ScreenOrientation } from "expo";
import Styles from "../../../constants/Styles";

export default class ModeSelector extends React.Component {
  static navigationOptions = {
    header: null
  };
  componentDidMount() {
    ScreenOrientation.allowAsync(ScreenOrientation.Orientation.LANDSCAPE_RIGHT);
  }

  componentWillUnmount() {
    ScreenOrientation.allowAsync(ScreenOrientation.Orientation.PORTRAIT);
  }
  render() {
    const { onSelectGamemode } = this.props;
    return (
      <View style={Styles.container}>
        <ScrollView
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
        >
          <View style={styles.firstView}>
            <Text style={styles.headerText}>First View</Text>
          </View>

          <View style={styles.secondView}>
            <Text style={styles.headerText}>Second View</Text>
          </View>

          <View style={styles.thirdView}>
            <Text style={styles.headerText}>Third View</Text>
          </View>

          <View style={styles.forthView}>
            <Text style={styles.headerText}>Forth View</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

var deviceWidth = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e5e5e5"
  },
  headerText: {
    fontSize: 30,
    textAlign: "center",
    margin: 10,
    color: "white",
    fontWeight: "bold"
  },
  firstView: {
    width: deviceWidth,
    backgroundColor: "#F44336",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  secondView: {
    width: deviceWidth,
    backgroundColor: "#9C27B0",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  thirdView: {
    width: deviceWidth,
    backgroundColor: "#3F51B5",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  forthView: {
    width: deviceWidth,
    backgroundColor: "#009688",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  }
});
