import React from "react";

import { View, Text, StyleSheet } from "react-native";

export default class PlayerSelection extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Selection des joueurs : </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center"
  },
  titleContainer: {
    alignItems: "center",
    marginTop: 50
  },
  titleText: {
    fontSize: 21,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center"
  }
});
