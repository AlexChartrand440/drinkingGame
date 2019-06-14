import React, { PureComponent } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class Card extends PureComponent {
  render() {
    const { title, text, color } = this.props;
    return (
      <View style={{ ...styles.cardView, backgroundColor: color }}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardText}>{text}</Text>
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
    flexDirection: "column",
    padding: 30
  },
  cardText: {
    fontSize: 18,
    textAlign: "center",
    padding: 30
  },
  cardTitle: {
    fontSize: 26,
    textAlign: "center",
    marginBottom: 30
  }
});
