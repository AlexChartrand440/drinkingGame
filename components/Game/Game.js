import React from "react";

import { View } from "react-native";
import { ScreenOrientation } from "expo";
import CardsContainer from "./Cards/CardsContainer";
import {
  RedirectToPlayerIcon,
  RedirectToModeSelection
} from "./ButtonIcon/ButtonIcon";

export default class Game extends React.Component {
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
    return (
      <>
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
        <CardsContainer {...this.props} />
      </>
    );
  }
}
