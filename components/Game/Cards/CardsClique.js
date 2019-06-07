import React, { PureComponent } from "react";

import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableHighlight
} from "react-native";
import { Icon } from "expo";

const { width, height } = Dimensions.get("window");
var deviceWidth = width > height ? width : height;

export default class ModeSelector extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    const {
      cards,
      currentCardIndex,
      onPressBack,
      onPressNextCard,
      isEndCardSelected
    } = this.props;
    return (
      <View style={styles.container}>
        <TouchableHighlight
          style={styles.leftArrow}
          onPress={() => {
            onPressBack();
          }}
          underlayColor={"rgba(255,255,255,0.2)"}
        >
          <Icon.Ionicons
            name={"md-arrow-back"}
            size={45}
            color={"black"}
            alt={"Carte précédente"}
            style={{ opacity: 1 }}
          />
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.container}
          onPress={() => {
            !isEndCardSelected && onPressNextCard();
          }}
          underlayColor={"transparent"}
        >
          <Card
            text={cards[currentCardIndex].text}
            title={cards[currentCardIndex].title}
          />
        </TouchableHighlight>
      </View>
    );
  }
}

class Card extends PureComponent {
  render() {
    return (
      <View style={styles.cardView}>
        <Text style={styles.cardTitle}>{this.props.title}</Text>
        <Text style={styles.cardText}>{this.props.text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#F44336"
  },
  leftArrow: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    zIndex: 1,
    justifyContent: "center",
    paddingLeft: 10,
    paddingRight: 10
  },
  cardView: {
    width: deviceWidth,
    height: "100%",
    flexDirection: "column",
    padding: 30
  },
  cardText: {
    fontSize: 18,
    textAlign: "center",
    padding: 20
  },
  cardTitle: {
    fontSize: 26,
    textAlign: "center",
    marginBottom: 30
  }
});
