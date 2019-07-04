import React, { PureComponent } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class Card extends PureComponent {
  render() {
    const { title, text, color } = this.props;
    return (
      <View
        style={{ ...styles.cardView, backgroundColor: color.backgroundColor }}
      >
        <Text style={{ ...styles.cardTitle, color: color.color }}>{title}</Text>
        <Text style={{ ...styles.cardText, color: color.color }}>{text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardView: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "column"
  },
  cardText: {
    fontSize: 20,
    textAlign: "center",
    paddingLeft: 120,
    paddingRight: 120
  },
  cardTitle: {
    fontSize: 35,
    textAlign: "center",
    marginTop: 30,
    marginBottom: 30,
    marginLeft: 120,
    marginRight: 120,
    fontFamily: "mainFont"
  }
});
