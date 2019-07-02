import React from "react";
import Card from "./Card/Card";

import {
  View,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity
} from "react-native";
import { Icon } from "expo";
import Timer from "../Timer/Timer";
import Effects from "../Effects/EffectsContainer";
import {
  RedirectToPlayerIcon,
  RedirectToModeSelection
} from "../ButtonIcon/ButtonIcon";

export default class CardsClique extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    const {
      cards,
      currentCardIndex,
      onPressBack,
      onPressNextCard,
      isEndCardSelected,
      isFirstCardSelected,
      effects
    } = this.props;
    return (
      <View
        style={{
          ...styles.container,
          backgroundColor: cards[currentCardIndex].color
        }}
      >
        {!isFirstCardSelected && (
          <TouchableOpacity
            style={styles.leftArrow}
            onPress={() => {
              onPressBack();
            }}
            underlayColor={"rgba(255,255,255,0.2)"}
          >
            <Icon.Ionicons
              name={"md-rewind"}
              size={45}
              color={"black"}
              alt={"Carte précédente"}
              style={{ opacity: 1 }}
            />
          </TouchableOpacity>
        )}
        {cards[currentCardIndex].timer && (
          <Timer time={cards[currentCardIndex].timer} />
        )}
        <Effects effects={effects} />

        <TouchableHighlight
          style={styles.container}
          onPress={() => {
            !isEndCardSelected && onPressNextCard();
          }}
          underlayColor={"transparent"}
        >
          <Card {...cards[currentCardIndex]} />
        </TouchableHighlight>
        <RedirectToPlayerIcon
          onPress={() => {
            this.props.navigation.navigate("PlayerSelection");
          }}
        />
        <RedirectToModeSelection
          onPress={() => {
            this.props.navigation.navigate("ModeSelection");
          }}
        />
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
    right: 0
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
  }
});
